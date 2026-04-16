'use client'
import { BRAND } from '@/lib/data'

interface AdProps { before: string; after: string; suburb: string; days: string }
const W = 400, H = 500

// ── M1: COMPARE ──────────────────────────────────────────────────────────────
export function MinimalCompare({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#F8F7F4', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Split photos flush to top */}
      <div style={{ display: 'flex', width: '100%', height: 260, flexShrink: 0, position: 'relative' }}>
        <div style={{ width: '50%', height: '100%', overflow: 'hidden' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.88) saturate(0.75)' }} />
        </div>
        {/* 1px divider */}
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: '#D94F00', zIndex: 5 }} />
        <div style={{ width: '50%', height: '100%', overflow: 'hidden' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      </div>
      {/* Labels */}
      <div style={{ display: 'flex', padding: '8px 24px', borderBottom: '1px solid #e8e6e1' }}>
        <div style={{ width: '50%', fontSize: 9, fontWeight: 700, color: '#aaa', letterSpacing: '2px', textTransform: 'uppercase' }}>before</div>
        <div style={{ width: '50%', fontSize: 9, fontWeight: 700, color: '#D94F00', letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'right' }}>after ✓</div>
      </div>
      {/* Content */}
      <div style={{ flex: 1, padding: '18px 24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#D94F00', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10 }}>Same house. Completely different.</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#1A1A1A', lineHeight: 1.1, marginBottom: 8 }}>{days}. Fixed price.<br/>Zero deposit.</div>
          <div style={{ fontSize: 12, color: '#888' }}>Dulux 10-year waterproofing warranty included.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 10, color: '#bbb' }}>📍 {suburb}</div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: '#aaa', marginBottom: 2 }}>area rate</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#1A1A1A' }}>{BRAND.area}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── M2: REVEAL ────────────────────────────────────────────────────────────────
export function MinimalReveal({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#F8F7F4', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ width: '100%', height: 265, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        {/* Before strip bottom-left */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 88, height: 65, overflow: 'hidden', borderRight: '2px solid #F8F7F4', borderTop: '2px solid #F8F7F4' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%) brightness(0.75)' }} />
          <div style={{ position: 'absolute', top: 4, left: 6, fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '1px', textTransform: 'uppercase' }}>before</div>
        </div>
        <div style={{ position: 'absolute', bottom: 10, right: 14, background: '#D94F00', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '2px', padding: '4px 10px', textTransform: 'uppercase' }}>After ✓</div>
      </div>
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#D94F00', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8 }}>After · {days}</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#1A1A1A', lineHeight: 1.1, marginBottom: 8 }}>Completely<br/>transformed.</div>
          <div style={{ fontSize: 12, color: '#888', lineHeight: 1.5 }}>Dulux 10-year waterproofing warranty. Fixed price. Zero deposit.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 10, color: '#bbb' }}>📍 {suburb}</div>
          <div style={{ fontSize: 13, color: '#D94F00', fontWeight: 700 }}>{BRAND.phone}</div>
        </div>
      </div>
    </div>
  )
}

// ── M3: HOOK (problem) ────────────────────────────────────────────────────────
export function MinimalHook({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#F8F7F4', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ width: '100%', height: 265, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.85) saturate(0.65)' }} />
        {/* Annotation */}
        <div style={{ position: 'absolute', top: '32%', left: '40%', width: 80, height: 80, borderRadius: '50%', border: '3px solid #D94F00' }} />
        <div style={{ position: 'absolute', bottom: 10, left: 14, background: 'rgba(255,255,255,0.92)', color: '#D94F00', fontSize: 9, fontWeight: 700, letterSpacing: '2px', padding: '4px 10px', textTransform: 'uppercase' }}>Before</div>
        {/* After inset — large enough to judge the result */}
        <div style={{ position: 'absolute', bottom: 10, right: 14, width: 140, height: 108, overflow: 'hidden', border: '3px solid #D94F00', boxShadow: '0 2px 12px rgba(0,0,0,0.35)' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 4, right: 6, background: '#D94F00', color: '#fff', fontSize: 8, fontWeight: 700, letterSpacing: '1.5px', padding: '2px 7px', textTransform: 'uppercase' }}>After ✓</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#D94F00', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 8 }}>Is your roof due?</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#1A1A1A', lineHeight: 1.15, marginBottom: 8 }}>Most homeowners can't see what's happening up there.</div>
          <div style={{ fontSize: 12, color: '#888', lineHeight: 1.4 }}>Sam does a free roof check. No obligation.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 10, color: '#bbb' }}>📍 {suburb}</div>
          <div style={{ fontSize: 12, color: '#D94F00', fontWeight: 700 }}>Free check → {BRAND.phone}</div>
        </div>
      </div>
    </div>
  )
}

// ── M4: VALUE (price) ─────────────────────────────────────────────────────────
export function MinimalValue({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#1A1A1A', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '36px 32px', fontFamily: "'Plus Jakarta Sans', sans-serif", justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#D94F00', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 24 }}>The smarter choice.</div>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 10, color: '#555', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Full re-roof</div>
          <div style={{ fontSize: 62, fontWeight: 800, color: '#333', lineHeight: 0.9, textDecoration: 'line-through', textDecorationColor: '#ff4444', textDecorationThickness: 4 }}>{BRAND.reroof}</div>
        </div>
        <div style={{ width: '100%', height: 1, background: '#2a2a2a', margin: '16px 0' }} />
        <div>
          <div style={{ fontSize: 10, color: '#D94F00', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Sam's area rate</div>
          <div style={{ fontSize: 72, fontWeight: 800, color: '#fff', lineHeight: 0.9 }}>{BRAND.area}</div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Save {BRAND.saves}. Same result.</div>
        <div style={{ fontSize: 11, color: '#555', lineHeight: 1.5 }}>Fixed price. Zero deposit. Dulux 10-year warranty.<br/>{suburb} · {BRAND.qbcc}</div>
      </div>
    </div>
  )
}

// ── M5: CTA ───────────────────────────────────────────────────────────────────
export function MinimalCTA({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#D94F00', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '36px 32px', fontFamily: "'Plus Jakarta Sans', sans-serif", justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1.0, marginBottom: 6 }}>Free<br/>inspection.</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginBottom: 24 }}>We're in {suburb} this month.</div>
        {/* Checklist */}
        {['High-pressure roof clean', 'Ridge cap repointing', 'Dulux primer + 2-coat finish', '10-year waterproofing warranty', 'Zero deposit required'].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontSize: 12, color: '#fff', fontWeight: 500 }}>{item}</span>
          </div>
        ))}
      </div>
      <div>
        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.25)', marginBottom: 16 }} />
        <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{BRAND.phone}</div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '1px' }}>Fixed price · {BRAND.qbcc} · {suburb}</div>
      </div>
    </div>
  )
}

export const MinimalAds = [MinimalCompare, MinimalReveal, MinimalHook, MinimalValue, MinimalCTA]
