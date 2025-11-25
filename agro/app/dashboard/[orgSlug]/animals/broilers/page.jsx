"use client";

import { useEffect, useState } from "react";

import { 
  getBroilerFlocks, 
  getBroilerCharts 
} from "./services";

// Components
import BroilerKPI from "./components/BroilerKPI";
import BroilerWeightChart from "./components/BroilerWeightChart";
import BroilerFeedChart from "./components/BroilerFeedChart";
import BroilerGainChart from "./components/BroilerGainChart";
import BroilerMortalityChart from "./components/BroilerMortalityChart";
import BroilerTable from "./components/BroilerTable";
import BroilerForm from "./components/BroilerForm";

export default function BroilersPage({ params }) {
  const { orgSlug } = params;

  const [flocks, setFlocks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [charts, setCharts] = useState(null);
  const [initialBirds, setInitialBirds] = useState(0);

  // Load farms
  useEffect(() => {
    async function load() {
      const list = await getBroilerFlocks(orgSlug);
      setFlocks(list);
    }
    load();
  }, [orgSlug]);

  // Load charts when selecting a flock
  async function loadCharts(flock) {
    setSelected(flock.id);
    setInitialBirds(flock.initial_birds);
    const data = await getBroilerCharts(flock.id, flock.initial_birds);
    setCharts(data);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Pollos de Engorde (Broilers)</h1>

      {/* Lista de lotes */}
      <div className="bg-white shadow p-4 rounded-xl mb-6">
        <h3 className="font-bold mb-4">Selecciona un lote</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {flocks.length === 0 && (
            <p className="text-slate-500">No hay lotes aún.</p>
          )}

          {flocks.map((f) => (
            <button
              key={f.id}
              onClick={() => loadCharts(f)}
              className="border rounded-lg p-3 hover:bg-slate-100 transition"
            >
              <div className="font-bold">{f.flock_name}</div>
              <div className="text-xs text-slate-600">
                {f.initial_birds} aves
              </div>
              <div className="text-[11px] text-slate-500">
                Inicio: {f.start_date}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Panel del lote seleccionado */}
      {charts && (
        <>
          {/* KPI */}
          <BroilerKPI data={charts.kpis} />

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <BroilerWeightChart
              weeks={charts.weeks}
              weightReal={charts.weight_real}
              weightIdeal={charts.weight_ideal}
            />

            <BroilerFeedChart
              weeks={charts.weeks}
              feedReal={charts.feed_real}
              feedIdeal={charts.feed_ideal}
            />

            <BroilerGainChart
              weeks={charts.weeks}
              weightReal={charts.weight_real}
            />

            <BroilerMortalityChart
              weeks={charts.weeks}
              deaths={charts.deaths}
            />
          </div>

          {/* Tabla completa */}
          <BroilerTable
            weeks={charts.weeks}
            weightReal={charts.weight_real}
            weightIdeal={charts.weight_ideal}
            feedReal={charts.feed_real}
            feedIdeal={charts.feed_ideal}
            deaths={charts.deaths}
          />

          {/* Registro semanal */}
          <BroilerForm flockId={selected} />
        </>
      )}
    </div>
  );
}
