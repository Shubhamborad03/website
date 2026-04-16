'use client'
import { BRAND } from '@/lib/data'

interface AdProps { before: string; after: string; suburb: string; days: string }
const W = 400, H = 500

// ── B1: COMPARE ──────────────────────────────────────────────────────────────
export function BoldCompare({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#0A0A0A', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Split photos */}
      <div style={{ display: 'flex', width: '100%', height: 350, position: 'relative', flexShrink: 0 }}>
        <div style={{ width: '50%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.5) contrast(1.1) grayscale(15%)' }} />
          <div style={{ position: 'absolute', top: 18, left: 18, fontFamily: "'Bebas Neue', sans-serif", fontSize: 38, color: '#fff', letterSpacing: '3px', lineHeight: 1 }}>BEFORE</div>
        </div>
        {/* Orange divider */}
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 6, background: '#D94F00', zIndex: 10, transform: 'translateX(-50%)' }} />
        <div style={{ width: '50%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.85) saturate(1.15)' }} />
          <div style={{ position: 'absolute', top: 18, right: 18, fontFamily: "'Bebas Neue', sans-serif", fontSize: 38, color: '#D94F00', letterSpacing: '3px', lineHeight: 1, textAlign: 'right' }}>AFTER</div>
        </div>
      </div>
      {/* Bottom bar */}
      <div style={{ flex: 1, padding: '16px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#fff', letterSpacing: '2px', lineHeight: 0.9 }}>
          {days.toUpperCase()}.<br/>
          <span style={{ color: '#D94F00' }}>SAME ROOF.</span>
        </div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>
          {suburb} · {BRAND.name} · {BRAND.phone}
        </div>
      </div>
    </div>
  )
}

// ── B2: REVEAL ────────────────────────────────────────────────────────────────
export function BoldReveal({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#0A0A0A', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', height: 320, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.82) saturate(1.1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.85) 100%)' }} />
        {/* Before inset */}
        <div style={{ position: 'absolute', top: 16, right: 16, width: 90, height: 70, overflow: 'hidden', border: '3px solid #D94F00' }}>
          <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) brightness(0.6)' }} />
        </div>
        <div style={{ position: 'absolute', top: 92, right: 16, background: 'rgba(0,0,0,0.8)', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', padding: '2px 8px', textTransform: 'uppercase' }}>before</div>
      </div>
      <div style={{ flex: 1, padding: '14px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: '#fff', letterSpacing: '3px' }}>{days.toUpperCase()}.</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 68, color: '#D94F00', lineHeight: 0.85, letterSpacing: '2px' }}>DONE.</div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>Dulux coating · Waterproofed · 10yr warranty</div>
        </div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>{suburb} · {BRAND.phone}</div>
      </div>
    </div>
  )
}

// ── B3: HOOK (problem) ────────────────────────────────────────────────────────
export function BoldHook({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#0A0A0A', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', height: 320, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={before} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.45) contrast(1.15)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(10,10,10,0.9) 100%)' }} />
        {/* Annotation circle */}
        <div style={{ position: 'absolute', top: '28%', left: '35%', width: 95, height: 95, borderRadius: '50%', border: '4px solid #ff3232', boxShadow: '0 0 20px rgba(255,50,50,0.35)' }} />
        <div style={{ position: 'absolute', top: 16, left: 20, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '3px', textTransform: 'uppercase' }}>{BRAND.name}</div>
        {/* After inset — large enough to judge the result */}
        <div style={{ position: 'absolute', bottom: 14, right: 14, width: 140, height: 108, overflow: 'hidden', border: '3px solid #D94F00', boxShadow: '0 2px 14px rgba(0,0,0,0.6)' }}>
          <img src={after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 4, right: 6, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 9, color: '#D94F00', letterSpacing: '2px', textTransform: 'uppercase' }}>After ✓</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '14px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, color: '#fff', letterSpacing: '2px', lineHeight: 0.88 }}>YOUR ROOF<br/><span style={{ color: '#D94F00' }}>FROM ABOVE 👀</span></div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>Moss. Algae. Cracks. You can't see it from the ground.</div>
        </div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>Free check → {BRAND.phone} · {suburb}</div>
      </div>
    </div>
  )
}

// ── B4: VALUE (price) ─────────────────────────────────────────────────────────
export function BoldValue({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#0A0A0A', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '36px 32px', fontFamily: "'Bebas Neue', sans-serif" }}>
      {/* Thumbnails */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 24, width: '100%' }}>
        <div style={{ flex: 1, height: 72, overflow: 'hidden', position: 'relative' }}>
          <img src={before} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) brightness(0.6)' }} />
          <div style={{ position: 'absolute', bottom: 4, left: 6, fontSize: 8, fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase' }}>Before</div>
        </div>
        <div style={{ flex: 1, height: 72, overflow: 'hidden', position: 'relative' }}>
          <img src={after} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 4, right: 6, fontSize: 8, fontFamily: "'Barlow Condensed', sans-serif", color: '#D94F00', letterSpacing: '2px', textTransform: 'uppercase' }}>After</div>
        </div>
      </div>

      <div style={{ width: '100%', textAlign: 'left' }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: '#555', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 2 }}>Re-roof</div>
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 8 }}>
          <div style={{ fontSize: 80, color: '#2a2a2a', letterSpacing: '2px', lineHeight: 0.9 }}>{BRAND.reroof}</div>
          <div style={{ position: 'absolute', top: '50%', left: -4, right: -4, height: 5, background: '#ff3232', transform: 'translateY(-50%) rotate(-2deg)' }} />
        </div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: '#D94F00', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 2 }}>Restore from</div>
        <div style={{ fontSize: 88, color: '#D94F00', letterSpacing: '2px', lineHeight: 0.85, marginBottom: 14 }}>{BRAND.area}</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, color: '#fff', letterSpacing: '1px', marginBottom: 4 }}>SAME RESULT. 1/6TH THE COST.</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: '#444', letterSpacing: '1px' }}>Fixed price · Zero deposit · Dulux 10yr · {suburb}</div>
      </div>
    </div>
  )
}

// ── B5: CTA ───────────────────────────────────────────────────────────────────
export function BoldCTA({ before, after, suburb, days }: AdProps) {
  return (
    <div style={{ width: W, height: H, background: '#D94F00', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '44px 32px 36px', fontFamily: "'Bebas Neue', sans-serif" }}>
      <div style={{ width: '100%' }}>
        <div style={{ fontSize: 108, color: '#fff', lineHeight: 0.82, letterSpacing: '3px' }}>FREE</div>
        <div style={{ fontSize: 76, color: '#fff', lineHeight: 0.85, letterSpacing: '2px' }}>INSPECTION.</div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.25)', marginBottom: 20 }} />
        <div style={{ fontSize: 52, color: '#fff', letterSpacing: '2px', marginBottom: 10 }}>{BRAND.phone}</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)', letterSpacing: '1px', marginBottom: 4 }}>
          {'★★★★★'} {BRAND.reviews} five-star reviews
        </div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Zero deposit · Fixed price · {BRAND.qbcc} · {suburb}
        </div>
      </div>
    </div>
  )
}

export const BoldAds = [BoldCompare, BoldReveal, BoldHook, BoldValue, BoldCTA]
