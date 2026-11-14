type ContentfulAsset = {
  sys?: { id?: string };
  fields?: { file?: { url?: string; contentType?: string } };
};

type ContentfulEntry = {
  sys?: { id?: string };
  fields?: Record<string, unknown>;
};

type ContentfulResponse = {
  total?: number;
  items?: ContentfulEntry[];
  includes?: { Asset?: ContentfulAsset[] };
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  publishedAt: string | null;
};

export type Media = {
  id: string;
  title: string;
  description: string;
  kind: "audio" | "video";
  embedUrl: string | null;
  fileUrl: string | null;
};

const space = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_DELIVERY_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function safeEmbed(value: unknown): string | null {
  const input = text(value);
  if (!input) return null;
  try {
    const url = new URL(input);
    if (url.protocol !== "https:" || url.username || url.password || url.port) return null;
    if (url.hostname === "audiomack.com" && /^\/embed\/[a-zA-Z0-9_-]+\/(album|song|playlist)\/[a-zA-Z0-9_-]+\/?$/.test(url.pathname)) {
      return url.origin + url.pathname;
    }
    if (url.hostname === "www.youtube-nocookie.com" && /^\/embed\/[a-zA-Z0-9_-]+\/?$/.test(url.pathname)) {
      return url.origin + url.pathname;
    }
  } catch {
    return null;
  }
  return null;
}

function safeAsset(value: unknown, assets: Map<string, ContentfulAsset>, kind: "audio" | "video"): string | null {
  if (!value || typeof value !== "object" || !("sys" in value)) return null;
  const id = (value as { sys?: { id?: string } }).sys?.id;
  const file = id ? assets.get(id)?.fields?.file : undefined;
  if (!file?.url || !file.contentType?.startsWith(`${kind}/`)) return null;
  try {
    const url = new URL(file.url.startsWith("//") ? `https:${file.url}` : file.url);
    return url.protocol === "https:" && url.hostname === "assets.ctfassets.net" && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

async function entries(contentType: string): Promise<{ items: ContentfulEntry[]; assets: Map<string, ContentfulAsset> }> {
  if (!space && !token) return { items: [], assets: new Map() };
  if (!space || !token || !/^[a-zA-Z0-9_-]+$/.test(space) || !/^[a-zA-Z0-9_-]+$/.test(environment)) {
    throw new Error("Contentful configuration is incomplete or invalid");
  }
  const items: ContentfulEntry[] = [];
  const assets = new Map<string, ContentfulAsset>();
  let total = 0;
  do {
    const url = new URL(`https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries`);
    url.searchParams.set("content_type", contentType);
    url.searchParams.set("limit", "100");
    url.searchParams.set("skip", String(items.length));
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, cache: "force-cache" });
    if (!response.ok) throw new Error(`Contentful ${contentType} request failed (${response.status})`);
    const payload = (await response.json()) as ContentfulResponse;
    if (!Array.isArray(payload.items)) throw new Error(`Contentful ${contentType} response is invalid`);
    total = payload.total ?? payload.items.length;
    items.push(...payload.items);
    for (const asset of payload.includes?.Asset ?? []) {
      if (asset.sys?.id) assets.set(asset.sys.id, asset);
    }
    if (payload.items.length === 0) break;
  } while (items.length < total);
  return { items, assets };
}

export async function getPosts(): Promise<Post[]> {
  const { items } = await entries("feparPost");
  const slugs = new Set<string>();
  return items.flatMap((entry) => {
    const fields = entry.fields ?? {};
    const slug = text(fields.slug);
    const title = text(fields.title);
    const body = text(fields.body);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !title || !body || slugs.has(slug)) return [];
    slugs.add(slug);
    const date = text(fields.publishedAt);
    return [{ slug, title, body, excerpt: text(fields.excerpt), category: text(fields.category), publishedAt: date && !Number.isNaN(Date.parse(date)) ? date : null }];
  }).sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

export async function getMedia(): Promise<Media[]> {
  const { items, assets } = await entries("feparMedia");
  return items.flatMap((entry) => {
    const fields = entry.fields ?? {};
    const title = text(fields.title);
    const kind = fields.kind;
    if (!title || (kind !== "audio" && kind !== "video")) return [];
    const candidate = safeEmbed(fields.embedUrl);
    const embedUrl = candidate && (kind === "audio" ? candidate.startsWith("https://audiomack.com/") : candidate.startsWith("https://www.youtube-nocookie.com/")) ? candidate : null;
    const fileUrl = safeAsset(fields.file, assets, kind);
    if (!embedUrl && !fileUrl) return [];
    return [{ id: entry.sys?.id ?? title, title, description: text(fields.description), kind, embedUrl, fileUrl }];
  });
}
