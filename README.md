# techyGondal

Personal creator site for **techyGondal**: software engineer and sim racer. Live at **[techygondal.com](https://techygondal.com)**.

The racing community lives in its own repo and site, [teamgondal.com](https://teamgondal.com).

## Stack

`apps/web`: Next.js 15, React 19, TypeScript, Tailwind CSS 4. Deployed on [Railway](https://railway.com).

The `apps/` layout leaves room for more services later (an API, a newsletter worker, tools for videos).

## Features

* **Latest videos** pulled from the YouTube channel RSS feed. No API key needed; set `YOUTUBE_CHANNEL_ID`.
* **Blog** written as Markdown files in `apps/web/content/posts`. Copy `_template.md`, rename it and set `draft: false`.
* **About** page and links to every platform, plus a path to Team Gondal.

## Run it locally

```bash
cd apps/web
npm install
YOUTUBE_CHANNEL_ID=UCxxxxxxxx npm run dev   # http://localhost:3000
```

## Deploy to Railway

1. New project **techygondal** → New → GitHub Repo → `techygondal`.
2. Settings → Root Directory: `apps/web`; build `npm run build`, start `npm run start`, watch path `/apps/web/**`, healthcheck `/` (mirrors `apps/web/railway.json`; Railway no longer accepts config as code on new services).
3. Variables: `YOUTUBE_CHANNEL_ID` (the id starting with `UC`, from YouTube Studio → Settings → Channel → Advanced settings) and `NEXT_PUBLIC_SITE_URL=https://techygondal.com`.
4. Settings → Networking: add custom domains `techygondal.com` and `www.techygondal.com`, then add the DNS records Railway shows at your registrar.

Push to `main` to deploy. CI lints and builds every push (`.github/workflows/ci.yml`).

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md).
