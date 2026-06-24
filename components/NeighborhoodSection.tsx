'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const NEIGHBORHOODS = [
  {
    name: 'Palihue',
    description: 'El barrio más exclusivo. Casas de lujo, seguridad privada y entorno natural privilegiado.',
    tag: 'Premium',
    tagColor: '#b8935a',
    propCount: 18,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Villa Mitre',
    description: 'Barrio tranquilo y familiar. Excelente infraestructura, colegios y parques.',
    tag: 'Familiar',
    tagColor: '#2563EB',
    propCount: 34,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Centro',
    description: 'El corazón de Bahía Blanca. Todo a mano: comercios, transporte y servicios.',
    tag: 'Urbano',
    tagColor: '#7C3AED',
    propCount: 47,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Aldea Romana',
    description: 'Barrio privado en expansión. Lotes y casas modernas con todos los servicios.',
    tag: 'En crecimiento',
    tagColor: '#059669',
    propCount: 22,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Barrio Universitario',
    description: 'Ideal para estudiantes e inversores. Cerca de la UNS con gran demanda de alquiler.',
    tag: 'Inversión',
    tagColor: '#D97706',
    propCount: 29,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Las Villas',
    description: 'Barrio cerrado seguro y tranquilo. Perfecta calidad de vida para familias.',
    tag: 'Seguro',
    tagColor: '#DC2626',
    propCount: 15,
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=700&q=80',
  },
]

// Stacking config
// IMPORTANT: sticky cards must be DIRECT children of scroll container — no wrapper divs
// IMPORTANT: parent must NOT have overflow: hidden (breaks sticky)
const CARD_H = 250        // card height in px
const PEEK = 32           // how many px of each older card peek above the newer one
const STICKY_BASE = 64    // distance from viewport top where card 0 sticks (below navbar)

function CardContent({ n, i, hovered, onEnter, onLeave, onClick }: {
  n: typeof NEIGHBORHOODS[0]
  i: number
  hovered: number | null
  onEnter: () => void
  onLeave: () => void
  onClick: () => void
}) {
  const isHovered = hovered === i
  return (
    <div
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '1.2rem',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <img
        src={n.image}
        alt={n.name}
        loading="lazy"
        decoding="async"
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', display: 'block',
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
          transform: isHovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />
      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.92) 100%)',
      }} />
      {/* Top-left tag */}
      <span style={{
        position: 'absolute', top: '0.85rem', left: '0.85rem',
        backgroundColor: n.tagColor, color: '#fff',
        padding: '0.22rem 0.75rem', borderRadius: '9999px',
        fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em',
        textTransform: 'uppercase',
      }}>
        {n.tag}
      </span>
      {/* Top-right count */}
      <span style={{
        position: 'absolute', top: '0.85rem', right: '0.85rem',
        backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
        color: '#fff', padding: '0.22rem 0.7rem', borderRadius: '9999px',
        fontSize: '0.65rem', fontWeight: 600,
      }}>
        {n.propCount} prop.
      </span>
      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '1rem 1.15rem',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      }}>
        <div>
          <h3 style={{
            color: '#fff', fontSize: '1.15rem', fontWeight: 800,
            letterSpacing: '-0.025em', marginBottom: '0.2rem',
          }}>
            {n.name}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem', lineHeight: 1.4 }}>
            {n.description}
          </p>
        </div>
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%',
          backgroundColor: '#C9A96E',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginLeft: '0.75rem',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.12)' : 'scale(1)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function NeighborhoodSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach((el) => el.classList.add('revealed'))
            entry.target.querySelectorAll('.section-line').forEach((el) => el.classList.add('revealed'))
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#0f0f0f',
        // NO overflow: hidden — it breaks position: sticky on children
        padding: isMobile ? '3rem 0 0' : '6rem 1.5rem',
      }}
    >
      {/* Header */}
      <div className="reveal" style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
        padding: isMobile ? '0 1.5rem' : 0,
      }}>
        <span style={{
          color: '#C9A96E', fontWeight: 700, fontSize: '0.7rem',
          letterSpacing: '0.16em', textTransform: 'uppercase',
          display: 'block', marginBottom: '0.6rem',
        }}>
          Explorar por zona
        </span>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
          fontWeight: 800, color: '#ffffff',
          letterSpacing: '-0.03em', lineHeight: 1.1,
        }}>
          {isMobile ? <>Los mejores<br />barrios</> : 'Los mejores barrios de Bahía Blanca'}
        </h2>
        <span className="section-line" style={{ margin: '0.75rem auto 1rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto', lineHeight: 1.65 }}>
          Conocé cada barrio y encontrá el que mejor se adapta a tu estilo de vida.
        </p>
      </div>

      {isMobile ? (
        /* ─── MOBILE: TRUE sticky stacking
           - Cards are DIRECT children (no wrappers) so sticky spans the whole container
           - Each card sticks at a progressively lower top value = deck builds up
           - The natural flow height (6 × CARD_H) creates the scroll distance    ─── */
        <div style={{ position: 'relative' }}>

          {/* Scroll hint */}
          <div style={{
            textAlign: 'center', marginBottom: '1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
            color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', fontWeight: 500,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ animation: 'float 1.8s ease-in-out infinite' }}>
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Bajá para explorar barrios
          </div>

          {/*
            KEY: cards are direct sticky children.
            Card 0 sticks at top=64px.
            Card 1 sticks at top=96px (32px lower) → covers card 0, leaving 32px peeking at top.
            Card 2 sticks at top=128px → covers card 1, cards 0+1 peek at top.
            etc.
            Scroll distance per card = CARD_H (250px) because each sticky card
            occupies its full height in normal flow.
          */}
          {NEIGHBORHOODS.map((n, i) => (
            <div
              key={i}
              style={{
                position: 'sticky',
                top: `${STICKY_BASE + i * PEEK}px`,
                zIndex: i + 1,
                height: `${CARD_H}px`,
                padding: '0 1.1rem',
              }}
            >
              <CardContent
                n={n} i={i}
                hovered={hovered}
                onEnter={() => setHovered(i)}
                onLeave={() => setHovered(null)}
                onClick={() => router.push(`/propiedades?zone=${encodeURIComponent(n.name)}`)}
              />
            </div>
          ))}

          {/* Bottom padding so last card rests visible before section ends */}
          <div style={{ height: '160px', backgroundColor: '#0f0f0f' }} />
        </div>
      ) : (
        /* ─── DESKTOP: 3-column grid ─────────────────────────────── */
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }} className="neighborhood-grid">
            {NEIGHBORHOODS.map((n, i) => (
              <div
                key={i}
                className={`reveal-scale stagger-${i + 1}`}
                style={{ height: '268px', borderRadius: '1.2rem', overflow: 'hidden' }}
              >
                <CardContent
                  n={n} i={i}
                  hovered={hovered}
                  onEnter={() => setHovered(i)}
                  onLeave={() => setHovered(null)}
                  onClick={() => router.push(`/propiedades?zone=${encodeURIComponent(n.name)}`)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1000px) and (min-width: 768px) {
          .neighborhood-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
