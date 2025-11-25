"use client";

export default function LayerTable({ weeks, postureReal, postureIdeal, feedReal, feedIdeal, weightReal, weightIdeal }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6 overflow-x-auto">
      <h3 className="font-bold mb-4">Tabla del Lote (Semana a Semana)</h3>

      <table className="min-w-full border">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="p-2 border">Semana</th>
            <th className="p-2 border">% Postura Real</th>
            <th className="p-2 border">% Postura Ideal</th>
            <th className="p-2 border">Consumo Real</th>
            <th className="p-2 border">Consumo Ideal</th>
            <th className="p-2 border">Peso Real (kg)</th>
            <th className="p-2 border">Peso Ideal (kg)</th>
          </tr>
        </thead>

        <tbody>
          {weeks.map((w, i) => (
            <tr key={i} className="text-center">
              <td className="border p-2">{w}</td>
              <td className="border p-2">{postureReal[i] ?? "-"}</td>
              <td className="border p-2">{postureIdeal[i] ?? "-"}</td>
              <td className="border p-2">{feedReal[i] ?? "-"}</td>
              <td className="border p-2">{feedIdeal[i] ?? "-"}</td>
              <td className="border p-2">{weightReal[i] ?? "-"}</td>
              <td className="border p-2">{weightIdeal[i] ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
