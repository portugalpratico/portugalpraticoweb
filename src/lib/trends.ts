export interface NewsItem {
  title: string;
  url: string;
  source: string;
  picture: string;
}

export interface TrendItem {
  title: string;
  traffic: string;
  newsItems: NewsItem[];
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'");
}

function extractTag(content: string, tag: string): string {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = content.match(new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`));
  if (!match) return "";
  const raw = match[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/s);
  return decodeEntities(cdata ? cdata[1].trim() : raw);
}

function parseNewsItems(itemContent: string): NewsItem[] {
  const items: NewsItem[] = [];
  const matches = [...itemContent.matchAll(/<ht:news_item>([\s\S]*?)<\/ht:news_item>/g)];
  for (const [, content] of matches) {
    const title = extractTag(content, "ht:news_item_title");
    const url = extractTag(content, "ht:news_item_url");
    const source = extractTag(content, "ht:news_item_source");
    const picture = extractTag(content, "ht:news_item_picture");
    if (title && url) items.push({ title, url, source, picture });
  }
  return items.slice(0, 3);
}

export async function fetchTrends(limit = 20): Promise<TrendItem[]> {
  try {
    const res = await fetch(
      "https://trends.google.com/trending/rss?geo=PT",
      { next: { revalidate: 21600 } }
    );
    if (!res.ok) return [];
    const xml = await res.text();
    const items: TrendItem[] = [];
    const matches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    for (const [, itemContent] of matches) {
      const title = extractTag(itemContent, "title");
      const traffic = extractTag(itemContent, "ht:approx_traffic");
      const newsItems = parseNewsItems(itemContent);
      if (title && newsItems.length > 0) {
        items.push({ title, traffic, newsItems });
      }
    }
    return items.slice(0, limit);
  } catch {
    return [];
  }
}
