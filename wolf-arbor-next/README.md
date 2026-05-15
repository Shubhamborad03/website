# Wolf Arbor — Wolf AI pitch site

Premium Next.js site pitching Wolf AI's operations + growth system to an Australian tree-lopping operator. Light cream + deep forest + warm amber. Designed to feel "of the tree-work niche" — real photography, professional service-business polish — not a luxury agency.

**Contact CTA** → Typeform form (`https://z8d9iav9qs2.typeform.com/to/zTzcDJPm`). Defined as `CONTACT_URL` constant at the top of `components/nav-pill.tsx`, `components/hero.tsx`, `components/cta-section.tsx`, and `components/footer.tsx` — change once per file if the form URL ever moves.

## Run it

```bash
cd wolf-arbor-next
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
git init -b main
git add .
git commit -m "Initial commit"
# push to a fresh GitHub repo, then import on vercel.com
# (no env vars needed — auto-detects Next.js)
```

## Stack

- **Next.js 15** App Router + **TypeScript** + **React 18**
- **Tailwind CSS 3.4** with the Wolf-arbor palette (cream / forest / amber / sand)
- **Framer Motion 11** for every reveal, the SMS conversation, the chart bars, the magnetic buttons
- **Lenis** smooth-scroll momentum
- **next/image** for Unsplash photography (hero arborist + customer tree shot)
- **lucide-react** icons
- **@fontsource/inter** + **@fontsource/jetbrains-mono** — no Google Fonts network calls, ships fonts in the bundle

## What's in it

1. **Hero** — two-line headline ("Stay on the tools. The office runs itself."), Unsplash arborist photo, 3-stat trust strip, ONE primary CTA
2. **The leaks** — 4×2 grid of icon cards, each leak named with its $ figure
3. **The system** — dark forest section, mobile-condensed phone mockup running through 5 SMS bubbles, 2×2 grid of capture/assess/approve/close steps + 3-card stat row
4. **Ten levers** — 5×2 grid of icon cards with $ figures (not a scrollable list anymore)
5. **The maths** — proper SVG-style bar chart with Y-axis labels ($0 → $50k), horizontal gridlines, gold operator bars + amber Wolf-cut bars (capped at $2.5k), M12 callout pill, 3-card summary below
6. **The build** — horizontal 7-step timeline on desktop (single-line week titles), vertical on mobile
7. **CTA** — 6-question grid + dark forest book-a-call panel

## Swap the photography

If the Unsplash images don't fit, drop your own files in `/public` and update:

- `components/hero.tsx` line ~88 → `src="https://images.unsplash.com/..."`
- `components/phone-mockup.tsx` line ~96 → same pattern

Both have a `bg-forest` fallback colour so even if the image hasn't loaded yet, the layout doesn't break.

## Tailwind tokens

Defined in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `bg-bg` | `#FAF7F0` | warm cream background |
| `text-ink` | `#1A1A1A` | charcoal primary text |
| `text-muted` | `#5C5C5C` | secondary text |
| `bg-forest` | `#1F3A2E` | deep evergreen accent (CTAs, dark section bg) |
| `bg-forestSoft` | `#2D5945` | hover / secondary forest |
| `text-amber` | `#C97A2C` | warm earth accent (Wolf-cut bars, badges, hover states) |
| `bg-sand` | `#E8DDC9` | hairline borders |
| `bg-sandSoft` | `#F0E8D8` | subtle card surfaces |

No italic-serif font. Inter alone, with weight + colour for emphasis.

## Where copy lives

| File | What's inside |
|---|---|
| `components/hero.tsx` | Headline, sub, eyebrow, stats |
| `components/leaks.tsx` | 7 leak cards |
| `components/system.tsx` | 4 step cards + stats row |
| `components/phone-mockup.tsx` | The SMS conversation script |
| `components/levers.tsx` | 10 automation cards |
| `components/revenue-chart.tsx` | Month-by-month data points |
| `components/timeline.tsx` | The 7-week build plan |
| `components/cta-section.tsx` | 6 questions + final CTA |

Edit the arrays at the top of each file.
