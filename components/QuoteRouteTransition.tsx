"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const quotes = [
  "The future is not something we enter. The future is something we create.",
  "Knowledge is the engine of development; culture is the compass.",
  "Innovation is most useful when it enlarges human possibility.",
];

export function QuoteRouteTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "leaving" | "arriving">("idle");
  const [quote, setQuote] = useState(quotes[0]);
  const destination = useRef<string | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a");
      if (!anchor || !anchor.hasAttribute("href") || (anchor.target && anchor.target !== "_self") || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === pathname) return;
      event.preventDefault();
      if (destination.current) return;
      const next = `${url.pathname}${url.search}${url.hash}`;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(next);
        return;
      }
      destination.current = next;
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      setPhase("leaving");
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname, router]);

  useEffect(() => {
    if (phase !== "leaving" || !destination.current) return;
    const timer = window.setTimeout(() => {
      if (destination.current) router.push(destination.current);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [phase, router]);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    if (destination.current) setPhase("arriving");
  }, [pathname]);

  useEffect(() => {
    if (phase !== "arriving") return;
    const timer = window.setTimeout(() => {
      destination.current = null;
      setPhase("idle");
    }, 300);
    return () => window.clearTimeout(timer);
  }, [phase]);

  return (
    <div className={`route-transition${phase === "idle" ? "" : ` is-${phase}`}`} aria-hidden={phase !== "leaving"}>
      <span className="route-transition-mark">FEPAR / SIGNAL</span>
      <p>“{quote}”</p>
    </div>
  );
}
