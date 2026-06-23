import Link from 'next/link'
import { properties } from '@/app/data/properties'
import PropertyCard from '@/components/PropertyCard'

const aptasCredito = properties.filter((p) => p.aptaCredito && p.operation === 'venta')

const BANCOS = ['Banco Nación', 'Banco Provincia', 'Banco Ciudad', 'BBVA', 'Santander', 'HSBC', 'Galicia', 'Macro']

const FAQ = [
  { q: '¿Qué es una propiedad apta para crédito?', a: 'Es una propiedad que cumple con todos los requisitos legales y de tasación para ser financiada a través de un crédito hipotecario bancario. Debe tener escritura al día, libre de deudas y cumplir con las condiciones del banco.' },
  { q: '¿Qué documentación necesito?', a: 'Generalmente necesitás DNI, recibos de sueldo de los últimos 3-6 meses, declaración de bienes, historia crediticia y CUIT/CUIL. Los requisitos varían según el banco.' },
  { q: '¿Cuánto tiempo tarda el proceso?', a: 'Desde que presentás la documentación hasta la firma puede llevar entre 30 y 90 días hábiles, dependiendo del banco y de la complejidad de la operación.' },
  { q: '¿Los asesores de Bahía Propiedades ayudan con el crédito?', a: 'Sí. Te acompañamos en todo el proceso: desde la pre-calificación hasta la firma con el escribano. Trabajamos con los principales bancos de Bahía Blanca.' },
]

export default function AptoCreditoPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f7' }}>
      {/* Hero */}
      <div style={{ backgroundColor: '#171717', padding: '4.5rem 1.5rem 3.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.4)', color: '#60a5fa', padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Créditos hipotecarios
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
            Comprá tu casa con crédito hipotecario
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.65, maxWidth: '500px', margin: '0 auto' }}>
            Propiedades verificadas, aptas para financiamiento bancario. Te acompañamos en todo el proceso, desde la primera consulta hasta las llaves.
          </p>
        </div>
      </div>

      {/* Info strip */}
      <div style={{ backgroundColor: '#2563EB', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Tasas desde el 4% anual', 'Hasta 30 años de plazo', 'Hasta el 80% del valor', 'Pre-calificación en 48hs'].map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#ffffff' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Properties */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontWeight: 800, fontSize: '1.4rem', color: '#171717', marginBottom: '0.25rem' }}>
              Propiedades aptas para crédito hipotecario
            </h2>
            <p style={{ color: '#737373', fontSize: '0.875rem' }}>{aptasCredito.length} propiedades disponibles</p>
          </div>
          <Link href="/propiedades?aptaCredito=true"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#C9A96E', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
            Ver todas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {aptasCredito.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* Bancos */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', padding: '2.5rem', border: '1px solid #f0f0f0', marginBottom: '3rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.2rem', color: '#171717', marginBottom: '0.4rem' }}>Trabajamos con los principales bancos</h2>
          <p style={{ color: '#737373', fontSize: '0.875rem', marginBottom: '1.75rem' }}>Coordinamos directamente con los bancos para agilizar tu trámite hipotecario.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {BANCOS.map((b) => (
              <span key={b} style={{ backgroundColor: '#f5f5f5', border: '1px solid #e5e5e5', borderRadius: '0.5rem', padding: '0.4rem 0.85rem', fontSize: '0.82rem', fontWeight: 600, color: '#404040' }}>{b}</span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.4rem', color: '#171717', marginBottom: '1.75rem' }}>Preguntas frecuentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: '0.85rem', padding: '1.5rem', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#171717', marginBottom: '0.5rem' }}>{item.q}</h3>
                <p style={{ color: '#525252', fontSize: '0.875rem', lineHeight: 1.65 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #171717 0%, #2a2a2a 100%)', borderRadius: '1.25rem', padding: '3rem 2rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.75rem' }}>
            ¿Querés saber si calificas para un crédito?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.75rem', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 1.75rem' }}>
            Contactanos y un asesor te ayuda a evaluar tus posibilidades de manera gratuita y sin compromiso.
          </p>
          <a href="https://wa.me/5492914000000?text=Hola,%20quiero%20información%20sobre%20créditos%20hipotecarios" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#22c55e', color: '#fff', padding: '0.9rem 2rem', borderRadius: '0.65rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
