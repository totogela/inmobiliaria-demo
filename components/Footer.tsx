'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#171717', color: '#a3a3a3', padding: '4.5rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1rem' }}>Bahía Propiedades</span>
            </div>
            <p style={{ fontSize: '0.83rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Tu inmobiliaria de confianza en Bahía Blanca. Más de 15 años acompañando a familias y empresas en cada operación.
            </p>
            {/* Matrícula destacada */}
            <div style={{ backgroundColor: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '0.6rem', padding: '0.7rem 0.9rem', marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
              <span style={{ color: '#C9A96E', fontSize: '0.78rem', fontWeight: 700 }}>Matrícula CMPI Nro. 1234</span>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <SocialIcon href="https://www.facebook.com/bahiapropiedades">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/bahiapropiedades">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </SocialIcon>
              <SocialIcon href="https://wa.me/5492914000000">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.512 5.813L.057 23.054a.75.75 0 0 0 .92.92l5.24-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.516-5.17-1.413l-.37-.22-3.828 1.063 1.063-3.828-.22-.37A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Propiedades */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Propiedades</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/propiedades?operation=venta', label: 'En venta' },
                { href: '/propiedades?operation=alquiler', label: 'En alquiler' },
                { href: '/alquiler-temporario', label: 'Alquiler temporario' },
                { href: '/apto-credito', label: 'Apto crédito hipotecario' },
              ].map((l) => <FooterLink key={l.href} {...l} />)}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Servicios</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/tasaciones', label: 'Tasaciones gratuitas' },
                { href: '/calculadora', label: 'Calculadora hipotecaria' },
                { href: '/servicios', label: 'Administración de alquileres' },
                { href: '/servicios', label: 'Compra y venta' },
                { href: '/servicios', label: 'Créditos hipotecarios' },
                { href: '/blog', label: 'Blog inmobiliario' },
              ].map((l) => <FooterLink key={l.label} {...l} />)}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contacto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.83rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" style={{ marginTop: '2px', flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Av. Alem 750, Bahía Blanca<br />Buenos Aires, Argentina</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>
                <a href="tel:02914000000" style={{ color: '#a3a3a3', textDecoration: 'none' }}>(0291) 4000-000</a>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:contacto@bahiapropiedades.com.ar" style={{ color: '#a3a3a3', textDecoration: 'none' }}>contacto@bahiapropiedades.com.ar</a>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Lun–Vie: 9–18hs · Sáb: 9–13hs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portales */}
        <div style={{ borderTop: '1px solid #262626', paddingTop: '2rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#525252', marginBottom: '1rem', fontWeight: 600 }}>Publicamos en</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {['ZonaProp', 'Argenprop', 'MercadoLibre', 'Bahia365', 'IBB Grupo Inmobiliario'].map((portal) => (
              <span key={portal} style={{ backgroundColor: '#262626', border: '1px solid #333', borderRadius: '0.4rem', padding: '0.3rem 0.75rem', fontSize: '0.75rem', color: '#737373', fontWeight: 500 }}>{portal}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #262626', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', fontSize: '0.78rem' }}>
          <span>© {new Date().getFullYear()} Bahía Propiedades. Todos los derechos reservados.</span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#C9A96E', fontWeight: 700 }}>Matrícula CMPI Nro. 1234</span>
            <Link href="/nosotros" style={{ color: '#737373', textDecoration: 'none' }}>Política de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}
      style={{ color: '#a3a3a3', textDecoration: 'none', fontSize: '0.83rem', transition: 'color 0.15s' }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#C9A96E')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#a3a3a3')}
    >
      {label}
    </Link>
  )
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ width: '34px', height: '34px', backgroundColor: '#262626', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a3a3a3', textDecoration: 'none', transition: 'all 0.2s' }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#C9A96E'; el.style.color = '#ffffff' }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#262626'; el.style.color = '#a3a3a3' }}
    >
      {children}
    </a>
  )
}
