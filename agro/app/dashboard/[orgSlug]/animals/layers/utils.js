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

export function idealProductionCurve(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.production_pct : null;
}

export function idealFeedIntake(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.feed_lb_day : null;
}

export function idealWeightCurve(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.weight_lb : null;
}

export function calculateProductionRate(real, ideal) {
  if (!ideal || ideal <= 0) return 0;
  return Number(((real / ideal) * 100).toFixed(2));
}

export function compareConsumption(real, ideal) {
  if (!ideal) return "neutral";
  const pct = (real / ideal) * 100;
  if (pct >= 95 && pct <= 105) return "green";
  if (pct >= 85 && pct <= 115) return "yellow";
  return "red";
}

export function indicatorLabel(color) {
  if (color === "green") return "Normal";
  if (color === "yellow") return "Atención";
  return "Crítico";
}
