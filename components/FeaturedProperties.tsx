'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { properties } from '@/app/data/properties'
import PropertyCard from '@/components/PropertyCard'

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

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
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'))
            entry.target.querySelectorAll('.section-line').forEach((el) => el.classList.add('revealed'))
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{
      padding: isMobile ? '3rem 0' : '6rem 1.5rem',
      backgroundColor: '#f9f8f6',
    }}>
      {/* Header */}
      <div className="reveal" style={{
        textAlign: 'center',
        marginBottom: isMobile ? '1.5rem' : '3rem',
        padding: isMobile ? '0 1.5rem' : 0,
      }}>
        <span style={{
          display: 'inline-block',
          color: '#C9A96E', fontWeight: 700, fontSize: '0.7rem',
          letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.5rem',
        }}>
          Selección especial
        </span>
        <h2 style={{
          fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
          fontWeight: 800, color: '#171717',
          letterSpacing: '-0.03em', lineHeight: 1.1,
        }}>
          Propiedades Destacadas
        </h2>
        <span className="section-line" style={{ margin: '0.65rem auto 0.9rem' }} />
        <p style={{ color: '#737373', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto', lineHeight: 1.65 }}>
          Una selección de las mejores propiedades disponibles en Bahía Blanca.
        </p>
      </div>

      {isMobile ? (
        /* ── Mobile: horizontal swipeable carousel ───────────────── */
        <>
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '0.85rem',
            padding: '0.25rem 1.1rem 1rem',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch' as 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          } as React.CSSProperties}>
            {properties.map((property, i) => (
              <div
                key={property.id}
                style={{
                  minWidth: '76vw',
                  maxWidth: '320px',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                }}
              >
                <PropertyCard property={property} index={i} />
              </div>
            ))}

            {/* End CTA card */}
            <div style={{
              minWidth: '60vw',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              backgroundColor: '#171717',
              borderRadius: '1rem',
              padding: '2rem 1.5rem',
            }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                ¿Querés ver más?
              </div>
              <Link
                href="/propiedades"
                style={{
                  backgroundColor: '#C9A96E',
                  color: '#fff',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '0.65rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'block',
                }}
              >
                Ver todas →
              </Link>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                +{properties.length} propiedades
              </div>
            </div>
          </div>

          {/* Scroll dots indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '0.5rem' }}>
            {[...Array(Math.min(5, properties.length))].map((_, i) => (
              <div key={i} style={{
                width: i === 0 ? '18px' : '6px',
                height: '6px',
                borderRadius: '9999px',
                backgroundColor: i === 0 ? '#C9A96E' : '#d4d4d4',
                transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </>
      ) : (
        /* ── Desktop: grid ───────────────────────────────────────── */
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '1.5rem',
          }}>
            {properties.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              href="/propiedades"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: '#171717',
                color: '#ffffff',
                padding: '0.95rem 2.25rem',
                borderRadius: '0.65rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s, transform 0.15s, box-shadow 0.2s',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3a3a3a'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#171717'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'
              }}
            >
              Ver todas las propiedades
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
