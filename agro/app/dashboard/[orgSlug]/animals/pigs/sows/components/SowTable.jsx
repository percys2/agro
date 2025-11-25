export default function SowTable({ sows }) {
  return (
    <div className="bg-white shadow rounded-xl mt-6 p-4">
      <h3 className="font-bold mb-4">Inventario de Cerdas</h3>

      <table className="min-w-full border text-center">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 border">Tag</th>
            <th className="p-2 border">Raza</th>
            <th className="p-2 border">Partos</th>
            <th className="p-2 border">Estado</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {sows.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.tag}</td>
              <td className="border p-2">{s.breed ?? "-"}</td>
              <td className="border p-2">{s.parity}</td>
              <td className="border p-2">{s.status}</td>
              <td className="border p-2">
                <button className="px-4 py-1 bg-slate-900 text-white rounded-lg">
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
