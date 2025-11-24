"use client";

import { useState } from "react";
import { registerBeefRecord } from "../services";

export default function BeefForm({ beefId }) {
  const [day, setDay] = useState("");
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await registerBeefRecord(beefId, day, weight, notes);
        alert("Pesaje registrado");
      }}
      className="bg-white shadow rounded-xl p-4 mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <label>Día</label>
          <input className="border p-2 rounded w-full"
            type="number" value={day} onChange={e => setDay(e.target.value)} />
        </div>

        <div>
          <label>Peso (kg)</label>
          <input className="border p-2 rounded w-full"
            type="number" step="0.1" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>

        <div>
          <label>Notas</label>
          <input className="border p-2 rounded w-full"
            value={notes} onChange={e => setNotes(e.target.value)} />
        </div>

      </div>

      <button className="bg-slate-900 text-white mt-4 px-6 py-2 rounded-lg">
        Guardar
      </button>
    </form>
  );
}
