# Wolf AI — wolf-ai.com.au

Single-page agency website. AI agents, automations, websites and operating software for Australian businesses.

## Stack

Vanilla HTML + CSS + JS. No build step. Three.js loaded from CDN (cdnjs r128) for the 3D neural-network in the hero. Google Fonts (Inter / Fraunces / JetBrains Mono).

## Sections

1. Hero — split layout, 3D neural-network mesh (drag to rotate)
2. Capabilities bento — 8 things we build
3. Industry systems — 4 concept cards (Roofer Ops, Solar Ops, Plumber Ops, Mortgage Broker Ops)
4. Industries matrix — 20 niches we work with
5. Process + Numbers — 4-step + 6 stats
6. Final CTA + Footer

## Deploy on Vercel

1. Push this repo to GitHub
2. Import into Vercel
3. Framework preset: **Other** (or leave blank — Vercel auto-detects static)
4. Build command: leave empty
5. Output directory: leave empty (root)
6. Deploy
7. Add custom domain `wolf-ai.com.au` in Vercel project settings → Domains

The whole site is one `index.html` plus this `vercel.json` for headers and caching.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in any browser.

## To do before go-live

- Wire the three CTA buttons (`.btn-primary` in the nav, hero, final) to a real contact endpoint — Cal.com link, mailto, or a form handler
- Replace the work-card mockups with real screenshots once the Roofer Ops + Solar Ops demos are deployed and screenshottable
- Confirm Mortgage Broker Ops automation list with Dave before launch
- Add OG meta tags for social preview cards (currently only title + description set)
- Add favicon
