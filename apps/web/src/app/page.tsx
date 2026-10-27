import Link from "next/link";
import { VideoGrid } from "@/components/VideoGrid";
import { PostList } from "@/components/PostList";
import { SocialCards, SocialLinks } from "@/components/Socials";
import { SocialIcon } from "@/components/SocialIcon";
import { PlaylistGrid, PlaylistPlayer, SectionHeading, ShortsRow, Ticker } from "@/components/ChannelBlocks";
import { getLatestVideos } from "@/lib/youtube";
import { getAllPosts } from "@/lib/posts";
import { channelStats, featuredPlaylist, playlists, popularVideos, shorts, topics } from "@/lib/channel";
import { site } from "@/lib/site";

export default async function Home() {
  const latest = await getLatestVideos(6);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-electric/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-bold uppercase tracking-widest text-muted">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff0033]" aria-hidden="true" />
              New videos every week
            </p>
            <h1 className="font-display text-5xl font-black italic leading-none tracking-tight md:text-7xl">
              Code by day.
              <br />
              <span className="text-racing">Race by night.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              I&apos;m a software engineer and sim racer. On techyGondal I share racing videos, sim rig builds and the
              tech behind it all.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.links.youtubeSubscribe}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-racing px-6 py-3 font-bold text-ink hover:bg-yellow-300"
              >
                <SocialIcon name="youtube" /> Subscribe on YouTube
              </a>
              <a
                href={site.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 font-bold hover:border-[#5865f2]"
              >
                <SocialIcon name="discord" /> Join the Discord
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm text-muted">Follow along:</span>
              <SocialLinks size="sm" />
            </div>
          </div>
          <div>
            <PlaylistPlayer id={featuredPlaylist.id} title={featuredPlaylist.title} />
            <p className="mt-3 text-sm text-muted">
              Now playing: the <span className="font-semibold text-white">{featuredPlaylist.title}</span> playlist. It
              rolls into the next race on its own.
            </p>
          </div>
        </div>

        <dl className="relative mx-auto grid max-w-6xl grid-cols-2 gap-px border-t border-line bg-line md:grid-cols-4">
          {channelStats.map((s) => (
            <div key={s.label} className="bg-ink px-4 py-6 text-center">
              <dt className="text-xs uppercase tracking-widest text-muted">{s.label}</dt>
              <dd className="font-display text-3xl font-black italic text-racing md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="kerb h-1.5" aria-hidden="true" />
      </section>

      <Ticker items={topics} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Follow everywhere" title="Pick your platform" />
        <SocialCards />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionHeading
          kicker={latest.length > 0 ? "Fresh off the rig" : "Fan favourites"}
          title={latest.length > 0 ? "Latest videos" : "Most watched"}
        >
          <Link href="/videos" className="text-sm font-semibold text-racing hover:underline">
            All videos →
          </Link>
        </SectionHeading>
        <VideoGrid videos={latest.length > 0 ? latest : popularVideos} />
      </section>

      <section className="border-y border-line bg-panel/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
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
          <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted">
            Clips land on TikTok and Instagram too:
            <a href={site.links.tiktok} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-[#25f4ee]">
              TikTok
            </a>
            ·
            <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-[#e1306c]">
              Instagram
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading kicker="Binge a series" title="Playlists">
          <a
            href={`${site.links.youtube}/playlists`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-racing hover:underline"
          >
            All playlists →
          </a>
        </SectionHeading>
        <PlaylistGrid playlists={playlists.slice(0, 8)} />
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#5865f2] to-navy p-8 md:p-12">
          <SocialIcon name="discord" className="absolute -right-6 -bottom-10 h-56 w-56 text-white/10" />
          <div className="relative max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Team Gondal</p>
            <h2 className="font-display mt-1 text-4xl font-black italic">Don&apos;t just watch. Race with us.</h2>
            <p className="mt-3 text-white/80">
              Join the Discord to find lobbies, share setups and hop into the next race night with the community.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-[#5865f2] hover:bg-white/90"
              >
                <SocialIcon name="discord" /> Join the Discord
              </a>
              <a href={site.links.team} className="rounded-md border border-white/40 px-6 py-3 font-bold hover:border-white">
                Visit teamgondal.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <SectionHeading kicker="Write ups" title="From the blog">
          <Link href="/blog" className="text-sm font-semibold text-racing hover:underline">
            All posts →
          </Link>
        </SectionHeading>
        <PostList posts={posts} />
      </section>
    </>
  );
}
