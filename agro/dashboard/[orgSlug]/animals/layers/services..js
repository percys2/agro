import { supabaseBrowser } from "@/src/lib/supabase/client";
import {
  idealProductionCurve,
  idealFeedIntake,
  idealWeightCurve,
  calculateProductionRate,
  compareConsumption,
  indicatorLabel,
} from "./utils";


// 🟦 Obtener el lote de ponedoras para la organización
export async function getLayerFarm(orgSlug) {
  const supabase = supabaseBrowser();

  const { data: farm, error } = await supabase
    .from("farms")
    .select("*")
    .eq("organization_slug", orgSlug)
    .eq("species_id", 2)  // 2 = ponedoras
    .single();

  if (error) {
    console.error("Error loading farm:", error);
    return null;
  }

  return farm;
}


// 🟨 Cargar gráficas y KPIs usando lógica personalizada
export async function getLayerCharts(farmId) {
  const supabase = supabaseBrowser();

  // Datos reales registrados por el cliente
  const { data: real } = await supabase
    .from("consumption_real")
    .select("*")
    .eq("farm_id", farmId)
    .order("week");

  if (!real || real.length === 0) {
    return {
      weeks: [],
      production_real: [],
      production_ideal: [],
      feed_ideal: [],
      feed_real: [],
      weight_ideal: [],
      weight_real: [],
      kpis: {
        production_real: 0,
        production_ideal: 0,
        feed_real: 0,
        indicator_color: "yellow",
        indicator_label: "Sin datos aún",
      },
    };
  }

  // Construir arrays usando las funciones actualizadas
  const weeks = real.map((r) => r.week);

  // Postura
  const productionReal = real.map((r) => r.production_real ?? 0);
  const productionIdeal = weeks.map((w) => idealProductionCurve(w));

  // Consumo
  const feedIdeal = weeks.map((w) => idealFeedIntake(w));
  const feedReal = real.map((r) => r.feed_intake_real ?? 0);

  // Peso — NUEVO
  const weightIdeal = weeks.map((w) => idealWeightCurve(w));
  const weightReal = real.map((r) => r.weight_real ?? null);

  // KPI principal (última semana registrada)
  const last = real.at(-1);
  const week = last.week;

  const pctIdeal = idealProductionCurve(week);
  const pctReal = last.production_real ?? 0;

  const consumptionIdeal = idealFeedIntake(week);
  const consumptionReal = last.feed_intake_real ?? 0;

  const indicatorColor = compareConsumption(consumptionReal, consumptionIdeal);
  const indicatorText = indicatorLabel(indicatorColor);

  return {
    weeks,

    // Postura
    production_real: productionReal,
    production_ideal: productionIdeal,

    // Consumo
    feed_ideal: feedIdeal,
    feed_real: feedReal,

    // Peso — NUEVO
    weight_ideal: weightIdeal,
    weight_real: weightReal,

    kpis: {
      production_real: pctReal,
      production_ideal: pctIdeal,
      feed_real: consumptionReal,
      indicator_color: indicatorColor,
      indicator_label: indicatorText,
    },
  };
}


// 🟥 Registrar producción semanal del cliente
export async function registerProduction(farmId, week, eggs, feed, weight) {
  const supabase = supabaseBrowser();

  const { error } = await supabase.from("consumption_real").insert({
    farm_id: farmId,
    week,
    production_real: eggs,
    feed_intake_real: feed,
    weight_real: weight, // NUEVO peso real
  });

  if (error) {
    console.error("Error registering production:", error);
  }
}

