"use client";

import { useEffect, useState } from "react";
import { getDairyFarm, getDairyCharts } from "@/src/modules/animals/cattle/dairy/services";

import DairyKPI from "@/src/modules/animals/cattle/dairy/components/DairyKPI";
import DairyMilkChart from "@/src/modules/animals/cattle/dairy/components/DairyMilkChart";
import DairyForm from "@/src/modules/animals/cattle/dairy/components/DairyForm";

export default function DairyPage({ params }) {
  const { orgSlug } = params;

  const [farm, setFarm] = useState(null);
  const [charts, setCharts] = useState(null);

  useEffect(() => {
    async function load() {
      const f = await getDairyFarm(orgSlug);
      setFarm(f);

      const c = await getDairyCharts(f?.id);
      setCharts(c);
    }
    load();
  }, []);

  if (!farm || !charts) return <p>Cargando...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ganado Lechero — {farm.name}</h1>

      <DairyKPI kpi={charts.kpis} />

      <DairyMilkChart
        days={charts.days}
        milkReal={charts.milk_real}
        milkIdeal={charts.milk_ideal}
      />

      <DairyForm farmId={farm.id} />
    </div>
  );
}
