'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { properties } from '@/app/data/properties'
import PropertyCard from '@/components/PropertyCard'

const MOBILE_LIMIT = 4

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const visibleProperties = isMobile && !showAll ? properties.slice(0, MOBILE_LIMIT) : properties

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
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
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
            display: 'inline-block',
            color: '#C9A96E',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '0.6rem',
          }}>
            Selección especial
          </span>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
            fontWeight: 800,
            color: '#171717',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          }}>
            Propiedades Destacadas
          </h2>
          <span className="section-line" style={{ margin: '0.75rem auto 1rem' }} />
          <p style={{ color: '#737373', fontSize: '1rem', maxWidth: '460px', margin: '0 auto', lineHeight: 1.65 }}>
            Una selección de las mejores propiedades disponibles en Bahía Blanca.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '1.5rem',
        }}>
          {visibleProperties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        {/* Mobile "Ver más" button */}
        {isMobile && !showAll && properties.length > MOBILE_LIMIT && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                backgroundColor: 'transparent',
                border: '1.5px solid #C9A96E',
                color: '#C9A96E',
                padding: '0.75rem 2rem',
                borderRadius: '0.65rem',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              Ver {properties.length - MOBILE_LIMIT} propiedades más
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
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
    </section>
  )
}
