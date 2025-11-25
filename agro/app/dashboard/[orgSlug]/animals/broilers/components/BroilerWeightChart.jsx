"use client";

import { Line } from "react-chartjs-2";

export default function BroilerWeightChart({ weeks, weightReal, weightIdeal }) {
  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Peso Real (lb)",
        data: weightReal,
        borderColor: "rgb(59,130,246)",
        tension: 0.3
      },
      {
        label: "Peso Ideal (lb)",
        data: weightIdeal,
        borderColor: "rgb(34,197,94)",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-4">Peso Real vs Ideal</h3>
      <Line data={data} />
    </div>
  );
}
