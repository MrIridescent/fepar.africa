"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const optOutKey = "fepar-diaspora-connect-opted-out";

type PlaybackStatus = "ready" | "playing" | "paused" | "blocked" | "unavailable";

export function SiteAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const attemptedRef = useRef(false);
  const playRequestRef = useRef(0);
  const blockedRef = useRef(false);
  const [status, setStatus] = useState<PlaybackStatus>("ready");

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    const request = ++playRequestRef.current;
    try {
      await audio.play();
    } catch (error) {
      if (request !== playRequestRef.current) return;
      blockedRef.current = error instanceof DOMException && error.name === "NotAllowedError";
      setStatus(blockedRef.current ? "blocked" : "unavailable");
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;

    if (!attemptedRef.current) {
      attemptedRef.current = true;
      let optedOut = false;
      try {
        optedOut = localStorage.getItem(optOutKey) === "true";
      } catch {
        optedOut = false;
      }
      if (!optedOut) void play();
    }

    const pauseForOtherMedia = (event: Event) => {
      if (event.target instanceof HTMLMediaElement && event.target !== audio) {
        ++playRequestRef.current;
        audio.pause();
      }
    };
    const pauseForEmbed = () => {
      if (document.activeElement?.matches('iframe[src^="https://audiomack.com/embed/"]')) {
        ++playRequestRef.current;
        audio.pause();
      }
    };
    const onWindowBlur = () => window.setTimeout(pauseForEmbed, 0);
    const retryAfterInteraction = (event: Event) => {
      if (!blockedRef.current || !(event.target instanceof Element) || event.target.closest(".site-audio-player, audio, video, iframe")) return;
      if (event instanceof KeyboardEvent && !["Enter", " "].includes(event.key)) return;
      blockedRef.current = false;
      void play();
    };
    document.addEventListener("play", pauseForOtherMedia, true);
    document.addEventListener("focusin", pauseForEmbed);
    document.addEventListener("pointerdown", retryAfterInteraction, true);
    document.addEventListener("keydown", retryAfterInteraction, true);
    window.addEventListener("blur", onWindowBlur);
    return () => {
      document.removeEventListener("play", pauseForOtherMedia, true);
      document.removeEventListener("focusin", pauseForEmbed);
      document.removeEventListener("pointerdown", retryAfterInteraction, true);
      document.removeEventListener("keydown", retryAfterInteraction, true);
      window.removeEventListener("blur", onWindowBlur);
    };
  }, []);

  const updatePreference = (optedOut: boolean) => {
    try {
      if (optedOut) localStorage.setItem(optOutKey, "true");
      else localStorage.removeItem(optOutKey);
    } catch {
      return;
    }
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      updatePreference(false);
      void play();
    } else {
      ++playRequestRef.current;
      blockedRef.current = false;
      updatePreference(true);
      audio.pause();
    }
  };

  const playing = status === "playing";
  const label = playing ? "Pause music" : status === "unavailable" ? "Retry music" : "Play music";

  return (
    <aside className="site-audio-player" aria-label="Site background music">
      <audio
        ref={audioRef}
        src="/audio/diaspora-connect.mp3"
        loop
        preload="auto"
        aria-label="DIASPORA Connect background music"
        onPlay={() => {
          blockedRef.current = false;
          setStatus("playing");
        }}
        onPause={() => setStatus("paused")}
        onError={() => {
          blockedRef.current = false;
          setStatus("unavailable");
        }}
      />
      <button
        type="button"
        className="site-audio-toggle"
        onClick={togglePlayback}
        aria-label={`${label} — DIASPORA Connect background music`}
        aria-pressed={playing}
        title={status === "blocked" ? "Tap to enable background music" : label}
      >
        {playing ? <Volume2 size={17} aria-hidden="true" /> : <VolumeX size={17} aria-hidden="true" />}
        <span>{label}</span>
      </button>
    </aside>
  );
}
