'use client'

import { useEffect, useRef } from 'react'

const TESTIMONIALS = [
  {
    name: 'María González',
    role: 'Vendedora — Villa Mitre',
    quote: 'Vendimos nuestra casa en tiempo récord gracias al equipo de Bahía Propiedades. El proceso fue totalmente transparente y sin sorpresas. Los recomiendo sin dudarlo.',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Comprador — Palihue',
    quote: 'El equipo fue muy profesional y paciente. Nos asesoraron en cada paso de la compra de nuestro departamento. Una experiencia excelente de principio a fin.',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Laura Fernández',
    role: 'Inquilina — Centro',
    quote: 'Alquilé mi primer departamento con Bahía Propiedades y fue todo muy sencillo. Me explicaron cada cláusula del contrato y me sentí acompañada en todo momento.',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Pablo Martínez',
    role: 'Vendedor — Barrio Universitario',
    quote: 'Excelente atención desde el primer día. Encontraron el comprador ideal para nuestra propiedad en menos de un mes. Muy contentos con el resultado.',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Sofía López',
    role: 'Compradora — Aldea Romana',
    quote: 'Muy contentos con la compra de nuestra primera casa. El equipo nos ayudó a entender todos los aspectos legales e impositivos. ¡Son los mejores sin duda!',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?auto=format&fit=crop&w=96&h=96&q=80',
  },
  {
    name: 'Diego Herrera',
    role: 'Inversor — Las Villas',
    quote: 'Llevo 3 operaciones con Bahía Propiedades y siempre superaron mis expectativas. Son eficientes, honestos y conocen el mercado local como nadie.',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#C9A96E">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '1.1rem',
      padding: '1.75rem',
      border: '1.5px solid #f0f0f0',
      minWidth: '300px',
      maxWidth: '340px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
      transition: 'box-shadow 0.3s, border-color 0.3s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'
      e.currentTarget.style.borderColor = '#e8dfc8'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'
      e.currentTarget.style.borderColor = '#f0f0f0'
    }}
    >
      <Stars count={t.stars} />

      {/* Large quote mark */}
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#f0ebe0" style={{ marginTop: '-0.25rem' }}>
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>

      <p style={{
        color: '#525252',
        fontSize: '0.88rem',
        lineHeight: 1.75,
        fontStyle: 'italic',
        flex: 1,
      }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #f5f5f5' }}>
        <img
          src={t.photo}
          alt={t.name}
          style={{
            width: '44px', height: '44px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #f0ebe0',
          }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#171717' }}>{t.name}</div>
          <div style={{ fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500 }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  // Duplicate for seamless infinite loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ padding: '6rem 0', backgroundColor: '#f9f8f6', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            color: '#C9A96E', fontWeight: 600, fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem',
          }}>
            Clientes felices
          </span>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3vw, 2.6rem)',
            fontWeight: 800, color: '#171717',
            letterSpacing: '-0.03em', lineHeight: 1.15,
          }}>
            Lo que dicen nuestros clientes
          </h2>
          <span className="section-line" style={{ margin: '0.75rem auto 0' }} />
        </div>
      </div>

      {/* Infinite carousel — full bleed */}
      <div style={{ overflow: 'hidden', paddingBottom: '0.5rem' }}>
        <div className="carousel-track" style={{ paddingLeft: '1.5rem' }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="reveal" style={{
        maxWidth: '1200px', margin: '3.5rem auto 0',
        paddingLeft: '1.5rem', paddingRight: '1.5rem',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem',
      }}>
        {[
          {
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A96E"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
            label: '4.9 / 5', sub: 'Calificación promedio',
          },
          {
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
            label: '500+ clientes', sub: 'Satisfechos',
          },
          {
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
            label: 'Operaciones seguras', sub: 'Respaldo legal',
          },
          {
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
            label: 'CMPI 1234', sub: 'Matrícula habilitada',
          },
        ].map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#fdf8f0', borderRadius: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f0ebe0' }}>
              {b.icon}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#171717' }}>{b.label}</div>
              <div style={{ fontSize: '0.73rem', color: '#737373' }}>{b.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
