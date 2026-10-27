export const site = {
  name: "techyGondal",
  description: "Software engineer and sim racer. Videos and write ups on code, tech and racing.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://techygondal.com",
  links: {
    youtube: "https://www.youtube.com/@TechyGondal",
    instagram: "https://www.instagram.com/techygondal",
    tiktok: "https://www.tiktok.com/@techygondal",
    github: "https://github.com/mzeeshanu",
    team: "https://teamgondal.com",
  },
  nav: [
    { href: "/videos", label: "Videos" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ],
} as const;
