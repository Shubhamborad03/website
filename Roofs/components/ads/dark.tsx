'use client'
import { BRAND } from '@/lib/data'

interface AdProps { before: string; after: string; suburb: string; days: string }
const W = 400, H = 500

// ── D1: COMPARE ──────────────────────────────────────────────────────────────
export function DarkCompare({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#141414', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      {/* Split photos */}
      <div style={{ display: 'flex', width: '100%', height: 280, flexShrink: 0, position: 'relative' }}>
        <div style={{ width: '50%', height: '100%', overflow: 'hidden' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.55) contrast(1.1) grayscale(20%)' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '50%', background: 'linear-gradient(90deg, transparent 70%, rgba(20,20,20,0.6) 100%)' }} />
        </div>
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#D94F00', zIndex: 10, transform: 'translateX(-50%)' }} />
        <div style={{ width: '50%', height: '100%', overflow: 'hidden' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.82) saturate(1.1)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '50%', left: '50%', background: 'linear-gradient(270deg, transparent 70%, rgba(20,20,20,0.4) 100%)' }} />
        </div>
        {/* Labels */}
        <div style={{ position: 'absolute', top: 14, left: 14, fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '3px', textTransform: 'uppercase' }}>before</div>
        <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 9, fontWeight: 700, color: '#D94F00', letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'right' }}>after</div>
      </div>

      {/* Thin orange bar */}
      <div style={{ height: 2, background: '#D94F00', flexShrink: 0 }} />

      {/* Content */}
      <div style={{ flex: 1, padding: '18px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 6 }}>Same house. Transformed.</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{days} · Dulux coating · Repointed · 10yr warranty</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 10, color: '#555', marginBottom: 2 }}>📍 {suburb}</div>
            <div style={{ fontSize: 13, color: '#D94F00', fontWeight: 600 }}>{BRAND.phone}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: '#555', marginBottom: 2 }}>area rate</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{BRAND.area}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── D2: REVEAL ────────────────────────────────────────────────────────────────
export function DarkReveal({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#141414', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '100%', height: 288, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.78) saturate(1.08)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,20,20,0.1) 0%, rgba(20,20,20,0.75) 100%)' }} />
        {/* Before inset */}
        <div style={{ position: 'absolute', top: 14, right: 14, width: 80, height: 62, overflow: 'hidden', border: '2px solid #D94F00' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%) brightness(0.6)' }} />
        </div>
        <div style={{ position: 'absolute', top: 82, right: 14, fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'right' }}>before →</div>
        <div style={{ position: 'absolute', bottom: 14, left: 14, fontSize: 9, fontWeight: 700, color: '#D94F00', letterSpacing: '2px', textTransform: 'uppercase' }}>✓ After</div>
      </div>
      <div style={{ flex: 1, padding: '18px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 6 }}>Completely<br/>restored.</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>Dulux 10-year warranty. Fixed price. Zero deposit.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 10, color: '#444' }}>📍 {suburb}</div>
          <div style={{ fontSize: 13, color: '#D94F00', fontWeight: 600 }}>{BRAND.phone}</div>
        </div>
      </div>
    </div>
  )
}

// ── D3: HOOK (problem) ────────────────────────────────────────────────────────
export function DarkHook({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#141414', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '100%', height: 288, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(35%) brightness(0.48) contrast(1.15)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,20,20,0.2) 0%, rgba(20,20,20,0.85) 100%)' }} />
        {/* Annotation */}
        <div style={{ position: 'absolute', top: '26%', left: '36%', width: 86, height: 86, borderRadius: '50%', border: '3px solid #ff3232', boxShadow: '0 0 16px rgba(255,50,50,0.25)' }} />
        {/* After inset — large enough to judge the result */}
        <div style={{ position: 'absolute', bottom: 14, right: 14, width: 140, height: 108, overflow: 'hidden', border: '3px solid #D94F00', boxShadow: '0 2px 14px rgba(0,0,0,0.6)' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
          <div style={{ position: 'absolute', bottom: 4, right: 6, fontSize: 8, fontWeight: 700, color: '#D94F00', letterSpacing: '1.5px', padding: '2px 7px', textTransform: 'uppercase' }}>After ✓</div>
        </div>
        <div style={{ position: 'absolute', bottom: 14, left: 14, fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>before</div>
      </div>
      <div style={{ flex: 1, padding: '18px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 6 }}>What neglect looks like from above.</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.4 }}>You can't see it from the ground. Sam checks for free.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 10, color: '#444' }}>📍 {suburb}</div>
          <div style={{ fontSize: 12, color: '#D94F00', fontWeight: 600 }}>Free check → {BRAND.phone}</div>
        </div>
      </div>
    </div>
  )
}

// ── D4: VALUE ─────────────────────────────────────────────────────────────────
export function DarkValue({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#141414', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 32px', fontFamily: "'Inter', sans-serif" }}>
      {/* Thumbnail strip */}
      <div style={{ display: 'flex', gap: 6, width: '100%', marginBottom: 28 }}>
        <div style={{ flex: 1, height: 64, overflow: 'hidden' }}>
          <img src={before} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) brightness(0.5)' }} />
        </div>
        <div style={{ flex: 1, height: 64, overflow: 'hidden' }}>
          <img src={after} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.82)' }} />
        </div>
      </div>

      <div style={{ fontSize: 10, fontWeight: 700, color: '#444', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 8 }}>Cost comparison</div>

      <div style={{ position: 'relative', marginBottom: 6 }}>
        <div style={{ fontSize: 72, fontWeight: 700, color: 'rgba(255,255,255,0.12)', lineHeight: 0.9 }}>{BRAND.reroof}</div>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 4, background: '#ff4444', opacity: 0.7, transform: 'translateY(-50%) rotate(-1deg)' }} />
      </div>
      <div style={{ fontSize: 13, color: '#555', marginBottom: 16 }}>↓ New roof average</div>

      <div style={{ fontSize: 80, fontWeight: 700, color: '#D94F00', lineHeight: 0.85, marginBottom: 14 }}>{BRAND.area}</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 6 }}>Restore. Same result. Save {BRAND.saves}.</div>
      <div style={{ fontSize: 11, color: '#3a3a3a' }}>Fixed price · Zero deposit · Dulux 10yr · {suburb}</div>
    </div>
  )
}

// ── D5: CTA ───────────────────────────────────────────────────────────────────
export function DarkCTA({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#141414', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '32px 28px', fontFamily: "'Inter', sans-serif", justifyContent: 'space-between', borderTop: '3px solid #D94F00' }}>
      <div>
        <div style={{ display: 'flex', gap: 2, marginBottom: 6 }}>{'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: '#D94F00', fontSize: 20 }}>{s}</span>)}</div>
        <div style={{ fontSize: 10, color: '#555', marginBottom: 20, letterSpacing: '1px' }}>{BRAND.reviews} Google Reviews</div>

        {/* Quote block */}
        <div style={{ background: '#1e1e1e', border: '1px solid #2a2a2a', padding: '16px 18px', marginBottom: 20 }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: 8 }}>"{BRAND.quote}"</div>
          <div style={{ fontSize: 10, color: '#D94F00', letterSpacing: '1px' }}>{BRAND.customer} · {BRAND.customerSuburb}</div>
        </div>
      </div>

      <div>
        <div style={{ width: '100%', height: 1, background: '#2a2a2a', marginBottom: 18 }} />
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>Free inspection. No obligation.</div>
        <div style={{ fontSize: 30, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', marginBottom: 6 }}>Free inspection</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#D94F00', marginBottom: 8 }}>{BRAND.phone}</div>
        <div style={{ fontSize: 10, color: '#444' }}>Zero deposit · {BRAND.qbcc} · {suburb}</div>
      </div>
    </div>
  )
}

export const DarkAds = [DarkCompare, DarkReveal, DarkHook, DarkValue, DarkCTA]
