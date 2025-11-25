"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

export default function LayerPostureChart({ weeks, productionReal, productionIdeal }) {
  const data = {
    labels: weeks,
    datasets: [
      {
        label: "Postura Ideal (%)",
        data: productionIdeal,
        borderColor: "rgb(234, 88, 12)",
        tension: 0.3,
      },
      {
        label: "Postura Real (%)",
        data: productionReal,
        borderColor: "rgb(16, 185, 129)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-bold mb-4">Curva de Postura</h3>
      <Line data={data} />
    </div>
  );
}
