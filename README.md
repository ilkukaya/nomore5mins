# NoMore5Mins

Free online time tools — alarm clock, countdown timer, stopwatch, Pomodoro timer, current time, world clock and sleep calculator — in **15 languages**. Static site built with [Astro](https://astro.build) and Tailwind CSS v4; everything runs in the browser.

## Quick start

```bash
nvm use            # Node 22.12+
npm ci
npm run dev        # http://localhost:4321
npm run check      # type check + translation check
npm run build      # → dist/ (~1,600 pages)
```

Copy `.env.example` to `.env` to set the domain, AdSense, analytics and Amazon tags. Every variable is optional; with none set the site builds and works, just without ads/analytics.

## Structure

| Path | What it is |
| --- | --- |
| `src/pages/[...slug].astro` | Generates every tool and preset page in every language (`/`, `/tr/`, `/tr/timer/5-minute-timer/`, …) |
| `src/components/tools/*` | The tools (markup) — logic lives in `src/scripts/tools/*.ts` |
| `src/components/ToolPage.astro` | Shared page shell + all structured data (WebApplication, HowTo, FAQPage, BreadcrumbList) |
| `src/i18n/ui/en.ts` | English strings — **source of truth** for all languages |
| `src/i18n/ui/<code>.ts` | Translations (`npm run check` verifies keys and `{placeholders}`) |
| `src/i18n/locales.ts` | Language list, hreflang, RTL, default Amazon marketplace |
| `src/content/blog/*.md` | Blog posts (English) |
| `src/config.ts` | Reads all `PUBLIC_*` environment variables |
| `src/pages/robots.txt.ts`, `llms.txt.ts`, `llms-full.txt.ts`, `ads.txt.ts` | Generated SEO / GEO / ad files |
| `public/_headers`, `public/_redirects` | Security/cache headers and redirects (Netlify **and** Cloudflare Pages) |
| `scripts/gen-images.ts` | Regenerates icons and per-language Open Graph images (`npm run images`, needs Playwright) |

## Adding a language

1. Add the code to `LOCALE_CODES` and `LOCALES` in `src/i18n/locales.ts` and to `locales` in `astro.config.mjs`.
2. Create `src/i18n/ui/<code>.ts` (copy `en.ts`, type it as `Dict`) and translate.
3. Add city names to `src/data/city-names.json`, run `npm run check` and `npm run images`.

## Deploy

- **Netlify:** connect the repo; `netlify.toml` sets the build. Set env vars in the Netlify UI.
- **Cloudflare Pages** (unlimited free bandwidth): build command `npm run build`, output `dist`, env `NODE_VERSION=22`.
- **GitHub Actions** (`.github/workflows/deploy.yml`) runs checks on every PR and deploys `main` to Netlify when `NETLIFY_AUTH_TOKEN` / `NETLIFY_SITE_ID` secrets exist.

See [`docs/YOL-HARITASI.md`](docs/YOL-HARITASI.md) (Turkish) for the launch checklist and growth plan.
