import curve from "@/data/pigs_growth_curve.json";

export function idealWeight(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.weight_kg : null;
}

export function idealFeed(week) {
  const row = curve.find(r => r.week === week);
  return row ? row.feed_ideal : null;
}

// ADG (ganancia diaria de peso)
export function calculateADG(lastWeight, previousWeight) {
  if (!lastWeight || !previousWeight) return 0;
  return Number(((lastWeight - previousWeight) / 7).toFixed(2));
}

// FCR (Feed Conversion Ratio)
export function calculateFCR(weightGain, feedIntake) {
  if (!weightGain || weightGain <= 0) return null;
  return Number((feedIntake / weightGain).toFixed(2));
}

export function compareWeight(real, ideal) {
  if (!ideal) return "neutral";

  const pct = (real / ideal) * 100;

  if (pct >= 95 && pct <= 110) return "green";
  if (pct >= 85 && pct < 95) return "yellow";
  return "red";
}

export function indicatorLabel(color) {
  if (color === "green") return "Normal";
  if (color === "yellow") return "Atención";
  return "Bajo Peso";
}
