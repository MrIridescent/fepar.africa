import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/contentful";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.length ? posts.map(({ slug }) => ({ slug })) : [{ slug: "unpublished" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getPosts()).find((item) => item.slug === slug);
  if (!post) return { title: "Story not found", robots: { index: false, follow: false } };
  const description = post.excerpt || post.body.slice(0, 160).trim();
  const url = `https://fepar.africa/news/${post.slug}/`;
  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url,
      siteName: "FEPAR ECOSYSTEM",
      locale: "en_GB",
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FEPAR ECOSYSTEM" }],
    },
    twitter: { card: "summary_large_image", title: post.title, description, images: ["/og-image.png"] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = (await getPosts()).find((item) => item.slug === slug);
  if (!post) notFound();
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.body.slice(0, 160).trim(),
    mainEntityOfPage: `https://fepar.africa/news/${post.slug}/`,
    publisher: { "@id": "https://fepar.africa/#organization" },
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
  };
  return <article className="journal-article"><div className="wrap"><nav className="performance-crumb" aria-label="Breadcrumb"><a href="/">FEPAR</a><span aria-hidden="true">/</span><a href="/news/">News &amp; Ideas</a><span aria-hidden="true">/</span><span aria-current="page">{post.title}</span></nav><header className="journal-article-header"><p className="eyebrow">{post.category || "FEPAR Journal"}{post.publishedAt && <> / <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(new Date(post.publishedAt))}</time></>}</p><h1 className="display">{post.title}</h1>{post.excerpt && <p>{post.excerpt}</p>}</header><div className="journal-article-body">{post.body.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><a className="journal-article-back" href="/news/">Back to News &amp; Ideas</a></div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData).replace(/</g, "\\u003c") }} /></article>;
}
