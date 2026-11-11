"use client";

import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===========================================
// SMOOTH SCROLLING (LENIS + GSAP TICKER)
// ===========================================

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (reducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

// ===========================================
// READING PROGRESS INDICATOR
// ===========================================

export function ReadingProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    const setProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, percentage))})`;
    };

    window.addEventListener("scroll", setProgress, { passive: true });
    window.addEventListener("resize", setProgress);
    setProgress();

    return () => {
      window.removeEventListener("scroll", setProgress);
      window.removeEventListener("resize", setProgress);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="reading-progress"
      aria-hidden="true"
      style={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
        background: "linear-gradient(90deg, #CC0001, #F4A800, #009B3A)",
        transform: "scaleX(0)",
        transformOrigin: "left center",
        boxShadow: "0 0 12px rgba(244, 168, 0, 0.55)",
        pointerEvents: "none",
      }}
    />
  );
}

// ===========================================
// PARALLAX HERO SECTION
// ===========================================

interface ParallaxHeroProps {
  children: React.ReactNode;
  speed?: number;
  backgroundImage?: string;
}

export function ParallaxHero({
  children,
  speed = 0.3,
  backgroundImage,
}: ParallaxHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const bg = bgRef.current;
      if (!hero || !bg || reducedMotion()) return;
      if (!window.matchMedia("(hover: hover)").matches) return;

      const amplitude = 60 * speed;
      const xTo = gsap.quickTo(bg, "x", { duration: 0.9, ease: "power3.out" });
      const yTo = gsap.quickTo(bg, "y", { duration: 0.9, ease: "power3.out" });

      const onPointerMove = (e: PointerEvent) => {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        xTo((e.clientX / window.innerWidth - 0.5) * amplitude);
        yTo((e.clientY / window.innerHeight - 0.5) * amplitude);
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      return () => window.removeEventListener("pointermove", onPointerMove);
    },
    { scope: heroRef, dependencies: [speed] }
  );

  return (
    <div ref={heroRef} style={{ position: "relative", overflow: "hidden" }}>
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-60px",
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

// ===========================================
// SCROLL-TRIGGERED REVEAL
// ===========================================

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.12,
  className,
  style,
  id,
}: RevealOnScrollProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = revealRef.current;
      if (!el || reducedMotion()) return;

      const offsets: Record<string, gsap.TweenVars> = {
        up: { y: 48 },
        down: { y: -48 },
        left: { x: 48 },
        right: { x: -48 },
      };

      gsap.set(el, { opacity: 0, ...offsets[direction] });

      ScrollTrigger.create({
        trigger: el,
        start: `top ${Math.round((1 - threshold) * 100)}%`,
        once: true,
        onEnter: () =>
          gsap.to(el, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            clearProps: "transform",
          }),
      });
    },
    { scope: revealRef, dependencies: [direction, delay, threshold] }
  );

  return (
    <div ref={revealRef} className={className} style={style} id={id}>
      {children}
    </div>
  );
}

// ===========================================
// STAGGERED GRID
// ===========================================

interface StaggerGridProps {
  children: React.ReactNode[];
  gap?: number;
  staggerDelay?: number;
}

export function StaggerGrid({
  children,
  gap = 24,
  staggerDelay = 0.1,
}: StaggerGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const childArray = Array.isArray(children) ? children : [children];

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid || !grid.children.length || reducedMotion()) return;

      gsap.set(grid.children, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: grid,
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.to(grid.children, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: staggerDelay,
            ease: "power2.out",
            clearProps: "transform",
          }),
      });
    },
    { scope: gridRef, dependencies: [staggerDelay, childArray.length] }
  );

  return (
    <div
      ref={gridRef}
      style={{
        display: "grid",
        gap,
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      }}
    >
      {childArray.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
}

// ===========================================
// COUNT UP
// ===========================================

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  delay?: number;
}

export function CountUp({ end, duration = 2, suffix = "", delay = 0 }: CountUpProps) {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = countRef.current;
      if (!el || reducedMotion()) return;

      const state = { value: 0 };
      el.textContent = `0${suffix}`;

      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () =>
          gsap.to(state, {
            value: end,
            duration,
            delay,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.round(state.value).toLocaleString("en-US")}${suffix}`;
            },
          }),
      });
    },
    { scope: countRef, dependencies: [end, duration, suffix, delay] }
  );

  return (
    <span ref={countRef}>
      {end.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

// ===========================================
// TEXT REVEAL
// ===========================================

interface TextRevealProps {
  text: string;
  delayPerChar?: number;
}

export function TextReveal({ text, delayPerChar = 0.05 }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || reducedMotion()) return;

      const wordEls = container.querySelectorAll(".word");
      if (!wordEls.length) return;
      gsap.set(wordEls, { y: "110%", opacity: 0 });

      ScrollTrigger.create({
        trigger: container,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(wordEls, {
            y: "0%",
            opacity: 1,
            duration: 0.7,
            stagger: delayPerChar,
            ease: "back.out(1.4)",
          }),
      });
    },
    { scope: containerRef, dependencies: [text, delayPerChar] }
  );

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word"
          style={{ marginRight: "0.35em", display: "inline-block" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

// ===========================================
// MAGNETIC BUTTON (wrapper-safe for links)
// ===========================================

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  strength?: number;
}

export function MagneticButton({
  children,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      if (!wrap || reducedMotion()) return;
      if (!window.matchMedia("(hover: hover)").matches) return;

      const xTo = gsap.quickTo(wrap, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(wrap, "y", { duration: 0.5, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const rect = wrap.getBoundingClientRect();
        xTo((e.clientX - (rect.left + rect.width / 2)) * strength);
        yTo((e.clientY - (rect.top + rect.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerleave", onLeave);
      return () => {
        wrap.removeEventListener("pointermove", onMove);
        wrap.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: wrapRef, dependencies: [strength] }
  );

  return (
    <span
      ref={wrapRef}
      onClick={onClick}
      style={{ display: "inline-block", willChange: "transform" }}
    >
      {children}
    </span>
  );
}

// ===========================================
// MOTION PROVIDERS
// ===========================================

export function MotionProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll>{children}</SmoothScroll>
      <ReadingProgress />
    </>
  );
}

export default {
  SmoothScroll,
  ReadingProgress,
  ParallaxHero,
  RevealOnScroll,
  StaggerGrid,
  CountUp,
  TextReveal,
  MagneticButton,
  MotionProviders,
};