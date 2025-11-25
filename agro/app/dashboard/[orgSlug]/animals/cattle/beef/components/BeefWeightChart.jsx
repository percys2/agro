"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

export default function BeefWeightChart({ days, weightReal, weightIdeal }) {
  const data = {
    labels: days,
    datasets: [
      {
        label: "Peso Real (kg)",
        data: weightReal,
        borderColor: "rgb(59,130,246)",
        tension: 0.3
      },
      {
        label: "Peso Ideal (kg)",
        data: weightIdeal,
        borderColor: "rgb(34,197,94)",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <h3 className="font-bold mb-4">Peso Real vs Ideal</h3>
      <Line data={data} />
    </div>
  );
}
