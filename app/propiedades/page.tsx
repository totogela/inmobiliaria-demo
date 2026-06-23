'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { properties, Property } from '@/app/data/properties'
import PropertyCard from '@/components/PropertyCard'
import { Suspense } from 'react'

const ZONES = ['Palihue', 'Villa Mitre', 'Centro', 'Aldea Romana', 'Barrio Universitario', 'Las Villas', 'Macholand', 'Monte Hermoso', 'Zona Industrial']

function PropiedadesContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [operation, setOperation] = useState(searchParams.get('operation') || '')
  const [type, setType] = useState(searchParams.get('type') || '')
  const [zone, setZone] = useState(searchParams.get('zone') || '')
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '')
  const [currency, setCurrency] = useState(searchParams.get('currency') || '')
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || '')
  const [minSqm, setMinSqm] = useState(searchParams.get('minSqm') || '')
  const [aptaCredito, setAptaCredito] = useState(searchParams.get('aptaCredito') === 'true')
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'default')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = properties.filter((p: Property) => {
    if (operation && p.operation !== operation) return false
    if (type && p.type !== type) return false
    if (zone && !p.zone.toLowerCase().includes(zone.toLowerCase())) return false
    if (currency && p.currency !== currency) return false
    if (minPrice && p.price < Number(minPrice)) return false
    if (maxPrice && p.price > Number(maxPrice)) return false
    if (bedrooms) {
      if (bedrooms === '4' && (p.bedrooms ?? 0) < 4) return false
      if (bedrooms !== '4' && p.bedrooms !== Number(bedrooms)) return false
    }
    if (minSqm && p.sqm < Number(minSqm)) return false
    if (aptaCredito && !p.aptaCredito) return false
    return true
  })

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price
    if (sortBy === 'price-desc') return b.price - a.price
    if (sortBy === 'sqm-desc') return b.sqm - a.sqm
    if (sortBy === 'newest') return Number(b.id) - Number(a.id)
    return 0
  })

  function applyFilters(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (operation) params.set('operation', operation)
    if (type) params.set('type', type)
    if (zone) params.set('zone', zone)
    if (minPrice) params.set('minPrice', minPrice)
    if (maxPrice) params.set('maxPrice', maxPrice)
    if (currency) params.set('currency', currency)
    if (bedrooms) params.set('bedrooms', bedrooms)
    if (minSqm) params.set('minSqm', minSqm)
    if (aptaCredito) params.set('aptaCredito', 'true')
    if (sortBy !== 'default') params.set('sort', sortBy)
    router.push(`/propiedades?${params.toString()}`)
  }

  function clearFilters() {
    setOperation(''); setType(''); setZone(''); setMinPrice(''); setMaxPrice('')
    setCurrency(''); setBedrooms(''); setMinSqm(''); setAptaCredito(false); setSortBy('default')
    router.push('/propiedades')
  }

  const activeFiltersCount = [operation, type, zone, minPrice, maxPrice, currency, bedrooms, minSqm, aptaCredito ? 'x' : ''].filter(Boolean).length

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f7' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#171717', padding: '3.5rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#C9A96E', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Catálogo completo
          </p>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800 }}>
            Todas las propiedades
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
            {properties.length} propiedades disponibles en Bahía Blanca y zona
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Filtros visibles */}
        <form onSubmit={applyFilters}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            border: '1px solid #ebebeb',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            overflow: 'hidden',
          }}>
            {/* Fila 1: operación tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #f0f0f0' }}>
              {[
                { val: '', label: 'Todo' },
                { val: 'venta', label: 'Venta' },
                { val: 'alquiler', label: 'Alquiler' },
                { val: 'temporario', label: 'Temporario' },
              ].map((op) => (
                <button
                  key={op.val}
                  type="button"
                  onClick={() => {
                    setOperation(op.val)
                    const params = new URLSearchParams()
                    if (op.val) params.set('operation', op.val)
                    router.push(`/propiedades?${params.toString()}`)
                  }}
                  style={{
                    flex: 1,
                    padding: '0.9rem 0.5rem',
                    border: 'none',
                    borderBottom: operation === op.val ? '2.5px solid #C9A96E' : '2.5px solid transparent',
                    backgroundColor: 'transparent',
                    color: operation === op.val ? '#171717' : '#737373',
                    fontWeight: operation === op.val ? 700 : 500,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                  }}
                >
                  {op.label}
                </button>
              ))}
            </div>

            {/* Fila 2: filtros rápidos */}
            <div style={{ padding: '1rem 1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.75rem', alignItems: 'end' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Tipo</label>
                <select value={type} onChange={(e) => setType(e.target.value)} style={selStyle}>
                  <option value="">Todos</option>
                  <option value="casa">Casa</option>
                  <option value="departamento">Departamento</option>
                  <option value="terreno">Terreno</option>
                  <option value="local">Local</option>
                  <option value="cochera">Cochera</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={labelStyle}>Zona</label>
                <select value={zone} onChange={(e) => setZone(e.target.value)} style={selStyle}>
                  <option value="">Todas</option>
                  {ZONES.map((z) => <option key={z} value={z}>{z}</option>)}
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={labelStyle}>Dormitorios</label>
                <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} style={selStyle}>
                  <option value="">Cualquiera</option>
                  <option value="1">1 dorm.</option>
                  <option value="2">2 dorm.</option>
                  <option value="3">3 dorm.</option>
                  <option value="4">4+ dorm.</option>
                </select>
              </div>

              <div style={fieldWrap}>
                <label style={labelStyle}>Precio mín.</label>
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="0" style={inpStyle} />
              </div>

              <div style={fieldWrap}>
                <label style={labelStyle}>Precio máx.</label>
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Sin límite" style={inpStyle} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <label style={{ ...labelStyle, opacity: 0 }}>.</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button type="submit" style={btnPrimary}>Buscar</button>
                  {activeFiltersCount > 0 && (
                    <button type="button" onClick={clearFilters} style={btnSecondary}>Limpiar</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Results bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: '#737373', fontSize: '0.88rem' }}>
            <strong style={{ color: '#171717' }}>{sorted.length}</strong>{' '}
            {sorted.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
            {activeFiltersCount > 0 && ' · con filtros aplicados'}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#737373', whiteSpace: 'nowrap' }}>Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ ...selStyle, fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}
            >
              <option value="default">Destacados</option>
              <option value="newest">Más recientes</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="sqm-desc">Mayor superficie</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {sorted.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {sorted.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid #f0f0f0' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4d4d4" strokeWidth="1.5" style={{ margin: '0 auto 1rem', display: 'block' }}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <h3 style={{ fontWeight: 700, color: '#404040', marginBottom: '0.5rem' }}>No encontramos propiedades</h3>
            <p style={{ color: '#737373', fontSize: '0.9rem' }}>
              Probá con otros filtros o{' '}
              <button onClick={clearFilters} style={{ color: '#C9A96E', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                limpiá la búsqueda
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const fieldWrap: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '0.3rem' }
const labelStyle: React.CSSProperties = { fontSize: '0.72rem', fontWeight: 600, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.05em' }
const selStyle: React.CSSProperties = { padding: '0.6rem 0.85rem', border: '1.5px solid #e5e5e5', borderRadius: '0.6rem', fontSize: '0.875rem', color: '#262626', backgroundColor: '#fafafa', outline: 'none', width: '100%' }
const inpStyle: React.CSSProperties = { padding: '0.6rem 0.85rem', border: '1.5px solid #e5e5e5', borderRadius: '0.6rem', fontSize: '0.875rem', outline: 'none', backgroundColor: '#fafafa', width: '100%', boxSizing: 'border-box' }
const btnPrimary: React.CSSProperties = { padding: '0.65rem 1.5rem', backgroundColor: '#171717', color: '#ffffff', border: 'none', borderRadius: '0.6rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }
const btnSecondary: React.CSSProperties = { padding: '0.65rem 1rem', backgroundColor: '#f5f5f5', color: '#525252', border: '1px solid #e5e5e5', borderRadius: '0.6rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }

export default function PropiedadesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando...</div>}>
      <PropiedadesContent />
    </Suspense>
  )
}
