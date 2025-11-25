import curve from "./lactation_curve.json";

export function idealMilk(day) {
  const row = curve.find(r => r.day === day);
  return row ? row.liters : null;
}

// Persistencia lactancia (ME 305)
export function projected305(totalMilkToDate, dayInMilk) {
  if (dayInMilk <= 0) return 0;
  return Number(((totalMilkToDate / dayInMilk) * 305).toFixed(1));
}

export function daysOpen(lastCalving, lastService) {
  if (!lastCalving || !lastService) return 0;
  return Number(((new Date(lastService) - new Date(lastCalving)) / 86400000).toFixed(0));
}

export function calvingInterval(lastCalving, previousCalving) {
  if (!lastCalving || !previousCalving) return null;
  return Number(((new Date(lastCalving) - new Date(previousCalving)) / 86400000).toFixed(0));
}

export function compareProduction(real, ideal) {
  if (!ideal) return "neutral";
  const pct = (real / ideal) * 100;
  if (pct >= 95) return "green";
  if (pct >= 80) return "yellow";
  return "red";
}

export function indicatorLabel(color) {
  if (color === "green") return "Normal";
  if (color === "yellow") return "Bajo";
  return "Crítico";
}
