# Nano Banana + AI Video prompts for BitumenCo

These are copy-paste-ready prompts that match the BitumenCo brand (monochrome,
heavy machinery, SE QLD, honest / not staged). Each section: (1) the Nano Banana
still image prompt, (2) the image-to-video prompt for Kling / Veo / Seedance.

**Brand rules baked into every prompt:**
- Monochrome black/white/gray — *no amber, no blue, no color grade*
- Real-industry feel — hi-vis vests OK (authentic), no glossy CGI
- SE QLD setting — suburban QLD, eucalyptus, single-story homes, Queenslander roofs
- No fake luxury cars / no movie-trailer lens flares

---

## 1. HERO — Paver + roller, slow dolly forward

Priority 1. Replace `.l-front` in `index.html`.

### Nano Banana — still image prompt
```
A wide cinematic photograph of an asphalt paving crew at dawn in suburban South East
Queensland. A yellow asphalt paver is laying fresh black hot-mix bitumen across a
residential driveway. A steam-drum roller follows behind, compacting the surface.
Two workers in hi-vis vests and hard hats stand to one side holding lutes and rakes.
Shallow depth of field, 35mm, low golden-hour light but graded fully monochrome
black and white, heavy grain, film stock look, matte blacks, steam rising from the
hot asphalt, a Queenslander home softly out of focus in the background with tin roof
and eucalyptus trees. Realistic, documentary style, no logos, no text.
Aspect ratio 16:9.
```

### Kling / Veo 3 — image-to-video prompt
```
Camera performs a slow cinematic dolly-forward push at walking pace, 8 seconds.
The paver continues laying fresh asphalt. Steam rises naturally from the hot mix.
The roller in the background compacts the surface with a subtle vibration. One
worker on the right raises his lute to smooth an edge. Wind lightly moves a
eucalyptus branch. Subtle heat shimmer above the fresh asphalt. Lock to monochrome.
No color shift. No camera shake. No people turning to camera.
```

Output: trim to 6 sec, loop-reverse to 12 sec seamless.
Save as: `clips/hero-paver.mp4` (1920×1080, H.264, <2 MB).

---

## 2. SERVICES CARD 01 — Residential driveway being laid

### Nano Banana
```
Overhead three-quarter view of a freshly laid black asphalt residential driveway
at a suburban South East Queensland home. A Queenslander-style house in soft focus
in the background. Clean edge where the asphalt meets a concrete kerb. A single
hi-vis-vested worker kneeling at the edge with a lute. Monochrome black and white,
heavy film grain, 35mm look. No cars, no logos, no text. Aspect 4:5.
```

### Kling
```
Slow orbit-left 180 degrees around the kneeling worker, 5 seconds. The worker
continues smoothing the asphalt edge. Gentle heat shimmer from the fresh asphalt.
Monochrome. No shake. Seamless loop.
```

Save: `clips/svc-driveway.mp4`

---

## 3. SERVICES CARD 02 — Commercial car park

### Nano Banana
```
Wide aerial drone photograph of a large commercial asphalt car park in Pinkenba
industrial estate, South East Queensland. Freshly laid hot-mix visible, some bays
already line-marked with white paint, an asphalt paver in one corner. Trucks and
shipping containers in the background. Monochrome black and white, documentary
photography style, film grain, 35mm. No logos, no text. Aspect 4:5.
```

### Kling / Veo
```
Camera performs a slow aerial dolly-forward over the car park, 6 seconds. Subtle
steam rises from the freshly laid section. A truck drives slowly across the
background. A worker walks with a line-marking trolley in the foreground.
Monochrome. No shake.
```

Save: `clips/svc-commercial.mp4`

---

## 4. SERVICES CARD 03 — Pothole repair

### Nano Banana
```
Close-up ground-level photograph of a worker in hi-vis and hard hat filling a
pothole with hot black asphalt on a suburban residential street. Steam rising.
Rake and shovel visible. Asphalt truck wheel in the background. Monochrome
black and white, heavy grain, documentary style, shallow depth of field. Aspect 4:5.
```

### Kling
```
Static lock-off camera, 5 seconds. Worker continues raking the asphalt into the
pothole. Steam rises. Background asphalt truck is stationary with subtle engine
vibration. Monochrome.
```

Save: `clips/svc-pothole.mp4`

---

## 5. SERVICES CARD 04 — Line marking

### Nano Banana
```
Top-down photograph of a fresh white arrow being painted on new black asphalt in a
car park. A line-marking trolley is mid-action, wet paint visible. Worker's boots
and legs in hi-vis pants just visible at edge of frame. Monochrome black and white,
heavy film grain. Aspect 4:5.
```

### Kling
```
Camera performs a slow push-in from above, 5 seconds. The trolley pulls forward
revealing a clean white arrow. Drops of wet paint glisten. Monochrome. No shake.
```

Save: `clips/svc-linemarking.mp4`

---

## 6. SERVICES CARD 05 — Civil / excavator

### Nano Banana
```
Wide photograph of a yellow excavator digging a stormwater trench on a civil
construction site in South East Queensland. Red earth, gum trees in background,
a small crew of hi-vis workers observing. Monochrome black and white, film grain,
documentary style. Aspect 4:5.
```

### Kling
```
Static lock-off, 6 seconds. Excavator arm swings smoothly from trench to dump a
bucket of earth into a tip truck just off-frame. Dust rises. Monochrome.
```

Save: `clips/svc-civil.mp4`

---

## 7. SERVICES CARD 06 — Concrete driveway

### Nano Banana
```
Wide photograph of a freshly poured exposed-aggregate concrete driveway at a
suburban Queensland home, still wet. A worker in hi-vis smoothing with a bull
float. Eucalyptus trees and weatherboard house in soft background. Monochrome
black and white, film grain, 35mm. Aspect 4:5.
```

### Kling
```
Slow dolly-right 5 seconds along the edge of the wet concrete. Worker continues
floating the surface. Monochrome.
```

Save: `clips/svc-concrete.mp4`

---

## 8. CINEMA SPLIT — "Laid it. Rolled it. Done." reel

This is the full-bleed two-panel section. Two 6-sec clips side by side.

### Left panel — Kling prompt (from existing `samford-after.jpg`)
```
Slow cinematic push-in toward a freshly resurfaced residential driveway, 6 seconds.
Subtle heat shimmer from the asphalt surface. A magpie flies across the top of
frame mid-clip. Monochrome. Eucalyptus leaves move gently in a light breeze.
No shake.
```

### Right panel — Kling prompt (from existing `pinkenba-2.jpg`)
```
Slow aerial crane-up over a commercial asphalt yard, 6 seconds. A truck crosses
the background. The perimeter line markings are sharp and fresh. Monochrome.
Cinematic. No shake.
```

Save: `clips/cinema-left.mp4`, `clips/cinema-right.mp4`.

---

## 9. GALLERY CAROUSEL — optional 3-sec ping-pong micro-clips

Only upgrade these if the budget allows — the static photos already work fine.
Each tile gets a 3-second slow zoom or pan (Seedance is cheapest for these).

Seedance preset: `motion: subtle, duration: 3, camera: slow-push, grade: mono`

---

## Budget estimate

| Tool | Per clip | Qty | Total |
|---|---:|---:|---:|
| Nano Banana (Gemini 2.5 Flash Image) stills | ~$0.04 | 10 | $0.40 |
| Kling 2.5 Pro image-to-video | ~$0.60 | 8 | $4.80 |
| Seedance 2.0 (optional carousel) | ~$0.15 | 8 | $1.20 |
| **Total to fully animate the site** | | | **~$6.40** |

Plus ~30 minutes of iteration time per clip (most clips come out clean on
attempt 2 if the still is good).

---

## Negative prompt (append to every image-to-video call)

```
no color grading, no color shift, no saturation, no film flicker, no glitch,
no text overlay, no logos, no modern luxury cars, no water puddles, no warp,
no face distortion, no shaky cam, no CGI look, no plastic skin
```
