import ContactSection from '@/components/ContactSection'

const faqs = [
  {
    q: '¿Cuánto tiempo lleva vender una propiedad?',
    a: 'El tiempo varía según el tipo, precio y ubicación de la propiedad. En promedio, una propiedad bien valuada se vende entre 2 y 6 meses. Nuestro equipo trabaja activamente para acortar este plazo.',
  },
  {
    q: '¿Qué comisión cobran?',
    a: 'Nuestra comisión sigue los estándares del Colegio de Martilleros y Corredores de la Provincia de Buenos Aires. Te la informamos con total transparencia antes de firmar cualquier acuerdo.',
  },
  {
    q: '¿Trabajan con créditos hipotecarios?',
    a: 'Sí. Asesoramos a nuestros clientes sobre las distintas opciones de financiamiento disponibles y los acompañamos en el proceso de solicitud de crédito hipotecario.',
  },
  {
    q: '¿Cómo taso mi propiedad?',
    a: 'Ofrecemos tasaciones gratuitas y sin compromiso. Uno de nuestros asesores visitará la propiedad y elaborará un informe detallado basado en el mercado actual.',
  },
  {
    q: '¿Pueden ayudarme a alquilar mi propiedad?',
    a: 'Absolutamente. Gestionamos todo el proceso: publicación, visitas, selección de inquilinos, redacción del contrato y seguimiento mensual.',
  },
]

export default function ContactoPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Page header */}
      <div style={{ backgroundColor: '#171717', padding: '3.5rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              color: '#C9A96E',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            Estamos para ayudarte
          </p>
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            Contacto
          </h1>
        </div>
      </div>

      {/* Contact section */}
      <ContactSection />

      {/* FAQ */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
              Respuestas rápidas
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: '#171717',
                letterSpacing: '-0.03em',
              }}
            >
              Preguntas frecuentes
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      backgroundColor: '#fdf8f0',
                      borderRadius: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#C9A96E',
                      flexShrink: 0,
                    }}
                  >
                    P
                  </span>
                  <div>
                    <h3 style={{ fontWeight: 700, color: '#171717', fontSize: '0.95rem', marginBottom: '0.6rem' }}>
                      {faq.q}
                    </h3>
                    <p style={{ color: '#737373', fontSize: '0.875rem', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
