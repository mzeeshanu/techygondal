import type { Metadata } from "next";
import { VideoGrid } from "@/components/VideoGrid";
import { PlaylistGrid, SectionHeading, ShortsRow } from "@/components/ChannelBlocks";
import { SocialLinks } from "@/components/Socials";
import { getLatestVideos } from "@/lib/youtube";
import { playlists, popularVideos, shorts } from "@/lib/channel";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Videos" };

export default async function VideosPage() {
  const videos = await getLatestVideos();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-black italic">Videos</h1>
          <p className="mt-2 text-muted">Races, rig builds, shorts and every playlist on the channel.</p>
        </div>
        <SocialLinks size="sm" />
      </div>

      {videos.length > 0 && (
        <section className="mt-12">
          <SectionHeading kicker="Fresh off the rig" title="Latest uploads" />
          <VideoGrid videos={videos} />
        </section>
      )}

      <section className="mt-16">
        <SectionHeading kicker="Fan favourites" title="Most watched" />
        <VideoGrid videos={popularVideos} />
      </section>

      <section className="mt-16">
        <SectionHeading kicker="Under a minute" title="Shorts">
          <a
            href={`${site.links.youtube}/shorts`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-racing hover:underline"
          >
            More shorts →
          </a>
        </SectionHeading>
        <ShortsRow shorts={shorts} />
      </section>

      <section className="mt-16">
        <SectionHeading kicker="Binge a series" title="All playlists" />
        <PlaylistGrid playlists={playlists} />
      </section>
    </div>
  );
}
