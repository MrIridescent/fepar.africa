"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionEffects() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const progress = document.querySelector<HTMLElement>(".reading-progress");
      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.25 },
        });
      }

      gsap.fromTo("[data-hero-in]", { y: 26, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.08,
        clearProps: "all",
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.85, ease: "power2.out", clearProps: "all",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.to(".orbit-outer", { rotation: 360, duration: 72, repeat: -1, ease: "none" });
      gsap.to(".orbit-mid", { rotation: -360, duration: 56, repeat: -1, ease: "none" });
      gsap.to(".orbit-node", { scale: 1.22, opacity: 0.72, duration: 2.4, repeat: -1, yoyo: true, stagger: 0.6, ease: "sine.inOut" });

      gsap.to(".poster-orbit-one", { rotation: 360, duration: 70, repeat: -1, ease: "none" });
      gsap.to(".poster-orbit-two", { rotation: -360, duration: 92, repeat: -1, ease: "none" });
      gsap.to(".poster-crosshair", { rotation: 180, duration: 120, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".poster-node", { scale: 1.28, opacity: 0.62, duration: 2.2, repeat: -1, yoyo: true, stagger: 0.45, ease: "sine.inOut" });
      gsap.to(".poster-stamp", { y: -7, rotation: 15, duration: 3.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".festac-hero-date", { y: -9, duration: 4.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".what-hero-mark", { y: -8, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const intro = document.querySelector<HTMLElement>("main > section:first-child");
      const introItems = intro && !intro.querySelector("[data-hero-in]")
        ? intro.querySelectorAll<HTMLElement>(".festac-back, .eyebrow, h1, .jubilee-lede, .what-hero .wrap > p:not(.eyebrow), .festac-page-hero .wrap > p:not(.eyebrow), .cta")
        : null;
      if (introItems?.length) {
        gsap.fromTo(introItems, { y: 18, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out", clearProps: "all",
        });
      }

      const art = document.querySelector<HTMLElement>(".hero-art, .jubilee-poster");
      if (art && window.matchMedia("(min-width: 851px)").matches) {
        const pointer = { x: 0, y: 0 };
        const syncPointer = () => {
          art.style.setProperty("--pointer-x", `${pointer.x}px`);
          art.style.setProperty("--pointer-y", `${pointer.y}px`);
        };
        const moveX = gsap.quickTo(pointer, "x", { duration: 0.8, ease: "power3", onUpdate: syncPointer });
        const moveY = gsap.quickTo(pointer, "y", { duration: 0.8, ease: "power3", onUpdate: syncPointer });
        const onPointerMove = (event: PointerEvent) => {
          moveX((event.clientX / window.innerWidth - 0.5) * 12);
          moveY((event.clientY / window.innerHeight - 0.5) * 12);
        };
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        return () => window.removeEventListener("pointermove", onPointerMove);
      }
      return undefined;
    });

    return () => media.revert();
  });

  return <div className="reading-progress" aria-hidden="true" />;
}
