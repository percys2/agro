"use client";

import { Line } from "react-chartjs-2";

export default function BroilerFeedChart({ weeks, feedReal, feedIdeal }) {
  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Consumo Real (lb/sem)",
        data: feedReal,
        borderColor: "rgb(234,88,12)",
        tension: 0.3
      },
      {
        label: "Consumo Ideal (lb/sem)",
        data: feedIdeal,
        borderColor: "rgb(99,102,241)",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-4">Consumo Real vs Ideal</h3>
      <Line data={data} />
    </div>
  );
}
