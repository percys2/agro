"use client";

export default function PigTable({ weeks, weightReal, weightIdeal, feedReal, feedIdeal }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6 overflow-x-auto">
      <h3 className="font-bold mb-4">Tabla de Engorde</h3>

      <table className="min-w-full border">
        <thead className="bg-slate-100">
          <tr>
            <th className=" border p-2">Semana</th>
            <th className=" border p-2">Peso Real</th>
            <th className=" border p-2">Peso Ideal</th>
            <th className=" border p-2">Consumo Real</th>
            <th className=" border p-2">Consumo Ideal</th>
          </tr>
        </thead>

        <tbody>
          {weeks.map((w, i) => (
            <tr key={i} className="text-center">
              <td className="border p-2">{w}</td>
              <td className="border p-2">{weightReal[i] ?? "-"}</td>
              <td className="border p-2">{weightIdeal[i] ?? "-"}</td>
              <td className="border p-2">{feedReal[i] ?? "-"}</td>
              <td className="border p-2">{feedIdeal[i] ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
