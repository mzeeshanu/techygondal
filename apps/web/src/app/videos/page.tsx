import type { Metadata } from "next";
import { VideoGrid } from "@/components/VideoGrid";
import { getLatestVideos } from "@/lib/youtube";

export const metadata: Metadata = { title: "Videos" };

export default async function VideosPage() {
  const videos = await getLatestVideos();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-4xl font-black italic">Videos</h1>
      <p className="mt-2 mb-8 text-muted">The latest uploads from the channel.</p>
      <VideoGrid videos={videos} />
    </div>
  );
}
