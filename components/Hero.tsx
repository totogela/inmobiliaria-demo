'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const STATS = [
  { value: 15,   suffix: '+', label: 'Años' },
  { value: 500,  suffix: '+', label: 'Operaciones' },
  { value: 200,  suffix: '+', label: 'Propiedades' },
  { value: 1000, suffix: '+', label: 'Clientes' },
]

function useCountUp(target: number, started: boolean, duration = 1600) {
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

function StatItem({ value, suffix, label, started, last }: {
  value: number; suffix: string; label: string; started: boolean; last?: boolean
}) {
  const count = useCountUp(value, started)
  return (
    <div style={{
      flex: 1,
      padding: '1rem 0.75rem',
      textAlign: 'center',
      borderRight: last ? 'none' : '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{
        color: '#C9A96E',
        fontSize: 'clamp(1.3rem, 2.8vw, 2rem)',
        fontWeight: 800,
        lineHeight: 1,
        letterSpacing: '-0.03em',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.67rem',
        marginTop: '0.3rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        fontWeight: 600,
      }}>
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
    const timer = setTimeout(() => setStatsStarted(true), 900)
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
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#111111',
    }}>

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 35%',
        }}
      />

      {/* Multi-layer overlay for depth */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 40%, rgba(0,0,0,0.82) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%, transparent 30%, rgba(0,0,0,0.4) 100%)' }} />

      {/* Hero content */}
      <div className="hero-content" style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center',
        padding: '0 1.25rem',
        maxWidth: '860px',
        width: '100%',
        paddingBottom: '7rem',
      }}>

        {/* Trust badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
          backgroundColor: 'rgba(201,169,110,0.12)',
          border: '1px solid rgba(201,169,110,0.35)',
          color: '#C9A96E',
          padding: '0.38rem 1rem',
          borderRadius: '9999px',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          animation: 'slideDown 0.55s 0.1s ease both',
          opacity: 0,
        }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A96E', display: 'inline-block', flexShrink: 0, animation: 'pulseRing 2s ease-out infinite' }} />
          Inmobiliaria líder en Bahía Blanca
        </div>

        {/* Headline */}
        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(2.2rem, 7vw, 4.8rem)',
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: '-0.04em',
          marginBottom: '1.1rem',
          animation: 'slideUp 0.75s 0.2s ease both',
          opacity: 0,
        }}>
          Más de{' '}
          <span style={{
            color: '#C9A96E',
            position: 'relative',
            display: 'inline-block',
          }}>
            200 propiedades
          </span>
          <br />en Bahía Blanca
        </h1>

        {/* Subtitle */}
        <p style={{
          color: 'rgba(255,255,255,0.68)',
          fontSize: 'clamp(0.92rem, 1.8vw, 1.15rem)',
          lineHeight: 1.65,
          maxWidth: '500px',
          margin: '0 auto 2rem',
          animation: 'slideUp 0.75s 0.35s ease both',
          opacity: 0,
        }}>
          Encontrá la propiedad ideal para vivir o invertir.{' '}
          Asesoramiento personalizado, sin vueltas.
        </p>

        {/* Search box */}
        <form
          onSubmit={handleSearch}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '1.1rem',
            padding: '0.55rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxWidth: '680px',
            margin: '0 auto 1.25rem',
            boxShadow: '0 24px 72px rgba(0,0,0,0.5)',
            animation: 'slideUp 0.75s 0.5s ease both',
            opacity: 0,
          }}
        >
          {/* Comprar / Alquilar tabs */}
          <div style={{ display: 'flex', backgroundColor: '#f5f5f5', borderRadius: '0.65rem', padding: '3px', gap: '3px' }}>
            {(['venta', 'alquiler'] as const).map((op) => (
              <button
                key={op}
                type="button"
                onClick={() => setOperation(op)}
                style={{
                  flex: 1,
                  padding: '0.6rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  transition: 'all 0.2s ease',
                  backgroundColor: operation === op ? '#171717' : 'transparent',
                  color: operation === op ? '#ffffff' : '#737373',
                }}
              >
                {op === 'venta' ? 'Comprar' : 'Alquilar'}
              </button>
            ))}
          </div>

          {/* Fields */}
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={{ flex: '1 1 140px', padding: '0.85rem 0.9rem', border: '1.5px solid #ebebeb', borderRadius: '0.6rem', fontSize: '0.88rem', color: type ? '#171717' : '#a3a3a3', backgroundColor: '#fafafa', outline: 'none', cursor: 'pointer' }}
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
              style={{ flex: '2 1 180px', padding: '0.85rem 0.9rem', border: '1.5px solid #ebebeb', borderRadius: '0.6rem', fontSize: '0.88rem', color: zone ? '#171717' : '#a3a3a3', backgroundColor: '#fafafa', outline: 'none', cursor: 'pointer' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A96E')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#ebebeb')}
            >
              <option value="">Barrio o zona...</option>
              {ZONES.map((z) => <option key={z} value={z}>{z}</option>)}
            </select>

            <button
              type="submit"
              style={{
                flex: '1 1 110px',
                padding: '0.85rem 1.25rem',
                backgroundColor: '#C9A96E',
                color: '#ffffff',
                border: 'none',
                borderRadius: '0.6rem',
                fontWeight: 800,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                transition: 'background-color 0.2s, transform 0.15s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b8935a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A96E'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Buscar
            </button>
          </div>
        </form>

        {/* Secondary CTAs */}
        <div style={{
          animation: 'fadeIn 0.6s 0.8s ease both',
          opacity: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap',
        }}>
          <a
            href="/propiedades"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              padding: '0.65rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.86rem',
              textDecoration: 'none',
              transition: 'all 0.22s',
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'rgba(201,169,110,0.18)'; el.style.borderColor = 'rgba(201,169,110,0.5)' }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'rgba(255,255,255,0.1)'; el.style.borderColor = 'rgba(255,255,255,0.22)' }}
          >
            Ver propiedades
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="/tasaciones"
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '0.82rem',
              textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#C9A96E')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)')}
          >
            ¿Querés tasar tu propiedad? →
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="stats-grid" style={{
          maxWidth: '780px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} started={statsStarted} last={i === STATS.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-bottom: 1px solid rgba(255,255,255,0.07) !important; }
          .stats-grid > div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.07) !important; }
          .stats-grid > div:nth-child(even) { border-right: none !important; }
          .stats-grid > div:nth-child(3),
          .stats-grid > div:nth-child(4) { border-bottom: none !important; }
          .hero-content { padding-bottom: 9rem !important; }
        }
      `}</style>
    </section>
  )
}
