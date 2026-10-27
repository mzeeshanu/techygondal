export type Video = {
  id: string;
  title: string;
  published: string;
  url: string;
  thumbnail: string;
  /** Relative age ("3d ago") when no exact date is known. */
  ago?: string;
};

/**
 * Latest uploads. Tries the channel's public RSS feed first (no API key, up to 15), then the
 * channel's Videos tab, since the feed sometimes returns 404 for long stretches.
 * Set YOUTUBE_CHANNEL_ID to the channel id that starts with "UC" (YouTube Studio → Settings
 * → Channel → Advanced settings). Returns an empty list when unset or unreachable.
 */
export async function getLatestVideos(limit = 15): Promise<Video[]> {
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!channelId) return [];

  const fromFeed = await fetchText(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
  const videos = fromFeed ? parseFeed(fromFeed) : [];
  if (videos.length > 0) return videos.slice(0, limit);

  const page = await fetchText(`https://www.youtube.com/channel/${channelId}/videos`);
  return page ? parseVideosPage(page).slice(0, limit) : [];
}

async function fetchText(url: string) {
  try {
    const res = await fetch(url, {
      headers: { "Accept-Language": "en-US", "User-Agent": "Mozilla/5.0 (compatible; techygondal.com)" },
      next: { revalidate: 1800 },
    });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

/** Reads the uploads list embedded in the channel's Videos tab (the ytInitialData JSON). */
export function parseVideosPage(html: string): Video[] {
  const json = /var ytInitialData = (\{[\s\S]*?\});<\/script>/.exec(html)?.[1];
  if (!json) return [];
  let data: unknown;
  try {
    data = JSON.parse(json);
  } catch {
    return [];
  }

  const videos: Video[] = [];
  const visit = (node: unknown) => {
    if (!node || typeof node !== "object") return;
    const lockup = (node as { lockupViewModel?: Lockup }).lockupViewModel;
    if (lockup?.contentType === "LOCKUP_CONTENT_TYPE_VIDEO" && lockup.contentId) {
      const meta = lockup.metadata?.lockupMetadataViewModel;
      const parts = meta?.metadata?.contentMetadataViewModel?.metadataRows?.flatMap(
        (r) => r.metadataParts?.map((p) => p.text?.content ?? "") ?? [],
      );
      const id = lockup.contentId;
      videos.push({
        id,
        title: meta?.title?.content ?? "",
        published: "",
        ago: parts?.find((p) => p.endsWith(" ago")),
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      });
      return;
    }
    for (const child of Object.values(node)) visit(child);
  };
  visit(data);
  return videos.filter((v) => v.title);
}

type Lockup = {
  contentType?: string;
  contentId?: string;
  metadata?: {
    lockupMetadataViewModel?: {
      title?: { content?: string };
      metadata?: {
        contentMetadataViewModel?: { metadataRows?: { metadataParts?: { text?: { content?: string } }[] }[] };
      };
    };
  };
};

export function parseFeed(xml: string): Video[] {
  const entries = xml.split("<entry>").slice(1);
  return entries.flatMap((entry) => {
    const id = match(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
    const title = match(entry, /<title>([^<]*)<\/title>/);
    const published = match(entry, /<published>([^<]+)<\/published>/);
    if (!id || !title) return [];
    return [
      {
        id,
        title: decode(title),
        published: published ?? "",
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      },
    ];
  });
}

function match(text: string, re: RegExp) {
  return re.exec(text)?.[1];
}

function decode(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
