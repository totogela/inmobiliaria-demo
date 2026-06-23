'use client'

import { useState } from 'react'

interface Props {
  images: string[]
  title: string
}

export default function PropertyImageGallery({ images, title }: Props) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {/* Main image */}
      <div
        style={{
          position: 'relative',
          borderRadius: '1rem',
          overflow: 'hidden',
          aspectRatio: '16/9',
          backgroundColor: '#e8e4dd',
          cursor: 'zoom-in',
        }}
        onClick={() => setLightbox(true)}
      >
        <img
          key={active}
          src={images[active]}
          alt={`${title} — foto ${active + 1}`}
          fetchPriority={active === 0 ? 'high' : 'auto'}
          decoding="async"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block',
            animation: 'fadeIn 0.3s ease',
          }}
        />

        {/* Counter */}
        <span style={{
          position: 'absolute', top: '0.85rem', right: '0.85rem',
          backgroundColor: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(4px)',
          color: '#ffffff',
          padding: '0.25rem 0.7rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}>
          {active + 1} / {images.length}
        </span>

        {/* Expand icon */}
        <span style={{
          position: 'absolute', bottom: '0.85rem', right: '0.85rem',
          backgroundColor: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(4px)',
          color: '#ffffff',
          width: '34px', height: '34px',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </span>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              style={{
                position: 'absolute', left: '0.75rem', top: '50%',
                transform: 'translateY(-50%)',
                width: '38px', height: '38px',
                backgroundColor: 'rgba(255,255,255,0.88)',
                border: 'none', borderRadius: '50%',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                transition: 'background-color 0.15s, transform 0.15s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.88)'}
              aria-label="Foto anterior"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              style={{
                position: 'absolute', right: '0.75rem', top: '50%',
                transform: 'translateY(-50%)',
                width: '38px', height: '38px',
                backgroundColor: 'rgba(255,255,255,0.88)',
                border: 'none', borderRadius: '50%',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                transition: 'background-color 0.15s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.88)'}
              aria-label="Foto siguiente"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.75rem', overflowX: 'auto', paddingBottom: '2px' }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flexShrink: 0,
                width: '80px', height: '58px',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                border: i === active ? '2.5px solid #C9A96E' : '2.5px solid transparent',
                cursor: 'pointer',
                padding: 0,
                transition: 'border-color 0.2s, opacity 0.2s',
                opacity: i === active ? 1 : 0.65,
                backgroundColor: '#e8e4dd',
              }}
              onMouseEnter={(e) => { if (i !== active) e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={(e) => { if (i !== active) e.currentTarget.style.opacity = '0.65' }}
              aria-label={`Ver foto ${i + 1}`}
            >
              <img
                src={img}
                alt={`Miniatura ${i + 1}`}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.94)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(false)}
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              background: 'rgba(255,255,255,0.12)', border: 'none',
              borderRadius: '50%', width: '42px', height: '42px',
              cursor: 'pointer', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            style={{
              position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
              width: '46px', height: '46px', cursor: 'pointer', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <img
            src={images[active]}
            alt={`${title} — foto ${active + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '88vw', maxHeight: '82vh',
              objectFit: 'contain',
              borderRadius: '0.75rem',
              animation: 'scaleIn 0.2s ease',
            }}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            style={{
              position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%',
              width: '46px', height: '46px', cursor: 'pointer', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '0.4rem',
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActive(i) }}
                style={{
                  width: i === active ? '20px' : '8px', height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: i === active ? '#C9A96E' : 'rgba(255,255,255,0.4)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
