"use client";

import { Line } from "react-chartjs-2";

export default function DairyMilkChart({ days, milkReal, milkIdeal }) {
  const data = {
    labels: days,
    datasets: [
      {
        label: "Leche Real",
        data: milkReal,
        borderColor: "rgb(59,130,246)",
        tension: 0.3
      },
      {
        label: "Leche Ideal",
        data: milkIdeal,
        borderColor: "rgb(34,197,94)",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <h3 className="font-bold mb-4">Producción Real vs Ideal</h3>
      <Line data={data} />
    </div>
  );
}
