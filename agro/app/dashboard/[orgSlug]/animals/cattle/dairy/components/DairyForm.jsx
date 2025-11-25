"use client";

import { useState } from "react";
import { registerMilk } from "../services";

export default function DairyForm({ farmId }) {
  const [day, setDay] = useState("");
  const [liters, setLiters] = useState("");
  const [fat, setFat] = useState("");
  const [protein, setProtein] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await registerMilk(farmId, day, liters, fat, protein);
        alert("Registrado");
      }}
      className="bg-white shadow rounded-xl p-4 mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div>
          <label>Día en Leche</label>
          <input
            type="number"
            className="border p-2 rounded w-full"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div>
          <label>Litros</label>
          <input
            type="number"
            step="0.1"
            className="border p-2 rounded w-full"
            value={liters}
            onChange={(e) => setLiters(e.target.value)}
          />
        </div>

        <div>
          <label>Grasa %</label>
          <input
            type="number"
            step="0.01"
            className="border p-2 rounded w-full"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </div>

        <div>
          <label>Proteína %</label>
          <input
            type="number"
            step="0.01"
            className="border p-2 rounded w-full"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </div>
      </div>

      <button className="bg-slate-900 text-white px-6 py-2 rounded-lg mt-4">
        Guardar
      </button>
    </form>
  );
}
