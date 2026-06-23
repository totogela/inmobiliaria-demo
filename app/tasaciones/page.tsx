'use client'

import { useState } from 'react'

const PROPERTY_TYPES = ['Casa', 'Departamento', 'PH / Dúplex', 'Terreno / Lote', 'Local comercial', 'Oficina', 'Galpón / Depósito']
const ZONES = ['Palihue', 'Villa Mitre', 'Centro', 'Aldea Romana', 'Barrio Universitario', 'Las Villas', 'Macholand', 'Ingeniero White', 'Monte Hermoso', 'Otro']
const MOTIVATIONS = ['Quiero vender', 'Quiero alquilar', 'Por herencia o sucesión', 'Para trámite bancario / hipoteca', 'Por curiosidad / información', 'Otro motivo']

const STEPS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: 'Completás el formulario', desc: 'Nos contás los datos básicos de tu propiedad.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>,
    title: 'Te contactamos', desc: 'En menos de 24hs un asesor se comunica con vos.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'Visitamos la propiedad', desc: 'Un tasador certificado evalúa in situ.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Recibís el informe', desc: 'Valuación detallada con precio de mercado y comparativos.',
  },
]

export default function TasacionesPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', propertyType: '', zone: '', address: '', sqm: '', coveredSqm: '', bedrooms: '', bathrooms: '', motivation: '', comments: ''
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1200)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f7' }}>
      {/* Hero */}
      <div style={{ position: 'relative', backgroundColor: '#171717', padding: '5rem 1.5rem 4rem', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', backgroundColor: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.4)', color: '#C9A96E', padding: '0.3rem 1rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Servicio gratuito
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
            Tasá tu propiedad<br />gratis con expertos
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '540px', margin: '0 auto' }}>
            Más de 15 años valuando propiedades en Bahía Blanca. Recibí un informe completo con el valor real de mercado de tu inmueble.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div style={{ backgroundColor: '#ffffff', padding: '3rem 1.5rem', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#fdf8f0', border: '1px solid #f0ebe0', borderRadius: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.icon}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <span style={{ width: '20px', height: '20px', backgroundColor: '#C9A96E', borderRadius: '50%', color: '#fff', fontSize: '0.68rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#171717' }}>{s.title}</h3>
              </div>
              <p style={{ color: '#737373', fontSize: '0.83rem', lineHeight: 1.55 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        {sent ? (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', padding: '4rem 2rem', textAlign: 'center', border: '1px solid #f0f0f0', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
            <div style={{ width: '64px', height: '64px', backgroundColor: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: '1.5rem', color: '#171717', marginBottom: '0.75rem' }}>¡Solicitud recibida!</h2>
            <p style={{ color: '#525252', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto 2rem' }}>
              Un asesor de Bahía Propiedades se va a comunicar con vos en las próximas <strong>24 horas hábiles</strong> para coordinar la tasación.
            </p>
            <a href="https://wa.me/5492914000000?text=Hola,%20solicité%20una%20tasación%20y%20quería%20comunicarme" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#22c55e', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '0.65rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.512 5.813L.057 23.054a.75.75 0 0 0 .92.92l5.24-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.516-5.17-1.413l-.37-.22-3.828 1.063 1.063-3.828-.22-.37A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              También podés escribirnos por WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', padding: '2.5rem', border: '1px solid #f0f0f0', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
            <h2 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#171717', marginBottom: '0.4rem' }}>Solicitá tu tasación gratuita</h2>
            <p style={{ color: '#737373', fontSize: '0.875rem', marginBottom: '2rem' }}>Completá los datos y nos contactamos en menos de 24hs.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <Field label="Tu nombre *" name="name" value={form.name} onChange={handleChange} placeholder="Nombre y apellido" required />
              <Field label="Teléfono *" name="phone" value={form.phone} onChange={handleChange} placeholder="(0291) 4..." type="tel" required />
              <Field label="Email *" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" type="email" required />
              <SelectField label="Tipo de propiedad *" name="propertyType" value={form.propertyType} onChange={handleChange} options={PROPERTY_TYPES} required />
              <SelectField label="Barrio / Zona *" name="zone" value={form.zone} onChange={handleChange} options={ZONES} required />
              <Field label="Dirección" name="address" value={form.address} onChange={handleChange} placeholder="Calle y número" />
              <Field label="Superficie total (m²)" name="sqm" value={form.sqm} onChange={handleChange} placeholder="Ej: 250" type="number" />
              <Field label="Sup. cubierta (m²)" name="coveredSqm" value={form.coveredSqm} onChange={handleChange} placeholder="Ej: 150" type="number" />
              <Field label="Dormitorios" name="bedrooms" value={form.bedrooms} onChange={handleChange} placeholder="Ej: 3" type="number" />
              <SelectField label="¿Por qué querés tasar?" name="motivation" value={form.motivation} onChange={handleChange} options={MOTIVATIONS} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelSt}>Comentarios adicionales</label>
              <textarea name="comments" value={form.comments} onChange={handleChange} placeholder="Contanos algo más sobre la propiedad: reformas, estado, equipamiento..." rows={4}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #e5e5e5', borderRadius: '0.65rem', fontSize: '0.875rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box', backgroundColor: '#fafafa' }} />
            </div>

            <button type="submit" disabled={loading}
              style={{ width: '100%', padding: '1rem', backgroundColor: loading ? '#a8a8a8' : '#C9A96E', color: '#ffffff', border: 'none', borderRadius: '0.75rem', fontWeight: 700, fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              {loading ? 'Enviando...' : 'Solicitar tasación gratuita →'}
            </button>
            <p style={{ textAlign: 'center', color: '#a3a3a3', fontSize: '0.75rem', marginTop: '0.75rem' }}>
              Servicio gratuito y sin compromiso. Matrícula CMPI Nro. 1234.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

const labelSt: React.CSSProperties = { display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }
const inpSt: React.CSSProperties = { width: '100%', padding: '0.7rem 0.9rem', border: '1.5px solid #e5e5e5', borderRadius: '0.6rem', fontSize: '0.875rem', outline: 'none', backgroundColor: '#fafafa', boxSizing: 'border-box', fontFamily: 'inherit' }

function Field({ label, name, value, onChange, placeholder, type = 'text', required }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label style={labelSt}>{label}</label>
      <input name={name} value={value} onChange={onChange} placeholder={placeholder} type={type} required={required} style={inpSt} />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options, required }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[]; required?: boolean }) {
  return (
    <div>
      <label style={labelSt}>{label}</label>
      <select name={name} value={value} onChange={onChange} required={required} style={{ ...inpSt, cursor: 'pointer' }}>
        <option value="">Seleccioná...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
