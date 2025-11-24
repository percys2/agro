import { supabaseBrowser } from "@/src/lib/supabase/client";
import { expectedFarrowDate, expectedWeanDate, sowStatus } from "./utils";

export async function getSows(orgSlug) {
  const supabase = supabaseBrowser();

  const { data } = await supabase
    .from("sow_inventory")
    .select("*")
    .eq("organization_slug", orgSlug)
    .order("tag");

  return data;
}

export async function getSowEvents(sowId) {
  const supabase = supabaseBrowser();

  const { data } = await supabase
    .from("sow_events")
    .select("*")
    .eq("sow_id", sowId)
    .order("event_date");

  return data;
}

export async function registerEvent(sowId, type, date, notes) {
  const supabase = supabaseBrowser();

  await supabase.from("sow_events").insert({
    sow_id: sowId,
    event_type: type,
    event_date: date,
    notes
  });

  // actualizar estado en sow_inventory
  const newState = sowStatus(type);

  await supabase
    .from("sow_inventory")
    .update({ status: newState })
    .eq("id", sowId);
}
