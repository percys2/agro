import { createServerClient } from "@supabase/ssr";

export function supabaseServer(cookies) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON,
    { cookies }
  );
}
