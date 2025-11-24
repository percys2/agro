"use client";
import { useState, useEffect } from "react";
import { supabaseBrowser } from "../lib/supabase/client";

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabaseBrowser()
      .auth.getUser()
      .then(({ data }) => setUser(data.user));
  }, []);

  return user;
}
