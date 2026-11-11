"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type StoryBeat = { year: string; place: string; title: string; body: string; href: string; source: string };

export function PinScrubStory({ beats }: { beats: StoryBeat[] }) {
  const root = useRef<HTMLElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [activeBeat, setActiveBeat] = useState(0);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(min-width: 900px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)", () => {
      const stage = root.current?.querySelector<HTMLElement>(".pin-story-stage");
      const experience = root.current?.querySelector<HTMLElement>(".pin-story-experience");
      const panels = gsap.utils.toArray<HTMLElement>(".pin-story-panel", root.current);
      const years = gsap.utils.toArray<HTMLElement>(".pin-story-artbeat", root.current);
      const progress = root.current?.querySelector<HTMLElement>(".pin-story-progress-fill");

      if (!stage || !experience || panels.length !== beats.length || years.length !== beats.length || !progress) return;

      // Reveal the enhanced stage only after its initial visual state is prepared.
      gsap.set(experience, { display: "block" });
      gsap.set([...panels, ...years], { autoAlpha: 0, y: 18, scale: 0.96 });
      gsap.set(years, { left: "50%", top: "50%", xPercent: -50, yPercent: -50 });
      gsap.set([panels[0], years[0]], { autoAlpha: 1, y: 0, scale: 1 });
      gsap.set(progress, { scaleX: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          pin: stage,
          pinSpacing: true,
          start: "top top",
          end: "+=1800",
          scrub: 0.7,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const next = Math.min(beats.length - 1, Math.floor(self.progress * beats.length));
            setActiveBeat((current) => current === next ? current : next);
          },
        },
      });

      timeline.to(progress, { scaleX: 1, duration: beats.length, ease: "none" }, 0);
      for (let index = 1; index < beats.length; index += 1) {
        const boundary = index;
        const transitionStart = boundary - 0.16;
        timeline.to(panels[index - 1], { autoAlpha: 0, y: -16, duration: 0.32, ease: "power2.inOut" }, transitionStart);
        timeline.to(years[index - 1], { autoAlpha: 0, scale: 1.04, duration: 0.32, ease: "power2.inOut" }, transitionStart);
        timeline.fromTo(panels[index], { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.32, ease: "power2.out" }, transitionStart);
        timeline.fromTo(years[index], { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.32, ease: "power2.out" }, transitionStart);
      }

      setEnhanced(true);
      const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        cancelAnimationFrame(refreshFrame);
        setEnhanced(false);
        setActiveBeat(0);
      };
    });

    return () => media.revert();
  }, { scope: root });

  return <section ref={root} className={`pin-story${enhanced ? " is-enhanced" : ""}`} aria-labelledby="pin-story-title">
    <div className="wrap pin-story-intro">
      <p className="eyebrow">A story carried forward</p>
      <h2 className="display" id="pin-story-title">From gathering<br />to <em>homecoming.</em></h2>
      <p>Three moments across six decades. Scroll to move through the story, or use the full timeline below.</p>
      <a className="pin-story-skip" href="#timeline">Skip to the interactive timeline <ArrowDown size={15} aria-hidden="true" /></a>
    </div>

    <div className="pin-story-experience" aria-hidden={!enhanced}>
      <div className="pin-story-stage">
        <div className="pin-story-art" aria-hidden="true">
          <div className="pin-story-ring pin-story-ring-outer" />
          <div className="pin-story-ring pin-story-ring-inner" />
          <div className="pin-story-axis" />
          <span className="pin-story-artbeat">{beats[0]?.year}</span>
          <span className="pin-story-artbeat">{beats[1]?.year}</span>
          <span className="pin-story-artbeat">{beats[2]?.year}</span>
          <span className="pin-story-art-caption">LAGOS / AFRICA / DIASPORA</span>
        </div>
        <div className="pin-story-copy" aria-label="Historical timeline chapters">
          {beats.map((beat, index) => <article className="pin-story-panel" key={beat.year} aria-hidden={activeBeat !== index} inert={activeBeat !== index}>
            <p className="pin-story-kicker">{String(index + 1).padStart(2, "0")} / {beat.place}</p>
            <p className="pin-story-year">{beat.year}</p>
            <h3 className="display">{beat.title}</h3>
            <p className="pin-story-description">{beat.body}</p>
            <a href={beat.href} target="_blank" rel="noreferrer">{beat.source}<ArrowUpRight size={16} aria-hidden="true" /></a>
          </article>)}
        </div>
        <div className="pin-story-bottom"><span>SCROLL TO TRAVEL THROUGH TIME</span><div className="pin-story-progress" aria-hidden="true"><span className="pin-story-progress-fill" /></div><span>1966 — 2027</span></div>
      </div>
    </div>

    {!enhanced && <ol className="wrap pin-story-fallback" aria-label="Three moments in the FESTAC story">{beats.map((beat, index) => <li key={beat.year}>
      <span className="pin-story-fallback-index">0{index + 1} / THE JOURNEY</span><strong>{beat.year}<small>{beat.place}</small></strong><div><h3>{beat.title}</h3><p>{beat.body}</p><a href={beat.href} target="_blank" rel="noreferrer">{beat.source}<ArrowUpRight size={15} aria-hidden="true" /></a></div>
    </li>)}</ol>}
    <p className="pin-story-live" aria-live="polite" aria-atomic="true">{enhanced ? `${beats[activeBeat]?.year}, ${beats[activeBeat]?.place}: ${beats[activeBeat]?.title}` : ""}</p>
  </section>;
}
