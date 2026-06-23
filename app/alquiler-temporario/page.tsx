import Link from 'next/link'
import { properties } from '@/app/data/properties'
import PropertyCard from '@/components/PropertyCard'

const temporarios = properties.filter((p) => p.operation === 'temporario')

const FEATURES = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: 'Propiedades verificadas', desc: 'Cada inmueble es inspeccionado y verificado por nuestro equipo antes de publicarse.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: 'Reserva fácil y rápida', desc: 'Coordinás fecha y reservás directamente con el asesor por WhatsApp o teléfono.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Soporte durante tu estadía', desc: 'Nuestro equipo está disponible para cualquier consulta o inconveniente.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: 'Precios transparentes', desc: 'Sin costos ocultos. El precio publicado es el precio final, todo incluido.' },
]

export default function AlquilerTemporarioPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f7' }}>
      {/* Hero */}
      <div style={{ position: 'relative', backgroundColor: '#171717', padding: '5rem 1.5rem 4rem', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1920&q=80"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.4)', color: '#C9A96E', padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Temporadas · Vacaciones · Trabajo
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
            Alquiler Temporario en<br />Bahía Blanca y zona
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '520px', margin: '0 auto 2rem' }}>
            Propiedades equipadas y listas para habitar. Ideal para vacaciones, trabajo temporal o estadías cortas.
          </p>
          <a href="https://wa.me/5492914000000?text=Hola,%20busco%20alquiler%20temporario" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#22c55e', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '0.65rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.512 5.813L.057 23.054a.75.75 0 0 0 .92.92l5.24-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.516-5.17-1.413l-.37-.22-3.828 1.063 1.063-3.828-.22-.37A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Consultar disponibilidad
          </a>
        </div>
      </div>

      {/* Features */}
      <div style={{ backgroundColor: '#ffffff', padding: '3.5rem 1.5rem', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', backgroundColor: '#fdf8f0', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #f0ebe0' }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#171717', marginBottom: '0.3rem' }}>{f.title}</h3>
                <p style={{ color: '#737373', fontSize: '0.82rem', lineHeight: 1.55 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Properties */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: '#C9A96E', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Disponibles ahora
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#171717' }}>
            Propiedades para alquiler temporario
          </h2>
        </div>

        {temporarios.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {temporarios.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid #f0f0f0' }}>
            <p style={{ color: '#737373' }}>No hay propiedades temporarias disponibles en este momento.</p>
          </div>
        )}

        {/* CTA */}
        <div style={{ backgroundColor: '#171717', borderRadius: '1.25rem', padding: '3rem 2rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.75rem' }}>
            ¿Tenés una propiedad para alquiler temporario?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
            Publicala con nosotros y llegá a miles de personas que buscan alojamiento en Bahía Blanca.
          </p>
          <Link href="/contacto"
            style={{ display: 'inline-block', backgroundColor: '#C9A96E', color: '#ffffff', padding: '0.9rem 2rem', borderRadius: '0.65rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
            Publicar mi propiedad
          </Link>
        </div>
      </div>
    </div>
  )
}
