"use client";

import { useState } from "react";
import { registerBroilerRecord } from "../services";

export default function BroilerForm({ flockId }) {
  const [week, setWeek] = useState("");
  const [weight, setWeight] = useState("");
  const [feed, setFeed] = useState("");
  const [deaths, setDeaths] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await registerBroilerRecord(flockId, week, weight, feed, deaths, notes);
        alert("Datos guardados");
      }}
      className="bg-white shadow rounded-xl p-4 mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

        <div>
          <label>Semana</label>
          <input className="border p-2 rounded w-full" type="number"
            value={week} onChange={e => setWeek(e.target.value)} />
        </div>

        <div>
          <label>Peso (lb)</label>
          <input className="border p-2 rounded w-full" type="number"
            value={weight} onChange={e => setWeight(e.target.value)} />
        </div>

        <div>
          <label>Consumo (lb)</label>
          <input className="border p-2 rounded w-full" type="number"
            value={feed} onChange={e => setFeed(e.target.value)} />
        </div>

        <div>
          <label>Muertos</label>
          <input className="border p-2 rounded w-full" type="number"
            value={deaths} onChange={e => setDeaths(e.target.value)} />
        </div>

        <div>
          <label>Notas</label>
          <input className="border p-2 rounded w-full"
            value={notes} onChange={e => setNotes(e.target.value)} />
        </div>

      </div>

      <button className="bg-slate-900 text-white px-6 py-2 rounded-lg mt-4">
        Guardar
      </button>
    </form>
  );
}
