import curve from "./layers_curve.json";

export function idealWeight(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.weight_lb : null;
}

export function idealFeed(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.feed_lb_day : null;
}

export function idealProduction(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.production_pct : null;
}

export function compareStatus(real, ideal) {
  if (real >= ideal * 0.95) return "green";
  if (real >= ideal * 0.80) return "yellow";
  return "red";
}
