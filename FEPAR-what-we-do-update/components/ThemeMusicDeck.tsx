"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";

export type ThemeTrack = { title: string; artist: string; src: string; description: string };

export function ThemeMusicDeck({ tracks }: { tracks: ThemeTrack[] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [available, setAvailable] = useState<ThemeTrack[]>([]);
  const [selectedSrc, setSelectedSrc] = useState("");
  const [checking, setChecking] = useState(true);
  const [background, setBackground] = useState(false);
  const [playing, setPlaying] = useState(false);
  const current = available.find((track) => track.src === selectedSrc) || available[0];

  useEffect(() => {
    let active = true;
    Promise.all(tracks.map(async (track) => {
      try {
        const response = await fetch(track.src, { method: "HEAD", cache: "no-store" });
        return response.ok ? track : null;
      } catch {
        return null;
      }
    })).then((found) => {
      if (!active) return;
      const ready = found.filter((track): track is ThemeTrack => track !== null);
      setAvailable(ready);
      setSelectedSrc((selected) => ready.some((track) => track.src === selected) ? selected : ready[0]?.src || "");
      setChecking(false);
    });
    return () => { active = false; };
  }, [tracks]);

  async function toggleBackground() {
    const audio = audioRef.current;
    if (!audio || !current) return;
    if (background) {
      audio.pause();
      setBackground(false);
      setPlaying(false);
      return;
    }
    audio.loop = true;
    try {
      await audio.play();
      setBackground(true);
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  if (checking) return <div className="music-empty"><Volume2 size={27} strokeWidth={1.4} aria-hidden="true"/><div><h3>Checking the listening room…</h3><p>Looking for FEPAR theme songs in the audio folder.</p></div></div>;

  if (!available.length) return <div className="music-empty"><Volume2 size={27} strokeWidth={1.4} aria-hidden="true"/><div><h3>The soundtrack is ready for its first track.</h3><p>Save any of these MP3 files into <code>public/audio/</code>. The matching song will appear here automatically after deployment.</p><ul className="music-file-list">{tracks.map((track) => <li key={track.src}><strong>{track.title}</strong><code>{track.src.replace("/audio/", "")}</code></li>)}</ul><a href="mailto:hello@fepar.africa?subject=FEPAR%20theme%20music">Share a track or music enquiry <Play size={14} aria-hidden="true"/></a></div></div>;

  return <div className="music-deck"><div className="music-track-list" aria-label="Available FEPAR tracks">{available.map((track) => <button key={track.src} className="music-track-choice" type="button" aria-pressed={track.src === current.src} onClick={() => { audioRef.current?.pause(); setBackground(false); setPlaying(false); setSelectedSrc(track.src); }}><span>{track.title}</span><small>{track.description}</small></button>)}</div><audio ref={audioRef} src={current.src} controls preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label={`Play ${current.title} by ${current.artist}`} /><div className="music-now-playing"><div><span>NOW PLAYING</span><h3>{current.title}</h3><p>{current.artist} · {current.description}</p></div><button className="music-background-toggle" type="button" aria-pressed={background} onClick={toggleBackground}>{background && playing ? <Pause size={16} aria-hidden="true"/> : <Play size={16} aria-hidden="true"/>}{background && playing ? "Stop background music" : "Play as background"}</button></div><p className="music-accessibility">Background playback starts only when you choose it. Use the audio controls to pause, seek or adjust volume.</p></div>;
}
