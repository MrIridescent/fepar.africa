"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type Milestone = {
  year: string;
  place: string;
  title: string;
  body: string;
  href: string;
  link: string;
};

export function MilestoneCarousel({ items }: { items: Milestone[] }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = items.length;

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(track.current, {
      xPercent: -(active * 100) / total,
      duration: reduceMotion ? 0 : 0.8,
      ease: "power3.inOut",
      overwrite: true,
    });
  }, { scope: root, dependencies: [active], revertOnUpdate: true });

  const show = (index: number) => setActive((index + total) % total);
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(active - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(active + 1);
    }
  };

  return <section className="timeline-section" id="timeline" aria-labelledby="timeline-title">
    <div className="wrap">
      <div className="jubilee-section-head" data-reveal>
        <p className="eyebrow">One story, across generations</p>
        <h2 className="display" id="timeline-title">Memory has<br /><em>a long horizon.</em></h2>
        <p>Move through a few moments in the story—from a gathering in Dakar to the futures communities will shape next.</p>
      </div>
      <div ref={root} className="milestone-carousel" role="group" aria-label="FESTAC journey timeline" aria-roledescription="carousel" aria-describedby="milestone-carousel-hint" onKeyDown={onKeyDown} tabIndex={0}>
        <p className="milestone-carousel-hint" id="milestone-carousel-hint">Use the left and right arrow keys, or the buttons, to move between years.</p>
        <div className="milestone-window">
          <div className="milestone-track" ref={track} style={{ width: `${total * 100}%` }}>
            {items.map((item, index) => <article className="milestone-slide" key={item.year} style={{ flex: `0 0 ${100 / total}%` }} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${total}`} aria-hidden={index !== active} inert={index !== active}>
              <div className="milestone-slide-index">0{index + 1} / THE JOURNEY</div>
              <div className="milestone-slide-year">{item.year}<span>{item.place}</span></div>
              <div className="milestone-slide-copy"><h3>{item.title}</h3><p>{item.body}</p><a href={item.href} target="_blank" rel="noreferrer">{item.link}<ArrowUpRight size={15} aria-hidden="true" /></a></div>
            </article>)}
          </div>
        </div>
        <div className="milestone-carousel-controls">
          <div className="milestone-dots" aria-label="Choose a timeline moment">{items.map((item, index) => <button key={item.year} type="button" aria-label={`Show ${item.year}: ${item.title}`} aria-current={active === index ? "step" : undefined} onClick={() => show(index)}><span>{item.year}</span></button>)}</div>
          <div className="milestone-carousel-arrows"><span className="milestone-position" aria-live="polite">{String(active + 1).padStart(2, "0")} <i>/</i> {String(total).padStart(2, "0")}</span><button type="button" aria-label="Previous timeline moment" onClick={() => show(active - 1)}><ArrowLeft size={18} aria-hidden="true" /></button><button type="button" aria-label="Next timeline moment" onClick={() => show(active + 1)}><ArrowRight size={18} aria-hidden="true" /></button></div>
        </div>
      </div>
    </div>
  </section>;
}
