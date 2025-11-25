"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

export default function PigFeedChart({ weeks, feedReal, feedIdeal }) {
  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Consumo Ideal (g/día)",
        data: feedIdeal,
        borderColor: "rgb(99,102,241)",
        tension: 0.3
      },
      {
        label: "Consumo Real (g/día)",
        data: feedReal,
        borderColor: "rgb(234,88,12)",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="font-bold mb-4">Consumo Ideal vs Real</h3>
      <Line data={data} />
    </div>
  );
}
