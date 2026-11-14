"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const paths = [
  {
    number: "01",
    label: "Youth",
    title: "Begin with the next generation.",
    description: "Explore a direction shaped around young people, practical learning and the conditions for meaningful work. These are priorities to develop with communities, not an open programme.",
    href: "/development/",
    linkLabel: "Explore youth & skills",
  },
  {
    number: "02",
    label: "Maker",
    title: "Put knowledge to work.",
    description: "Look closer at making, repair, design and creative self-reliance. The practical pathways ask what useful learning could look like alongside craftspeople and local partners.",
    href: "/development/#practical-pathways",
    linkLabel: "Explore practical pathways",
  },
  {
    number: "03",
    label: "Arts",
    title: "Make room for the practice.",
    description: "Follow a working invitation to musicians, theatre-makers, dancers and cultural partners to consider creative space, skill sharing and fair circulation of work.",
    href: "/performing-arts/",
    linkLabel: "Explore performing arts",
  },
  {
    number: "04",
    label: "History",
    title: "Return to the questions.",
    description: "Trace the legacy of FESTAC ’77 and the questions its fiftieth anniversary raises about memory, stewardship and what we carry forward.",
    href: "/festac-50/",
    linkLabel: "Explore FESTAC at 50",
  },
  {
    number: "05",
    label: "Diaspora",
    title: "Think across borders.",
    description: "Consider how diaspora relationships, responsible enterprise and patient institution-building might support reciprocal, accountable partnerships.",
    href: "/diaspora/",
    linkLabel: "Explore diaspora partnerships",
  },
] as const;

export function ManifestoPathSelector() {
  const [selected, setSelected] = useState(0);
  const path = paths[selected];

  return (
    <section className="manifesto-paths" aria-labelledby="manifesto-paths-title">
      <div className="wrap">
        <div className="manifesto-paths-heading">
          <div>
            <p className="eyebrow">An index of possibilities / 01—05</p>
            <h2 className="display" id="manifesto-paths-title">Explore <em>your path.</em></h2>
          </div>
          <p>Choose a lens on the work. Each entry opens a direction to read, not a promise of a place in a programme.</p>
        </div>
        <div className="manifesto-paths-layout">
          <div className="manifesto-paths-index" role="group" aria-label="Choose a path to preview">
            {paths.map((item, index) => (
              <button
                className="manifesto-paths-choice"
                type="button"
                key={item.number}
                aria-pressed={selected === index}
                aria-controls="manifesto-path-preview"
                onClick={() => setSelected(index)}
              >
                <span className="manifesto-paths-choice-number">{item.number}</span>
                <span className="manifesto-paths-choice-label">{item.label}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>
          <article className="manifesto-paths-preview" id="manifesto-path-preview" aria-live="polite" aria-atomic="true">
            <span className="manifesto-paths-preview-kicker">Selected direction / {path.label}</span>
            <span className="manifesto-paths-preview-number" aria-hidden="true">{path.number}</span>
            <div className="manifesto-paths-preview-copy">
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <a href={path.href} className="manifesto-paths-preview-link">{path.linkLabel} <ArrowUpRight size={19} aria-hidden="true" /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
