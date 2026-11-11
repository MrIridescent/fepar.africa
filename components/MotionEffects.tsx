"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionEffects() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const heroIn = gsap.utils.toArray<HTMLElement>("[data-hero-in]");
      if (heroIn.length) {
        gsap.fromTo(heroIn, { y: 26, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.08,
          clearProps: "all",
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.85, ease: "power2.out", clearProps: "all",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      const orbitOuter = document.querySelector(".orbit-outer");
      const orbitMid = document.querySelector(".orbit-mid");
      const orbitNodes = gsap.utils.toArray<HTMLElement>(".orbit-node");
      if (orbitOuter) gsap.to(orbitOuter, { rotation: 360, duration: 72, repeat: -1, ease: "none" });
      if (orbitMid) gsap.to(orbitMid, { rotation: -360, duration: 56, repeat: -1, ease: "none" });
      if (orbitNodes.length) gsap.to(orbitNodes, { scale: 1.22, opacity: 0.72, duration: 2.4, repeat: -1, yoyo: true, stagger: 0.6, ease: "sine.inOut" });

      const art = document.querySelector<HTMLElement>(".hero-art");
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

  return null;
}
