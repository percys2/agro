"use client";

import Link from "next/link";

export default function Navbar({ orgSlug }) {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      <h2 className="text-lg font-semibold">Panel de {orgSlug}</h2>

      <Link href="/logout" className="text-red-500">
        Cerrar sesión
      </Link>
    </div>
  );
}
