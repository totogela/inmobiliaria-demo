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
// WRAPPER_H must be > CARD_H so each card is fully visible before the next enters
const CARD_H = 245       // full card height (px)
const WRAPPER_H = 310    // scroll distance per card = CARD_H + 65px pause
const PEEK = 30          // px each older card peeks out at the top of the stack
const STICKY_BASE = 66   // distance from viewport top where cards stick (below navbar)

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
      onTouchStart={() => {/* allow touch */}}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '1.15rem',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: isHovered
          ? '0 28px 60px rgba(0,0,0,0.28)'
          : '0 8px 28px rgba(0,0,0,0.14)',
        transition: 'box-shadow 0.35s ease',
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
          transition: 'transform 0.65s cubic-bezier(0.22,1,0.36,1)',
          transform: isHovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />
      {/* Dark gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.72) 70%, rgba(0,0,0,0.9) 100%)',
      }} />
      {/* Tag top-left */}
      <span style={{
        position: 'absolute', top: '0.85rem', left: '0.85rem',
        backgroundColor: n.tagColor, color: '#fff',
        padding: '0.22rem 0.75rem', borderRadius: '9999px',
        fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}>
        {n.tag}
      </span>
      {/* Count top-right */}
      <span style={{
        position: 'absolute', top: '0.85rem', right: '0.85rem',
        backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
        color: '#fff', padding: '0.22rem 0.7rem', borderRadius: '9999px',
        fontSize: '0.66rem', fontWeight: 600,
      }}>
        {n.propCount} prop.
      </span>
      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0.9rem 1.1rem',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      }}>
        <div>
          <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.18rem' }}>
            {n.name}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.73rem', lineHeight: 1.4 }}>
            {n.description}
          </p>
        </div>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          backgroundColor: '#C9A96E',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginLeft: '0.75rem',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
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
        padding: isMobile ? '3rem 0 0' : '6rem 1.5rem',
        overflow: 'hidden',
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

      {/* ─── MOBILE: Sticky stacking effect ─────────────────────── */}
      {isMobile ? (
        <div style={{ position: 'relative' }}>
          {/* Scroll hint */}
          <div style={{
            textAlign: 'center', marginBottom: '0.75rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem',
            color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', fontWeight: 500,
            animation: 'float 2s ease-in-out infinite',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Bajá para explorar barrios
          </div>

          {NEIGHBORHOODS.map((n, i) => (
            <div
              key={i}
              style={{ height: `${WRAPPER_H}px`, position: 'relative' }}
            >
              <div style={{
                position: 'sticky',
                top: `${STICKY_BASE + i * PEEK}px`,
                zIndex: i + 1,
                height: `${CARD_H}px`,
                padding: '0 1.1rem',
              }}>
                <CardContent
                  n={n} i={i}
                  hovered={hovered}
                  onEnter={() => setHovered(i)}
                  onLeave={() => setHovered(null)}
                  onClick={() => router.push(`/propiedades?zone=${encodeURIComponent(n.name)}`)}
                />
              </div>
            </div>
          ))}

          {/* Extra space so last card is fully visible and readable */}
          <div style={{ height: `${CARD_H + 80}px` }} />
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
                style={{ height: '268px', borderRadius: '1.15rem', overflow: 'hidden' }}
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
