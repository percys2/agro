import { NextResponse } from "next/server";

export function requireAuth(request) {
  const user = request.cookies.get("sb-access-token");

  if (!user) return NextResponse.redirect("/login");

  return NextResponse.next();
}
