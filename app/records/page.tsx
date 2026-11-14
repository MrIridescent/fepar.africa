import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { getMedia } from "@/lib/contentful";

export const metadata: Metadata = {
  title: "Artist Pathways & Cultural Industries",
  description: "Artist and producer pathways, music, rights and cultural industries under the FEPAR ECOSYSTEM umbrella.",
  alternates: { canonical: "/records/" },
  openGraph: { title: "Artist Pathways & Cultural Industries | FEPAR", description: "Explore African music, artist pathways, creative rights and opportunities for cultural collaboration.", url: "/records/", images: ["/og-image.png"] },
};

const items = [
  { number: "01", title: "Artist pathways", description: "A clearer route from early practice to professional development, collaboration and audience." },
  { number: "02", title: "Rights & licensing", description: "Before sharing or licensing a recording, identify its creators, agreed credits, permissions and the uses each rights holder has approved." },
  { number: "03", title: "Producer community", description: "Spaces for producers, writers and creative partners to exchange skills and build stronger work." },
];

export default async function RecordsPage() {
  const media = await getMedia();
  return <>
    <PageHero crumb="Artist Pathways & Cultural Industries" eyebrow="02 / Music, talent & rights" title="Make room for African talent to move." variant="records-hero" action={{ label: "Artist / licensing inquiry", href: "/contact/" }}>FEPAR is exploring artist and producer pathways that respect ownership, attribution and the people behind the work. This is an invitation to discuss future collaboration, not an open label roster or licensing catalogue.</PageHero>
    <section className="records-listening" aria-labelledby="records-listening-title"><div className="wrap">
      <div className="records-listening-head" data-reveal><div><p className="eyebrow">Listen / Featured album</p><h2 className="display" id="records-listening-title">The sound of<br /><em>what connects us.</em></h2></div><p>FEPAR Album by HammerGeek. Explore the full release and choose a track to play in the Audiomack player.</p></div>
      <div className="records-player" data-reveal><div className="records-player-label"><span>01 / FEPAR Album</span><span>HammerGeek · Audiomack</span></div><iframe title="FEPAR Album by HammerGeek on Audiomack" src="https://audiomack.com/embed/hammergeek/album/fepar-album" width="100%" height="420" loading="lazy" allow="autoplay; encrypted-media" referrerPolicy="strict-origin-when-cross-origin" /><a href="https://audiomack.com/hammergeek/album/fepar-album" target="_blank" rel="noopener noreferrer">Open album on Audiomack <ArrowUpRight size={16} aria-hidden="true" /></a></div>
    </div></section>
    {media.length > 0 && <section className="records-media" aria-labelledby="records-media-title"><div className="wrap"><div className="records-listening-head" data-reveal><div><p className="eyebrow">More to explore / FEPAR</p><h2 className="display" id="records-media-title">Selected media.</h2></div><p>Listen and watch releases shared by the FEPAR team.</p></div><div className="records-media-list">{media.map((item) => <article className="records-media-item" key={item.id} data-reveal><div><span className="eyebrow">{item.kind}</span><h3>{item.title}</h3>{item.description && <p>{item.description}</p>}</div><div className="records-media-frame">{item.embedUrl ? <iframe title={`${item.title} player`} src={item.embedUrl} width="100%" height={item.kind === "audio" ? 330 : 360} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : item.kind === "audio" ? <audio controls preload="none" src={item.fileUrl ?? undefined} aria-label={item.title}>Your browser does not support audio playback.</audio> : <video controls preload="none" src={item.fileUrl ?? undefined} aria-label={item.title}>Your browser does not support video playback.</video>}</div></article>)}</div></div></section>}
    <section className="indigo"><div className="wrap"><div className="section-head" data-reveal><div><div className="eyebrow">The Records lens</div><h2 className="display">Culture is a form<br />of infrastructure.</h2></div><p>Music and creative work carry memory, identity and economic possibility. We build with the people who make it.</p></div><FeatureGrid items={items} /></div></section>
    <section className="light"><div className="wrap"><div className="section-head" data-reveal><div><div className="eyebrow">For collaborators</div><h2 className="display">Bring your sound,<br />story or opportunity.</h2></div><p>Artists, producers, labels, supervisors, educators and brands can find a considered starting point here.</p></div><div className="actions" data-reveal><a className="cta" href="/contact/">Artist / licensing inquiry <ArrowUpRight size={17} aria-hidden="true" /></a><a className="ghost" href="/development/">See development priorities</a></div></div></section>
  </>;
}
