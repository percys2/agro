"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

export default function LayerFeedChart({ weeks, feedReal, feedIdeal }) {
  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Consumo Ideal (g/día)",
        data: feedIdeal,
        borderColor: "rgb(59, 130, 246)",
        tension: 0.3,
      },
      {
        label: "Consumo Real (g/día)",
        data: feedReal,
        borderColor: "rgb(139, 92, 246)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-bold mb-4">Consumo Ideal vs Real</h3>
      <Line data={data} />
    </div>
  );
}
