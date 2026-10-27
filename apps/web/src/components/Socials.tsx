import { SocialIcon } from "./SocialIcon";
import { socials, type SocialKey } from "@/lib/site";

/** Brand accent per platform, used for hover states and card glows. */
const accent: Record<SocialKey, string> = {
  youtube: "hover:border-[#ff0033] hover:text-[#ff0033]",
  tiktok: "hover:border-[#25f4ee] hover:text-[#25f4ee]",
  instagram: "hover:border-[#e1306c] hover:text-[#e1306c]",
  discord: "hover:border-[#5865f2] hover:text-[#5865f2]",
  github: "hover:border-white hover:text-white",
};

const tile: Record<SocialKey, string> = {
  youtube: "bg-[#ff0033]",
  tiktok: "bg-gradient-to-br from-[#25f4ee] via-[#000] to-[#fe2c55]",
  instagram: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]",
  discord: "bg-[#5865f2]",
  github: "bg-[#24292f]",
};

/** Compact row of icon buttons, for the hero, about page and footer. */
export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Follow techyGondal">
      {socials.map((s) => (
        <li key={s.key}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} ${s.handle}`}
            title={`${s.label} ${s.handle}`}
            className={`grid ${box} place-items-center rounded-full border border-line text-muted transition ${accent[s.key]}`}
          >
            <SocialIcon name={s.key} className={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Big "follow me everywhere" cards with handle, blurb and a call to action. */
export function SocialCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {socials.map((s) => (
        <li key={s.key}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-2xl border border-line bg-panel p-5 transition hover:-translate-y-1 hover:border-racing"
          >
            <span className={`grid h-12 w-12 place-items-center rounded-xl text-white ${tile[s.key]}`}>
              <SocialIcon name={s.key} className="h-6 w-6" />
            </span>
            <span className="font-display mt-4 text-xl font-extrabold">{s.label}</span>
            <span className="text-sm text-racing">{s.handle}</span>
            <span className="mt-2 flex-1 text-sm text-muted">{s.blurb}</span>
            <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-white/5 px-3 py-1.5 text-sm font-bold group-hover:bg-racing group-hover:text-ink">
              {s.cta} <span aria-hidden="true">→</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
