'use client'

import Link from 'next/link'
import { Property, formatPrice } from '@/app/data/properties'

interface Props {
  property: Property
  index?: number
}

const TYPE_LABEL: Record<string, string> = {
  casa: 'Casa',
  departamento: 'Depto',
  terreno: 'Terreno',
}

export default function PropertyCard({ property, index = 0 }: Props) {
  const waMsg = encodeURIComponent(
    `Hola, vi la propiedad "${property.title}" en Bahía Propiedades y quería más información.`
  )

  return (
    <div
      className="property-card"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '1px solid #f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#e8e4dd' }}>
        <img
          src={property.images[0].replace('w=900', 'w=480').replace('w=1920', 'w=480').replace('q=85', 'q=70').replace('q=80', 'q=70')}
          alt={property.title}
          className="card-img"
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding="async"
          width={480}
          height={360}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Operation badge */}
        <span style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          backgroundColor: property.operation === 'venta' ? '#171717' : '#C9A96E',
          color: '#ffffff',
          padding: '0.22rem 0.65rem',
          borderRadius: '9999px',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
        }}>
          {property.operation}
        </span>

        {/* Type badge */}
        <span style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          backgroundColor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(4px)',
          color: '#171717',
          padding: '0.22rem 0.65rem',
          borderRadius: '9999px',
          fontSize: '0.68rem',
          fontWeight: 600,
        }}>
          {TYPE_LABEL[property.type]}
        </span>

        {/* Price on image */}
        <div style={{
          position: 'absolute', bottom: '0.75rem', left: '0.85rem',
          color: '#ffffff',
          fontSize: '1.15rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          textShadow: '0 1px 4px rgba(0,0,0,0.4)',
        }}>
          {formatPrice(property.price, property.currency)}
          {property.operation === 'alquiler' && (
            <span style={{ fontSize: '0.78rem', fontWeight: 500 }}>/mes</span>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#171717', lineHeight: 1.3 }}>
          {property.title}
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem', color: '#737373', fontSize: '0.8rem' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2.2" style={{ flexShrink: 0, marginTop: '1px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{property.address} · {property.zone}</span>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '0.75rem',
          padding: '0.55rem 0',
          borderTop: '1px solid #f5f5f5',
          borderBottom: '1px solid #f5f5f5',
          fontSize: '0.8rem', color: '#525252',
        }}>
          {property.bedrooms !== undefined && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.28rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                <path d="M2 20v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
                <path d="M2 14V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M14 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
              </svg>
              {property.bedrooms} hab.
            </span>
          )}
          {property.bathrooms !== undefined && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.28rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                <path d="M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4z" />
                <path d="M6 12V5a2 2 0 0 1 2-2h1" />
              </svg>
              {property.bathrooms} baños
            </span>
          )}
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.28rem', marginLeft: 'auto' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            {property.sqm} m²
          </span>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
          <Link
            href={`/propiedades/${property.id}`}
            style={{
              flex: 1,
              padding: '0.65rem',
              backgroundColor: '#171717',
              color: '#ffffff',
              borderRadius: '0.55rem',
              fontWeight: 600,
              fontSize: '0.83rem',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'background-color 0.2s, transform 0.15s',
              display: 'block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3a3a3a'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#171717'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Ver propiedad
          </Link>
          <a
            href={`https://wa.me/5492914000000?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Consultar por WhatsApp"
            style={{
              padding: '0.65rem 0.8rem',
              backgroundColor: '#f0fdf4',
              color: '#16a34a',
              borderRadius: '0.55rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#dcfce7'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f0fdf4'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.512 5.813L.057 23.054a.75.75 0 0 0 .92.92l5.24-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.516-5.17-1.413l-.37-.22-3.828 1.063 1.063-3.828-.22-.37A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
