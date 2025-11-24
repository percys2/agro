"use client";

import { useState } from "react";
import { registerEvent } from "../services";

export default function SowForm({ sowId }) {
  const [type, setType] = useState("Mated");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await registerEvent(sowId, type, date, notes);
        alert("Evento registrado");
      }}
      className="bg-white rounded-xl shadow p-4 mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <label>Tipo de Evento</label>
          <select
            className="border p-2 rounded w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Mated</option>
            <option>Pregnancy Check</option>
            <option>Farrowing</option>
            <option>Weaning</option>
            <option>Litter Deaths</option>
            <option>Abort</option>
          </select>
        </div>

        <div>
          <label>Fecha</label>
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Notas</label>
          <input
            className="border p-2 rounded w-full"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

      </div>

      <button className="bg-slate-900 text-white px-6 py-2 rounded-lg mt-4">
        Guardar
      </button>
    </form>
  );
}
