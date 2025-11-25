export default function SowKPI({ totals }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm text-slate-500">Cerdas Totales</p>
        <h3 className="text-2xl font-bold">{totals.sows}</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm text-slate-500">Tasa de Partos (%)</p>
        <h3 className="text-2xl font-bold">{totals.farrowing_rate}%</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm text-slate-500">NPD (días)</p>
        <h3 className="text-2xl font-bold">{totals.npd}</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow bg-green-100">
        <p className="text-sm text-slate-700">Destetados/cerda/año</p>
        <h3 className="text-2xl font-bold">{totals.weaned_per_sow_year}</h3>
      </div>

    </div>
  );
}
