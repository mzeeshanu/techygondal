export type Video = {
  id: string;
  title: string;
  published: string;
  url: string;
  thumbnail: string;
};

/**
 * Latest uploads from the channel's public RSS feed (no API key needed, returns up to 15).
 * Set YOUTUBE_CHANNEL_ID to the channel id that starts with "UC" (YouTube Studio → Settings
 * → Channel → Advanced settings). Returns an empty list when unset or unreachable.
 */
export async function getLatestVideos(limit = 15): Promise<Video[]> {
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!channelId) return [];

  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) return [];
    return parseFeed(await res.text()).slice(0, limit);
  } catch {
    return [];
  }
}

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
