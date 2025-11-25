export default function LayerKPI({ data }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-sm text-slate-500">% Postura (Real)</p>
        <h3 className="text-2xl font-bold">{data.production_real}%</h3>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-sm text-slate-500">% Postura (Ideal)</p>
        <h3 className="text-2xl font-bold">{data.production_ideal}%</h3>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <p className="text-sm text-slate-500">Consumo Real (g/día)</p>
        <h3 className="text-2xl font-bold">{data.feed_real} g</h3>
      </div>

      <div className={`rounded-xl shadow p-4 ${
        data.indicator_color === "green" ? "bg-green-100" :
        data.indicator_color === "yellow" ? "bg-yellow-100" :
        "bg-red-100"
      }`}>
        <p className="text-sm text-slate-500">Indicador</p>
        <h3 className="text-2xl font-bold">{data.indicator_label}</h3>
      </div>
    </div>
  );
}
