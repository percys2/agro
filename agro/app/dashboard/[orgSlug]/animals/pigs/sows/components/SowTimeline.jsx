export default function SowTimeline({ events }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-4">Línea del Tiempo</h3>

      <ul className="border-l-2 border-slate-300 pl-4">
        {events.map((e, i) => (
          <li key={i} className="mb-4">
            <p className="font-semibold">{e.event_type}</p>
            <p className="text-sm text-slate-500">{e.event_date}</p>
            {e.notes && <p className="text-sm italic">{e.notes}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
