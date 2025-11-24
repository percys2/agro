"use client";

import Link from "next/link";

export default function Sidebar({ orgSlug }) {
  const base = `/dashboard/${orgSlug}`;

  return (
    <div className="w-64 bg-white shadow-md h-screen p-5">
      <h2 className="text-xl font-bold mb-6">AgroSaaS</h2>

      <ul className="space-y-3">
        <li>
          <Link href={base} className="text-slate-700 hover:text-black">
            Dashboard
          </Link>
        </li>

        <li>
          <Link href={`${base}/animals`} className="text-slate-700">
            Animales
          </Link>
        </li>

        <li>
          <Link href={`${base}/programs`} className="text-slate-700">
            Programas
          </Link>
        </li>

        <li>
          <Link href={`${base}/consumption`} className="text-slate-700">
            Consumos
          </Link>
        </li>

        <li>
          <Link href={`${base}/costs`} className="text-slate-700">
            Costos
          </Link>
        </li>

        <li>
          <Link href={`${base}/projections`} className="text-slate-700">
            Proyecciones
          </Link>
        </li>

        <li>
          <Link href={`${base}/reports`} className="text-slate-700">
            Reportes PDF
          </Link>
        </li>
      </ul>
    </div>
  );
}
