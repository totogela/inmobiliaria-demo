import { notFound } from 'next/navigation'
import Link from 'next/link'
import { properties, getPropertyById, formatPrice } from '@/app/data/properties'
import PropertyCard from '@/components/PropertyCard'
import PropertyImageGallery from '@/components/PropertyImageGallery'

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }))
}

type Props = { params: Promise<{ id: string }> }

const TYPE_LABELS: Record<string, string> = {
  casa: 'Casa',
  departamento: 'Departamento',
  terreno: 'Terreno',
}

export default async function PropiedadDetallePage({ params }: Props) {
  const { id } = await params
  const property = getPropertyById(id)
  if (!property) notFound()

  const related = properties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.zone === property.zone))
    .slice(0, 3)

  const waMessage = encodeURIComponent(
    `Hola, vi la propiedad "${property.title}" en Bahía Propiedades y quería más información.`
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f0f0f0', padding: '0.85rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.82rem', color: '#737373' }}>
          <Link href="/" style={{ color: '#737373', textDecoration: 'none' }}>Inicio</Link>
          <span>›</span>
          <Link href="/propiedades" style={{ color: '#737373', textDecoration: 'none' }}>Propiedades</Link>
          <span>›</span>
          <span style={{ color: '#171717', fontWeight: 500 }}>{property.title}</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <div className="detail-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 360px',
          gap: '2rem',
          alignItems: 'start',
        }}>

          {/* ── Left column ── */}
          <div>
            {/* Interactive image gallery */}
            <PropertyImageGallery images={property.images} title={property.title} />

            {/* Description */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', padding: '2rem', border: '1px solid #f0f0f0', marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#171717', marginBottom: '1rem' }}>Descripción</h2>
              <p style={{ color: '#525252', lineHeight: 1.8, fontSize: '0.95rem' }}>{property.description}</p>
            </div>

            {/* Features */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', padding: '2rem', border: '1px solid #f0f0f0', marginBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#171717', marginBottom: '1.25rem' }}>Características</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {property.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: '0.875rem', color: '#404040' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', padding: '2rem', border: '1px solid #f0f0f0' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#171717', marginBottom: '0.5rem' }}>Ubicación</h2>
              <p style={{ color: '#737373', fontSize: '0.875rem', marginBottom: '1rem' }}>
                {property.address} · {property.zone}, Bahía Blanca
              </p>
              <div style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49748.29!2d-62.2663!3d-38.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbc3eefdeba3f%3A0x26688d5a5fa54a4b!2sBah%C3%ADa%20Blanca%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000"
                  width="100%" height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de la propiedad"
                />
              </div>
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <div style={{ position: 'sticky', top: '88px' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', padding: '1.75rem', border: '1px solid #f0f0f0', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>

              {/* Badges */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: property.operation === 'venta' ? '#171717' : '#C9A96E',
                  color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '9999px',
                  fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>
                  {property.operation}
                </span>
                <span style={{ backgroundColor: '#f5f5f5', color: '#525252', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600 }}>
                  {TYPE_LABELS[property.type]}
                </span>
              </div>

              {/* Title */}
              <h1 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#171717', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {property.title}
              </h1>

              {/* Address */}
              <p style={{ color: '#737373', fontSize: '0.85rem', marginBottom: '1.25rem', display: 'flex', gap: '0.35rem', alignItems: 'flex-start' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {property.address}
              </p>

              {/* Price */}
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#171717', letterSpacing: '-0.03em', marginBottom: '0.2rem' }}>
                {formatPrice(property.price, property.currency)}
              </div>
              {property.operation === 'alquiler' && (
                <p style={{ color: '#737373', fontSize: '0.8rem', marginBottom: '1rem' }}>por mes</p>
              )}

              {/* Stats */}
              <div style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderTop: '1px solid #f5f5f5', borderBottom: '1px solid #f5f5f5', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {property.bedrooms !== undefined && (
                  <div style={{ textAlign: 'center', minWidth: '50px' }}>
                    <div style={{ fontWeight: 700, color: '#171717', fontSize: '1.1rem' }}>{property.bedrooms}</div>
                    <div style={{ fontSize: '0.7rem', color: '#737373' }}>Habitaciones</div>
                  </div>
                )}
                {property.bathrooms !== undefined && (
                  <div style={{ textAlign: 'center', minWidth: '50px' }}>
                    <div style={{ fontWeight: 700, color: '#171717', fontSize: '1.1rem' }}>{property.bathrooms}</div>
                    <div style={{ fontSize: '0.7rem', color: '#737373' }}>Baños</div>
                  </div>
                )}
                <div style={{ textAlign: 'center', minWidth: '50px' }}>
                  <div style={{ fontWeight: 700, color: '#171717', fontSize: '1.1rem' }}>{property.sqm}</div>
                  <div style={{ fontSize: '0.7rem', color: '#737373' }}>m² totales</div>
                </div>
                {property.coveredSqm && (
                  <div style={{ textAlign: 'center', minWidth: '50px' }}>
                    <div style={{ fontWeight: 700, color: '#171717', fontSize: '1.1rem' }}>{property.coveredSqm}</div>
                    <div style={{ fontSize: '0.7rem', color: '#737373' }}>m² cubiertos</div>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={`https://wa.me/5492914000000?text=${waMessage}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-wa-detail"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.95rem', backgroundColor: '#22c55e', color: '#ffffff',
                    borderRadius: '0.65rem', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                    transition: 'background-color 0.2s', boxShadow: '0 4px 12px rgba(34,197,94,0.3)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.512 5.813L.057 23.054a.75.75 0 0 0 .92.92l5.24-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.516-5.17-1.413l-.37-.22-3.828 1.063 1.063-3.828-.22-.37A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Consultar por WhatsApp
                </a>
                <a
                  href="tel:02914000000"
                  className="btn-call-detail"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.85rem', backgroundColor: '#f5f5f5', color: '#171717',
                    borderRadius: '0.65rem', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                    transition: 'background-color 0.2s',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
                  </svg>
                  Llamar ahora
                </a>
              </div>

              {/* Agent */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #f5f5f5', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80"
                  alt="Martín Garrido"
                  loading="lazy"
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f0ebe0' }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#171717' }}>Martín Garrido</div>
                  <div style={{ fontSize: '0.75rem', color: '#737373' }}>Agente responsable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related properties */}
        {related.length > 0 && (
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: '#171717', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
              Propiedades similares
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
        .btn-wa-detail:hover { background-color: #16a34a !important; }
        .btn-call-detail:hover { background-color: #ebebeb !important; }
      `}</style>
    </div>
  )
}
