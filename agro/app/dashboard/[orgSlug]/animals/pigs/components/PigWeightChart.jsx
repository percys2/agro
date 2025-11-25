"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

export default function PigWeightChart({ weeks, weightReal, weightIdeal }) {
  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Peso Ideal (kg)",
        data: weightIdeal,
        borderColor: "rgb(34,197,94)",
        tension: 0.3
      },
      {
        label: "Peso Real (kg)",
        data: weightReal,
        borderColor: "rgb(59,130,246)",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="font-bold mb-4">Peso Ideal vs Real</h3>
      <Line data={data} />
    </div>
  );
}
