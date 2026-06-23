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

export default function NeighborhoodSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const router = useRouter()

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
    <section ref={sectionRef} style={{ padding: '6rem 1.5rem', backgroundColor: '#f9f8f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            color: '#C9A96E', fontWeight: 600, fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem',
          }}>
            Explorar por zona
          </span>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
            fontWeight: 800, color: '#171717',
            letterSpacing: '-0.03em', lineHeight: 1.15,
          }}>
            Los mejores barrios de Bahía Blanca
          </h2>
          <span className="section-line" style={{ margin: '0.75rem auto 1rem' }} />
          <p style={{ color: '#737373', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
            Conocé cada barrio y encontrá el que mejor se adapta a tu estilo de vida.
          </p>
        </div>

        {/* Uniform 3-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {NEIGHBORHOODS.map((n, i) => (
            <div
              key={i}
              className={`reveal-scale stagger-${i + 1}`}
              onClick={() => router.push(`/propiedades?zone=${encodeURIComponent(n.name)}`)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                height: '260px',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: hovered === i ? '0 20px 48px rgba(0,0,0,0.2)' : '0 4px 16px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                transform: hovered === i ? 'translateY(-5px)' : 'translateY(0)',
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
                  transition: 'transform 0.6s ease',
                  transform: hovered === i ? 'scale(1.08)' : 'scale(1)',
                }}
              />

              {/* Gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.04) 100%)',
              }} />

              {/* Tag */}
              <span style={{
                position: 'absolute', top: '0.85rem', left: '0.85rem',
                backgroundColor: n.tagColor,
                color: '#ffffff',
                padding: '0.22rem 0.65rem',
                borderRadius: '9999px',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}>
                {n.tag}
              </span>

              {/* Prop count */}
              <span style={{
                position: 'absolute', top: '0.85rem', right: '0.85rem',
                backgroundColor: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(4px)',
                color: '#ffffff',
                padding: '0.22rem 0.65rem',
                borderRadius: '9999px',
                fontSize: '0.68rem',
                fontWeight: 600,
              }}>
                {n.propCount} propiedades
              </span>

              {/* Content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem' }}>
                <h3 style={{
                  color: '#ffffff', fontSize: '1.2rem', fontWeight: 800,
                  letterSpacing: '-0.02em', marginBottom: '0.3rem',
                }}>
                  {n.name}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.72)', fontSize: '0.78rem',
                  lineHeight: 1.5, marginBottom: '0.75rem',
                }}>
                  {n.description}
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  color: '#C9A96E', fontSize: '0.78rem', fontWeight: 600,
                }}>
                  Ver propiedades
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 900px) {
            .neighborhood-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 540px) {
            .neighborhood-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
