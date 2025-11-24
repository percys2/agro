"use client";

import { useEffect, useState } from "react";

import { getBeefAnimals, getBeefCharts } from "@/src/modules/animals/cattle/beef/services";

// Components
import BeefKPI from "@/src/modules/animals/cattle/beef/components/BeefKPI";
import BeefWeightChart from "@/src/modules/animals/cattle/beef/components/BeefWeightChart";
import BeefGainChart from "@/src/modules/animals/cattle/beef/components/BeefGainChart";
import BeefTable from "@/src/modules/animals/cattle/beef/components/BeefTable";
import BeefForm from "@/src/modules/animals/cattle/beef/components/BeefForm";

export default function BeefPage({ params }) {
  const { orgSlug } = params;

  const [animals, setAnimals] = useState([]);
  const [selected, setSelected] = useState(null);
  const [charts, setCharts] = useState(null);

  // Cargar lista de animales
  useEffect(() => {
    async function load() {
      const list = await getBeefAnimals(orgSlug);
      setAnimals(list);
    }
    load();
  }, [orgSlug]);

  // Cargar gráfico y KPIs del animal seleccionado
  async function loadCharts(id) {
    setSelected(id);
    const c = await getBeefCharts(id);
    setCharts(c);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ganado de Carne</h1>

      {/* Lista de animales */}
      <div className="bg-white shadow p-4 rounded-xl mb-6">
        <h3 className="font-bold mb-4">Selecciona un animal</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {animals.map((a) => (
            <button
              key={a.id}
              onClick={() => loadCharts(a.id)}
              className="border rounded-lg p-3 hover:bg-slate-100 transition"
            >
              {a.tag} — {a.breed ?? "Sin raza"}
            </button>
          ))}
        </div>
      </div>

      {/* Mostrar métricas solo si hay selección */}
      {charts && (
        <>
          {/* KPIs */}
          <BeefKPI data={charts.kpis} />

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <BeefWeightChart
              days={charts.days}
              weightReal={charts.weight_real}
              weightIdeal={charts.weight_ideal}
            />

            <BeefGainChart
              days={charts.days}
              weightReal={charts.weight_real}
            />
          </div>

          {/* Tabla de datos */}
          <BeefTable
            days={charts.days}
            weightReal={charts.weight_real}
            weightIdeal={charts.weight_ideal}
          />

          {/* Formulario de pesaje */}
          <BeefForm beefId={selected} />
        </>
      )}
    </div>
  );
}
