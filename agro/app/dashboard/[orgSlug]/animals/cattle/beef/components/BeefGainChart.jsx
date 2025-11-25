"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

export default function BeefGainChart({ days, weightReal }) {
  if (!days || !weightReal || weightReal.length < 2) {
    return (
      <div className="bg-white shadow rounded-xl p-4">
        <h3 className="font-bold mb-4">Ganancia de Peso</h3>
        <p className="text-sm text-slate-500">No hay suficientes datos.</p>
      </div>
    );
  }

  // Calcular ADG puntual por intervalo (incrementos)
  const adgPoints = [];
  for (let i = 1; i < weightReal.length; i++) {
    const gain = weightReal[i] - weightReal[i - 1];
    const adg = gain / 30; // Ganancia diaria promedio por mes
    adgPoints.push(Number(adg.toFixed(2)));
  }

  const graphLabels = days.slice(1); // las semanas/meses después del primer pesaje

  const data = {
    labels: graphLabels,
    datasets: [
      {
        label: "ADG (kg/día)",
        data: adgPoints,
        borderColor: "rgb(234,88,12)", // naranja
        tension: 0.3,
        pointBackgroundColor: "rgb(234,88,12)",
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-4">Ganancia Diaria Promedio (ADG)</h3>
      <Line data={data} />
    </div>
  );
}
