'use client'
import { BRAND } from '@/lib/data'

interface AdProps { before: string; after: string; suburb: string; days: string }
const W = 400, H = 500

// ── S1: COMPARE ─────────────────────────────────────────────────────────────
export function SocialCompare({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      {/* Photos row */}
      <div style={{ display: 'flex', width: '100%', height: 270, flexShrink: 0, position: 'relative' }}>
        <div style={{ width: '50%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(20%) brightness(0.85)' }} />
          <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.72)', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '2px', padding: '4px 10px', textTransform: 'uppercase' }}>Before</div>
        </div>
        {/* Divider */}
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 3, background: '#D94F00', zIndex: 5, transform: 'translateX(-50%)' }} />
        <div style={{ width: '50%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', bottom: 10, right: 10, background: '#D94F00', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '2px', padding: '4px 10px', textTransform: 'uppercase' }}>After ✓</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '22px 24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#111', lineHeight: 1.1, marginBottom: 6 }}>Same roof.<br/><span style={{ color: '#D94F00' }}>{days} later.</span></div>
          <div style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>Dulux coating · Repointed · Waterproofed · 10-year warranty</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 10, color: '#bbb', marginBottom: 2 }}>📍 {suburb} · Sam's Roof Coatings</div>
            <div style={{ fontSize: 13, color: '#D94F00', fontWeight: 700 }}>{BRAND.phone}</div>
          </div>
          <div style={{ fontSize: 10, color: '#aaa', textAlign: 'right' }}>Area rate<br/><span style={{ fontSize: 18, fontWeight: 800, color: '#111' }}>{BRAND.area}</span></div>
        </div>
      </div>
    </div>
  )
}

// ── S2: REVEAL ───────────────────────────────────────────────────────────────
export function SocialReveal({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '100%', height: 270, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', top: 14, right: 14, width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', border: '3px solid #fff', boxShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%) brightness(0.7)' }} />
        </div>
        <div style={{ position: 'absolute', top: 92, right: 20, background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '1px', padding: '3px 8px', textTransform: 'uppercase', borderRadius: 2 }}>before</div>
        <div style={{ position: 'absolute', bottom: 10, left: 14, background: '#D94F00', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '2px', padding: '4px 10px', textTransform: 'uppercase' }}>After ✓</div>
      </div>
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>{'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#D94F00', fontSize: 16 }}>{s}</span>)}</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#111', lineHeight: 1.1, marginBottom: 6 }}>The result 🤯</div>
          <div style={{ fontSize: 12, color: '#666', lineHeight: 1.5, marginBottom: 10 }}>{days}. Fixed price. Zero deposit. Dulux 10-year warranty included.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 10, color: '#bbb' }}>📍 {suburb}</div>
          <div style={{ fontSize: 14, color: '#D94F00', fontWeight: 700 }}>{BRAND.phone}</div>
        </div>
      </div>
    </div>
  )
}

// ── S3: HOOK (problem) ────────────────────────────────────────────────────────
export function SocialHook({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '100%', height: 270, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(25%) brightness(0.82)' }} />
        {/* Annotation circle */}
        <div style={{ position: 'absolute', top: '30%', left: '38%', width: 90, height: 90, borderRadius: '50%', border: '3px solid #ff3232', boxShadow: '0 0 0 2px rgba(255,50,50,0.2)' }} />
        <div style={{ position: 'absolute', top: 'calc(30% + 94px)', left: '38%', background: '#ff3232', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '1px', padding: '3px 10px', textTransform: 'uppercase' }}>⚠ Damage</div>
        <div style={{ position: 'absolute', bottom: 10, left: 14, background: 'rgba(0,0,0,0.72)', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '2px', padding: '4px 10px', textTransform: 'uppercase' }}>Before</div>
        {/* After inset — large enough to judge the result */}
        <div style={{ position: 'absolute', bottom: 10, right: 14, width: 140, height: 108, overflow: 'hidden', border: '3px solid #D94F00', boxShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 4, right: 6, background: '#D94F00', color: '#fff', fontSize: 8, fontWeight: 700, letterSpacing: '1.5px', padding: '2px 7px', textTransform: 'uppercase' }}>After ✓</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#D94F00', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8 }}>👀 Your roof from above</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#111', lineHeight: 1.2, marginBottom: 8 }}>Most homeowners have no idea what their roof looks like.</div>
          <div style={{ fontSize: 11, color: '#999', lineHeight: 1.4 }}>Moss. UV fade. Slow leaks. Sam checks for free — no obligation.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 10, color: '#bbb' }}>📍 {suburb}</div>
          <div style={{ fontSize: 14, color: '#D94F00', fontWeight: 700 }}>Free check → {BRAND.phone}</div>
        </div>
      </div>
    </div>
  )
}

// ── S4: VALUE (price) ─────────────────────────────────────────────────────────
export function SocialValue({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      {/* Thumbnail strip */}
      <div style={{ display: 'flex', width: '100%', height: 140, flexShrink: 0 }}>
        <div style={{ width: '50%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%) brightness(0.75)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 10, color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Before</div>
        </div>
        <div style={{ width: '50%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 8, right: 10, background: '#D94F00', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '2px', padding: '2px 8px', textTransform: 'uppercase' }}>After ✓</div>
        </div>
      </div>

      {/* Price comparison */}
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#bbb', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Why restore?</div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
          <div style={{ flex: 1, background: '#fff5f5', border: '1px solid #ffcccc', borderRadius: 8, padding: '12px 14px' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#c00', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>Re-roof</div>
            <div style={{ fontSize: 30, fontWeight: 700, color: '#cc0000', textDecoration: 'line-through', textDecorationColor: '#cc0000', lineHeight: 1 }}>$28k</div>
          </div>
          <div style={{ flex: 1, background: '#f0fff4', border: '1px solid #b2f5c4', borderRadius: 8, padding: '12px 14px' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#0a7a0a', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>Restore</div>
            <div style={{ fontSize: 30, fontWeight: 700, color: '#0a7a0a', lineHeight: 1 }}>{BRAND.area}</div>
          </div>
        </div>
        <div style={{ fontSize: 17, fontWeight: 800, color: '#111', marginBottom: 4 }}>You keep {BRAND.saves} in your pocket.</div>
        <div style={{ fontSize: 11, color: '#888', marginBottom: 14 }}>Same result. Dulux 10-year warranty. Fixed price.</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 10, color: '#bbb' }}>📍 {suburb}</div>
          <div style={{ fontSize: 13, color: '#D94F00', fontWeight: 700 }}>Free quote → {BRAND.phone}</div>
        </div>
      </div>
    </div>
  )
}

// ── S5: CTA ───────────────────────────────────────────────────────────────────
export function SocialCTA({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '28px 28px 24px', fontFamily: "'Inter', sans-serif", justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>{'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#D94F00', fontSize: 22 }}>{s}</span>)}</div>
        <div style={{ fontSize: 11, color: '#888', marginBottom: 20 }}>{BRAND.reviews} five-star Google reviews</div>

        {/* Review card */}
        <div style={{ background: '#f8f8f8', border: '1px solid #eee', borderRadius: 12, padding: '16px 18px', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg, #4285f4, #ea4335, #fbbc05, #34a853)', flexShrink: 0 }} />
            <div style={{ display: 'flex', gap: 1 }}>{'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#fbbc05', fontSize: 13 }}>{s}</span>)}</div>
          </div>
          <div style={{ fontSize: 13, color: '#333', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 8 }}>"{BRAND.quote}"</div>
          <div style={{ fontSize: 11, color: '#888' }}>{BRAND.customer} · {BRAND.customerSuburb} ✓</div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 8 }}>Book your free inspection:</div>
        <div style={{ fontSize: 30, fontWeight: 800, color: '#D94F00', letterSpacing: '-0.5px', marginBottom: 6 }}>{BRAND.phone}</div>
        <div style={{ fontSize: 10, color: '#aaa' }}>📍 {suburb} this month · {BRAND.handle} · {BRAND.qbcc}</div>
      </div>
    </div>
  )
}

export const SocialAds = [SocialCompare, SocialReveal, SocialHook, SocialValue, SocialCTA]
