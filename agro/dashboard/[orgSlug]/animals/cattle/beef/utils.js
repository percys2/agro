import curve from "./beef_growth_curve.json";

export function idealWeight(day) {
  const row = curve.find(r => r.day === day);
  return row ? row.weight_kg : null;
}

// ADG = Average Daily Gain
export function calculateADG(current, previous) {
  if (!previous || previous <= 0) return 0;
  return Number(((current - previous) / 30).toFixed(2)); // mensual
}

// Proyección final (peso de venta)
export function projectedFinish(currentWeight, adg) {
  const daysRemaining = 330 - 150; // Etapa engorde típica
  return Number((currentWeight + (adg * (daysRemaining / 30))).toFixed(1));
}

export function compareGrowth(real, ideal) {
  if (!ideal) return "neutral";
  const pct = (real / ideal) * 100;
  if (pct >= 95) return "green";
  if (pct >= 80) return "yellow";
  return "red";
}

export function indicatorLabel(color) {
  if (color === "green") return "Ganancia óptima";
  if (color === "yellow") return "Aceptable";
  return "Baja tasa de ganancia";
}
