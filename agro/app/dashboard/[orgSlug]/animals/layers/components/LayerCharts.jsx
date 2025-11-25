"use client";

import "@/lib/chart";
import { Line } from "react-chartjs-2";

export default function LayerCharts({ charts }) {
  const productionConfig = {
    labels: charts.weeks,
    datasets: [
      {
        label: "Postura Ideal (%)",
        data: charts.production_ideal,
        borderColor: "rgb(234, 88, 12)",
      },
      {
        label: "Postura Real (%)",
        data: charts.production_real,
        borderColor: "rgb(16, 185, 129)",
      },
    ],
  };

  const consumptionConfig = {
    labels: charts.weeks,
    datasets: [
      {
        label: "Consumo Ideal (g)",
        data: charts.feed_ideal,
        borderColor: "rgb(37, 99, 235)",
      },
      {
        label: "Consumo Real (g)",
        data: charts.feed_real,
        borderColor: "rgb(99, 102, 241)",
      },
    ],
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-bold mb-2">Curva de Postura</h3>
        <Line data={productionConfig} />
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-bold mb-2">Consumo Ideal vs Real</h3>
        <Line data={consumptionConfig} />
      </div>
    </>
  );
}
