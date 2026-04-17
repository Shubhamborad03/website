# 3D / Cinematic Websites — Everything Learned

How to build a premium "3D" marketing site for a tradie client — the kind being shipped on X/TikTok right now using the nano-banana + AI-video pipeline. Covers the workflow, the tech stack, the performance traps, and the specific mistakes made building the BitumenCo demo.

**If you're in a fresh session:** read this before writing a single line of code.

---

## 1. What "3D website" actually means in 2026

It is almost never real 3D geometry loaded from GLTF/FBX files. It's a layered illusion that combines:

- **WebGL scenes with procedural geometry** (boxes + cylinders — zero external assets to load)
- **UV-scrolling CanvasTextures** (infinite-road effect, conveyor, flowing paint)
- **Layered parallax** via `translateZ()` on stacked DOM layers
- **Mouse-tilt + scroll-linked transforms**
- **Smooth scroll** (Lenis is the de-facto standard)
- **Premium typography** (Fontshare fonts, not Google Fonts defaults)
- **Cinematic grade overlays** — vignettes, subtle grain (static, not animated)
- **Scroll-snap horizontal galleries with click-to-expand lightboxes**
- **Scroll-driven progress indicators** (mini dashboard corners, not giant side panels)

The "nano-banana" variant layers on pre-rendered AI video clips as `<video autoplay muted loop>` backgrounds in place of photos. Clients see motion and assume "3D".

---

## 2. The nano-banana + AI-video pipeline (how the trend works)

```
Nano Banana (Gemini 2.5 Flash Image)  →  still image (JPG, ~$0.04)
       ↓
Kling 2.5 / Veo 3 / Runway Gen-4 / Seedance 2.0  →  5-8s MP4 (~$0.60 per clip)
       ↓
CapCut trim + loop-reverse for seamless loop
       ↓
<video autoplay muted loop playsinline> embed  →  looks like "3D video"
```

**Budget**: fully animating a 6-card site is about **$6-7 USD total**.

**Which tool for what:**
- Kling Pro → cinematic camera moves, best dolly/orbit pushes
- Veo 3 → photoreal + native audio (but audio is rarely needed for loops)
- Runway Gen-4 → character/product consistency
- Seedance 2.0 → cheapest, fastest, good for subtle B-roll loops

**Universal negative prompt to always append**:
```
no color shift, no film flicker, no glitch, no text overlay, no logos,
no modern luxury cars, no warp, no face distortion, no shaky cam, no CGI look
```

Working demo of this pattern: `bitumenco/3d-website/PROMPTS.md` has the full prompt library keyed to each page section.

---

## 3. The stack that actually ships (zero build step)

For a one-shot premium demo site, skip Next.js and ship a single `index.html` + `assets/`. Massively faster to iterate, trivial to deploy.

```html
<!-- importmap loads Three + Lenis as ES modules, no bundler needed -->
<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
    "lenis": "https://unpkg.com/lenis@1.1.20/dist/lenis.mjs"
  }
}
</script>
<!-- Fontshare > Google Fonts for premium feel -->
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&f[]=satoshi@300,400,500,700&display=swap" />
```

Total external deps: 3 CDN requests. Zero `npm install`.

---

## 4. Performance killers — cut these first, every time

The BitumenCo demo was "laggy" three times in a row until every item on this list was removed. **Do not ship any of these:**

| Anti-pattern | Why it kills perf | Fix |
|---|---|---|
| `backdrop-filter: blur()` | GPU compositor work every frame | Use solid `rgba()` panels |
| `background-attachment: fixed` on full-bleed images | Forces repaint on every scroll pixel | Replace with pseudo-element + transform |
| `mix-blend-mode: difference` on nav | Recomposites the whole viewport | Use normal text with a fade backdrop |
| Multiple `requestAnimationFrame` loops | Each competes for frame budget | Consolidate into ONE rAF that drives Lenis + WebGL + dust |
| `filter: grayscale() contrast()` on animated images | Filter is recomputed every frame during Ken Burns | Bake grayscale into the image OR don't grayscale at all |
| Global `perspective` on `body` | Forces every descendant into 3D context | Scope perspective to specific sections |
| `background-image` on `<div>` | Blocks paint, no lazy loading | Use `<img loading="lazy" decoding="async">` |
| Uncapped `window.devicePixelRatio` | 3x retina = 9x pixel work for WebGL | `Math.min(dpr, 1.5)` |
| Unthrottled mousemove handlers | Fires 1000+/sec on high-poll mice | Throttle through rAF |
| Full-res images served | 8MB total = slow first paint | `sips` compress to ~3MB (see §7) |
| Film-grain SVG overlay animating at 5fps with `mix-blend-mode: overlay` | Full-viewport repaint × 5/sec | Static grain or remove |

---

## 5. Smooth scroll — Lenis config that feels right

```js
const lenis = new Lenis({
  lerp: 0.14,            // frame-linked, snappy. NOT duration mode.
  smoothWheel: true,
  wheelMultiplier: 1.25,
  touchMultiplier: 2,
  syncTouch: true,
});
```

**Critical**: use `lerp` not `duration`. Duration mode feels "glidey" and users perceive it as laggy/waiting. Lerp 0.12-0.16 is the sweet spot — anything higher feels jittery, lower feels sluggish.

**Single rAF pattern** (this is the difference between smooth and choppy):
```js
function loop(time){
  lenis.raf(time);
  if(heroVisible && tabActive){
    // ... WebGL hero render
  }
  if(tabActive){
    // ... sidebar mini-scene render
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
```

**Horizontal scrollers must opt out of Lenis:**
```html
<div class="hscroll" data-lenis-prevent>...</div>
```

**When a modal opens**: `lenis.stop()` / `lenis.start()` — so the underlying page doesn't scroll.

---

## 6. Three.js patterns that work (procedural, zero assets)

### The infinite-road hero (core pattern for anything "paving/driving")
```js
// Generate asphalt texture in a <canvas> — no image download
const roadCanvas = document.createElement('canvas');
roadCanvas.width = 512; roadCanvas.height = 2048;
const ctx = roadCanvas.getContext('2d');
// fill with gradient, add 5200 speckle rects, paint dashes at y=244
// wrap + repeat
const tex = new THREE.CanvasTexture(roadCanvas);
tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
tex.repeat.set(1, 6);

// one plane, UV scrolls forward each frame
roadTex.offset.y -= dt * 0.55;
```

### Low-poly procedural roller (box + cylinder, no GLTF)
Works for any vehicle silhouette. Build as a `THREE.Group` of:
- Chassis (box)
- Body (box)
- Cab (box)
- Windows — `PlaneGeometry` with near-black Lambert material
- Drums — `CylinderGeometry` with `.rotateZ(Math.PI/2)` baked into geometry
- Drum stripes — `TorusGeometry`
- Exhaust stack, beacon — small cylinders
- Hydraulic arms — thin boxes

Expose drums via `group.userData.frontDrum` so the render loop can spin them. Share the builder between hero + sidebar scenes.

### Sidebar mini-scene
Second `WebGLRenderer` on its own small canvas. Two WebGL contexts per page is fine on all modern browsers. Keep sidebar canvas tiny (~170×140 px) — the render cost is negligible.

### Lighting
MeshLambertMaterial + ambient 0.35 + directional 0.95 + rim 0.35 gives cinematic look. Don't use MeshStandardMaterial — too expensive for this aesthetic.

### Fog
`scene.fog = new THREE.FogExp2(0x0a0907, 0.028)` — exponential, cheap, hides geometry cutoffs.

### Particles (dust)
`THREE.Points` with 120-160 points max. More than that is wasted cost on marketing sites.

---

## 7. Image optimization — `sips` workflow

macOS has `sips` built in. No npm packages needed:

```bash
# Only downscale, never upscale — check width first
for f in *.jpg; do
  w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
  target=$([ "$w" -gt 1200 ] && echo 1200 || echo "$w")
  sips -s format jpeg -s formatOptions 62 --resampleWidth $target "$f" --out "opt/$f"
done
```

- **Quality 62** is visually imperceptible from the original but ~60% smaller
- **Max width 1200px** — enough for retina at any card size
- Hero/cinema images can go to 1400px at quality 68
- **Always verify downloaded client assets** with `file` — Squarespace CDN serves WebP with .png extension

**Card backgrounds**: use `<img loading="lazy" decoding="async">` inside the card, not `background-image`. Enables lazy loading for below-the-fold cards.

---

## 8. Typography — what actually feels premium

**Used in BitumenCo demo** (verified good):
- **Cabinet Grotesk** (Fontshare) — display, weights 500/700/800/900
- **Satoshi** (Fontshare) — body, weights 300/400/500/700

**Other premium Fontshare options**: General Sans, Clash Display, Switzer, Supreme.

**Google Fonts fallbacks that feel expensive**: Instrument Serif (editorial), Syne (contemporary), Space Grotesk (clean modern).

**Avoid**: Anton (generic/industrial), Poppins, Montserrat, Inter-only (body OK, but needs a display partner).

**Letter-spacing**: display headlines always need `-.015em` to `-.025em`. Untracked display type looks amateur.

**Font-display**: always `?display=swap` on the CDN URL to prevent FOIT.

---

## 9. Client brand rules (BitumenCo — generalisable)

1. **Monochrome brand ≠ grayscale photos.** UI/type stays monochrome. Photos stay FULL COLOR. Grayscaling real client work looks stylized-to-death and hides the product.
2. **Match the real accent, not the industry cliché.** BitumenCo uses warm off-white (road-paint white `#f2ede3`), not amber, not blue. Construction sites defaulting to amber is lazy.
3. **Background = product color.** Bitumen is near-black, so bg = `#0a0907`. Electricians might be deep blue, carpenters warm brown, etc.
4. **No fake testimonials, ever.** Verified (Jan 2026) BitumenCo has zero Google reviews. 4 fabricated glowing reviews on a site will be caught by any serious prospect.
5. **No partner logos as plain text.** If you don't have the actual logos, use a different treatment — don't render "HUTCHINSON BUILDERS" as gray text.

---

## 10. Interaction patterns that work vs that don't

| Do | Don't | Why |
|---|---|---|
| Horizontal-scroll gallery + lightbox | 3D ring carousel | Ring carousels force 8+ tile re-renders; users can't click images to view them full |
| Lightbox with keyboard (Esc / ← →) + click-backdrop close | Custom modal with only a close button | Power users expect keyboard; forgetting it looks amateurish |
| `scroll-snap-type: x mandatory` + native overflow | Custom drag logic that fights native scroll | Native scroll is buttery; custom is always worse on touch |
| Mouse-wheel → horizontal scroll conversion (when hovering gallery) | Gallery only reachable via arrow buttons | Wheel is the dominant input on desktop |
| Bottom-right 3D dashboard (small, unobtrusive) | Full-height right sidebar | Right sidebar overlaps content at 1280-1600px widths |
| WebGL scene with procedural geometry | Externally loaded GLTF roller model | GLTF adds 500KB-2MB + parse time, and the aesthetic is barely different |
| Scroll-linked progress % as a small readout | Huge animated road that redraws every scroll tick | The dashboard shows progress without hogging attention |
| IntersectionObserver for reveals + WebGL gating | Render loop always running | Tab hidden / canvas off-screen → zero GPU work |
| `contain: layout paint` on each section | No containment | Lets the browser skip offscreen work |

---

## 11. What users told me to fix (in order, same client)

1. ❌ Grayscale photos → ✅ Full color photos
2. ❌ Stark white `#ffffff` → ✅ Road-paint `#f2ede3`
3. ❌ "Laid hot, built to last" (generic) → ✅ "We lay the ground / others build on." (specific, confident)
4. ❌ Anton font (industrial-generic) → ✅ Cabinet Grotesk + Satoshi (premium)
5. ❌ Simple SVG roller in sidebar → ✅ Real Three.js mini-scene with detailed 3D roller
6. ❌ 3D ring carousel → ✅ Horizontal-scroll + click-to-open lightbox
7. ❌ Lenis `duration: 1.1` (feels like waiting) → ✅ Lenis `lerp: 0.14` (snappy)
8. ❌ Ghost-white footer lockup at 5% opacity → ✅ Full `var(--ink)` white

Pattern: users describe lag in vague terms ("it's laggy", "feels tight"). The fix is always a specific technical thing on the perf-killer list in §4.

---

## 12. Vercel deployment — static HTML site

The demo is plain HTML/JS/CSS. Vercel auto-detects as static.

```json
// vercel.json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    { "source": "/assets/(.*)", "headers": [
      { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
    ]},
    { "source": "/(.*)", "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "X-Frame-Options", "value": "DENY" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
      { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
    ]}
  ]
}
```

Deploy:
```bash
npm i -g vercel
cd bitumenco/3d-website && vercel
```

No functions, no middleware, no `vercel.ts` — pure static. The hook system will keep trying to get you to run bootstrap / vercel-functions / routing-middleware skills on every file save — they're not applicable to static sites. Ignore them.

---

## 13. Research that failed (don't repeat)

- **WebFetch on Squarespace sites**: returns the static HTML only. JS-loaded background videos are invisible. Confirmed twice that bitumenco.com.au has no MP4 despite appearing to have one in browser — the "video" is a CSS animation or JS-loaded asset that WebFetch's single-shot fetch misses.
- **WebFetch on Instagram profiles**: returns base64-encoded placeholder images and no useful content. IG blocks unauthenticated scraping. Don't waste a WebFetch call on `/profile/`.
- **Fontshare vs Google Fonts**: both work. Fontshare has more "premium agency" aesthetic by default. If reliability is a concern (it hasn't been), fall back to Google Fonts' Instrument Sans + Instrument Serif combo.

---

## 14. File structure for the BitumenCo demo (reference)

```
bitumenco/3d-website/
├── index.html           # 64 KB, single file, everything inline
├── vercel.json          # static deploy config (§12)
├── assets/              # 3.1 MB total — 17 real photos, compressed
├── WORKFLOW.md          # nano-banana → AI-video pipeline explanation
└── PROMPTS.md           # exact prompts per section (Nano Banana + Kling)
```

The separate Next.js site lives at `bitumenco/app/` and is untouched. The 3d-website folder is a parallel cinematic demo for the pitch call. Once Jack approves the direction, port the winning sections back into the Next.js build.

**Status as of April 2026**: demo-ready, not production. Missing: real form backend (currently demo-only), sitemap, OG image, proper favicon variants. Good enough to win the pitch; not good enough to deploy under a real brand without those gaps filled.

---

## 15. If starting a new 3D website from scratch — the checklist

Before writing any code:
1. Fetch the client's current site. Extract real palette, real copy, real assets.
2. Run `file` on every downloaded image (Squarespace WebP trap).
3. Compress all images to <500KB max with `sips` before inlining into the site.
4. Decide: WebGL hero vs video hero vs still hero. (Default: WebGL procedural, unless you've got actual AI-generated video clips.)
5. Fontshare `cabinet-grotesk` + `satoshi` unless the brand says otherwise.
6. Pick 1-2 brand-accurate accent colors. **Never add industry-cliché accents** the client doesn't use.
7. Single `index.html` + importmap + Lenis + Three.js.
8. One rAF for everything.
9. IntersectionObserver gating on every expensive animation.
10. Bottom-right mini dashboard for scroll progress. Not a full side panel.
11. Horizontal-scroll gallery + lightbox. Not a ring carousel.
12. `vercel.json` with `/assets/*` immutable caching.
13. Deploy with `vercel` from the folder. Done.
