'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Simulate send
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1.5px solid #e5e5e5',
    borderRadius: '0.6rem',
    fontSize: '0.9rem',
    outline: 'none',
    backgroundColor: '#fafafa',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <section id="contacto" style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
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
            Hablemos
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: '#171717',
              letterSpacing: '-0.03em',
            }}
          >
            Contactanos
          </h2>
          <p style={{ color: '#737373', marginTop: '0.75rem' }}>
            Estamos para ayudarte. Completá el formulario o comunicate directamente con nosotros.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <div>
            {sent ? (
              <div
                style={{
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  color: '#16a34a',
                  fontWeight: 600,
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto 0.75rem', display: 'block' }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                ¡Mensaje enviado! Nos comunicaremos pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: '#525252', marginBottom: '0.4rem' }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan Pérez"
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = '#C9A96E')}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = '#e5e5e5')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: '#525252', marginBottom: '0.4rem' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="juan@ejemplo.com"
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = '#C9A96E')}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = '#e5e5e5')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: '#525252', marginBottom: '0.4rem' }}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(0291) 4000-000"
                    style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = '#C9A96E')}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = '#e5e5e5')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: '#525252', marginBottom: '0.4rem' }}>
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="¿En qué podemos ayudarte?"
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                    onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = '#C9A96E')}
                    onBlur={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = '#e5e5e5')}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '0.85rem',
                    backgroundColor: '#171717',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '0.6rem',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#404040')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#171717')}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          {/* Contact info + map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                backgroundColor: '#fafafa',
                borderRadius: '1rem',
                padding: '1.75rem',
                border: '1px solid #f0f0f0',
              }}
            >
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#171717', marginBottom: '1.25rem' }}>
                Información de contacto
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ContactItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                  label="Dirección"
                  value="Av. Alem 750, Bahía Blanca"
                />
                <ContactItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
                    </svg>
                  }
                  label="Teléfono"
                  value="(0291) 4000-000"
                />
                <ContactItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#22c55e">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.512 5.813L.057 23.054a.75.75 0 0 0 .92.92l5.24-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.516-5.17-1.413l-.37-.22-3.828 1.063 1.063-3.828-.22-.37A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  }
                  label="WhatsApp"
                  value={
                    <a
                      href="https://wa.me/5492914000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#22c55e', textDecoration: 'none', fontWeight: 600 }}
                    >
                      +54 9 291 400-0000
                    </a>
                  }
                />
                <ContactItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                  label="Horarios"
                  value="Lun–Vie: 9–18hs · Sáb: 9–13hs"
                />
              </div>
            </div>

            {/* Map */}
            <div style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12437.073!2d-62.2663!3d-38.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbc3eefdeba3f%3A0x26688d5a5fa54a4b!2sBah%C3%ADa%20Blanca%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000"
                width="100%"
                height="260"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Bahía Propiedades"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
      <div
        style={{
          width: '36px',
          height: '36px',
          backgroundColor: '#fdf8f0',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '0.75rem', color: '#a3a3a3', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#262626', fontWeight: 500 }}>{value}</div>
      </div>
    </div>
  )
}
