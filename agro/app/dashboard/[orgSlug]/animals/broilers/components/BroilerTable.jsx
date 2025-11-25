export default function BroilerTable({ weeks, weightReal, weightIdeal, feedReal, feedIdeal, deaths }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6 overflow-x-auto">
      <h3 className="font-bold mb-4">Tabla del Lote (Libras)</h3>

      <table className="min-w-full border text-center">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 border">Semana</th>
            <th className="p-2 border">Peso Real (lb)</th>
            <th className="p-2 border">Peso Ideal (lb)</th>
            <th className="p-2 border">Consumo Real (lb)</th>
            <th className="p-2 border">Consumo Ideal (lb)</th>
            <th className="p-2 border">Muertos</th>
          </tr>
        </thead>

        <tbody>
          {weeks.map((w, i) => (
            <tr key={i}>
              <td className="border p-2">{w}</td>
              <td className="border p-2">{weightReal[i]}</td>
              <td className="border p-2">{weightIdeal[i]}</td>
              <td className="border p-2">{feedReal[i]}</td>
              <td className="border p-2">{feedIdeal[i]}</td>
              <td className="border p-2">{deaths[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
