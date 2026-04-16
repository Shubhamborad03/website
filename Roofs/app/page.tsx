'use client'
import { useState } from 'react'
import { IMAGE_SETS, BRAND } from '@/lib/data'
import ImagePicker from '@/components/ImagePicker'
import { SocialAds } from '@/components/ads/social'
import { BoldAds } from '@/components/ads/bold'
import { MinimalAds } from '@/components/ads/minimal'
import { DarkAds } from '@/components/ads/dark'

const AD_LABELS = ['Compare', 'Reveal', 'Hook', 'Value', 'CTA']

const STYLES = [
  { name: 'Social', description: 'White · Organic · Instagram-native', ads: SocialAds },
  { name: 'Bold', description: 'Dark · Bebas Neue · High-impact', ads: BoldAds },
  { name: 'Minimal', description: 'Off-white · Plus Jakarta Sans · Clean', ads: MinimalAds },
  { name: 'Dark', description: 'Dark · Inter · Modern dark', ads: DarkAds },
]

function AdCard({ Ad, before, after, suburb, days, label }: {
  Ad: React.ComponentType<{ before: string; after: string; suburb: string; days: string }>
  before: string; after: string; suburb: string; days: string; label: string
}) {
  return (
    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      {/* Scale container: ad is 400×500, preview at 0.5 = 200×250 */}
      <div style={{ width: 200, height: 250, overflow: 'hidden', borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
        <div style={{ width: 400, height: 500, transform: 'scale(0.5)', transformOrigin: 'top left' }}>
          <Ad before={before} after={after} suburb={suburb} days={days} />
        </div>
      </div>
      <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>{label}</div>
    </div>
  )
}

function StyleRow({ styleName, description, ads, set }: {
  styleName: string; description: string
  ads: React.ComponentType<{ before: string; after: string; suburb: string; days: string }>[]
  set: typeof IMAGE_SETS[0]
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      {/* Style header */}
      <div style={{ padding: '0 20px 16px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif", marginBottom: 2 }}>{styleName}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif" }}>{description}</div>
        </div>
        <div style={{ fontSize: 10, color: '#D94F00', fontFamily: "'Inter', sans-serif", letterSpacing: '1px' }}>5 ads</div>
      </div>

      {/* Horizontal scroll of 5 ads */}
      <div style={{ overflowX: 'auto', paddingLeft: 20, paddingRight: 20, paddingBottom: 8 }}>
        <div style={{ display: 'flex', gap: 14, width: 'max-content' }}>
          {ads.map((Ad, i) => (
            <AdCard
              key={i}
              Ad={Ad}
              before={set.before}
              after={set.after}
              suburb={set.suburb}
              days={set.days}
              label={AD_LABELS[i]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [selectedId, setSelectedId] = useState(1)
  const selectedSet = IMAGE_SETS.find(s => s.id === selectedId)!

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e0e', maxWidth: 520, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ padding: '48px 20px 32px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(217,79,0,0.12)', border: '1px solid rgba(217,79,0,0.25)', borderRadius: 20, padding: '5px 14px', marginBottom: 16 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D94F00' }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '3px', color: '#D94F00', fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>Ad Preview</span>
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: 8 }}>
          {BRAND.name}
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
          4 styles × 5 ads each · 20 unique ads per job
        </p>
      </div>

      {/* Image Picker */}
      <ImagePicker sets={IMAGE_SETS} selected={selectedId} onSelect={setSelectedId} />

      {/* Selected label */}
      <div style={{ padding: '0 20px 28px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 20px' }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif" }}>Showing ads for </span>
          <span style={{ fontSize: 12, color: '#fff', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>{selectedSet.suburb} · {selectedSet.roofType}</span>
        </div>
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '0 20px 36px' }} />

      {/* 4 style rows */}
      {STYLES.map(style => (
        <StyleRow
          key={style.name}
          styleName={style.name}
          description={style.description}
          ads={style.ads}
          set={selectedSet}
        />
      ))}

      {/* Footer */}
      <div style={{ padding: '24px 20px 48px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: "'Inter', sans-serif", letterSpacing: '1px' }}>
          {BRAND.name} · {BRAND.phone} · {BRAND.qbcc}
        </div>
      </div>
    </div>
  )
}
