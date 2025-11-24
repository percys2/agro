export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-slate-900">
        Bienvenido a tu AgroSaaS
      </h1>
      <p className="text-slate-600 mt-4 text-center max-w-md">
        Plataforma multiespecie para gestión de fincas y producción Agro.
      </p>

      <a
        href="/login"
        className="mt-6 bg-slate-900 text-white px-6 py-3 rounded-lg"
      >
        Iniciar Sesión
      </a>
    </div>
  );
}
