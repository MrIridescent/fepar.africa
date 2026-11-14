"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Entry = {
  year: string;
  city: string;
  place: string;
  theme: string;
  lesson: string;
  text: string;
  url: string;
  source: string;
};

export function FestivalTimeline({ entries }: { entries: Entry[] }) {
  const [period, setPeriod] = useState("All years");
  const [place, setPlace] = useState("All places");
  const [theme, setTheme] = useState("All themes");
  const places = [...new Set(entries.map((entry) => entry.place))];
  const themes = [...new Set(entries.map((entry) => entry.theme))];
  const filtered = entries.filter((entry) => {
    const year = Number(entry.year);
    return (period === "All years" || (period === "Before 1960" && year < 1960) || (period === "1960–1977" && year >= 1960 && year <= 1977) || (period === "After 1977" && year > 1977)) &&
      (place === "All places" || entry.place === place) &&
      (theme === "All themes" || entry.theme === theme);
  });

  return (
    <div className="timeline-explorer">
      <div className="timeline-controls" role="group" aria-label="Filter the festival timeline">
        <label htmlFor="timeline-period">Period<select id="timeline-period" value={period} onChange={(event) => setPeriod(event.target.value)}><option>All years</option><option>Before 1960</option><option>1960–1977</option><option>After 1977</option></select></label>
        <label htmlFor="timeline-place">Region<select id="timeline-place" value={place} onChange={(event) => setPlace(event.target.value)}><option>All places</option>{places.map((value) => <option key={value}>{value}</option>)}</select></label>
        <label htmlFor="timeline-theme">Theme<select id="timeline-theme" value={theme} onChange={(event) => setTheme(event.target.value)}><option>All themes</option>{themes.map((value) => <option key={value}>{value}</option>)}</select></label>
        <button type="button" disabled={period === "All years" && place === "All places" && theme === "All themes"} onClick={() => { setPeriod("All years"); setPlace("All places"); setTheme("All themes"); }}>Clear filters</button>
      </div>
      <p className="timeline-results" role="status" aria-live="polite">Showing {filtered.length} of {entries.length} moments. Lessons are FEPAR&apos;s questions for today, not claims made by the source institutions.</p>
      {filtered.length ? <ol className="source-timeline">{filtered.map((item) => <li key={item.year}><div className="source-year">{item.year}</div><div className="source-detail"><span>{item.city} · {item.theme}</span><h3>{item.text}</h3><p className="timeline-lesson"><strong>What we carry forward:</strong> {item.lesson}</p><a href={item.url} target="_blank" rel="noopener noreferrer">{item.source}<ArrowUpRight size={15} aria-hidden="true" /></a></div></li>)}</ol> : <p className="timeline-empty">No moments match these filters. Try another period, region or theme.</p>}
    </div>
  );
}
