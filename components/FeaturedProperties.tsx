'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { properties } from '@/app/data/properties'
import PropertyCard from '@/components/PropertyCard'

// Show only first 5 cards in mobile carousel
const MOBILE_CARDS = properties.slice(0, 5)

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Track active card via scroll position
  const handleScroll = useCallback(() => {
    const el = carouselRef.current
    if (!el) return
    // Each card is ~76vw wide + gap (0.85rem ≈ ~13px)
    const cardWidth = el.scrollWidth / (MOBILE_CARDS.length)
    const index = Math.min(
      Math.round(el.scrollLeft / cardWidth),
      MOBILE_CARDS.length - 1
    )
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll, isMobile])

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
      padding: isMobile ? '3rem 0 2.5rem' : '6rem 1.5rem',
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
        /* ── Mobile: horizontal swipeable carousel, 5 cards ─────── */
        <div>
          {/* Carousel */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0.85rem',
              padding: '0.25rem 1.1rem 0.5rem',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch' as 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            } as React.CSSProperties}
          >
            {MOBILE_CARDS.map((property, i) => (
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
          </div>

          {/* Dots — live tracking */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            marginTop: '1rem',
            marginBottom: '1.25rem',
          }}>
            {MOBILE_CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = carouselRef.current
                  if (!el) return
                  const cardWidth = el.scrollWidth / MOBILE_CARDS.length
                  el.scrollTo({ left: i * cardWidth, behavior: 'smooth' })
                }}
                style={{
                  width: i === activeIndex ? '22px' : '7px',
                  height: '7px',
                  borderRadius: '9999px',
                  backgroundColor: i === activeIndex ? '#C9A96E' : '#d4d4d4',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Ver más — below carousel */}
          {properties.length > 5 && (
            <div style={{ textAlign: 'center', padding: '0 1.5rem' }}>
              <Link
                href="/propiedades"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#171717',
                  color: '#fff',
                  padding: '0.85rem 2rem',
                  borderRadius: '0.65rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                }}
              >
                Ver las {properties.length - 5} propiedades restantes
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
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
