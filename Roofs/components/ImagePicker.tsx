'use client'
import { ImageSet } from '@/lib/data'

interface Props {
  sets: ImageSet[]
  selected: number
  onSelect: (id: number) => void
}

export default function ImagePicker({ sets, selected, onSelect }: Props) {
  return (
    <div style={{ padding: '0 16px 32px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 12 }}>Select a job</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {sets.map(set => (
          <button
            key={set.id}
            onClick={() => onSelect(set.id)}
            style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: `2px solid ${selected === set.id ? '#D94F00' : 'transparent'}`, cursor: 'pointer', aspectRatio: '16/10', padding: 0, background: 'none', transition: 'all 0.2s' }}
          >
            <img
              src={set.after}
              alt={set.suburb}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', filter: selected === set.id ? 'none' : 'brightness(0.55) saturate(0.7)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: selected === set.id ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.35)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 10px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif", letterSpacing: '0.5px' }}>{set.suburb}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', fontFamily: "'Inter', sans-serif" }}>{set.roofType}</div>
            </div>
            {selected === set.id && (
              <div style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderRadius: '50%', background: '#D94F00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
