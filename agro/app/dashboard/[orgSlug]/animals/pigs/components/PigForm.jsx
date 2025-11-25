"use client";

import { useState } from "react";
import { registerPigData } from "../services";

export default function PigForm({ farmId }) {
  const [week, setWeek] = useState("");
  const [weight, setWeight] = useState("");
  const [feed, setFeed] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await registerPigData(farmId, week, weight, feed);
    alert("Datos guardados");
  };

  return (
    <form className="bg-white p-6 rounded-xl shadow mt-6" onSubmit={submit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <label>Semana</label>
          <input className="border p-2 w-full rounded"
            type="number" value={week} onChange={e => setWeek(e.target.value)} />
        </div>

        <div>
          <label>Peso (kg)</label>
          <input className="border p-2 w-full rounded"
            type="number" step="0.1" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>

        <div>
          <label>Consumo (g/día)</label>
          <input className="border p-2 w-full rounded"
            type="number" value={feed} onChange={e => setFeed(e.target.value)} />
        </div>

      </div>

      <button className="bg-slate-900 text-white mt-4 px-6 py-2 rounded-lg">
        Guardar
      </button>
    </form>
  );
}
