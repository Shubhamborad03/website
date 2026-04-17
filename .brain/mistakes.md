# Mistakes — What Not To Do Again

Every mistake made across all client builds. Categorised by type. Updated after every project.

---

## Branding & Design

### 1. Imposing accent colours the brand doesn't use
**Project:** BitumenCo
**What happened:** Added amber (#F59E0B) as accent colour to a brand that is pure monochrome (black/white/gray). Made it look like a generic construction template.
**Why it's wrong:** The client's brand identity had zero warm colours. Adding amber was a lazy "construction industry" default.
**Rule:** Always extract colours from client's existing site/logo/social first. If the brand is monochrome, keep it monochrome. Only add accents with explicit client approval.

### 2. Applying CSS filter hacks to logos
**Project:** BitumenCo
**What happened:** Used `brightness-0 invert` to make logo white on dark background. Killed the distressed texture detail.
**Why it's wrong:** Filters flatten detail. The logo had intentional rough texture that was lost.
**Rule:** Create proper light/dark variants of logos. Never use CSS filters as a shortcut.

### 3. Not verifying downloaded asset formats
**Project:** BitumenCo
**What happened:** Squarespace CDN served WebP files with .png URLs. Logo saved as .png was actually WebP.
**Rule:** After downloading client assets, always run `file` command to verify actual format. Convert properly.

---

## Content & Trust

### 4. Fabricating testimonials
**Project:** BitumenCo
**What happened:** Created 4 fake testimonials with made-up names when the client had ZERO Google reviews.
**Why it's wrong:** If someone checks Google and sees nothing but the website shows glowing reviews, trust is destroyed instantly. Dishonest and risky.
**Rule:** Before building a testimonials section, verify real reviews exist. If none: build empty-state section ready for real data, or skip entirely. Never fabricate.

### 5. Showing partner names as plain text instead of logos
**Project:** BitumenCo
**What happened:** Displayed "Hutchinson Builders", "Veolia" as gray text strings in trust bar.
**Why it's wrong:** Partner logos as text have zero visual trust impact. The whole point is visual recognition.
**Rule:** Get actual partner logos and display as grayscale images. If logos unavailable, use a different treatment than plain text.

---

## Structure & Layout

### 6. Using the same section order for every client
**Project:** BitumenCo (also seen in ez-shower-repair, jmack-electrical, david-mays-carpentry)
**What happened:** Used Hero → TrustBar → Services → Gallery → Testimonials → About → Areas → CTA for every project.
**Why it's wrong:** Each industry has a different buyer journey. Pest control is urgency-driven. Bitumen is a considered purchase. Electricians need trust signals early.
**Rule:** Before scaffolding, think about the buyer's mindset: What's their #1 question? What's their #1 objection? Structure the page to answer those in the first 2 scrolls.

### 7. No lead capture form on the homepage
**Project:** BitumenCo
**What happened:** Only put CTAs linking to phone number and separate /contact page.
**Why it's wrong:** Every scroll past the hero without a form is a lost conversion. Nobody navigates to a separate page to fill out a form.
**Rule:** Every homepage gets a quote/contact form — either in the hero, immediately after hero, or as a sticky element. 4 fields max.

### 8. Not splitting residential vs commercial audiences
**Project:** BitumenCo
**What happened:** Showed all services as equal cards in a flat grid. Homeowners and builders saw the same content.
**Why it's wrong:** These are two different buyer personas with different needs, budgets, and decision criteria.
**Rule:** If a business serves both residential and commercial, split the services section into two clear paths.

---

## Technical

### 9. Contact form with no backend
**Project:** BitumenCo
**What happened:** Built a beautiful form that doesn't submit anywhere. Clicking submit does nothing.
**Why it's wrong:** A broken form is worse than no form — it's a broken promise.
**Rule:** Either connect to a form service (Formspree, Basin, custom API) or at minimum make submit open a mailto: link with form data as fallback.

### 10. Installing wrong Tailwind version
**Project:** BitumenCo
**What happened:** `npm install tailwindcss` defaulted to v4 when the project needed v3.
**Rule:** Always pin Tailwind version explicitly. Check `package.json` after install.

### 11. lucide-react icon imports that don't exist
**Project:** BitumenCo
**What happened:** `Instagram` and `Quote` icons don't exist in lucide-react v1.8.
**Rule:** Check available icons before importing. Use inline SVG as fallback if needed.

### 12. ESM/CommonJS module conflicts
**Project:** BitumenCo
**What happened:** `npm init -y` sets `"type": "commonjs"` which conflicts with Next.js ESM.
**Rule:** Remove `type` field from package.json when using Next.js. Let Next.js handle module resolution.

---

## Process

### 13. Not verifying geographic data
**Project:** BitumenCo
**What happened:** Organised suburbs under region headers based on own knowledge. Dayboro and Ocean View put under "Sunshine Coast" when they're actually Moreton Bay.
**Rule:** Use the exact suburb groupings from the client's original site, or verify with the client directly.
