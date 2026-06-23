'use client'

import Link from 'next/link'

const team = [
  {
    name: 'Roberto Álvarez',
    role: 'Director General',
    bio: 'Fundador de Bahía Propiedades. Más de 20 años de experiencia en el mercado inmobiliario bahiense.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Verónica Casas',
    role: 'Gerente Comercial',
    bio: 'Especialista en propiedades residenciales de alta gama. Conocimiento profundo del mercado local.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Martín Garrido',
    role: 'Asesor Senior',
    bio: 'Experto en inversiones y desarrollos inmobiliarios. Más de 10 años acompañando a inversores.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Luciana Romero',
    role: 'Asesora de Alquileres',
    bio: 'Especializada en alquileres residenciales y comerciales. Atención personalizada a inquilinos y propietarios.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
  },
]

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '500+', label: 'Clientes satisfechos' },
  { value: '1.200+', label: 'Operaciones cerradas' },
  { value: '200+', label: 'Propiedades activas' },
]

export default function NosotrosPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          height: '420px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fetchPriority="high"
          decoding="async"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 40%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.72))',
          }}
        />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              color: '#C9A96E',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Conocenos
          </span>
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            Somos Bahía Propiedades
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginTop: '1rem' }}>
            Más de 15 años siendo la inmobiliaria de confianza en Bahía Blanca
          </p>
        </div>
      </div>

      {/* Story */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-block',
                color: '#C9A96E',
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Nuestra historia
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: '#171717',
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              15 años construyendo confianza
            </h2>
            <p style={{ color: '#525252', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              Bahía Propiedades nació en 2009 con una visión clara: ser la inmobiliaria más confiable y transparente de Bahía Blanca. Fundada por Roberto Álvarez, la empresa creció desde una pequeña oficina en el Centro hasta convertirse en una de las agencias inmobiliarias más reconocidas de la región.
            </p>
            <p style={{ color: '#525252', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Hoy contamos con un equipo de profesionales especializados que acompañan a cientos de familias y empresas cada año en la compra, venta y alquiler de propiedades. Nuestra filosofía siempre fue la misma: honestidad, transparencia y atención personalizada.
            </p>
          </div>
          <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=700&q=80"
              alt="Nuestra historia"
              style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#171717', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#C9A96E', letterSpacing: '-0.03em' }}>
                  {s.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginTop: '0.4rem' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                display: 'inline-block',
                color: '#C9A96E',
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Profesionales
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: '#171717',
                letterSpacing: '-0.03em',
              }}
            >
              Nuestro equipo
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {team.map((member, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.05)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#171717', marginBottom: '0.25rem' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: '#C9A96E', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    {member.role}
                  </p>
                  <p style={{ color: '#737373', fontSize: '0.85rem', lineHeight: 1.6 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#171717', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            ¿Listo para encontrar tu propiedad?
          </h2>
          <p style={{ color: '#737373', marginBottom: '2rem', fontSize: '1rem' }}>
            Contactanos y uno de nuestros asesores te acompañará en todo el proceso.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contacto"
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: '#171717',
                color: '#ffffff',
                borderRadius: '0.6rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
            >
              Contactarnos
            </Link>
            <Link
              href="/propiedades"
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: '#f5f5f5',
                color: '#171717',
                borderRadius: '0.6rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid #e5e5e5',
              }}
            >
              Ver propiedades
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
