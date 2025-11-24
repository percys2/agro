export default function BeefTable({ days, weightReal, weightIdeal }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6 overflow-x-auto">
      <h3 className="font-bold mb-4">Registro de Engorde</h3>

      <table className="min-w-full border text-center">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 border">Día</th>
            <th className="p-2 border">Peso Real</th>
            <th className="p-2 border">Peso Ideal</th>
          </tr>
        </thead>

        <tbody>
          {days.map((d, i) => (
            <tr key={i}>
              <td className="border p-2">{d}</td>
              <td className="border p-2">{weightReal[i]}</td>
              <td className="border p-2">{weightIdeal[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
