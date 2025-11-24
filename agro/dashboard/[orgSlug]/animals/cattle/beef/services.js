import { supabaseBrowser } from "@/src/lib/supabase/client";
import {
  idealWeight,
  calculateADG,
  projectedFinish,
  compareGrowth,
  indicatorLabel
} from "./utils";

export async function getBeefAnimals(orgSlug) {
  const supabase = supabaseBrowser();
  const { data } = await supabase
    .from("beef_inventory")
    .select("*")
    .eq("organization_slug", orgSlug)
    .order("tag");

  return data;
}

export async function getBeefRecords(beefId) {
  const supabase = supabaseBrowser();
  const { data } = await supabase
    .from("beef_records")
    .select("*")
    .eq("beef_id", beefId)
    .order("day_in_feedlot");
  return data;
}

export async function registerBeefRecord(beefId, day, weight, notes) {
  const supabase = supabaseBrowser();
  await supabase.from("beef_records").insert({
    beef_id: beefId,
    day_in_feedlot: day,
    weight_kg: weight,
    notes
  });
}

export async function getBeefCharts(beefId) {
  const real = await getBeefRecords(beefId);

  if (!real || real.length === 0) {
    return {
      days: [],
      weight_real: [],
      weight_ideal: [],
      kpis: {}
    };
  }

  const days = real.map(r => r.day_in_feedlot);
  const weightReal = real.map(r => r.weight_kg);
  const weightIdeal = days.map(d => idealWeight(d));

  const last = real.at(-1);
  const previous = real.at(-2);

  const adg = calculateADG(last.weight_kg, previous?.weight_kg);
  const projected = projectedFinish(last.weight_kg, adg);

  const color = compareGrowth(last.weight_kg, idealWeight(last.day_in_feedlot));

  return {
    days,
    weight_real: weightReal,
    weight_ideal: weightIdeal,
    kpis: {
      weight_real: last.weight_kg,
      weight_ideal: idealWeight(last.day_in_feedlot),
      adg,
      projected_finish: projected,
      indicator_color: color,
      indicator_label: indicatorLabel(color)
    }
  };
}
