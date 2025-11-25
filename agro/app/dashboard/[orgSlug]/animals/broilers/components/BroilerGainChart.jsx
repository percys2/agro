"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

export default function BroilerGainChart({ weeks, weightReal }) {
  if (!weeks || !weightReal || weightReal.length < 2) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-bold mb-4">Ganancia de Peso</h3>
        <p>No hay suficientes datos.</p>
      </div>
    );
  }

  const adg = [];
  for (let i = 1; i < weightReal.length; i++) {
    adg.push(Number(((weightReal[i] - weightReal[i - 1]) / 7).toFixed(3)));
  }

  const data = {
    labels: weeks.slice(1),
    datasets: [
      {
        label: "ADG (lb/día)",
        data: adg,
        borderColor: "rgb(168,85,247)",
        tension: 0.3
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
