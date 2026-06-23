import Link from 'next/link'

const SERVICES = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'Compra y venta',
    desc: 'Asesoramiento integral en la compra y venta de propiedades. Tasación, publicación, negociación y gestión de escritura.',
    items: ['Tasación gratuita', 'Publicación en 10+ portales', 'Negociación profesional', 'Gestión escrituraria', 'Asesoramiento legal'],
    cta: '/propiedades?operation=venta',
    ctaLabel: 'Ver propiedades en venta',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: 'Alquiler de propiedades',
    desc: 'Gestionamos el alquiler de tu propiedad de principio a fin: desde la búsqueda del inquilino ideal hasta la gestión mensual.',
    items: ['Publicación y difusión', 'Calificación de inquilinos', 'Contrato y garantías', 'Cobranza mensual', 'Renovaciones automáticas'],
    cta: '/propiedades?operation=alquiler',
    ctaLabel: 'Ver propiedades en alquiler',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    title: 'Administración de alquileres',
    desc: 'Servicio completo para propietarios que quieren delegar la gestión de sus inmuebles. Nos encargamos de todo.',
    items: ['Cobro y liquidación mensual', 'Pago de impuestos y servicios', 'Atención al inquilino', 'Reparaciones y mantenimiento', 'Informes mensuales', 'Gestión de desocupación'],
    highlight: true,
    cta: '/contacto',
    ctaLabel: 'Consultar administración',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: 'Tasaciones',
    desc: 'Valuación profesional de propiedades residenciales, comerciales e industriales. Informes para uso bancario, judicial o particular.',
    items: ['Tasación de mercado', 'Informes para hipotecas', 'Tasación judicial', 'Comparativo de precios', 'Matrícula CMPI 1234'],
    cta: '/tasaciones',
    ctaLabel: 'Solicitar tasación gratis',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
    title: 'Créditos hipotecarios',
    desc: 'Te acompañamos en todo el proceso de solicitud y tramitación de créditos hipotecarios con los principales bancos.',
    items: ['Pre-calificación gratuita', 'Coordinación con bancos', 'Asesoría en documentación', 'Seguimiento del proceso', 'Hasta el 80% del valor'],
    cta: '/apto-credito',
    ctaLabel: 'Ver propiedades apto crédito',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'Alquiler temporario',
    desc: 'Publicación y gestión de propiedades para estadías cortas, vacaciones o trabajo temporal en Bahía Blanca y Monte Hermoso.',
    items: ['Publicación en plataformas', 'Gestión de reservas', 'Check-in y check-out', 'Limpieza y mantenimiento', 'Liquidación mensual'],
    cta: '/alquiler-temporario',
    ctaLabel: 'Ver temporarios',
  },
]

export default function ServiciosPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f7' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#171717', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#C9A96E', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Lo que hacemos</span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
            Servicios inmobiliarios integrales
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '520px', margin: '0 auto' }}>
            Más de 15 años brindando soluciones completas para compradores, vendedores, propietarios e inversores en Bahía Blanca.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{
              backgroundColor: s.highlight ? '#171717' : '#ffffff',
              borderRadius: '1.25rem',
              padding: '2rem',
              border: s.highlight ? '2px solid #C9A96E' : '1px solid #f0f0f0',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ width: '52px', height: '52px', backgroundColor: s.highlight ? 'rgba(201,169,110,0.15)' : '#fdf8f0', borderRadius: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: `1px solid ${s.highlight ? 'rgba(201,169,110,0.3)' : '#f0ebe0'}` }}>
                {s.icon}
              </div>
              {s.highlight && (
                <span style={{ display: 'inline-block', backgroundColor: '#C9A96E', color: '#fff', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.2rem 0.6rem', borderRadius: '9999px', marginBottom: '0.75rem', alignSelf: 'flex-start' }}>
                  Más solicitado
                </span>
              )}
              <h2 style={{ fontWeight: 800, fontSize: '1.15rem', color: s.highlight ? '#ffffff' : '#171717', marginBottom: '0.6rem' }}>{s.title}</h2>
              <p style={{ color: s.highlight ? 'rgba(255,255,255,0.65)' : '#525252', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>{s.desc}</p>
              <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
                {s.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: s.highlight ? 'rgba(255,255,255,0.75)' : '#404040' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={s.cta}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', backgroundColor: s.highlight ? '#C9A96E' : '#f5f5f5', color: s.highlight ? '#fff' : '#171717', padding: '0.8rem 1.25rem', borderRadius: '0.65rem', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', border: s.highlight ? 'none' : '1px solid #e5e5e5', marginTop: 'auto', transition: 'background-color 0.2s' }}>
                {s.ctaLabel}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Admin detail */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', padding: '3rem', border: '1px solid #f0f0f0', marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#C9A96E', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>Administración</span>
            <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: '#171717', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              Dejá que nosotros administremos tu propiedad
            </h2>
            <p style={{ color: '#525252', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Nuestro servicio de administración de alquileres te permite despreocuparte completamente de tu inversión. Cobramos el alquiler, pagamos los servicios e impuestos, atendemos al inquilino y te enviamos un resumen mensual detallado.
            </p>
            <p style={{ color: '#525252', lineHeight: 1.75, fontSize: '0.9rem' }}>
              También trabajamos con propietarios en el exterior. Todos tus pagos y liquidaciones, sin que tengas que moverte.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {['Cobranza mensual garantizada', 'Pago de expensas, ABL e impuestos', 'Atención y resolución de problemas del inquilino', 'Gestión de reparaciones con presupuesto previo', 'Renovaciones contractuales automáticas', 'Informe mensual detallado', 'Gestión de desocupación y nuevo inquilino', 'Servicio para propietarios en el exterior'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #bbf7d0' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span style={{ fontSize: '0.85rem', color: '#404040' }}>{item}</span>
              </div>
            ))}
            <Link href="/contacto"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#171717', color: '#fff', padding: '0.9rem', borderRadius: '0.65rem', fontWeight: 700, textDecoration: 'none', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Consultar servicio de administración
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
