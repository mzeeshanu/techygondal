/* eslint-disable @next/next/no-img-element */
import { playlistUrl, type Playlist, type Short } from "@/lib/channel";

/** Vertical short thumbnails in a horizontal scroller. */
export function ShortsRow({ shorts }: { shorts: Short[] }) {
  return (
    <ul className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4">
      {shorts.map((s) => (
        <li key={s.id} className="w-40 shrink-0 snap-start sm:w-48">
          <a href={`https://www.youtube.com/shorts/${s.id}`} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative overflow-hidden rounded-xl border border-line group-hover:border-racing">
              <img
                src={`https://i.ytimg.com/vi/${s.id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="aspect-[9/16] w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute bottom-2 left-2 rounded bg-black/75 px-2 py-0.5 text-xs font-bold">▶ {s.views}</span>
            </div>
            <p className="mt-2 line-clamp-2 text-sm font-semibold leading-snug group-hover:text-racing">{s.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Playlist cards with the YouTube-style stacked look and a video count badge. */
export function PlaylistGrid({ playlists }: { playlists: Playlist[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {playlists.map((p) => (
        <li key={p.id}>
          <a href={playlistUrl(p.id)} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative pt-2">
              <div className="absolute inset-x-4 top-0 h-4 rounded-t-lg bg-line" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-xl border border-line group-hover:border-racing">
                <img
                  src={`https://i.ytimg.com/vi/${p.thumbId}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <span className="absolute right-0 bottom-0 top-0 flex w-2/5 flex-col items-center justify-center bg-ink/85 text-center">
                  <span className="font-display text-2xl font-black">{p.count}</span>
                  <span className="text-xs text-muted">{p.count === 1 ? "video" : "videos"}</span>
                </span>
              </div>
            </div>
            <h3 className="mt-3 font-bold leading-snug group-hover:text-racing">{p.title}</h3>
            <p className="text-sm text-muted">{p.blurb}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Embedded player for a whole playlist. Uses the privacy enhanced domain. */
export function PlaylistPlayer({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-racing/10">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${id}`}
        title={`${title} playlist`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

/** Scrolling band of topics. Pauses for people who prefer reduced motion. */
export function Ticker({ items }: { items: string[] }) {
  const row = items.map((t) => (
    <span key={t} className="flex items-center gap-6">
      <span>{t}</span>
      <span className="text-racing" aria-hidden="true">
        ◆
      </span>
    </span>
  ));
  return (
    <div className="overflow-hidden border-y border-line bg-panel py-3" aria-hidden="true">
      <div className="ticker font-display flex w-max gap-6 text-lg font-extrabold uppercase italic tracking-wide">
        <div className="flex gap-6">{row}</div>
        <div className="flex gap-6">{row}</div>
      </div>
    </div>
  );
}

export function SectionHeading({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-racing">{kicker}</p>
        <h2 className="font-display text-3xl font-extrabold">{title}</h2>
      </div>
      {children}
    </div>
  );
}
