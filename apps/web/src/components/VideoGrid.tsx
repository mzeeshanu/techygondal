/* eslint-disable @next/next/no-img-element */
import type { Video } from "@/lib/youtube";
import { site } from "@/lib/site";

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });

export function VideoGrid({ videos }: { videos: Video[] }) {
  if (videos.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-line p-8 text-muted">
        Watch the latest videos on{" "}
        <a href={site.links.youtube} className="text-racing underline">
          YouTube
        </a>
        .
      </p>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <li key={v.id}>
          <a href={v.url} className="group block">
            <img
              src={v.thumbnail}
              alt=""
              loading="lazy"
              className="aspect-video w-full rounded-xl border border-line object-cover group-hover:border-racing"
            />
            <h3 className="mt-3 font-bold leading-snug group-hover:text-racing">{v.title}</h3>
            {v.published ? (
              <p className="mt-1 text-sm text-muted">
                <time dateTime={v.published}>{dateFormat.format(new Date(v.published))}</time>
              </p>
            ) : (
              v.ago && <p className="mt-1 text-sm text-muted">{v.ago}</p>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
