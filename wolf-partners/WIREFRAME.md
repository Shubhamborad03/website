# Wolf Partners — Website Wireframe v2

> This replaces the GPT-generated brief. Built from competitor research (Sahil Bloom, Codie Sanchez, Hormozi, Sam Parr, Linear, Vercel, a16z, First Round Capital) and conversion psychology for high-ticket personal brand sites.

---

## What's Wrong With the Old Wireframe

1. **"I scale businesses that already work"** — could be written by any of 10,000 LinkedIn growth coaches. It's a template sentence.
2. **$80M+ floating with no context** — big number, but what does it mean? What kind of deals? Outcome for who? A number without a story is decoration.
3. **No personality** — you could swap "Dave" with any name and the page wouldn't change. That means it's not a personal brand site — it's a template.
4. **No opinion or thesis** — a16z leads with what they BELIEVE. Sam Parr leads with who he IS. This wireframe leads with what Dave DOES. That's the weakest of the three.
5. **"Start a conversation"** — vague. What conversation? About what? Why now? No urgency, no clarity, no reason to click today instead of next month.
6. **"Who I Work With" is a passive list** — it should mirror the founder's internal monologue so they think "that's me."
7. **"Current Focus" says nothing specific** — "Working with AI-driven businesses" could mean anything. Show the work, don't describe it vaguely.
8. **No narrative arc** — the page is a stack of flat sections. There's no tension, no build-up, no moment where the visitor thinks "I need to talk to this person."

---

## Core Strategy

**The site should feel like an investor's portfolio crossed with a founder's blog — not a consultant's landing page.**

Three principles:
1. **Lead with thesis, not title.** What does Dave believe about business that most people get wrong? That's the hook.
2. **Proof through specifics, not adjectives.** Not "extensive experience" — but "$80M across X deals including [type] in [industry]." Verify or don't claim.
3. **One CTA, everywhere, low commitment.** Not "book a strategy session" (sounds like a sales funnel). Something that feels like one founder reaching out to another.

---

## Page Flow (6 sections, strict)

```
Hero (thesis + hook)
↓
What I Actually Do (3 pillars — but written differently)
↓
The Signal (what Dave sees that others miss — creates desire)
↓
Track Record (proof with context)
↓
Right Now (current active work — specific, not vague)
↓
Talk to Me (CTA — clear, low-commitment, one action)
```

---

## Section 1: HERO

**Goal:** Within 3 seconds, the visitor knows: (a) who this is for, (b) what Dave believes, (c) that this person is sharp and current.

### Layout
- Full viewport height
- Left-aligned text
- No image (the typography IS the design)
- Pure black background
- One subtle design element (gradient line, cursor glow — not decorative, atmospheric)

### Copy Direction

**Don't use:** "I scale businesses that already work" (template)

**Use a thesis/belief instead. Options:**

Option 1 (Provocative):
```
Most businesses don't have a growth problem.
They have a systems problem.

I find the money you're already leaving on the table —
then I build the systems to capture it.
```

Option 2 (Direct):
```
You're making money.
You're just not making enough of it.

I fix that.
```

Option 3 (Authority):
```
$80M in deals. Zero theory.

I invest in, restructure, and scale
businesses that already have revenue.
```

**Subline (same for all):** Small, spaced, understated.
```
Investor. Operator. Growth strategist.
```

**CTA:** One button. Simple.
```
Let's see if there's a fit →
```
(Not "Start a conversation" — too vague. "See if there's a fit" implies exclusivity and reduces commitment anxiety.)

### Dev Notes
- Headline: `clamp(2.5rem, 7vw, 5rem)` — large but not screaming
- Line height very tight (0.95-1.05)
- Tracking: -0.03em
- Subline: text-zinc-500, text-sm, tracking-wide
- CTA: white bg, black text, rounded-lg, small arrow icon on hover
- Entry animation: headline fades in first, then subline 200ms later, then CTA 400ms later (staggered, not simultaneous)

---

## Section 2: WHAT I ACTUALLY DO

**Goal:** In 10 seconds, the visitor understands Dave's three lanes. Not a menu — a positioning statement per lane.

### Layout
- Three cards (grid on desktop, stacked on mobile)
- Subtle border, slight hover state
- No icons — the words do the work

### Copy

**Scale & Optimise**
Your business runs. But it leaks.
Revenue slips through broken systems, poor retention, and pricing you've never revisited. I find the gaps and close them.

**Strategic Growth**
The difference between a business that stays flat and one that compounds is positioning — who you sell to, how you're partnered, and what you say no to.

**Capital & Deals**
I put money where I see alignment. Structuring deals, connecting capital, and investing alongside operators — not from the sidelines.

### Dev Notes
- Cards: border border-white/[0.04], rounded-xl, p-8
- Hover: border-white/[0.08], bg-white/[0.02]
- Title: text-lg, font-semibold, white
- Body: text-[14px], text-zinc-500, leading-relaxed
- Each card body is 2-3 sentences max. Not one-liners (too thin) but not paragraphs (too heavy).

---

## Section 3: THE SIGNAL (new section — doesn't exist in old wireframe)

**Goal:** Create desire. Show that Dave sees things others miss. This is the "why should I care" section.

This section is what separates a consultant site from a founder site. It shows Dave's THINKING — not just his services. Founders trust people who demonstrate pattern recognition.

### Layout
- Left-aligned, single column
- Each "signal" is a short insight — almost tweet-length
- Subtle left border or dash marker

### Copy Direction

Section label: `What I keep seeing`

```
— Most service businesses are sitting on 20-30% more revenue
  without adding a single new customer. They just don't measure
  what they're losing.

— Founders who scaled to $2-5M on instinct hit a wall.
  The thing that got them here — doing everything themselves —
  is the thing that stops them growing.

— AI isn't coming for these businesses. It's already here.
  The ones using it properly are pulling away fast from the ones
  still thinking about it.
```

### Why This Section Matters
- It mirrors what the VISITOR is already feeling ("that's my business")
- It shows Dave's pattern recognition without claiming expertise
- It's content as proof — the insights ARE the credential
- It's the thing that makes someone think "this person gets it"

### Dev Notes
- Each insight: text-zinc-400, text-lg, leading-relaxed
- Left marker: 2px vertical line in zinc-800, or em dash
- Spacing: generous between items (py-8 each)
- Section header: text-zinc-600, text-xs, tracking-widest, uppercase

---

## Section 4: TRACK RECORD

**Goal:** Proof that hits hard. Not just big numbers — numbers with enough context to be credible.

### Layout
- Two stat blocks (cards or large type — either works)
- One context line underneath each number
- One closing line

### Copy

```
$80M+
Deals completed personally — acquisitions, growth equity,
and operational restructures across multiple industries.
```

```
~$15M
Active pipeline through current vehicles.
Not projections — deals in progress.
```

**Closing line:**
```
I don't advise from the sidelines. I put capital in,
structure the deal, and work inside the business.
```

### Why This Is Better Than the Old Version
- "$80M+" alone is just a number. With "acquisitions, growth equity, and operational restructures" it has weight.
- "Active pipeline" alone is vague. "Not projections — deals in progress" is a micro-credibility signal.
- The closing line is the real proof: "I put capital in." That separates Dave from every advisor who just talks.

### Dev Notes
- Numbers: text-7xl to text-8xl, font-bold, tracking-tighter
- Context line: text-zinc-500, text-[14px], mt-3, max-w-sm
- Closing line: text-zinc-600, text-sm, mt-16
- Cards if used: same style as "What I Do" cards

---

## Section 5: RIGHT NOW

**Goal:** Show this is current and evolving. Not a static portfolio — a live operator.

The old "Current Focus" was three vague bullets. This version is specific enough to be believable.

### Layout
- 2-3 items, each with a short title and one-line context
- Clean, light treatment — this section is a signal, not a sales pitch

### Copy

Section label: `What I'm working on now`

```
AI-Enabled Service Businesses
Investing in and building systems for service companies
using AI agents to automate what used to require headcount.

Operational Restructures
Working inside two businesses right now to fix unit economics
and rebuild their client acquisition systems.

Deal Structuring
Actively structuring equity and revenue-share deals
with operators who want a partner, not a lender.
```

### Dev Notes
- Title: text-white/90, font-medium
- Context: text-zinc-600, text-[14px]
- Light border separators between items
- This section should feel like a snapshot — brief, current, real

---

## Section 6: TALK TO ME (CTA)

**Goal:** One action. Low commitment. Clear what happens next.

### Layout
- Centered
- Generous whitespace above and below
- One headline, one button

### Copy

```
If you've got revenue, traction, and a problem
you haven't been able to solve — I might be the right call.
```

**Button:**
```
Let's see if there's a fit →
```

**Small text below button (optional):**
```
15 minutes. No pitch. Just a conversation about
whether I can actually help.
```

### Why This Is Better
- "I might be the right call" — not overselling, not desperate
- "Let's see if there's a fit" — mutual evaluation, not a sales call
- "15 minutes. No pitch." — removes commitment anxiety
- "Whether I can actually help" — honesty signal, not "I'll change your life"

### Dev Notes
- Headline: text-2xl to text-3xl, text-zinc-300, font-medium, tracking-tight
- Button: bg-white, text-black, px-8 py-4, rounded-lg, font-medium
- Sub-text: text-zinc-700, text-xs, mt-4
- Lots of space — py-32 minimum

---

## DESIGN SYSTEM

### Colours
- Background: #000000 (true black, not near-black)
- Text primary: white/95 (not pure white — softer)
- Text secondary: zinc-500
- Text tertiary: zinc-700
- Borders: white/[0.04]
- Hover borders: white/[0.08]
- Cards: bg-white/[0.01] on hover

**No accent colour.** The restraint IS the design. If we add an accent, it should be introduced later after the brand is established — not guessed now.

### Typography
- Headings: System font or Geist — native to Vercel/Next.js, aggressive, clean
- Body: Same family, lighter weight
- Section labels: text-xs, uppercase, tracking-widest, text-zinc-600
- No decorative fonts. No serif. No playful.

### Spacing
- Section padding: py-32 to py-40
- Max width: max-w-5xl or max-w-6xl (not 7xl — too wide loses intimacy)
- Generous but not wasteful

### Interactions
- Subtle cursor glow (Linear-inspired, very low opacity — 1.5% white)
- Fade-in on scroll (staggered, not simultaneous)
- Hover state on cards (border brightens, very subtle bg shift)
- CTA arrow nudges right on hover
- Fast transitions (200ms, not 300ms — snappy, not floaty)

### What NOT to Do
- No gradient backgrounds
- No floating decorative shapes
- No parallax scrolling
- No auto-playing video
- No hamburger menu (not enough pages to need one — logo + CTA only in nav)
- No "loading" animations
- No stock photography
- No testimonials unless real and verified
- No blog link unless blog exists and has content

---

## MOBILE CONSIDERATIONS

- Headline scales down cleanly (clamp-based sizing)
- Cards stack to single column
- CTA button full-width on mobile
- Nav: logo left, CTA right, no menu needed
- Touch targets: minimum 44px height
- No horizontal scroll anywhere
- Form (if added later): 3 fields max on mobile

---

## WHAT THIS WIREFRAME DOES DIFFERENTLY

| Old Wireframe | This Wireframe |
|---|---|
| Leads with title ("I scale businesses") | Leads with thesis/belief (what Dave sees that others miss) |
| $80M+ as decoration | $80M+ with deal type context |
| "Who I Work With" as passive list | "The Signal" — mirrors the visitor's internal monologue |
| "Current Focus" — 3 vague bullets | "Right Now" — specific enough to verify |
| "Start a conversation" CTA | "Let's see if there's a fit" — mutual, low commitment |
| No personality | Each section has voice and opinion |
| Could be anyone's site | Can only be Dave's site |
| 6 flat sections stacked | 6 sections with narrative tension that builds |

---

## NARRATIVE ARC

The page tells a story:

1. **Hero:** "Here's what I believe" (hook)
2. **What I Do:** "Here's how I act on it" (clarity)
3. **The Signal:** "Here's what I see that you might not" (desire + self-identification)
4. **Track Record:** "Here's proof I'm not just talking" (credibility)
5. **Right Now:** "Here's what I'm doing today" (currency)
6. **CTA:** "If this resonates, let's talk" (action)

Each section answers the question the previous section creates. That's what a narrative arc does — it pulls you forward. The old wireframe was a stack of unrelated sections. This one is a funnel.

---

## NEXT STEPS

1. Get Dave's input on the three headline options (provocative, direct, authority)
2. Confirm the $80M+ context line — what types of deals specifically?
3. Confirm whether "The Signal" insights are accurate to Dave's actual observations
4. Get the Google Calendar booking link
5. Build it
