# BitumenCo "3D" Website — How it works

This is a single-file demo (`index.html`) that gets the *cinematic / 3D* feel without
shipping a Three.js bundle, WebGL scene, or 200 MB of assets. It's deliberately built
so you can later **swap any photo for an AI-generated motion clip** and the layout
will keep working.

---

## The "fake 3D" trick everyone is shipping right now

The trend on X / TikTok of "3D websites" using **Nano Banana** (Google's
Gemini 2.5 Flash Image) is *not* real 3D. It's a 4-step pipeline:

1. **Generate a still image** with Nano Banana
   - Why Nano Banana: cheap, *consistent* across edits, follows brand-style references.
   - Output: a single high-quality JPG/PNG, usually 1920×1080 or 1080×1920.

2. **Animate that still into a 3-8 sec video** using an image-to-video model
   - **Kling 2.5 / Kling Pro** — best for cinematic camera moves (dolly, orbit, push-in).
   - **Veo 3 (Google)** — best photoreal + native audio.
   - **Runway Gen-4** — best for character/product consistency.
   - **Seedance 2.0** — fastest, cheap, good for B-roll.
   - You give it the still + a camera-move prompt. It outputs an MP4.

3. **Loop / mask it** so it can sit as a background
   - Trim to 4–8 sec.
   - Sometimes loop-reverse (ping-pong) so there's no jump cut.
   - Optional: mask out subject / sky in CapCut so other UI sits cleanly on top.

4. **Embed in the page** as an autoplay-muted-loop `<video>` or as a parallax layer
   - Add CSS `transform: translateZ()` to a few stacked layers → real depth.
   - Add `mousemove` parallax + `scroll` parallax → looks 3D.
   - Add a film-grain SVG overlay → looks cinematic.
   - Add Ken Burns CSS keyframes on stills as a fallback while a clip is being made.

That's it. No Three.js. No WebGL. Works on every phone.

---

## What this demo already does

The `index.html` ships with all the "3D" tricks already wired up so you can swap in
real video later without restructuring:

| Effect | Where | What it's faking |
|---|---|---|
| Layered hero with `translateZ()` per layer | `.hero .layer` | A 3D camera dolly |
| Mouse-move parallax on hero layers | `script.js — raf()` | Head-tracking depth |
| Scroll-linked parallax on hero | `script.js — onScroll()` | Camera push |
| Ken Burns slow zoom on hero photos | `@keyframes kenburns` | An AI video pan |
| Animated road dashes (perspective) | `.hero .markings` | A drone fly-over |
| Heat shimmer over horizon | `.hero .shimmer` | Real heat distortion |
| Mouse-tilt 3D service cards | `.tilt` JS | A held-up object reveal |
| 3D ring carousel for gallery | `#ring` | A rotating product showcase |
| Grayscale + film grain overlay | `body::after` | Cinematic colour grade |
| In-view fade/slide reveals | `.reveal` | Editorial magazine pacing |

**All the photo `background-image` URLs and `<img src>` attributes are designed to
be one-line swaps.** When you have an MP4 from Kling/Veo, you replace the `.bg`
div with a `<video autoplay muted loop playsinline>`.

---

## How to upgrade a section to a real video clip

Pick any `.bg` element in `index.html`. Right now it's:

```html
<div class="bg" style="background-image:url('assets/residential-driveway.jpg')"></div>
```

After you've generated `clips/residential-driveway.mp4` from Kling, swap to:

```html
<video class="bg" autoplay muted loop playsinline preload="metadata"
       poster="assets/residential-driveway.jpg">
  <source src="clips/residential-driveway.mp4" type="video/mp4">
</video>
```

Then add this to the `<style>` block:

```css
video.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
         filter:grayscale(1) contrast(1.1) brightness(.55);transition:filter .6s}
.card:hover video.bg{filter:grayscale(1) contrast(1.15) brightness(.75)}
```

That's the whole upgrade — same parallax, same tilt, same hover, but now the card
has subtle motion. **6 cards × 5-sec clip × ~1.5 MB each ≈ 9 MB total** — totally
fine for a marketing site.

---

## The hero is the highest-impact place to spend your AI-video budget

If you only generate one clip, make it the hero. The current hero stacks three
parallaxed photo layers. Replace the `.l-front` layer (workers in foreground) with
an 8-second clip of a paver laying hot-mix and a roller compacting behind it,
camera doing a slow dolly forward — see `PROMPTS.md` for the exact Kling prompt.

You'll keep the existing dashes/shimmer/copy on top.

---

## File structure

```
3d-website/
├── index.html         single-file site, no build step
├── assets/            real BitumenCo photos (already in place)
├── clips/             ← create this folder when you have AI videos
├── WORKFLOW.md        this file
└── PROMPTS.md         the exact prompts to feed Nano Banana / Kling / Veo
```

---

## How to preview

```bash
cd /Users/shubhamborad/Website/bitumenco/3d-website
python3 -m http.server 5500
# open http://localhost:5500
```

No npm install. No Next.js. The existing Next.js site in `bitumenco/app/` is
untouched — this is a parallel cinematic demo you can show Jack on the call.

---

## What this is NOT

- Not real 3D — no Three.js / WebGL geometry
- Not a video-editing pipeline — clips are pre-rendered and embedded
- Not a Next.js component — it's a single HTML file you can host anywhere
- Not a production deploy — needs a real form handler, sitemap, OG image, etc.

It is a **demo to close the deal on the call**, then you port the winning sections
back into the Next.js project once Jack approves the direction.
