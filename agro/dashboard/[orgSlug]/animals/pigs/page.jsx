"use client";

import { useEffect, useState } from "react";
import { getPigFarm, getPigCharts } from "@/src/modules/animals/pigs/services";

import PigKPI from "@/src/modules/animals/pigs/components/PigKPI";
import PigWeightChart from "@/src/modules/animals/pigs/components/PigWeightChart";
import PigFeedChart from "@/src/modules/animals/pigs/components/PigFeedChart";
import PigTable from "@/src/modules/animals/pigs/components/PigTable";
import PigForm from "@/src/modules/animals/pigs/components/PigForm";

export default function PigsPage({ params }) {
  const { orgSlug } = params;

  const [farm, setFarm] = useState(null);
  const [charts, setCharts] = useState(null);

  useEffect(() => {
    async function load() {
      const f = await getPigFarm(orgSlug);
      setFarm(f);

      const c = await getPigCharts(f?.id);
      setCharts(c);
    }
    load();
  }, []);

  if (!farm || !charts) return <p>Cargando...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Cerdos de Engorde — {farm.name}
      </h1>

      <PigKPI data={charts.kpis} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <PigWeightChart
          weeks={charts.weeks}
          weightReal={charts.weight_real}
          weightIdeal={charts.weight_ideal}
        />

        <PigFeedChart
          weeks={charts.weeks}
          feedReal={charts.feed_real}
          feedIdeal={charts.feed_ideal}
        />
      </div>

      <PigTable
        weeks={charts.weeks}
        weightReal={charts.weight_real}
        weightIdeal={charts.weight_ideal}
        feedReal={charts.feed_real}
        feedIdeal={charts.feed_ideal}
      />

      <PigForm farmId={farm.id} />
    </div>
  );
}
