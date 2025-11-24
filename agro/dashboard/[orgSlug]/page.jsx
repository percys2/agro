export default function DashboardPage({ params }) {
  const { orgSlug } = params;

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Dashboard — {orgSlug}
      </h1>

      <p className="mt-4 text-slate-600">
        Bienvenido al panel de tu organización.
      </p>
    </div>
  );
}
