'use client'

import { useEffect, useRef, useState } from 'react'

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1600596542815-0c8b89e197b5?auto=format&fit=crop&w=800&q=85', alt: 'Casa moderna exterior', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1631679706909-1db37fc7f7c9?auto=format&fit=crop&w=800&q=85', alt: 'Living room de lujo', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=85', alt: 'Cocina moderna', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1578683569230-d21a7eabc5be?auto=format&fit=crop&w=800&q=85', alt: 'Pileta exterior', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85', alt: 'Dormitorio principal', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=85', alt: 'Comedor elegante', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=85', alt: 'Fachada premium', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1575517111839-3a3843ee29ad?auto=format&fit=crop&w=800&q=85', alt: 'Jardín amplio', span: 'normal' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85', alt: 'Sala de estar', span: 'wide' },
]

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)

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

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <section ref={sectionRef} style={{ padding: '6rem 1.5rem', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            color: '#C9A96E', fontWeight: 600, fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem',
          }}>
            Nuestras propiedades
          </span>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
            fontWeight: 800, color: '#171717',
            letterSpacing: '-0.03em', lineHeight: 1.15,
          }}>
            Galería de espacios
          </h2>
          <span className="section-line" style={{ margin: '0.75rem auto 1rem' }} />
          <p style={{ color: '#737373', fontSize: '1rem', maxWidth: '460px', margin: '0 auto', lineHeight: 1.65 }}>
            Cada propiedad es una historia. Descubrí los espacios que tenemos para ofrecerte.
          </p>
        </div>

        {/* Masonry grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '200px',
          gap: '0.75rem',
        }}>
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`reveal-scale stagger-${i + 1}`}
              onClick={() => setLightbox(photo.src)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                gridColumn: photo.span === 'wide' ? 'span 2' : 'span 1',
                gridRow: photo.span === 'tall' ? 'span 2' : 'span 1',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                cursor: 'zoom-in',
                position: 'relative',
                backgroundColor: '#f0f0f0',
              }}
            >
              <img
                src={photo.src.replace('q=85', 'q=70').replace('w=800', 'w=560')}
                alt={photo.alt}
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding="async"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.55s ease',
                  transform: hovered === i ? 'scale(1.08)' : 'scale(1)',
                  display: 'block',
                }}
              />
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,0,0,0.28)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}>
                <div style={{
                  width: '44px', height: '44px',
                  backgroundColor: 'rgba(255,255,255,0.92)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transform: hovered === i ? 'scale(1)' : 'scale(0.7)',
                  transition: 'transform 0.3s ease',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <span style={{
                  position: 'absolute', bottom: '0.85rem', left: '0.85rem',
                  color: '#ffffff', fontSize: '0.8rem', fontWeight: 500,
                }}>
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive note */}
        <style>{`
          @media (max-width: 768px) {
            .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .gallery-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              background: 'rgba(255,255,255,0.12)', border: 'none',
              borderRadius: '50%', width: '40px', height: '40px',
              cursor: 'pointer', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt="Foto ampliada"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw', maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '0.75rem',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
              animation: 'scaleIn 0.25s ease',
            }}
          />
        </div>
      )}
    </section>
  )
}
