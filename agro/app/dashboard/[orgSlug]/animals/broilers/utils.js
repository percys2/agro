import curve from "./broiler_growth_curve.json";

export function idealWeight(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.weight_lb : null;
}

export function idealFeed(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.feed_ideal_lb : null;
}

// ADG (lb por día)
export function calculateADG(current, previous) {
  if (!previous || previous <= 0) return 0;
  return Number(((current - previous) / 7).toFixed(3));
}

// FCR (libras de alimento por libra de ganancia)
export function calculateFCR(gain, feed) {
  if (!gain || gain <= 0) return null;
  return Number((feed / gain).toFixed(3));
}

// Mortalidad
export function mortalityRate(initial, dead) {
  if (!initial) return 0;
  return Number(((dead / initial) * 100).toFixed(2));
}

export function compareGrowth(real, ideal) {
  if (!ideal) return "neutral";
  const pct = (real / ideal) * 100;

  if (pct >= 95) return "green";
  if (pct >= 80) return "yellow";
  return "red";
}

export function indicatorLabel(color) {
  if (color === "green") return "Normal";
  if (color === "yellow") return "Atención";
  return "Crítico";
}
