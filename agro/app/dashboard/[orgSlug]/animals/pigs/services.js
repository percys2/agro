import { supabaseBrowser } from "@/lib/supabase/client";
import {
  idealWeight,
  idealFeed,
  calculateADG,
  calculateFCR,
  compareWeight,
  indicatorLabel
} from "./utils";

export async function getPigFarm(orgSlug) {
  const supabase = supabaseBrowser();

  const { data } = await supabase
    .from("farms")
    .select("*")
    .eq("organization_slug", orgSlug)
    .eq("species_id", 3) // 3 = cerdos
    .single();

  return data;
}

export async function getPigCharts(farmId) {
  const supabase = supabaseBrowser();

  const { data: real } = await supabase
    .from("pigs_growth")
    .select("*")
    .eq("farm_id", farmId)
    .order("week");

  if (!real || real.length === 0) {
    return { weeks: [], weight_real: [], weight_ideal: [], feed_real: [], feed_ideal: [], kpis: {} };
  }

  const weeks = real.map(r => r.week);

  const weightReal = real.map(r => r.weight_kg);
  const weightIdeal = weeks.map(w => idealWeight(w));

  const feedReal = real.map(r => r.feed_intake);
  const feedIdeal = weeks.map(w => idealFeed(w));

  const last = real.at(-1);
  const previous = real.at(-2);

  const adg = calculateADG(last.weight_kg, previous?.weight_kg);
  const fcr = calculateFCR(last.weight_kg - previous?.weight_kg, last.feed_intake);

  const indicatorColor = compareWeight(last.weight_kg, idealWeight(last.week));

  return {
    weeks,
    weight_real: weightReal,
    weight_ideal: weightIdeal,
    feed_real: feedReal,
    feed_ideal: feedIdeal,
    kpis: {
      weight_real: last.weight_kg,
      weight_ideal: idealWeight(last.week),
      adg,
      fcr,
      indicator_color: indicatorColor,
      indicator_label: indicatorLabel(indicatorColor)
    }
  };
}

export async function registerPigData(farmId, week, weight, feed) {
  const supabase = supabaseBrowser();
  await supabase.from("pigs_growth").insert({
    farm_id: farmId,
    week,
    weight_kg: weight,
    feed_intake: feed
  });
}
