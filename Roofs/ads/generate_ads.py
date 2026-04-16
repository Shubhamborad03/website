#!/usr/bin/env python3
"""
Sam's Roof Coatings — Ad Generator
Produces 20 ready-to-screenshot HTML ads:
  4 image sets × 5 psychological angles = 20 files
  ads/1/v1-split.html … ads/4/v5-hook.html
"""

from pathlib import Path

# ── CONFIG ─────────────────────────────────────────────────────────────────────

BASE = Path(__file__).parent

SETS = {
    1: dict(
        before="../Before/image-1.png",
        after="../After/image-1.png",
        suburb="Noosaville",
        days="3",
        hook="Your roof is drowning in moss — and you can't see it from the ground.",
        result="100% moss-free. Bright white Dulux coating. Same roof.",
    ),
    2: dict(
        before="../Before/image-2.png",
        after="../After/image-2.png",
        suburb="Tewantin",
        days="2",
        hook="Streaks, fade, water stains — this is what neglect looks like from above.",
        result="Clean charcoal coating. Uniform finish. Looks brand new.",
    ),
    3: dict(
        before="../Before/image-3.png",
        after="../After/image-3.png",
        suburb="Sunshine Coast",
        days="2",
        hook="Rust patches, peeling, gaps — your corrugated roof is failing silently.",
        result="Fully restored. Cream coating sealed every seam.",
    ),
    4: dict(
        before="../Before/image-4.png",
        after="../After/image-4.png",
        suburb="Gold Coast",
        days="1",
        hook="Faded, oxidised, letting UV in — this roof needed saving.",
        result="Dark charcoal finish. Waterproof. 10-year Dulux warranty.",
    ),
}

BRAND = dict(
    name="Sam's Roof Coatings",
    phone="0412 345 678",
    qbcc="QBCC 15207890",
    abn="ABN 52 161 234 567",
    standard="$7,400",
    area="$5,920",
    reroof="$28,000",
    saves="$18,000+",
    reviews="127",
    customer="Karen M.",
    customer_suburb="Noosaville",
    quote="Couldn't believe the difference. Sam fixed things I didn't even know were problems.",
)

FONTS = """<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Barlow:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">"""

BASE_CSS = """
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#0a0a0a; font-family:'Barlow',sans-serif; }
"""

# ── HELPERS ────────────────────────────────────────────────────────────────────

def html(title, w, h, style, body):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width={w}">
<title>{title}</title>
{FONTS}
<style>
{BASE_CSS}
{style}
</style>
</head>
<body>
{body}
</body>
</html>"""


# ═══════════════════════════════════════════════════════════════════════════════
#  V1 — BEFORE/AFTER SPLIT  (1080 × 1080)
#  Angle: Transformation proof — most direct, highest trust
# ═══════════════════════════════════════════════════════════════════════════════

def v1_split(s, n):
    b, a = BRAND, s
    style = f"""
.ad {{ width:1080px; height:1080px; position:relative; overflow:hidden; background:#0a0a0a; display:flex; flex-direction:column; }}

/* Photos */
.photos {{ display:flex; width:100%; height:756px; position:relative; }}
.half {{ width:50%; height:100%; position:relative; overflow:hidden; }}
.half img {{ width:100%; height:100%; object-fit:cover; object-position:center top; display:block; }}

.before img {{ filter:grayscale(55%) brightness(0.6) contrast(1.15) saturate(0.5); }}
.after  img {{ filter:brightness(0.92) saturate(1.2) contrast(1.04); }}

.half::after {{ content:''; position:absolute; inset:0;
  background:linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.65) 100%); }}

/* Labels */
.label {{ position:absolute; top:30px; left:30px; z-index:5; font-family:'Bebas Neue',sans-serif;
  font-size:48px; letter-spacing:4px; padding:6px 20px; }}
.before .label {{ background:rgba(0,0,0,0.78); color:#fff; border-left:5px solid #666; }}
.after  .label {{ background:#D94F00; color:#fff; }}

/* Suburb badge */
.suburb {{ position:absolute; top:30px; right:30px; z-index:5;
  background:rgba(0,0,0,0.78); color:#fff; font-family:'Barlow Condensed',sans-serif;
  font-size:22px; font-weight:700; letter-spacing:1px; text-transform:uppercase;
  padding:8px 16px; border-left:4px solid #D94F00; }}

/* Divider */
.divider {{ position:absolute; left:50%; top:0; transform:translateX(-50%);
  width:8px; height:756px; background:#D94F00; z-index:10; }}
.div-pill {{ position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
  background:#D94F00; color:#fff; font-family:'Bebas Neue',sans-serif;
  font-size:22px; letter-spacing:2px; padding:14px 8px;
  writing-mode:vertical-rl; z-index:15; border:3px solid #fff; white-space:nowrap; }}

/* Bottom bar */
.bar {{ flex:1; background:#0a0a0a; border-top:4px solid #D94F00;
  padding:28px 46px 20px; display:flex; flex-direction:column; justify-content:space-between; }}

.headline {{ font-family:'Bebas Neue',sans-serif; font-size:88px;
  color:#fff; line-height:0.88; letter-spacing:1px; }}
.headline .acc {{ color:#D94F00; }}

.bottom-row {{ display:flex; justify-content:space-between; align-items:flex-end; margin-top:8px; }}

.sub {{ font-family:'Barlow Condensed',sans-serif; font-size:28px; color:#aaa; max-width:540px; line-height:1.3; }}
.sub strong {{ color:#fff; }}

.phone-block {{ display:flex; flex-direction:column; align-items:flex-end; gap:2px; }}
.phone-lbl {{ font-family:'Barlow Condensed',sans-serif; font-size:16px; color:#555;
  text-transform:uppercase; letter-spacing:3px; }}
.phone {{ font-family:'Bebas Neue',sans-serif; font-size:54px; color:#D94F00; letter-spacing:2px; line-height:1; }}

.footer {{ display:flex; justify-content:space-between; align-items:center; padding-top:6px; }}
.badges {{ display:flex; gap:14px; }}
.badge {{ font-size:16px; color:#444; border:1px solid #252525; padding:4px 12px; font-family:'Barlow',sans-serif; }}
.stars {{ color:#D94F00; font-size:24px; letter-spacing:3px; }}
"""
    body = f"""<div class="ad">
  <div class="photos">
    <div class="half before">
      <img src="{s['before']}" alt="Before">
      <div class="label">Before</div>
    </div>
    <div class="half after">
      <img src="{s['after']}" alt="After">
      <div class="label">After</div>
    </div>
    <div class="divider"><div class="div-pill">{s['days']} DAYS</div></div>
    <div class="suburb">📍 {s['suburb']} — this week</div>
  </div>
  <div class="bar">
    <div class="headline">Same roof.<br><span class="acc">Completely</span> transformed.</div>
    <div class="bottom-row">
      <div class="sub">Restore, don't replace. <strong>Save {b['saves']}.</strong> Dulux 10-year warranty.</div>
      <div class="phone-block">
        <span class="phone-lbl">Free quote</span>
        <span class="phone">{b['phone']}</span>
      </div>
    </div>
    <div class="footer">
      <div class="badges">
        <span class="badge">{b['qbcc']}</span>
        <span class="badge">30 Years Exp.</span>
        <span class="badge">Zero Deposit</span>
        <span class="badge">Fixed Price</span>
      </div>
      <span class="stars">★★★★★</span>
    </div>
  </div>
</div>"""
    return html(f"Set {n} · V1 Split · 1080×1080", 1080, 1080, style, body)


# ═══════════════════════════════════════════════════════════════════════════════
#  V2 — STORY REVEAL  (1080 × 1920)
#  Angle: Aspiration — "your roof COULD look like this"
# ═══════════════════════════════════════════════════════════════════════════════

def v2_story(s, n):
    b, a = BRAND, s
    style = f"""
.ad {{ width:1080px; height:1920px; position:relative; overflow:hidden; background:#0a0a0a; }}

.bg {{ position:absolute; inset:0; width:100%; height:100%;
  object-fit:cover; object-position:center top;
  filter:brightness(0.6) saturate(1.1); }}

.grad-top {{ position:absolute; top:0; left:0; right:0; height:52%;
  background:linear-gradient(180deg,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.3) 65%,transparent 100%); z-index:2; }}
.grad-bot {{ position:absolute; bottom:0; left:0; right:0; height:58%;
  background:linear-gradient(0deg,rgba(0,0,0,0.98) 0%,rgba(0,0,0,0.7) 50%,transparent 100%); z-index:2; }}

/* Brand */
.brand {{ position:absolute; top:52px; left:52px; z-index:10; }}
.brand-name {{ font-family:'Bebas Neue',sans-serif; font-size:36px; color:#fff; letter-spacing:3px; line-height:1; }}
.brand-sub {{ font-family:'Barlow Condensed',sans-serif; font-size:18px; color:#D94F00;
  letter-spacing:3px; text-transform:uppercase; }}

/* Before inset */
.before-wrap {{ position:absolute; top:44px; right:52px; z-index:10; }}
.before-circle {{ width:200px; height:200px; border-radius:50%;
  border:5px solid #ff3232; overflow:hidden;
  box-shadow:0 0 0 3px #0a0a0a, 0 8px 32px rgba(0,0,0,0.9); }}
.before-circle img {{ width:100%; height:100%; object-fit:cover;
  filter:grayscale(60%) brightness(0.55) contrast(1.1); }}
.before-tag {{ text-align:center; margin-top:10px;
  font-family:'Bebas Neue',sans-serif; font-size:20px;
  color:#ff3232; letter-spacing:3px; }}

/* Hook */
.hook {{ position:absolute; top:220px; left:52px; right:52px; z-index:10; }}
.eyebrow {{ display:flex; align-items:center; gap:14px; margin-bottom:16px;
  font-family:'Barlow Condensed',sans-serif; font-size:22px; font-weight:700;
  color:#D94F00; text-transform:uppercase; letter-spacing:5px; }}
.eyebrow::before {{ content:''; display:block; width:40px; height:3px; background:#D94F00; }}
.hook-headline {{ font-family:'Bebas Neue',sans-serif; font-size:112px;
  color:#fff; line-height:0.86; letter-spacing:2px; }}
.hook-headline .acc {{ color:#D94F00; display:block; }}
.hook-sub {{ margin-top:20px; font-family:'Barlow Condensed',sans-serif;
  font-size:34px; color:rgba(255,255,255,0.7); font-weight:400; line-height:1.3; max-width:800px; }}

/* Scope */
.scope {{ position:absolute; top:50%; left:52px; right:52px; transform:translateY(-50%);
  z-index:10; display:flex; gap:16px; }}
.scope-item {{ flex:1; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08);
  border-top:3px solid #D94F00; padding:22px 10px;
  display:flex; flex-direction:column; align-items:center; gap:10px; }}
.scope-item .ico {{ font-size:36px; }}
.scope-item .lbl {{ font-family:'Barlow Condensed',sans-serif; font-size:18px;
  font-weight:700; color:#fff; text-transform:uppercase; letter-spacing:1px; text-align:center; }}

/* Bottom CTA */
.cta {{ position:absolute; bottom:0; left:0; right:0; padding:0 52px 72px; z-index:10; }}
.price-area {{ margin-bottom:6px; font-family:'Barlow Condensed',sans-serif;
  font-size:22px; font-weight:700; color:#888; text-transform:uppercase; letter-spacing:3px; }}
.price-row {{ display:flex; align-items:flex-end; gap:20px; margin-bottom:16px; }}
.price-old {{ font-family:'Bebas Neue',sans-serif; font-size:62px; color:#444;
  text-decoration:line-through; text-decoration-color:#ff3232;
  text-decoration-thickness:4px; line-height:1; }}
.price-new {{ font-family:'Bebas Neue',sans-serif; font-size:112px; color:#D94F00; line-height:0.88; }}
.price-note {{ font-family:'Barlow',sans-serif; font-size:22px; color:#666; margin-bottom:20px; }}
.warranty-bar {{ display:flex; align-items:center; gap:14px;
  background:rgba(217,79,0,0.1); border:1px solid rgba(217,79,0,0.3);
  padding:16px 22px; margin-bottom:22px;
  font-family:'Barlow Condensed',sans-serif; font-size:22px;
  font-weight:700; color:#D94F00; letter-spacing:1px; text-transform:uppercase; }}
.cta-btn {{ background:#D94F00; width:100%; padding:32px 36px;
  display:flex; justify-content:space-between; align-items:center; }}
.cta-text {{ font-family:'Bebas Neue',sans-serif; font-size:52px;
  color:#fff; letter-spacing:3px; line-height:1; }}
.cta-arrow {{ font-size:42px; color:#fff; font-family:'Bebas Neue',sans-serif; }}
"""
    body = f"""<div class="ad">
  <img class="bg" src="{s['after']}" alt="After">
  <div class="grad-top"></div>
  <div class="grad-bot"></div>

  <div class="brand">
    <div class="brand-name">{b['name']}</div>
    <div class="brand-sub">30 Yrs · Gold &amp; Sunshine Coast</div>
  </div>

  <div class="before-wrap">
    <div class="before-circle"><img src="{s['before']}" alt="Before"></div>
    <div class="before-tag">← BEFORE</div>
  </div>

  <div class="hook">
    <div class="eyebrow">{s['suburb']}</div>
    <div class="hook-headline">Your roof<br>could look<br><span class="acc">like this.</span></div>
    <div class="hook-sub">{s['result']}</div>
  </div>

  <div class="scope">
    <div class="scope-item"><span class="ico">💧</span><span class="lbl">Pressure<br>Clean</span></div>
    <div class="scope-item"><span class="ico">🔧</span><span class="lbl">Re-<br>point</span></div>
    <div class="scope-item"><span class="ico">🎨</span><span class="lbl">2-Coat<br>Dulux</span></div>
    <div class="scope-item"><span class="ico">🛡️</span><span class="lbl">10yr<br>Warranty</span></div>
    <div class="scope-item"><span class="ico">💰</span><span class="lbl">Zero<br>Deposit</span></div>
  </div>

  <div class="cta">
    <div class="price-area">Area rate — this month only</div>
    <div class="price-row">
      <span class="price-old">{b['standard']}</span>
      <span class="price-new">{b['area']}</span>
    </div>
    <div class="price-note">Incl. GST · Fixed price · No surprises</div>
    <div class="warranty-bar">🏆 Dulux 10-Year Waterproofing Warranty Included</div>
    <div class="cta-btn">
      <span class="cta-text">Free inspection → {b['phone']}</span>
      <span class="cta-arrow">→</span>
    </div>
  </div>
</div>"""
    return html(f"Set {n} · V2 Story · 1080×1920", 1080, 1920, style, body)


# ═══════════════════════════════════════════════════════════════════════════════
#  V3 — PRICE ANCHOR  (1080 × 1080)
#  Angle: Logic/value — kills the re-roof objection before it's raised
# ═══════════════════════════════════════════════════════════════════════════════

def v3_price(s, n):
    b, a = BRAND, s
    style = f"""
.ad {{ width:1080px; height:1080px; position:relative; overflow:hidden;
  background:#0a0a0a; display:flex; }}

.photo-col {{ width:420px; height:100%; position:relative; overflow:hidden; flex-shrink:0; }}
.photo-col img {{ width:100%; height:100%; object-fit:cover; object-position:center;
  filter:brightness(0.82) saturate(1.15) contrast(1.05); }}
.photo-col::after {{ content:''; position:absolute; top:0; right:0; bottom:0; width:120px;
  background:linear-gradient(90deg,transparent 0%,#0a0a0a 100%); }}
.after-tag {{ position:absolute; bottom:32px; left:24px;
  background:#D94F00; color:#fff; font-family:'Bebas Neue',sans-serif;
  font-size:28px; letter-spacing:3px; padding:8px 20px; z-index:5; }}

.content {{ flex:1; display:flex; flex-direction:column; justify-content:space-between;
  padding:52px 48px 36px 20px; }}

.top-eyebrow {{ font-family:'Barlow Condensed',sans-serif; font-size:20px; font-weight:700;
  color:#D94F00; text-transform:uppercase; letter-spacing:5px; margin-bottom:10px; }}
.headline {{ font-family:'Bebas Neue',sans-serif; font-size:82px;
  color:#fff; line-height:0.86; letter-spacing:1px; }}

.price-block {{ display:flex; flex-direction:column; gap:0; }}

.p-row {{ padding:18px 20px; border-left:4px solid #222; position:relative; }}
.p-row.cross {{ border-left-color:#ff3232; }}
.p-row.win {{ border-left-color:#D94F00; background:rgba(217,79,0,0.07); }}
.p-lbl {{ font-family:'Barlow Condensed',sans-serif; font-size:18px; font-weight:700;
  color:#555; text-transform:uppercase; letter-spacing:2px; margin-bottom:2px; }}
.p-row.win .p-lbl {{ color:#D94F00; }}
.p-val {{ font-family:'Bebas Neue',sans-serif; font-size:72px; line-height:0.95; color:#444; }}
.p-row.cross .p-val {{ text-decoration:line-through; text-decoration-color:#ff3232;
  text-decoration-thickness:5px; }}
.p-row.win .p-val {{ color:#D94F00; font-size:84px; }}

.divider-row {{ display:flex; align-items:center; gap:14px; padding:12px 0; }}
.div-line {{ flex:1; height:1px; background:#1e1e1e; }}
.div-badge {{ background:#141414; border:1px solid #D94F00; color:#D94F00;
  font-family:'Barlow Condensed',sans-serif; font-size:16px; font-weight:700;
  letter-spacing:2px; text-transform:uppercase; padding:5px 14px; white-space:nowrap; }}

.save-note {{ font-family:'Barlow',sans-serif; font-size:18px; color:#666;
  padding:0 20px; margin-top:4px; }}
.save-note strong {{ color:#fff; }}

.cta {{ background:#D94F00; padding:22px 28px; display:flex;
  justify-content:space-between; align-items:center; margin-top:4px; }}
.cta-main {{ font-family:'Bebas Neue',sans-serif; font-size:38px;
  color:#fff; letter-spacing:2px; line-height:1; }}
.cta-sub {{ font-family:'Barlow',sans-serif; font-size:16px;
  color:rgba(255,255,255,0.65); }}
.cta-phone {{ font-family:'Bebas Neue',sans-serif; font-size:30px;
  color:#fff; letter-spacing:1px; text-align:right; }}
"""
    body = f"""<div class="ad">
  <div class="photo-col">
    <img src="{s['after']}" alt="After">
    <div class="after-tag">✓ Restored</div>
  </div>
  <div class="content">
    <div>
      <div class="top-eyebrow">Why restore?</div>
      <div class="headline">Same<br>roof.<br>{b['saves']}<br>cheaper.</div>
    </div>
    <div class="price-block">
      <div class="p-row cross">
        <div class="p-lbl">Full re-roof</div>
        <div class="p-val">{b['reroof']}</div>
      </div>
      <div class="divider-row">
        <div class="div-line"></div>
        <div class="div-badge">You save ~{b['saves']}</div>
        <div class="div-line"></div>
      </div>
      <div class="p-row win">
        <div class="p-lbl">Sam's area rate</div>
        <div class="p-val">{b['area']}</div>
      </div>
      <div class="save-note">10-year Dulux warranty. <strong>Fixed price. Zero deposit.</strong></div>
    </div>
    <div class="cta">
      <div>
        <div class="cta-main">Get free quote</div>
        <div class="cta-sub">No deposit · Fixed price · {s['days']}-day job</div>
      </div>
      <div class="cta-phone">{b['phone']}</div>
    </div>
  </div>
</div>"""
    return html(f"Set {n} · V3 Price · 1080×1080", 1080, 1080, style, body)


# ═══════════════════════════════════════════════════════════════════════════════
#  V4 — SOCIAL PROOF  (1080 × 1350 · 4:5)
#  Angle: Trust — reviews, real name, real suburb
# ═══════════════════════════════════════════════════════════════════════════════

def v4_proof(s, n):
    b, a = BRAND, s
    style = f"""
.ad {{ width:1080px; height:1350px; position:relative; overflow:hidden;
  background:#0a0a0a; display:flex; flex-direction:column; }}

.photo-top {{ width:100%; height:720px; position:relative; overflow:hidden; flex-shrink:0; }}
.photo-top img {{ width:100%; height:100%; object-fit:cover; object-position:center top;
  filter:saturate(1.15) brightness(0.8) contrast(1.05); }}
.photo-top::after {{ content:''; position:absolute; bottom:0; left:0; right:0; height:55%;
  background:linear-gradient(0deg,#0a0a0a 0%,transparent 100%); }}

.photo-tag {{ position:absolute; top:32px; left:32px;
  background:rgba(0,0,0,0.75); color:#fff;
  font-family:'Barlow Condensed',sans-serif; font-size:22px;
  font-weight:700; letter-spacing:1px; text-transform:uppercase;
  padding:8px 16px; border-left:4px solid #D94F00; z-index:5; }}

.before-mini {{ position:absolute; top:32px; right:32px; z-index:5; width:180px; }}
.before-mini img {{ width:180px; height:120px; object-fit:cover;
  filter:grayscale(50%) brightness(0.5); border:3px solid #ff3232; display:block; }}
.before-mini-tag {{ background:#ff3232; color:#fff;
  font-family:'Bebas Neue',sans-serif; font-size:16px; letter-spacing:2px;
  padding:4px 10px; text-align:center; }}

.content {{ flex:1; padding:24px 52px 0; display:flex; flex-direction:column;
  justify-content:space-between; }}

.stars {{ display:flex; align-items:center; gap:6px; margin-bottom:12px; }}
.star {{ color:#D94F00; font-size:34px; }}
.review-ct {{ font-family:'Barlow Condensed',sans-serif; font-size:22px;
  color:#555; margin-left:8px; letter-spacing:1px; }}

.quote-mark {{ font-family:Georgia,serif; font-size:100px; color:#D94F00;
  line-height:0.5; margin-bottom:8px; opacity:0.8; }}
.quote-text {{ font-family:'Barlow',sans-serif; font-size:34px;
  font-style:italic; color:#fff; line-height:1.4; margin-bottom:20px; max-width:880px; }}
.attr {{ display:flex; align-items:center; gap:16px; margin-bottom:20px; }}
.avatar {{ width:56px; height:56px; border-radius:50%; background:#D94F00;
  display:flex; align-items:center; justify-content:center;
  font-family:'Bebas Neue',sans-serif; font-size:22px; color:#fff; flex-shrink:0; }}
.attr-name {{ font-family:'Barlow Condensed',sans-serif; font-size:26px;
  font-weight:700; color:#fff; }}
.attr-sub {{ font-family:'Barlow',sans-serif; font-size:18px; color:#555; }}

.cta-bar {{ background:#D94F00; margin:0 -52px;
  padding:24px 52px; display:flex; justify-content:space-between; align-items:center; }}
.cta-left .cta-main {{ font-family:'Bebas Neue',sans-serif; font-size:44px;
  color:#fff; letter-spacing:2px; line-height:1; }}
.cta-left .cta-sub {{ font-family:'Barlow',sans-serif; font-size:18px;
  color:rgba(255,255,255,0.65); }}
.cta-right {{ text-align:right; }}
.cta-price-old {{ font-family:'Barlow',sans-serif; font-size:18px;
  color:rgba(255,255,255,0.45); text-decoration:line-through; }}
.cta-price-new {{ font-family:'Bebas Neue',sans-serif; font-size:58px;
  color:#fff; letter-spacing:1px; line-height:1; }}
"""
    body = f"""<div class="ad">
  <div class="photo-top">
    <img src="{s['after']}" alt="After">
    <div class="photo-tag">📍 {s['suburb']}, QLD</div>
    <div class="before-mini">
      <img src="{s['before']}" alt="Before">
      <div class="before-mini-tag">BEFORE</div>
    </div>
  </div>
  <div class="content">
    <div>
      <div class="stars">
        <span class="star">★</span><span class="star">★</span><span class="star">★</span>
        <span class="star">★</span><span class="star">★</span>
        <span class="review-ct">{b['reviews']} Google Reviews</span>
      </div>
      <div class="quote-mark">"</div>
      <div class="quote-text">{b['quote']}</div>
      <div class="attr">
        <div class="avatar">{b['customer'][0]}{b['customer'].split()[1][0]}</div>
        <div>
          <div class="attr-name">{b['customer']}</div>
          <div class="attr-sub">{b['customer_suburb']} QLD · Verified customer</div>
        </div>
      </div>
    </div>
    <div class="cta-bar">
      <div class="cta-left">
        <div class="cta-sub">Free quote · Zero deposit</div>
        <div class="cta-main">Call Sam → {b['phone']}</div>
      </div>
      <div class="cta-right">
        <div class="cta-price-old">Standard {b['standard']}</div>
        <div class="cta-price-new">{b['area']}</div>
      </div>
    </div>
  </div>
</div>"""
    return html(f"Set {n} · V4 Social Proof · 1080×1350", 1080, 1350, style, body)


# ═══════════════════════════════════════════════════════════════════════════════
#  V5 — HOOK / CURIOSITY  (1080 × 1080)
#  Angle: Problem awareness — the scroll-stopper fear hook
# ═══════════════════════════════════════════════════════════════════════════════

def v5_hook(s, n):
    b, a = BRAND, s
    style = f"""
.ad {{ width:1080px; height:1080px; position:relative; overflow:hidden; background:#0a0a0a; }}

.bg {{ position:absolute; inset:0; width:100%; height:100%;
  object-fit:cover; object-position:center;
  filter:grayscale(30%) brightness(0.55) contrast(1.2) saturate(0.6); }}

.grad-top {{ position:absolute; top:0; left:0; right:0; height:40%;
  background:linear-gradient(180deg,rgba(0,0,0,0.88) 0%,transparent 100%); z-index:2; }}
.grad-bot {{ position:absolute; bottom:0; left:0; right:0; height:52%;
  background:linear-gradient(0deg,rgba(0,0,0,0.98) 0%,rgba(0,0,0,0.5) 60%,transparent 100%); z-index:2; }}

/* Red annotation circle */
.annotation {{ position:absolute; top:28%; left:42%; z-index:8; }}
.ann-circle {{ width:180px; height:180px; border-radius:50%;
  border:6px solid #ff3232;
  box-shadow:0 0 0 4px rgba(255,50,50,0.25), 0 0 40px rgba(255,50,50,0.3); }}
.ann-line {{ position:absolute; bottom:-60px; left:50%; width:3px; height:60px;
  background:#ff3232; transform:translateX(-50%); }}
.ann-label {{ position:absolute; bottom:-90px; left:50%; transform:translateX(-50%);
  background:#ff3232; color:#fff; font-family:'Barlow Condensed',sans-serif;
  font-size:18px; font-weight:700; letter-spacing:1px; padding:5px 14px;
  white-space:nowrap; text-transform:uppercase; }}

/* Top hook text */
.hook-top {{ position:absolute; top:40px; left:44px; right:44px; z-index:10; }}
.eyebrow {{ font-family:'Barlow Condensed',sans-serif; font-size:22px; font-weight:700;
  color:#D94F00; text-transform:uppercase; letter-spacing:5px; margin-bottom:12px;
  display:flex; align-items:center; gap:14px; }}
.eyebrow::before {{ content:''; display:block; width:32px; height:3px; background:#D94F00; }}
.hook-head {{ font-family:'Bebas Neue',sans-serif; font-size:96px;
  color:#fff; line-height:0.88; letter-spacing:2px; max-width:860px; }}
.hook-head .acc {{ color:#D94F00; }}

/* After inset - bottom right */
.after-inset {{ position:absolute; bottom:240px; right:44px; z-index:10; }}
.after-inset img {{ width:220px; height:160px; object-fit:cover;
  border:4px solid #D94F00; display:block;
  filter:brightness(1.0) saturate(1.2); }}
.after-inset-tag {{ background:#D94F00; color:#fff;
  font-family:'Bebas Neue',sans-serif; font-size:18px; letter-spacing:2px;
  padding:5px 12px; text-align:center; }}

/* Bottom CTA */
.bottom {{ position:absolute; bottom:0; left:0; right:0; padding:0 44px 44px; z-index:10; }}
.cta-hook {{ font-family:'Barlow Condensed',sans-serif; font-size:28px;
  color:rgba(255,255,255,0.55); font-style:italic; margin-bottom:10px; }}
.cta-main-row {{ display:flex; justify-content:space-between; align-items:flex-end; }}
.cta-text {{ font-family:'Bebas Neue',sans-serif; font-size:64px;
  color:#D94F00; letter-spacing:2px; line-height:0.9; }}
.cta-detail {{ text-align:right; }}
.cta-phone {{ font-family:'Bebas Neue',sans-serif; font-size:40px;
  color:#fff; letter-spacing:1px; }}
.cta-sub {{ font-family:'Barlow',sans-serif; font-size:18px; color:#555; }}
.badges {{ display:flex; gap:12px; margin-top:16px; flex-wrap:wrap; }}
.badge {{ font-size:16px; color:#444; border:1px solid #252525;
  padding:4px 12px; font-family:'Barlow',sans-serif; }}
"""
    body = f"""<div class="ad">
  <img class="bg" src="{s['before']}" alt="Before">
  <div class="grad-top"></div>
  <div class="grad-bot"></div>

  <div class="annotation">
    <div class="ann-circle"></div>
    <div class="ann-line"></div>
    <div class="ann-label">⚠ Water entry point</div>
  </div>

  <div class="hook-top">
    <div class="eyebrow">{s['suburb']}</div>
    <div class="hook-head">This is your<br>roof from <span class="acc">above.</span></div>
  </div>

  <div class="after-inset">
    <img src="{s['after']}" alt="After">
    <div class="after-inset-tag">✓ After Sam</div>
  </div>

  <div class="bottom">
    <div class="cta-hook">{s['hook']}</div>
    <div class="cta-main-row">
      <div class="cta-text">Free<br>inspection.</div>
      <div class="cta-detail">
        <div class="cta-phone">{b['phone']}</div>
        <div class="cta-sub">Area rate {b['area']} · Fixed price</div>
      </div>
    </div>
    <div class="badges">
      <span class="badge">{b['qbcc']}</span>
      <span class="badge">30 Years Exp.</span>
      <span class="badge">Zero Deposit</span>
      <span class="badge">Dulux 10yr Warranty</span>
      <span class="badge">★★★★★ {b['reviews']} Reviews</span>
    </div>
  </div>
</div>"""
    return html(f"Set {n} · V5 Hook · 1080×1080", 1080, 1080, style, body)


# ── GENERATE ALL 20 FILES ──────────────────────────────────────────────────────

VARIANTS = [
    ("v1-split.html",   v1_split,   "Before/After Split  · 1080×1080 · Feed 1:1"),
    ("v2-story.html",   v2_story,   "Story Reveal        · 1080×1920 · Story/Reel 9:16"),
    ("v3-price.html",   v3_price,   "Price Anchor        · 1080×1080 · Feed 1:1"),
    ("v4-proof.html",   v4_proof,   "Social Proof        · 1080×1350 · Feed 4:5"),
    ("v5-hook.html",    v5_hook,    "Hook / Curiosity    · 1080×1080 · Feed 1:1"),
]

def main():
    count = 0
    for n, s in SETS.items():
        folder = BASE / str(n)
        folder.mkdir(exist_ok=True)
        for filename, fn, desc in VARIANTS:
            out = folder / filename
            out.write_text(fn(s, n), encoding="utf-8")
            print(f"  ✓  {n}/{filename}  ({desc})")
            count += 1
    print(f"\n✅  {count} ads generated in {BASE}/1/ … {BASE}/4/")
    print("   Open any .html in Chrome → Cmd+Shift+4 to screenshot at exact dimensions")

if __name__ == "__main__":
    main()
