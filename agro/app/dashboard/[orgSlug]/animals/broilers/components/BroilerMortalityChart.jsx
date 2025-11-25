"use client";

import { Bar } from "react-chartjs-2";

export default function BroilerMortalityChart({ weeks, deaths }) {
  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Mortalidad",
        data: deaths,
        backgroundColor: "rgba(220,38,38,0.6)"
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-4">Mortalidad</h3>
      <Bar data={data} />
    </div>
  );
}
