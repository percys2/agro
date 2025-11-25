import { supabaseBrowser } from "@/lib/supabase/client";
import {
  idealMilk,
  projected305,
  daysOpen,
  calvingInterval,
  compareProduction,
  indicatorLabel
} from "./utils";

// Obtener la finca lechera
export async function getDairyFarm(orgSlug) {
  const supabase = supabaseBrowser();

  const { data } = await supabase
    .from("farms")
    .select("*")
    .eq("organization_slug", orgSlug)
    .eq("species_id", 4) // 4 = ganado lechero
    .single();

  return data;
}

// Historial de producción de leche
export async function getMilkData(farmId) {
  const supabase = supabaseBrowser();

  const { data } = await supabase
    .from("milk_records")
    .select("*")
    .eq("farm_id", farmId)
    .order("day_in_milk");

  return data;
}

// Registrar ordeño
export async function registerMilk(farmId, day, liters, fat, protein) {
  const supabase = supabaseBrowser();

  await supabase.from("milk_records").insert({
    farm_id: farmId,
    day_in_milk: day,
    milk_liters: liters,
    fat_pct: fat,
    protein_pct: protein
  });
}

// KPIs y gráfica
export async function getDairyCharts(farmId) {
  const real = await getMilkData(farmId);

  if (!real || real.length === 0) {
    return {
      days: [],
      milk_real: [],
      milk_ideal: [],
      kpis: {}
    };
  }

  const days = real.map(r => r.day_in_milk);
  const milkReal = real.map(r => r.milk_liters);
  const milkIdeal = days.map(d => idealMilk(d));

  const last = real.at(-1);
  const totalMilkToDate = real.reduce((sum, r) => sum + r.milk_liters, 0);

  const me305 = projected305(totalMilkToDate, last.day_in_milk);
  const prodColor = compareProduction(last.milk_liters, idealMilk(last.day_in_milk));

  return {
    days,
    milk_real: milkReal,
    milk_ideal: milkIdeal,
    kpis: {
      today_liters: last.milk_liters,
      ideal_today: idealMilk(last.day_in_milk),
      projected305: me305,
      indicator_color: prodColor,
      indicator_label: indicatorLabel(prodColor)
    }
  };
}
