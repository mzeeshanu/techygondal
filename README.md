# techyGondal

Personal creator site for **techyGondal**: software engineer and sim racer. Live at **[techygondal.com](https://techygondal.com)**.

The racing community lives in its own repo and site, [teamgondal.com](https://teamgondal.com).

## Stack

`apps/web`: Next.js 15, React 19, TypeScript, Tailwind CSS 4. Deployed on [Railway](https://railway.com).

The `apps/` layout leaves room for more services later (an API, a newsletter worker, tools for videos).

## Features

* **Latest videos** pulled from the YouTube channel (RSS feed, falling back to the channel's Videos tab). No API key needed; set `YOUTUBE_CHANNEL_ID`.
* **Shorts, playlists and most watched** are hand picked in `apps/web/src/lib/channel.ts`. Edit that file to change what the home and videos pages feature.
* **Social links** (YouTube, TikTok, Instagram, Discord, GitHub) live in `apps/web/src/lib/site.ts`.
* **Blog** written as Markdown files in `apps/web/content/posts`. Copy `_template.md`, rename it and set `draft: false`.
* **About** page and links to every platform, plus a path to Team Gondal.

## Run it locally

```bash
cd apps/web
npm install
YOUTUBE_CHANNEL_ID=UCXF6GphFXz_i7u4iWlxUBCQ npm run dev   # http://localhost:3000
```

## Deploy to Railway

1. New project **techygondal** → New → GitHub Repo → `techygondal`.
2. Settings → Root Directory: `apps/web`; build `npm run build`, start `npm run start`, watch path `/apps/web/**`, healthcheck `/` (mirrors `apps/web/railway.json`; Railway no longer accepts config as code on new services).
3. Variables: `YOUTUBE_CHANNEL_ID=UCXF6GphFXz_i7u4iWlxUBCQ`, `NEXT_PUBLIC_SITE_URL=https://techygondal.com` and, optionally, `NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/...` (without it the Discord buttons go to teamgondal.com/join).
4. Settings → Networking: add custom domains `techygondal.com` and `www.techygondal.com`, then add the DNS records Railway shows at your registrar.

Push to `main` to deploy. CI lints and builds every push (`.github/workflows/ci.yml`).

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md).
