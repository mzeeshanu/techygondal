export const site = {
  name: "techyGondal",
  description: "Software engineer and sim racer. Videos and write ups on code, tech and racing.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://techygondal.com",
  links: {
    youtube: "https://www.youtube.com/@TechyGondal",
    youtubeSubscribe: "https://www.youtube.com/@TechyGondal?sub_confirmation=1",
    instagram: "https://www.instagram.com/techygondal",
    tiktok: "https://www.tiktok.com/@techygondal",
    // Set NEXT_PUBLIC_DISCORD_INVITE to the server invite; until then the Team Gondal join page carries it.
    discord: process.env.NEXT_PUBLIC_DISCORD_INVITE || "https://teamgondal.com/join",
    github: "https://github.com/mzeeshanu",
    team: "https://teamgondal.com",
  },
  nav: [
    { href: "/videos", label: "Videos" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ],
} as const;

export type SocialKey = "youtube" | "instagram" | "tiktok" | "discord" | "github";

/** Every platform, in the order they show up across the site. */
export const socials: { key: SocialKey; label: string; handle: string; href: string; blurb: string; cta: string }[] = [
  {
    key: "youtube",
    label: "YouTube",
    handle: "@TechyGondal",
    href: site.links.youtubeSubscribe,
    blurb: "Full races, rig builds and how-tos. 700+ videos.",
    cta: "Subscribe",
  },
  {
    key: "tiktok",
    label: "TikTok",
    handle: "@techygondal",
    href: site.links.tiktok,
    blurb: "Quick clips: near misses, drifts and rig moments.",
    cta: "Follow",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@techygondal",
    href: site.links.instagram,
    blurb: "Reels and behind the scenes of the sim room.",
    cta: "Follow",
  },
  {
    key: "discord",
    label: "Discord",
    handle: "Team Gondal",
    href: site.links.discord,
    blurb: "Hang out, find a race and drive with the community.",
    cta: "Join",
  },
  {
    key: "github",
    label: "GitHub",
    handle: "mzeeshanu",
    href: site.links.github,
    blurb: "The code side: this site, tools and side projects.",
    cta: "Follow",
  },
];
