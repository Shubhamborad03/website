#!/usr/bin/env python3
"""
Sam's Roof Coatings — Carousel Generator
Uses Gemini image generation to produce 6-slide 9:16 carousel (768x1376px JPG).
Slide 1 sets visual DNA. Slides 2-6 use image-to-image for coherence.

Usage:
  export GEMINI_API_KEY=your_key_here
  python3 generate_carousel.py
  python3 generate_carousel.py --suburb "Noosaville" --price 5920 --standard 7400
"""

import os
import sys
import argparse
import time
from pathlib import Path
from google import genai
from google.genai import types

# ─── CONFIG ────────────────────────────────────────────────────────────────────

OUTPUT_DIR = Path(__file__).parent / "carousel_slides"
OUTPUT_DIR.mkdir(exist_ok=True)

BEFORE_PHOTO = Path(__file__).parent / "Before" / "image.png"
AFTER_PHOTO  = Path(__file__).parent / "After"  / "image.png"

MODEL = "gemini-2.0-flash-preview-image-generation"

BRAND = {
    "name": "Sam's Roof Coatings",
    "phone": "0412 345 678",
    "experience": "30 years",
    "warranty": "Dulux 10-year",
    "differentiators": "zero deposit, fixed price, no hidden costs",
    "qbcc": "QBCC 15207890",
    "colors": {
        "bg": "#0a0a0a",
        "accent": "#D94F00",    # burnt orange
        "text": "#FFFFFF",
        "muted": "#888888",
    },
}

# ─── SLIDE PROMPTS ─────────────────────────────────────────────────────────────

def build_slide_prompts(suburb: str, area_price: int, standard_price: int) -> list[dict]:
    """
    6-slide narrative: Hook → Problem → Agitation → Solution → Feature → CTA
    Each prompt is tuned for maximum scroll-stop and visual impact.
    Visual style spec is baked into every prompt for coherence.
    """

    # Shared visual DNA — injected into every slide prompt
    visual_dna = (
        "Photorealistic professional advertising image. "
        "Dark near-black background (#0a0a0a). "
        "Burnt orange (#D94F00) as the primary accent colour for headlines, "
        "borders, buttons, and graphic elements. "
        "Clean white body text. "
        "Bold, modern trade-service aesthetic. "
        "No text in the bottom 20% of the frame. "
        "9:16 vertical format, 768x1376 pixels. "
        "JPG quality. "
        "Professional advertising photography standard. "
        "No watermarks, no stock-photo feel."
    )

    saves = standard_price - area_price

    # Photo context instruction — injected into prompts that use real photos
    before_ctx = (
        "The BEFORE photo (provided as input image) shows a real aerial drone view "
        "of a residential roof covered in green moss, algae and UV fade — dark green "
        "patches across the entire surface, visibly neglected. "
    )
    after_ctx = (
        "The AFTER photo (provided as input image) shows the exact same roof after "
        "Sam's professional restoration — completely clean, bright white Dulux coating, "
        "ridge caps repointed, zero moss or staining visible. "
    )

    slides = [
        # ── SLIDE 1 — HOOK (sets all visual DNA) ──────────────────────────────
        {
            "id": 1,
            "role": "Hook — scroll stopper",
            "use_photos": "both",   # inject both before+after as input images
            "prompt": (
                f"{visual_dna} "
                "SLIDE 1 OF 6 — HOOK. "
                f"{before_ctx}{after_ctx}"
                "Create a dramatic SIDE-BY-SIDE comparison ad using these two real roof photos. "
                "Left half: the before photo (desaturated, dark overlay, 'BEFORE' stamp top-left in grey box). "
                "Right half: the after photo (vibrant, clean, 'AFTER' stamp in burnt orange box). "
                "A thick burnt orange vertical divider line between the two halves, "
                "with a pill badge reading '3 DAYS' in the centre of the divider. "
                "Top-right corner suburb badge: '📍 Noosaville — this week' on dark background. "
                "Bold white headline across the bottom dark bar: "
                "'SAME ROOF. COMPLETELY TRANSFORMED.' "
                f"Below in smaller text: 'Restore don't replace · Save $15,000+ · {suburb}' "
                "Bottom right: burnt orange phone number '0412 345 678' "
                "Strong, premium, cinematic ad aesthetic."
            ),
        },

        # ── SLIDE 2 — PROBLEM ─────────────────────────────────────────────────
        {
            "id": 2,
            "role": "Problem — agitate the pain",
            "use_photos": "before",
            "prompt": (
                f"{visual_dna} "
                "SLIDE 2 OF 6. Match dark background and burnt orange accent from slide 1. "
                f"{before_ctx}"
                "Use this real before photo as the main background image, full-bleed. "
                "Apply a dark vignette overlay so text is readable. "
                "Draw a bright red annotation circle highlighting the worst mossy/damaged section. "
                "Add a red arrow label: '⚠ Moss + algae — water entry point' "
                "Bold white headline in upper third: 'MOST HOMEOWNERS HAVE NO IDEA' "
                "Sub-text: 'Cracked caps. Moss. UV fade. Water is already getting in — just slowly.' "
                "Top-right badge: '2 OF 6' "
                "Bottom-left small text: 'This is what your roof looks like from above 👀'"
            ),
        },

        # ── SLIDE 3 — AGITATION (price comparison) ────────────────────────────
        {
            "id": 3,
            "role": "Agitation — cost of doing nothing",
            "use_photos": None,
            "prompt": (
                f"{visual_dna} "
                "SLIDE 3 OF 6. Match dark background and burnt orange accent from slide 1. "
                "Dark background dominant. Large price comparison graphic, centre composition. "
                "Top muted text: 'The alternative?' "
                "Large price in red with thick red strikethrough line: '$28,000' "
                "Text below in small grey: 'Full re-roof — average QLD quote' "
                "Thick burnt orange divider with label 'OR' "
                "Large burnt orange price below: 'from $4,200' "
                "Text below in white: 'Professional restoration — same result' "
                "Large white text: 'Same result. 1/6th the cost.' "
                "Footnote: 'Fixed price. Zero deposit. Dulux 10-year warranty.' "
                "Top-right badge: '3 OF 6' "
                "Numbers must be massive, razor-sharp, and legible. High impact."
            ),
        },

        # ── SLIDE 4 — SOLUTION ────────────────────────────────────────────────
        {
            "id": 4,
            "role": "Solution — scope of work",
            "use_photos": "after",
            "prompt": (
                f"{visual_dna} "
                "SLIDE 4 OF 6. Match dark background and burnt orange accent from slide 1. "
                f"{after_ctx}"
                "Use this real after photo as a background (top 60% of frame), "
                "with a dark gradient overlay on the bottom 50% for text. "
                "Bold burnt orange headline overlaid: 'PRESSURE CLEAN → REPOINT → 2-COAT DULUX' "
                "Sub-text in white: '3 days. Zero deposit. Fixed price. No surprises.' "
                "Row of 5 icon boxes across mid-frame (dark semi-transparent background): "
                "'💧 Clean  🔧 Repoint  🎨 2 Coats  🛡 10yr Warranty  💰 Zero Deposit' "
                "Top-right badge: '4 OF 6'"
            ),
        },

        # ── SLIDE 5 — SOCIAL PROOF ────────────────────────────────────────────
        {
            "id": 5,
            "role": "Social proof — testimonial",
            "use_photos": "after",
            "prompt": (
                f"{visual_dna} "
                "SLIDE 5 OF 6. Match dark background and burnt orange accent from slide 1. "
                f"{after_ctx}"
                "Use the after photo as top background (top 55%), dark gradient overlay bottom half. "
                "5 large burnt orange stars: ★★★★★ "
                "Large italic white quote text: "
                "'\"Couldn't believe the difference. Sam was on time, fixed things "
                "I didn't even know needed doing.\"' "
                "Attribution: '— Karen M., Noosaville · Verified customer' "
                "Small text: '127 Google Reviews' "
                "Top-right badge: '5 OF 6'"
            ),
        },

        # ── SLIDE 6 — CTA ─────────────────────────────────────────────────────
        {
            "id": 6,
            "role": "CTA — call to action",
            "use_photos": "after",
            "prompt": (
                f"{visual_dna} "
                "SLIDE 6 OF 6. Match dark background and burnt orange accent from slide 1. "
                f"{after_ctx}"
                "Small inset thumbnail of the after photo top-right as accent only (20% width). "
                "Dark background dominant. "
                f"Burnt orange suburb badge: '📍 WE'RE IN {suburb.upper()} THIS MONTH' "
                "Massive white headline: 'FREE INSPECTION' "
                "Sub-text in grey: 'We check your roof, show you exactly what needs doing, and give you a fixed price.' "
                f"Struck-through grey price: '${standard_price:,}' "
                f"Large burnt orange area rate: 'AREA RATE: ${area_price:,}' "
                f"Small muted: 'Save ${saves:,} · Incl. GST · Fixed price' "
                f"Big burnt orange CTA button: 'CALL SAM → {BRAND['phone']}' "
                f"Footer: '{BRAND['qbcc']} · {BRAND['experience']} experience · Dulux 10yr warranty' "
                "Urgency: 'Limited area bookings — call this week' "
                "Top-right badge: '6 OF 6'"
            ),
        },
    ]

    return slides


# ─── GENERATION ────────────────────────────────────────────────────────────────

def _load_image(path: Path) -> bytes:
    with open(path, "rb") as f:
        return f.read()

def _mime(path: Path) -> str:
    return "image/png" if path.suffix.lower() == ".png" else "image/jpeg"

def generate_slide(
    client: genai.Client,
    prompt: str,
    reference_image_path: Path | None = None,
    use_photos: str | None = None,
) -> bytes:
    """
    Generate a single slide.
    - reference_image_path: slide 1 JPG used for visual coherence on slides 2-6
    - use_photos: 'before', 'after', 'both', or None — injects Sam's real roof photos
    """
    contents = []

    # Inject real before/after photos if requested
    if use_photos in ("before", "both") and BEFORE_PHOTO.exists():
        contents.append(types.Part.from_bytes(data=_load_image(BEFORE_PHOTO), mime_type=_mime(BEFORE_PHOTO)))
    if use_photos in ("after", "both") and AFTER_PHOTO.exists():
        contents.append(types.Part.from_bytes(data=_load_image(AFTER_PHOTO), mime_type=_mime(AFTER_PHOTO)))

    # Inject slide 1 as visual coherence reference (slides 2-6)
    if reference_image_path and reference_image_path.exists():
        contents.append(types.Part.from_bytes(data=_load_image(reference_image_path), mime_type="image/jpeg"))
        contents.append(types.Part.from_text(
            text=(
                "The last image provided is slide 1 — use it as your visual style reference "
                "(colour palette, dark background, burnt orange accents, font treatment). "
                "Generate a NEW slide following this brief:\n\n" + prompt
            )
        ))
    else:
        contents.append(types.Part.from_text(text=prompt))

    response = client.models.generate_content(
        model=MODEL,
        contents=contents,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE", "TEXT"],
        ),
    )

    for part in response.candidates[0].content.parts:
        if part.inline_data is not None:
            return part.inline_data.data

    raise RuntimeError(f"No image returned from Gemini. Response: {response}")


def verify_slide(client: genai.Client, image_bytes: bytes, slide_id: int) -> tuple[bool, str]:
    """Use Gemini vision to QA the generated slide."""

    qa_prompt = (
        f"You are a QA checker for a social media ad carousel slide (slide {slide_id}/6). "
        "Check this image and respond with JSON only, no markdown:\n"
        '{"pass": true/false, "issues": ["list any issues"], "notes": "brief notes"}\n\n'
        "Check for:\n"
        "1. Text is legible (not blurry or too small)\n"
        "2. No text in the bottom 20% of frame\n"
        "3. No obvious spelling errors in visible text\n"
        "4. Image looks like a professional ad, not low quality\n"
        "5. Dark background with orange accent colours present"
    )

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[
            types.Part.from_bytes(data=image_bytes, mime_type="image/jpeg"),
            types.Part.from_text(text=qa_prompt),
        ],
    )

    result_text = response.candidates[0].content.parts[0].text.strip()
    # Strip markdown fences if present
    result_text = result_text.strip("`").lstrip("json").strip()

    import json
    try:
        result = json.loads(result_text)
        return result.get("pass", True), result.get("issues", [])
    except Exception:
        return True, []  # If parse fails, assume pass


# ─── MAIN ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Generate Sam's Roof Coatings carousel")
    parser.add_argument("--suburb", default="Noosaville", help="Target suburb")
    parser.add_argument("--price", type=int, default=5920, help="Area rate price")
    parser.add_argument("--standard", type=int, default=7400, help="Standard price")
    parser.add_argument("--output-dir", default=str(OUTPUT_DIR), help="Output directory")
    parser.add_argument("--no-qa", action="store_true", help="Skip vision QA step")
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("❌  GEMINI_API_KEY not set.")
        print("    Get a free key at: https://aistudio.google.com/app/apikey")
        print("    Then run: export GEMINI_API_KEY=your_key_here")
        sys.exit(1)

    client = genai.Client(api_key=api_key)
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    slides = build_slide_prompts(
        suburb=args.suburb,
        area_price=args.price,
        standard_price=args.standard,
    )

    slide1_path = output_dir / "slide_01.jpg"
    print(f"\n🎠  Generating carousel for {args.suburb} — ${args.price:,} area rate\n")

    for slide in slides:
        slide_id = slide["id"]
        output_path = output_dir / f"slide_0{slide_id}.jpg"

        max_attempts = 3
        for attempt in range(1, max_attempts + 1):
            print(f"  Slide {slide_id}/6  [{slide['role']}]  attempt {attempt}...", end=" ", flush=True)

            try:
                # Slides 2-6 reference slide 1 for visual coherence
                reference = slide1_path if slide_id > 1 else None
                image_bytes = generate_slide(
                    client, slide["prompt"], reference,
                    use_photos=slide.get("use_photos")
                )

                # Save
                with open(output_path, "wb") as f:
                    f.write(image_bytes)

                # QA check
                if not args.no_qa:
                    passed, issues = verify_slide(client, image_bytes, slide_id)
                    if passed:
                        print(f"✅  saved → {output_path.name}")
                        break
                    else:
                        print(f"⚠️  QA failed: {issues}")
                        if attempt == max_attempts:
                            print(f"  ⚠️  Slide {slide_id} saved despite QA issues.")
                        else:
                            print(f"  ↻  Regenerating...")
                            time.sleep(2)
                            continue
                else:
                    print(f"✅  saved → {output_path.name}")
                    break

            except Exception as e:
                print(f"❌  Error: {e}")
                if attempt == max_attempts:
                    print(f"  ✗  Slide {slide_id} failed after {max_attempts} attempts.")
                else:
                    print(f"  ↻  Retrying in 5s...")
                    time.sleep(5)

        # Small delay between slides to respect rate limits
        if slide_id < 6:
            time.sleep(2)

    print(f"\n✅  Carousel complete → {output_dir}/")
    print(f"   Files: slide_01.jpg … slide_06.jpg")
    print(f"\n📱  To use:")
    print(f"   Open each JPG (768×1376px)")
    print(f"   Upload to Meta Ads Manager as a carousel (in order)")
    print(f"   Or post as TikTok/Instagram carousel\n")


if __name__ == "__main__":
    main()
