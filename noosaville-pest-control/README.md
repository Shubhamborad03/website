# Noosaville Pest Control — Build Log & Lessons

> **Client:** Noosaville Pest Control  
> **Location:** Noosaville, Sunshine Coast, QLD  
> **Phone:** 0408 001 239  
> **Email:** noosavillepestcontrol@outlook.com  
> **Licence:** #012432124  
> **Original site:** https://noosavillepest.com/ (WordPress + Brizy, rated 5.5/10)

---

## Table of Contents

1. [V1 Mistakes — What Went Wrong](#v1-mistakes--what-went-wrong)
2. [V2 Fixes — What Changed](#v2-fixes--what-changed)
3. [Branding Decisions](#branding-decisions)
4. [Site Architecture](#site-architecture)
5. [What Makes This Site Unique to Pest Control](#what-makes-this-site-unique-to-pest-control)
6. [Content Strategy](#content-strategy)
7. [Still Needs Real Content](#still-needs-real-content)
8. [Technical Stack](#technical-stack)
9. [Key Takeaway for Future Builds](#key-takeaway-for-future-builds)

---

## V1 Mistakes — What Went Wrong

The first version was built by copying the exact same template pattern used for jmack-electrical, ez-shower-repair, and david-mays-carpentry. Every single problem stemmed from that lazy approach.

### 1. Generic Template Copy-Paste

The homepage had the exact same structure as every other site:
```
Hero → TrustBar → Services(8 cards) → Stats → About → Testimonials → FAQ → ServiceAreas → CTA
```
This is an electrician's homepage. It's a carpenter's homepage. It's a shower repair homepage. It's NOT a pest control homepage. A trained client or competitor would immediately recognise the template.

### 2. Wrong Color Palette — Cold Corporate Blue

V1 used a cold blue palette (`#1d4ed8` primary) — the same kind of blue you'd see on a SaaS dashboard or a tech startup. Noosaville is a warm, subtropical, coastal town. The color scheme felt completely disconnected from the location and the industry. Pest control should feel earthy, natural, protective — not corporate.

The original colors:
```
brand-600: #1d4ed8 (cold blue)
brand-950: #0a1628 (dark navy)
```

### 3. No Inline Quote Form — CTA Buried on Separate Page

The hero section had a headline and two buttons: "Get a Free Quote" (links to /contact) and "Call 0408 001 239". The actual form was on a completely separate page. For pest control — an urgency-driven purchase where someone has pests RIGHT NOW — making them click through to another page to fill out a form is a conversion killer. The form needs to be above the fold, right there in the hero.

### 4. Safety Message Buried at FAQ Position 7

"Is it safe for my kids and pets?" is the #1 question every pest control customer asks. In V1, this answer was buried as the first FAQ item at position 7 out of 9 sections. By the time someone scrolls to FAQ, they've either already bounced or already called. The safety reassurance needs to hit within the first 10 seconds of landing.

### 5. Eight Service Cards — Overwhelming and Unnecessary

V1 had 8 individual service cards: General Pest, Cockroach, Ant, Spider, Termite Inspection, Termite Barrier, Rodent, Flea. This is overwhelming for a first-time visitor. Most homeowners don't know (or care) what specific pest they have — they just want it gone. The 8-card grid made the site feel like a catalogue, not a service page.

### 6. Fabricated Statistics

```
"1,000+ Homes Protected"
"100% Satisfaction Rate"
"$2M BASF Warranty"
"8 Year Barrier Warranty"
```
The first two are completely made up. There's no evidence this business has done 1,000+ homes. There's no evidence of 100% satisfaction. Making up numbers is worse than showing no numbers — if a prospect checks Google and finds zero reviews but the site claims 100% satisfaction, trust is destroyed instantly.

### 7. Fabricated Testimonials

V1 had 6 testimonials with specific names, suburbs, and detailed stories. All fabricated by AI. The patterns were obvious:
- All 5-star
- All perfect grammar
- All follow the same narrative structure (problem → treatment → happy ending)
- All from conveniently different suburbs

The original business has zero reviews online. If someone Google searches "Noosaville Pest Control reviews" and finds nothing, then visits the site and sees 6 glowing reviews — that's a credibility disaster.

### 8. No Pest-Control-Specific Content

Nothing about the site said "pest control" specifically. No pest identification, no safety information early in the flow, no urgency language, no seasonal pest calendar, no "what to expect" walkthrough. The same content structure would work for a plumber, painter, or pool cleaner. Zero niche awareness.

### 9. Boring Hero Headline

V1 headline: "Noosaville's Pest Control Experts"

This is descriptive, not compelling. It describes what they are but doesn't tell the customer why they should care or create any urgency. Compare to a newspaper — descriptive headlines don't sell papers. Nobody reads "Local Business Offers Services" and feels compelled to act.

### 10. No "How It Works" Process

First-time pest control customers have anxiety: What happens when they arrive? How long does it take? Do I need to leave? When can my dog come back inside? V1 didn't address any of this. The customer journey was opaque.

---

## V2 Fixes — What Changed

### Fix 1: Pest-Control-Specific Homepage Structure

New order, designed specifically for the pest control buyer journey:

```
1. Hero (urgency headline + INLINE 4-field quote form)
2. TrustBar (compact credential strip)
3. SafetySection (NEW — "#1 objection" killed immediately)
4. HowItWorks (NEW — Book → We Treat → Pests Gone)
5. ServicesSection (3 big cards, not 8)
6. TermiteSpotlight (NEW — dedicated high-value section)
7. CommonPests (NEW — pest identification grid)
8. ServiceAreasSection (moved UP from position 8)
9. TestimonialsSection (reduced to 3, flagged as placeholders)
10. FAQSection (reordered — safety first)
11. CTASection (urgency copy)
```

Why this order works for pest control:
- **Position 1-2**: Urgency + action + credentials. Customer can convert without scrolling.
- **Position 3**: Safety objection killed before they even think to ask.
- **Position 4**: Reduces anxiety about the process.
- **Position 5**: Shows capability without overwhelming.
- **Position 6**: Termites are the highest-value service ($2,300+) — they deserve their own spotlight, not a card in a grid.
- **Position 7**: Helps customers identify their pest — useful content, great for SEO.
- **Position 8**: "Do they come to my suburb?" answered before bounce.
- **Position 9-10**: Social proof and objection handling for those still deciding.
- **Position 11**: Final push for those who scrolled the whole page.

### Fix 2: Warm Sunshine Coast Palette

Replaced cold corporate blue with warm forest green + earthy accents:

```
OLD:
brand-600: #1d4ed8 (cold blue)
brand-950: #0a1628 (dark navy)

NEW:
brand-600: #276d50 (warm forest green — trust + nature + subtropical)
brand-950: #0b2119 (deep forest)
warm-500:  #d4872a (earthy terracotta accent)
accent-500: #10b981 (fresh green for safety/checkmarks)
```

Why this works:
- Green = natural, safe, protective. Perfect for "we remove pests safely."
- Warm tones = Sunshine Coast, subtropical, coastal. Feels local, not corporate.
- Earthy accents = grounded, honest, real. Not flashy tech startup.
- Still professional and premium — not cheap-looking.

### Fix 3: Inline Quote Form in Hero

Added a 4-field form directly in the hero section, right side:
- Your Name
- Phone
- Pest Type (dropdown: Cockroaches, Ants, Spiders, Termites, Rats/Mice, Fleas, Not Sure)
- Suburb

This sits above the fold next to the headline. Customer can request a quote without scrolling, without clicking to another page. For urgency-driven services, this is the single highest-impact conversion element.

### Fix 4: Safety Section at Position 2

Created a dedicated `SafetySection` component placed immediately after the trust strip. Full section titled "Safe for Your Kids, Pets & Family" with four cards:
- Pet-Friendly Products
- Kid-Safe Application
- No Need to Leave
- Licensed Technicians

This kills the #1 objection before the customer even thinks to ask. It's the difference between "I need to research if this is safe" (bounces) and "Oh good, it's safe — now what services do they offer?" (continues scrolling).

### Fix 5: Consolidated to 3 Service Cards

Replaced 8 overwhelming service cards with 3 focused ones:
1. **General Pest Control** — with sub-pests listed as tags (cockroaches, ants, spiders, fleas, silverfish, beetles, rodents)
2. **Termite Inspections** — with key inclusions
3. **Termite Barriers** — with pricing and warranty highlights

The detailed breakdown of each pest type still exists on the `/services` page for people who click through. But the homepage doesn't need to be an encyclopaedia.

### Fix 6: Removed Fabricated Stats

Deleted `StatsSection.tsx` entirely. The made-up "1,000+ Homes Protected" and "100% Satisfaction Rate" numbers are gone. Real, verifiable facts now live in the `TermiteSpotlight` section:
- 8 Years (Termidor protection period — real, from BASF documentation)
- $2M (BASF assurance warranty — real, documented on their website)
- $2,300 (Starting price — real, from their own termite barriers page)

These are facts the client can back up. If a customer asks "where did you get $2M warranty?" the answer is "BASF Termidor."

### Fix 7: Flagged Testimonials as Placeholders

Reduced from 6 fake testimonials to 3 shorter ones, and added a clear code comment:

```typescript
/*
 * PLACEHOLDER REVIEWS
 * These are sample testimonials to demonstrate layout.
 * Replace with real Google/Facebook reviews from the client
 * before going live. Link to actual Google reviews page if possible.
 */
```

This is honest to the client. When we hand over, we say: "These are placeholder reviews to show you how the section will look. We need your real reviews before launch." That's a conversation, not a deception.

### Fix 8: Added Pest-Control-Specific Content

Four new sections that only make sense for a pest control business:

1. **SafetySection** — "Is it safe?" answered upfront with specifics (similar to pet flea treatments, surfaces safe once dry, no need to vacate). No other trade needs this section.

2. **HowItWorks** — "Book → We Treat → Pests Gone" with details about what happens at each step. Reduces first-timer anxiety.

3. **TermiteSpotlight** — Dedicated section for the highest-value service. Includes warning signs list (mud tubes, hollow timber, bubbling paint, discarded wings, sticking doors), Termidor transfer effect explanation, and real pricing. This section doesn't exist on the electrician or carpenter sites because it doesn't need to.

4. **CommonPests** — Pest identification grid showing the 6 most common Sunshine Coast pests with:
   - Where they're found in your home
   - What risk they pose
   - When they're most active (seasonal)
   
   This is genuinely useful content. It helps customers identify their problem AND it's excellent for SEO (someone Googling "cockroaches in kitchen noosa" lands on content that directly helps them).

### Fix 9: Urgency-Driven Headline

```
OLD: "Noosaville's Pest Control Experts"
NEW: "Pests Don't Wait. Neither Do We."
```

The new headline:
- Creates urgency (pests are getting worse right now)
- Makes a promise (we act fast)
- Is emotionally compelling (you feel the clock ticking)
- Is short and punchy (reads in 2 seconds)

Supporting copy reinforces urgency: "Book today, get treated this week." Badge says "Same-Week Service Available."

### Fix 10: Urgency Language Throughout

Old CTA: "Don't Wait Until It's Too Late"
New CTA: "Every Day Without Treatment Is Another Day for Pests to Spread"

The new version is specific and creates a vivid mental image. The old version is a generic cliche that could apply to dental checkups, car insurance, or gym memberships.

---

## Branding Decisions

### Color Psychology for Pest Control

| Color | Hex | Usage | Why |
|---|---|---|---|
| Forest Green (brand-600) | `#276d50` | Primary buttons, links, headings | Trust + nature + safety. "We protect your home naturally." |
| Deep Forest (brand-950) | `#0b2119` | Dark backgrounds, hero, footer | Premium, authoritative. Not cheap, not scary. |
| Earthy Terracotta (warm-500) | `#d4872a` | Badges, accent highlights, step numbers | Warm, Sunshine Coast feel. Subtropical, not corporate. |
| Fresh Green (accent-500) | `#10b981` | Checkmarks, safety indicators, success states | "Clean, safe, done." Positive reinforcement. |
| Gold (gold) | `#D4A017` | Star ratings only | Standard review star color. |

### Typography

- **Montserrat** (headings) — Strong, modern, professional. Works for a service business that wants to feel established.
- **Inter** (body) — Clean, highly readable, neutral. Doesn't compete with the message.

Same pairing as the other sites. Consistency across the Wolf Partners portfolio is intentional — it's part of the agency brand, not the client brand.

### Logo Concept

Shield icon with checkmark + "Noosaville / Pest Control" text. The shield represents protection — which is the core value proposition ("we protect your home from pests"). The accent green on "Pest Control" subtly reinforces the nature/safety angle.

**Note:** This is a placeholder. The real client likely has their own logo. The redesign should incorporate their actual brand mark, even if it needs cleaning up.

### Tone of Voice

- **Direct and honest.** No corporate jargon. "We tell you what you actually need — not what makes us the most money."
- **Urgency without fear.** "Book today, get treated this week" not "YOUR HOME IS IN DANGER."
- **Locally grounded.** References Noosaville, Sunshine Coast, specific suburbs. Not generic "we serve your area."
- **Safety-first.** Lead with reassurance, not with the problem. People already know they have pests — they need to know the solution is safe.

---

## Site Architecture

### Homepage Flow (V2)

```
┌─────────────────────────────────────────────────────────┐
│ HERO                                                     │
│ "Pests Don't Wait. Neither Do We."                       │
│ [Left: Copy + Trust Badges]  [Right: 4-Field Quote Form] │
├─────────────────────────────────────────────────────────┤
│ TRUST BAR — Licensed | Family Safe | Termidor | Local   │
├─────────────────────────────────────────────────────────┤
│ SAFETY SECTION — "Safe for Kids, Pets & Family"          │
│ 4 cards: Pet-Friendly | Kid-Safe | No Need to Leave      │
├─────────────────────────────────────────────────────────┤
│ HOW IT WORKS — Book → We Treat → Pests Gone              │
├─────────────────────────────────────────────────────────┤
│ SERVICES — 3 big cards                                   │
│ General Pest | Termite Inspections | Termite Barriers    │
├─────────────────────────────────────────────────────────┤
│ TERMITE SPOTLIGHT — Termidor, $2M warranty, warning signs│
├─────────────────────────────────────────────────────────┤
│ COMMON PESTS — 6-pest identification grid                │
│ Cockroaches | Ants | Spiders | Termites | Rodents | Fleas│
├─────────────────────────────────────────────────────────┤
│ SERVICE AREAS — 12 Sunshine Coast suburbs                │
├─────────────────────────────────────────────────────────┤
│ TESTIMONIALS — 3 placeholder reviews                     │
├─────────────────────────────────────────────────────────┤
│ FAQ — Safety-first ordering                              │
├─────────────────────────────────────────────────────────┤
│ CTA — "Every Day Without Treatment Is Another Day..."    │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                   │
└─────────────────────────────────────────────────────────┘
```

### All Routes

| Route | Purpose |
|---|---|
| `/` | Homepage — full conversion funnel |
| `/services` | Detailed breakdown of all 8 pest types with inclusions |
| `/termite-inspections` | What's involved, areas inspected, warning signs, prep tips |
| `/termite-barriers` | Termidor info, transfer effect, process, transparent pricing |
| `/about` | Company story, 6 "why choose us" cards |
| `/contact` | Full contact form + sidebar with details |

### Components (16 total)

| Component | Type | Purpose |
|---|---|---|
| `Navbar.tsx` | Client | Responsive nav with scroll-aware styling |
| `Hero.tsx` | Client | Urgency headline + inline quote form |
| `TrustBar.tsx` | Server | Compact credential strip |
| `SafetySection.tsx` | Server | Family safety reassurance (NEW) |
| `HowItWorks.tsx` | Server | 3-step process visualization (NEW) |
| `ServicesSection.tsx` | Server | 3 consolidated service cards |
| `TermiteSpotlight.tsx` | Server | High-value termite section (NEW) |
| `CommonPests.tsx` | Server | Pest identification grid (NEW) |
| `ServiceAreasSection.tsx` | Server | 12 suburb coverage list |
| `TestimonialsSection.tsx` | Client | Paginated review cards (placeholder) |
| `FAQSection.tsx` | Client | Accordion with safety-first ordering |
| `CTASection.tsx` | Server | Final conversion push |
| `AboutSection.tsx` | Server | Values grid (used on About page) |
| `Footer.tsx` | Server | 4-column footer with contact details |
| `LiveChat.tsx` | Client | Multi-step enquiry widget |
| `Logo.tsx` | Server | Shield + text brand mark |

---

## What Makes This Site Unique to Pest Control

These are things that exist on this site that would NOT exist on any of the other Wolf Partners client sites:

1. **Safety section at position 2** — No other trade needs to immediately reassure customers that the service is safe for children and pets. An electrician doesn't need this. A carpenter doesn't need this. This is uniquely pest control.

2. **Pest identification grid** — "Common Noosa Pests" with where/risk/season for each pest type. This is content marketing that drives organic traffic AND helps the customer identify their problem.

3. **Termite spotlight section** — Dedicated section for the $2,300+ service with Termidor branding, transfer effect explanation, warning signs checklist, and real pricing. This is the business's money maker and deserves its own real estate.

4. **Warning signs list** — "Mud tubes on walls, hollow-sounding timber, bubbling paint, discarded wings, sticking doors." This is domain-specific knowledge that builds authority.

5. **Inline pest-type selector** — The hero form includes a pest type dropdown (cockroaches, ants, spiders, termites, rats/mice, fleas, not sure). This immediately segments the lead and tells the operator what to prepare for.

6. **Urgency framing** — "Same-Week Service Available" badge, "Book today, get treated this week," "Every day without treatment is another day for pests to spread." Pest control is an urgency purchase — the copy reflects that.

7. **Seasonal awareness in pest cards** — "Year-round (worse in summer)" for cockroaches, "Cooler months drive them inside" for rodents. Shows local subtropical knowledge.

---

## Content Strategy

### What Content Came From Their Existing Site

The original noosavillepest.com actually had some excellent content buried in bad design:

- **Termite inspection details** — 1.5-2 hour inspection process, what areas are covered, preparation tips. This was genuinely informative content trapped in a bad template.
- **Termite barrier specifics** — Termidor product, BASF, transfer effect, $2,300 pricing, 8-year warranty, $2M assurance, 7-8 hour install with 2 techs. Very detailed.
- **Contact form fields** — Their existing form captured street address, suburb, postcode, preferred date/time. We kept this structure.
- **Licence number** — #012432124, displayed on their current site.

### What Content We Created

- Service descriptions for each pest type
- FAQ answers (based on industry knowledge)
- "How It Works" process steps
- Safety reassurance specifics
- Common pests identification data
- Service area suburb list
- All testimonials (placeholder)
- All statistics (removed fabricated ones)

### Content Rules Applied

1. **Only claim what's verifiable.** $2M warranty = from BASF docs. 8-year protection = from Termidor specs. $2,300 starting price = from their own website. We don't claim "1,000+ homes" because we don't know that.
2. **Label what's fabricated.** Testimonials are clearly commented as placeholders in the code.
3. **Use their own words where possible.** "Committed to delivering efficient service and a quality product" — that's from their site, not invented.

---

## Still Needs Real Content

Before this site goes live, the following MUST be replaced with real assets:

| What | Status | Action Needed |
|---|---|---|
| Job photos | `/public/images/` is empty | Get real treatment/inspection photos from the operator |
| Testimonials | Placeholder text | Get actual Google/Facebook reviews (or encourage client to collect them) |
| Owner's story | Generic About copy | Interview the operator — name, years in business, why they started |
| Their actual logo | Shield placeholder | Get their real logo file or design a proper one |
| Form backend | Static (no API) | Connect to a webhook, email API, or CRM |
| Google review link | Not integrated | Add link to their Google Business profile |
| Owner photo | None | Get a photo of the operator for the About page |

---

## Technical Stack

```
Framework:  Next.js 14.2.5 (App Router)
UI:         React 18
Language:   TypeScript 5
Styling:    Tailwind CSS 3.4.1
Fonts:      Montserrat (headings) + Inter (body) via Google Fonts CDN
Build:      Static export (all pages prerendered)
Bundle:     98.3 kB first load JS (homepage)
```

Matches the tech stack of all other Wolf Partners client sites for portfolio consistency.

---

## Key Takeaway for Future Builds

**Don't build trade websites. Build [specific-trade] websites.**

The V1 mistake was treating "pest control" as just another service business and applying the same template. But every trade has different:

- **Buyer psychology** — Pest control is urgency-driven (I have bugs NOW). Carpentry is project-based (I want a deck someday). These need fundamentally different homepage structures.
- **Trust objections** — Pest control: "Is it safe for my family?" Electrical: "Are you licensed?" Shower repair: "Will you damage my tiles?" The #1 objection should be killed in the first 2 sections.
- **Highest-value services** — Pest control: termite barriers ($2,300+). Electrical: switchboard upgrades. These deserve dedicated sections, not cards in a grid.
- **Content opportunities** — Pest control: pest identification, seasonal calendar. Carpentry: project gallery. Electrical: compliance checklists. Each trade has unique content that competitors probably aren't creating.

The template (Next.js + Tailwind + component structure) is fine to reuse. The CONTENT ARCHITECTURE, SECTION ORDER, and COPY STRATEGY must be built from scratch for each trade.

---

*Last updated: 2026-04-16*
