import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getPosts } from "@/lib/contentful";

export const metadata: Metadata = {
  title: "News & Ideas",
  description: "Read FEPAR's published perspectives and explore ideas on Pan-African culture, youth skills, performing arts and diaspora partnership.",
  alternates: { canonical: "/news/" },
  openGraph: {
    title: "News & Ideas | FEPAR",
    description: "Read FEPAR perspectives on Pan-African culture, youth skills, performing arts and diaspora partnership.",
    type: "website",
    locale: "en_GB",
    url: "https://fepar.africa/news/",
    siteName: "FEPAR ECOSYSTEM",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR News & Ideas" }],
  },
};

const directions = [
  {
    number: "01",
    category: "Community & learning",
    title: "Development begins with people.",
    description: "Explore the questions behind skills, opportunity and community-led change. Our development page sets out priorities and possibilities rather than reporting outcomes we cannot verify here.",
    href: "/development/",
    linkLabel: "Explore development",
  },
  {
    number: "02",
    category: "Creative practice",
    title: "What does a fair stage look like?",
    description: "Performers need more than a spotlight. Read our invitation to think together about making work, sharing knowledge and circulating it on fair terms.",
    href: "/performing-arts/",
    linkLabel: "Explore performing arts",
  },
  {
    number: "03",
    category: "Connection across borders",
    title: "Diaspora as partnership, not a slogan.",
    description: "What could reciprocal relationships between communities, institutions and the diaspora make possible? Explore the direction we are putting forward.",
    href: "/diaspora/",
    linkLabel: "Explore diaspora partnerships",
  },
];

export default async function NewsPage() {
  const posts = await getPosts();
  return (
    <>
      <section className="journal-hero" aria-labelledby="journal-title">
        <nav className="wrap performance-crumb" aria-label="Breadcrumb"><a href="/">FEPAR</a><span aria-hidden="true">/</span><span>News &amp; Ideas</span></nav>
        <div className="wrap journal-hero-grid">
          <div data-reveal>
            <p className="eyebrow">FEPAR / News &amp; Ideas</p>
            <h1 className="display" id="journal-title">A place for<br /><em>what comes next.</em></h1>
          </div>
          <div className="journal-hero-note" data-reveal>
            <span>{posts.length ? "The journal / Published writing" : "In the making / 01"}</span>
            <p>{posts.length ? "Read the latest writing from FEPAR, and explore the directions behind our work." : "We are shaping this space for reporting and reflection. There are no published journal articles here yet. In the meantime, follow the ideas already on the site."}</p>
            <a href={posts.length ? "#journal-posts" : "#journal-directions"}>{posts.length ? "Read the journal" : "Explore the directions"} <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      {posts.length > 0 && <section className="journal-directions" id="journal-posts" aria-labelledby="journal-posts-title"><div className="wrap"><div className="journal-heading" data-reveal><p className="eyebrow">FEPAR / Published writing</p><h2 className="display" id="journal-posts-title">From the<br /><em>journal.</em></h2><p>Perspectives and dispatches published by FEPAR.</p></div><div className="journal-list">{posts.map((post, index) => <article className="journal-item" key={post.slug} data-reveal><div className="journal-item-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{post.category || "Journal"}</span>{post.publishedAt && <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(post.publishedAt))}</time>}</div><div><h3>{post.title}</h3>{post.excerpt && <p>{post.excerpt}</p>}</div><a href={`/news/${post.slug}/`} aria-label={`Read ${post.title}`}>Read story <ArrowUpRight size={18} aria-hidden="true" /></a></article>)}</div></div></section>}

      <section className="journal-directions" id="journal-directions" aria-labelledby="directions-title">
        <div className="wrap">
          <div className="journal-heading" data-reveal>
            <p className="eyebrow">Start here / existing pages</p>
            <h2 className="display" id="directions-title">Ideas worth<br /><em>exploring.</em></h2>
            <p>These are pathways to existing FEPAR pages, not article previews or reports of completed programmes.</p>
          </div>
          <div className="journal-list">
            {directions.map((direction) => (
              <article className="journal-item" key={direction.number} data-reveal>
                <div className="journal-item-meta"><span>{direction.number}</span><span>{direction.category}</span></div>
                <div><h3>{direction.title}</h3><p>{direction.description}</p></div>
                <a href={direction.href} aria-label={`${direction.linkLabel}: ${direction.title}`}>{direction.linkLabel} <ArrowUpRight size={18} aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journal-contact" aria-labelledby="journal-contact-title">
        <div className="wrap journal-contact-grid" data-reveal>
          <div><p className="eyebrow">Stay in conversation</p><h2 className="display" id="journal-contact-title">Have a story<br /><em>to share?</em></h2></div>
          <div><p>We do not offer a newsletter subscription yet. If you have a perspective, a question or a potential collaboration, get in touch directly.</p><a href="/contact/" className="cta cta-light">Contact FEPAR <ArrowUpRight size={18} aria-hidden="true" /></a></div>
        </div>
      </section>
    </>
  );
}
