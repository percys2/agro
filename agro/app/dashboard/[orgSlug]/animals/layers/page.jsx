"use client";

import { useEffect, useState } from "react";
import { getLayerFarm, getLayerCharts } from "./services";

import LayerKPI from "./components/LayerKPI";
import LayerWeightChart from "./components/LayerWeightChart";
import LayerPostureChart from "./components/LayerPostureChart";
import LayerFeedChart from "./components/LayerFeedChart";
import LayerTable from "./components/LayerTable";
import ProductionForm from "./components/ProductionForm";

export default function LayersPage({ params }) {
  const { orgSlug } = params;

  const [farm, setFarm] = useState(null);
  const [charts, setCharts] = useState(null);

  useEffect(() => {
    async function load() {
      const f = await getLayerFarm(orgSlug);
      setFarm(f);

      const c = await getLayerCharts(f?.id);
      setCharts(c);
    }
    load();
  }, []);

  if (!farm || !charts) return <p>Cargando...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ponedoras — {farm.name}</h1>

      <LayerKPI data={charts.kpis} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <LayerPostureChart 
          weeks={charts.weeks}
          productionReal={charts.production_real}
          productionIdeal={charts.production_ideal}
        />

        <LayerFeedChart
          weeks={charts.weeks}
          feedReal={charts.feed_real}
          feedIdeal={charts.feed_ideal}
        />

        <LayerWeightChart
          weeks={charts.weeks}
          weightReal={charts.weight_real}
          weightIdeal={charts.weight_ideal}
        />
      </div>

      <LayerTable
        weeks={charts.weeks}
        postureReal={charts.production_real}
        postureIdeal={charts.production_ideal}
        feedReal={charts.feed_real}
        feedIdeal={charts.feed_ideal}
        weightReal={charts.weight_real}
        weightIdeal={charts.weight_ideal}
      />

      <ProductionForm farmId={farm.id} />
    </div>
  );
}
