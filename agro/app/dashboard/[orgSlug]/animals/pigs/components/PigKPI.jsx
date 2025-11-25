export default function PigKPI({ data }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      
      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm text-slate-500">Peso Real (kg)</p>
        <h3 className="text-2xl font-bold">{data.weight_real}</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm text-slate-500">Peso Ideal (kg)</p>
        <h3 className="text-2xl font-bold">{data.weight_ideal}</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm text-slate-500">ADG (kg/día)</p>
        <h3 className="text-2xl font-bold">{data.adg}</h3>
      </div>

      <div className={`p-4 rounded-xl shadow ${
        data.indicator_color === "green" ? "bg-green-100" :
        data.indicator_color === "yellow" ? "bg-yellow-100" :
        "bg-red-100"
      }`}>
        <p className="text-sm">Estado</p>
        <h3 className="text-xl font-bold">{data.indicator_label}</h3>
      </div>

    </div>
  );
}
