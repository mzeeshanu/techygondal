import Link from "next/link";
import { TgMark } from "@/components/TgMark";
import { VideoGrid } from "@/components/VideoGrid";
import { PostList } from "@/components/PostList";
import { getLatestVideos } from "@/lib/youtube";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default async function Home() {
  const videos = await getLatestVideos(6);
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-[1fr_auto]">
          <div>
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
              <a href={site.links.youtube} className="rounded-md bg-racing px-6 py-3 font-bold text-ink hover:bg-yellow-300">
                Watch on YouTube
              </a>
              <a href={site.links.team} className="rounded-md border border-line px-6 py-3 font-bold hover:border-white">
                Race with Team Gondal
              </a>
            </div>
          </div>
          <TgMark size={240} className="mx-auto hidden md:block" />
        </div>
        <div className="kerb h-1.5" aria-hidden="true" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold">Latest videos</h2>
          <Link href="/videos" className="text-sm font-semibold text-racing hover:underline">
            All videos
          </Link>
        </div>
        <VideoGrid videos={videos} />
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold">From the blog</h2>
          <Link href="/blog" className="text-sm font-semibold text-racing hover:underline">
            All posts
          </Link>
        </div>
        <PostList posts={posts} />
      </section>
    </>
  );
}
