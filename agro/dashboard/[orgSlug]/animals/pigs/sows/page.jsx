"use client";

import { useEffect, useState } from "react";
import { getSows, getSowEvents } from "@/src/modules/animals/pigs/sows/services";

import SowKPI from "@/src/modules/animals/pigs/sows/components/SowKPI";
import SowTable from "@/src/modules/animals/pigs/sows/components/SowTable";
import SowTimeline from "@/src/modules/animals/pigs/sows/components/SowTimeline";
import SowForm from "@/src/modules/animals/pigs/sows/components/SowForm";

export default function SowsPage({ params }) {
  const { orgSlug } = params;

  const [sows, setSows] = useState([]);
  const [selectedSow, setSelectedSow] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function load() {
      const s = await getSows(orgSlug);
      setSows(s);
    }
    load();
  }, []);

  async function loadEvents(id) {
    setSelectedSow(id);
    const e = await getSowEvents(id);
    setEvents(e);
  }

  const totals = {
    sows: sows.length,
    farrowing_rate: 88,
    npd: 12,
    weaned_per_sow_year: 28
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cerdas Reproductoras</h1>

      <SowKPI totals={totals} />

      <SowTable sows={sows} />

      {selectedSow && (
        <>
          <SowTimeline events={events} />
          <SowForm sowId={selectedSow} />
        </>
      )}
    </div>
  );
}
