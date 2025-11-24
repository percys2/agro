import { supabaseBrowser } from "@/src/lib/supabase/client";
import {
  idealWeight,
  idealFeed,
  calculateADG,
  calculateFCR,
  mortalityRate,
  compareGrowth,
  indicatorLabel
} from "./utils";

export async function getBroilerFlocks(orgSlug) {
  const supabase = supabaseBrowser();
  const { data } = await supabase
    .from("broiler_flocks")
    .select("*")
    .eq("organization_slug", orgSlug)
    .order("start_date");
  return data;
}

export async function getBroilerRecords(flockId) {
  const supabase = supabaseBrowser();
  const { data } = await supabase
    .from("broiler_records")
    .select("*")
    .eq("flock_id", flockId)
    .order("week");
  return data;
}

export async function registerBroilerRecord(flockId, week, weight_lb, feed_lb, deaths, notes) {
  const supabase = supabaseBrowser();
  await supabase.from("broiler_records").insert({
    flock_id: flockId,
    week,
    weight_lb,
    feed_lb,
    deaths,
    notes
  });
}

export async function getBroilerCharts(flockId, initialBirds) {
  const real = await getBroilerRecords(flockId);

  if (!real || real.length === 0) {
    return {
      weeks: [],
      weight_real: [],
      weight_ideal: [],
      feed_real: [],
      feed_ideal: [],
      deaths: [],
      kpis: {}
    };
  }

  const weeks = real.map(r => r.week);
  const weightReal = real.map(r => r.weight_lb);
  const weightIdeal = weeks.map(w => idealWeight(w));

  const feedReal = real.map(r => r.feed_lb);
  const feedIdeal = weeks.map(w => idealFeed(w));

  const deaths = real.map(r => r.deaths);

  const last = real.at(-1);
  const prev = real.at(-2);

  const gain = prev ? last.weight_lb - prev.weight_lb : 0;
  const adg = calculateADG(last.weight_lb, prev?.weight_lb);
  const fcr = calculateFCR(gain, last.feed_lb);

  const totalDeaths = deaths.reduce((a, b) => a + b, 0);
  const mortality = mortalityRate(initialBirds, totalDeaths);

  const color = compareGrowth(last.weight_lb, idealWeight(last.week));

  return {
    weeks,
    weight_real: weightReal,
    weight_ideal: weightIdeal,
    feed_real: feedReal,
    feed_ideal: feedIdeal,
    deaths,
    kpis: {
      weight_real: last.weight_lb,
      weight_ideal: idealWeight(last.week),
      adg,
      fcr,
      mortality,
      indicator_color: color,
      indicator_label: indicatorLabel(color)
    }
  };
}
