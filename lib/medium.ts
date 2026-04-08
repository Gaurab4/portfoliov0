import Parser from "rss-parser";

const MEDIUM_FEED = "https://medium.com/feed/@gaurabth2002";

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string | null;
  excerpt: string;
};

const parser = new Parser({
  timeout: 20000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (compatible; PortfolioBot/1.0; +https://medium.com)",
  },
});

function stripTags(html: string): string {
  return html
    .replace(/<figure[\s\S]*?<\/figure>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function excerptFromItem(item: Parser.Item): string {
  const snippet = item.contentSnippet;
  if (snippet && snippet.trim().length > 40) {
    const t = snippet.trim();
    return t.length > 220 ? `${t.slice(0, 220).trim()}…` : t;
  }
  const encoded =
    (item as { "content:encoded"?: string })["content:encoded"] ||
    item.content ||
    item.summary ||
    "";
  const text = stripTags(String(encoded));
  if (!text) return "";
  return text.length > 220 ? `${text.slice(0, 220).trim()}…` : text;
}

export async function getMediumPosts(limit = 12): Promise<MediumPost[]> {
  const feed = await parser.parseURL(MEDIUM_FEED);
  const items = feed.items ?? [];
  return items.slice(0, limit).map((item) => ({
    title: item.title?.trim() || "Untitled",
    link: item.link?.trim() || "https://medium.com/@gaurabth2002",
    pubDate: item.pubDate ?? item.isoDate ?? null,
    excerpt: excerptFromItem(item),
  }));
}
