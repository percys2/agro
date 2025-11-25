import states from "./sow_states.json";

export function expectedFarrowDate(matingDate) {
  const d = new Date(matingDate);
  d.setDate(d.getDate() + 115);
  return d;
}

export function expectedWeanDate(farrowDate) {
  const d = new Date(farrowDate);
  d.setDate(d.getDate() + 21);
  return d;
}

export function calculateNPD(lastWeaning, nextMating) {
  if (!lastWeaning || !nextMating) return 0;

  const d1 = new Date(lastWeaning);
  const d2 = new Date(nextMating);

  const diff = (d2 - d1) / 86400000;
  return Number(diff.toFixed(1));
}

export function farrowingRate(totalMated, totalFarrowed) {
  if (totalMated === 0) return 0;
  return Number(((totalFarrowed / totalMated) * 100).toFixed(2));
}

export function pigsWeanedPerSow(perYear) {
  return Number(perYear.toFixed(2));
}

export function sowStatus(lastEvent) {
  if (!lastEvent) return "Empty";

  const map = {
    "Weaning": "Weaned",
    "Mated": "Mated",
    "Pregnancy Check": "Pregnant",
    "Farrowing": "Lactating"
  };

  return map[lastEvent] ?? "Empty";
}
