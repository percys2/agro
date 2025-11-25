"use client";

import { useState } from "react";
import { registerProduction } from "../services";

export default function ProductionForm({ farmId }) {
  const [week, setWeek] = useState("");
  const [eggs, setEggs] = useState("");
  const [feed, setFeed] = useState("");
  const [weight, setWeight] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await registerProduction(farmId, week, eggs, feed, weight);
    alert("Producción registrada con éxito");
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow mt-6"
      onSubmit={submit}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div>
          <label>Semana</label>
          <input type="number" className="w-full border p-2 rounded" value={week} onChange={(e)=>setWeek(e.target.value)} />
        </div>

        <div>
          <label>Huevos Producidos</label>
          <input type="number" className="w-full border p-2 rounded" value={eggs} onChange={(e)=>setEggs(e.target.value)} />
        </div>

        <div>
          <label>Consumo Real (g/día)</label>
          <input type="number" className="w-full border p-2 rounded" value={feed} onChange={(e)=>setFeed(e.target.value)} />
        </div>

        <div>
          <label>Peso Corporal (kg)</label>
          <input type="number" step="0.01" className="w-full border p-2 rounded" value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
      </div>

      <button className="mt-4 bg-slate-900 text-white px-6 py-2 rounded-lg">
        Guardar Datos
      </button>
    </form>
  );
}
