# Build Log — Chronological Project History

Every project built, with key decisions and outcomes.

---

## 1. EZ Shower Repair
- **Type:** Budget trade site
- **Stack:** Next.js + Tailwind
- **Status:** Built
- **Key decisions:** Standard trade template layout
- **Lessons:** Established the base component pattern (Hero, TrustBar, ServicesSection, etc.)

## 2. JMack Electrical
- **Type:** Budget-mid trade site
- **Stack:** Next.js + Tailwind
- **Status:** Built
- **Key decisions:** Added Instagram carousel generator (HTML → Playwright → PNG)
- **Lessons:** Expanded deliverable beyond just the website — carousel content adds value

## 3. David May's Carpentry
- **Type:** Budget trade site
- **Stack:** Next.js + Tailwind
- **Status:** Built
- **Key decisions:** Standard layout
- **Lessons:** Part of the same-template-for-everyone pattern that was later identified as a mistake

## 4. Noosaville Pest Control
- **Type:** Budget trade site
- **Stack:** Next.js + Tailwind
- **Status:** Built
- **Key decisions:** Urgency-driven layout
- **Lessons:** Pest control buyers have different intent than construction buyers

## 5. BitumenCo
- **Type:** Mid-high trade site
- **Stack:** Next.js + Tailwind
- **Status:** Built, needs revisions
- **Key decisions:** Dark theme, pricing transparency, real project images
- **Lessons:** 10 documented mistakes (see mistakes.md). Major learnings around brand matching, fake testimonials, form backends, section ordering.
- **Detailed review:** bitumenco/REVIEW.md

## 6. Wolf Partners (own brand)
- **Type:** Personal brand / investor site
- **Stack:** Next.js 16 + Tailwind v4
- **Status:** In progress — two design options built
- **Key decisions:**
  - Option A: Geist font, black/white, numbered sections, muted blue-gray — follows competitor research patterns
  - Option B: Space Grotesk headings, brand gold (#C5A44E) accent from logo, editorial layout — matches actual brand identity
- **Lessons:** Thorough competitor research (6 sites analysed) before building. Two options for client comparison. AU market has wide-open gap for modern investor personal brand sites.

---

## Patterns Emerging

1. **Dark themes dominate** — used in BitumenCo, Wolf Partners, and works for premium/industrial positioning
2. **Template repetition is a trap** — caught after 4 builds using identical section order
3. **Research before building pays off** — Wolf Partners research prevented generic template approach
4. **Real content only** — every build that used fabricated content created problems
5. **Homepage form is non-negotiable** — missed in early builds, now a rule
