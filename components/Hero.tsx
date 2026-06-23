'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const STATS = [
  { value: 15,   suffix: '+', label: 'Años de experiencia' },
  { value: 500,  suffix: '+', label: 'Operaciones realizadas' },
  { value: 200,  suffix: '+', label: 'Propiedades activas' },
  { value: 1000, suffix: '+', label: 'Clientes satisfechos' },
]

function useCountUp(target: number, started: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])
  return count
}

function StatItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCountUp(value, started)
  return (
    <div style={{
      flex: 1,
      padding: '1.5rem 1rem',
      textAlign: 'center',
      borderRight: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ color: '#C9A96E', fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>
        {count}{suffix}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', marginTop: '0.35rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  )
}

const ZONES = ['Palihue', 'Villa Mitre', 'Centro', 'Aldea Romana', 'Barrio Universitario', 'Las Villas', 'Macholand', 'Monte Hermoso', 'Zona Industrial']

export default function Hero() {
  const router = useRouter()
  const [operation, setOperation] = useState<'venta' | 'alquiler'>('venta')
  const [type, setType] = useState('')
  const [zone, setZone] = useState('')
  const [statsStarted, setStatsStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStatsStarted(true), 800)
    return () => clearTimeout(timer)
  }, [])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    params.set('operation', operation)
    if (type) params.set('type', type)
    if (zone) params.set('zone', zone)
    router.push(`/propiedades?${params.toString()}`)
  }

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#111111',
    }}>

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fetchPriority="high"
        decoding="async"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
      />

      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.78) 100%)' }} />

      {/* Content */}
      <div className="hero-content" style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '900px',
        width: '100%',
        paddingBottom: '8rem',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          backgroundColor: 'rgba(201,169,110,0.15)',
          border: '1px solid rgba(201,169,110,0.4)',
          color: '#C9A96E',
          padding: '0.4rem 1.1rem',
          borderRadius: '9999px',
          fontSize: '0.73rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '1.75rem',
          animation: 'slideDown 0.6s 0.1s ease both',
          opacity: 0,
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A96E', display: 'inline-block', flexShrink: 0 }} />
          Inmobiliaria líder en Bahía Blanca
        </div>

        {/* Headline — la pieza central */}
        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(2.4rem, 6.5vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-0.04em',
          marginBottom: '1.25rem',
          animation: 'slideUp 0.75s 0.25s ease both',
          opacity: 0,
        }}>
          Más de{' '}
          <span style={{ color: '#C9A96E' }}>200 propiedades</span>
          <br />en Bahía Blanca
        </h1>

        {/* Subtitle */}
        <p style={{
          color: 'rgba(255,255,255,0.72)',
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          lineHeight: 1.6,
          maxWidth: '560px',
          margin: '0 auto 2.75rem',
          animation: 'slideUp 0.75s 0.4s ease both',
          opacity: 0,
        }}>
          Encontrá la propiedad ideal para vivir o invertir.<br />
          Asesoramiento personalizado, sin vueltas.
        </p>

        {/* Search form */}
        <form
          onSubmit={handleSearch}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '1.2rem',
            padding: '0.65rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.55rem',
            maxWidth: '720px',
            margin: '0 auto 1.5rem',
            boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
            animation: 'slideUp 0.75s 0.55s ease both',
            opacity: 0,
          }}
        >
          {/* Tabs */}
          <div style={{ display: 'flex', backgroundColor: '#f5f5f5', borderRadius: '0.75rem', padding: '4px', gap: '4px' }}>
            {(['venta', 'alquiler'] as const).map((op) => (
              <button
                key={op}
                type="button"
                onClick={() => setOperation(op)}
                style={{
                  flex: 1,
                  padding: '0.65rem',
                  borderRadius: '0.55rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  transition: 'all 0.22s ease',
                  backgroundColor: operation === op ? '#171717' : 'transparent',
                  color: operation === op ? '#ffffff' : '#737373',
                }}
              >
                {op === 'venta' ? 'Comprar' : 'Alquilar'}
              </button>
            ))}
          </div>

          {/* Fields row */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={{ flex: '1 1 150px', padding: '0.9rem 1rem', border: '1.5px solid #ebebeb', borderRadius: '0.7rem', fontSize: '0.9rem', color: type ? '#171717' : '#a3a3a3', backgroundColor: '#fafafa', outline: 'none', cursor: 'pointer' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A96E')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#ebebeb')}
            >
              <option value="">Tipo de propiedad</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="terreno">Terreno</option>
            </select>

            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              style={{ flex: '2 1 200px', padding: '0.9rem 1rem', border: '1.5px solid #ebebeb', borderRadius: '0.7rem', fontSize: '0.9rem', color: zone ? '#171717' : '#a3a3a3', backgroundColor: '#fafafa', outline: 'none', cursor: 'pointer' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A96E')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#ebebeb')}
            >
              <option value="">Barrio o zona...</option>
              {ZONES.map((z) => <option key={z} value={z}>{z}</option>)}
            </select>

            <button
              type="submit"
              style={{
                flex: '1 1 130px',
                padding: '0.9rem 1.5rem',
                backgroundColor: '#C9A96E',
                color: '#ffffff',
                border: 'none',
                borderRadius: '0.7rem',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'background-color 0.2s, transform 0.15s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b8935a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A96E'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Buscar
            </button>
          </div>
        </form>

        {/* CTA secundario */}
        <div style={{ animation: 'fadeIn 0.6s 0.85s ease both', opacity: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a
            href="/propiedades"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.92rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'rgba(201,169,110,0.2)'; el.style.borderColor = 'rgba(201,169,110,0.5)' }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'rgba(255,255,255,0.1)'; el.style.borderColor = 'rgba(255,255,255,0.25)' }}
          >
            Ver todas las propiedades
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="/tasaciones"
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.87rem',
              textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#C9A96E')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')}
          >
            ¿Querés tasar tu propiedad? →
          </a>
        </div>
      </div>

      {/* Stats bar — 4 números */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(0,0,0,0.55)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div className="stats-grid" style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} started={statsStarted} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .stats-grid > div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.08) !important; }
          .hero-content { padding-bottom: 12rem !important; }
        }
      `}</style>
    </section>
  )
}
