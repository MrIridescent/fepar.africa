import type { Metadata } from "next";
import { ArrowRight, Headphones, Radio } from "lucide-react";
import { ThemeMusicDeck, type ThemeTrack } from "@/components/ThemeMusicDeck";

export const metadata: Metadata = {
  title: "FEPAR Theme Songs — Music and Sound",
  description: "Listen to FEPAR theme songs and approved music for the Festac Pan African Renaissance community.",
  alternates: { canonical: "/theme-songs/" },
  openGraph: { title: "FEPAR Theme Songs — Music and Sound | FEPAR", description: "A home for FEPAR’s theme songs and shared soundtrack." },
};

// Save matching MP3 files in public/audio/. The listening room detects which
// tracks are present, so adding a file does not require changing this list.
const tracks: ThemeTrack[] = [
  { title: "FEPAR Theme Song", artist: "FEPAR", src: "/audio/fepar-theme-song.mp3", description: "FEPAR’s signature theme" },
  { title: "FESTAC at 50 Anthem", artist: "FEPAR", src: "/audio/festac-at-50-anthem.mp3", description: "A song for the FESTAC ’77 golden jubilee" },
  { title: "Pan-African Renaissance", artist: "FEPAR", src: "/audio/pan-african-renaissance.mp3", description: "A song for a connected Pan-African future" },
];

export default function ThemeSongsPage() {
  return <>
    <section className="music-hero"><div className="wrap music-hero-inner"><p className="eyebrow"><Headphones size={15} aria-hidden="true"/> Sound carries us</p><h1 className="display">The FEPAR<br/><em>soundtrack.</em></h1><p>A listening room for theme songs, cultural collaborations and sounds that connect people across Africa and its diaspora.</p><a className="cta cta-teal" href="#music-player">Enter the listening room <ArrowRight size={17} aria-hidden="true"/></a><div className="music-hero-orbit" aria-hidden="true"><span>F</span></div></div></section>

    <section className="music-room" id="music-player"><div className="wrap"><div className="music-section-heading"><div><p className="eyebrow">The listening room</p><h2 className="display">Songs for a<br/><em>shared future.</em></h2></div><p>Play a theme, discover its makers and share the sound. Background playback is optional and always starts with your action.</p></div><ThemeMusicDeck tracks={tracks}/></div></section>

    <section className="music-contribute"><div className="wrap music-contribute-layout"><Radio size={34} strokeWidth={1.3} aria-hidden="true"/><div><p className="eyebrow">For artists and collaborators</p><h2 className="display">Bring your<br/><em>sound to FEPAR.</em></h2></div><div><p>We welcome enquiries about original theme songs, licensed recordings and music collaborations. Please include the artist and songwriter credits, track details, rights information and a link to listen.</p><a href="mailto:hello@fepar.africa?subject=FEPAR%20theme%20song%20submission">Contact FEPAR about music <ArrowRight size={15} aria-hidden="true"/></a></div></div></section>
  </>;
}
