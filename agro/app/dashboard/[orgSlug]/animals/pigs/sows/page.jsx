"use client";

import { useEffect, useState } from "react";
import { getSows, getSowEvents } from "./services";

import SowKPI from "./components/SowKPI";
import SowTable from "./components/SowTable";
import SowTimeline from "./components/SowTimeline";
import SowForm from "./components/SowForm";

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
