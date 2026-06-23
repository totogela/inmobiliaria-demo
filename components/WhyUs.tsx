'use client'

import { useEffect, useRef } from 'react'

const ITEMS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    number: '01',
    title: 'Atención Personalizada',
    description: 'Cada cliente es único. Nuestro equipo dedica tiempo a entender tus necesidades y te acompaña desde la primera consulta hasta la firma del contrato.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <rect x="9" y="14" width="6" height="8" />
      </svg>
    ),
    number: '02',
    title: 'Amplia Cartera',
    description: 'Más de 200 propiedades en todos los barrios de Bahía Blanca: casas, departamentos y terrenos en venta y alquiler para todos los presupuestos.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    number: '03',
    title: 'Asesoramiento Integral',
    description: 'Más de 15 años de experiencia nos avalan. Brindamos asesoramiento legal, impositivo y financiero para que cada operación sea segura y transparente.',
  },
]

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el) =>
              el.classList.add('revealed')
            )
            entry.target.querySelectorAll('.section-line').forEach((el) => el.classList.add('revealed'))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ padding: '6rem 1.5rem', backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            color: '#C9A96E', fontWeight: 600, fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem',
          }}>
            Nuestra diferencia
          </span>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
            fontWeight: 800, color: '#171717',
            letterSpacing: '-0.03em', lineHeight: 1.15,
          }}>
            ¿Por qué elegirnos?
          </h2>
          <span className="section-line" style={{ margin: '0.75rem auto 1rem' }} />
          <p style={{ color: '#737373', fontSize: '1rem', maxWidth: '440px', margin: '0 auto', lineHeight: 1.65 }}>
            Somos la inmobiliaria de confianza en Bahía Blanca desde hace 15 años.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`reveal-scale stagger-${i + 1}`}
              style={{
                position: 'relative',
                backgroundColor: '#ffffff',
                border: '1.5px solid #f0f0f0',
                borderRadius: '1.25rem',
                padding: '2.25rem 2rem',
                overflow: 'hidden',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = '#C9A96E'
                el.style.boxShadow = '0 16px 40px rgba(201,169,110,0.14)'
                el.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = '#f0f0f0'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Large background number */}
              <span style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.5rem',
                fontSize: '4rem',
                fontWeight: 900,
                color: '#f5f0e8',
                lineHeight: 1,
                userSelect: 'none',
                letterSpacing: '-0.04em',
              }}>
                {item.number}
              </span>

              {/* Icon */}
              <div style={{
                width: '58px', height: '58px',
                backgroundColor: '#fdf8f0',
                borderRadius: '0.85rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid #f0ebe0',
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#171717', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ color: '#737373', fontSize: '0.9rem', lineHeight: 1.75 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal" style={{
          marginTop: '4rem',
          background: 'linear-gradient(135deg, #171717 0%, #2d2d2d 100%)',
          borderRadius: '1.25rem',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
        }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              ¿Listo para empezar?
            </p>
            <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Hablemos sobre tu próxima propiedad
            </h3>
          </div>
          <a
            href="https://wa.me/5492914000000?text=Hola%2C%20quiero%20asesoramiento%20para%20encontrar%20una%20propiedad."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              backgroundColor: '#25D366', color: '#ffffff',
              padding: '0.85rem 1.75rem',
              borderRadius: '0.65rem',
              fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s, transform 0.15s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1db954'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#25D366'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.512 5.813L.057 23.054a.75.75 0 0 0 .92.92l5.24-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.516-5.17-1.413l-.37-.22-3.828 1.063 1.063-3.828-.22-.37A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
