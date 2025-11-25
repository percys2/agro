export default function BeefKPI({ data }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm">Peso Actual</p>
        <h3 className="text-3xl font-bold">{data.weight_real} kg</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow">
        <p className="text-sm">Peso Ideal</p>
        <h3 className="text-3xl font-bold">{data.weight_ideal} kg</h3>
      </div>

      <div className="p-4 bg-white rounded-xl shadow bg-blue-100">
        <p className="text-sm">ADG (kg/día)</p>
        <h3 className="text-3xl font-bold">{data.adg}</h3>
      </div>

      <div className={`p-4 rounded-xl shadow ${
        data.indicator_color === "green"
          ? "bg-green-100"
          : data.indicator_color === "yellow"
          ? "bg-yellow-100"
          : "bg-red-100"
      }`}>
        <p className="text-sm">Estado</p>
        <h3 className="text-xl font-bold">{data.indicator_label}</h3>
      </div>

    </div>
  );
}
