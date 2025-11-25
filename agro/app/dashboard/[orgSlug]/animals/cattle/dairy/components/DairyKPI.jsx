export default function DairyKPI({ kpi }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm">Litros Hoy</p>
        <h3 className="text-3xl font-bold">{kpi.today_liters}</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm">Ideal Hoy</p>
        <h3 className="text-3xl font-bold">{kpi.ideal_today}</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow bg-blue-100">
        <p className="text-sm">Proyección ME305</p>
        <h3 className="text-3xl font-bold">{kpi.projected305} L</h3>
      </div>

      <div className={`p-4 rounded-xl shadow ${
        kpi.indicator_color === "green"
          ? "bg-green-100"
          : kpi.indicator_color === "yellow"
          ? "bg-yellow-100"
          : "bg-red-100"
      }`}>
        <p className="text-sm">Estado</p>
        <h3 className="text-xl font-bold">{kpi.indicator_label}</h3>
      </div>

    </div>
  );
}
