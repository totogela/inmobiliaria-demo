import Link from 'next/link'

export const POSTS = [
  {
    slug: 'como-elegir-barrio-bahia-blanca',
    title: '¿Cómo elegir el barrio ideal en Bahía Blanca?',
    excerpt: 'Palihue, Villa Mitre, Centro, Barrio Universitario... cada zona tiene su personalidad. Te ayudamos a encontrar la que mejor se adapta a tu estilo de vida y presupuesto.',
    category: 'Guías',
    readTime: '5 min',
    date: '15 de mayo, 2025',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'creditos-hipotecarios-argentina-2025',
    title: 'Créditos hipotecarios en Argentina: todo lo que necesitás saber en 2025',
    excerpt: 'Tasas, requisitos, montos máximos y bancos disponibles. Una guía completa y actualizada para que tomes la mejor decisión antes de pedir tu crédito.',
    category: 'Financiamiento',
    readTime: '8 min',
    date: '2 de mayo, 2025',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'cuanto-vale-mi-propiedad',
    title: '¿Cuánto vale mi propiedad? Guía para tasarla correctamente',
    excerpt: 'Muchos propietarios sobrevaloran o subvaloran sus inmuebles. Conocé los factores que determinan el valor real de mercado y evitá errores costosos.',
    category: 'Tasaciones',
    readTime: '6 min',
    date: '18 de abril, 2025',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'consejos-para-alquilar-tu-propiedad',
    title: '10 consejos para alquilar tu propiedad más rápido y al mejor precio',
    excerpt: 'Desde las fotos hasta el precio correcto: estrategias probadas que nuestros asesores usan para reducir el tiempo de vacancia y maximizar el retorno.',
    category: 'Alquiler',
    readTime: '7 min',
    date: '5 de abril, 2025',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'mejores-barrios-para-invertir-bahia-blanca',
    title: 'Los mejores barrios para invertir en Bahía Blanca en 2025',
    excerpt: 'Aldea Romana, Barrio Universitario y Las Villas lideran el crecimiento. Analizamos rentabilidad, demanda y proyección de cada zona para inversores.',
    category: 'Inversión',
    readTime: '9 min',
    date: '20 de marzo, 2025',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'que-es-administracion-de-alquileres',
    title: '¿Qué es la administración de alquileres y por qué conviene contratarla?',
    excerpt: 'Si tenés una propiedad alquilada y pasás horas gestionando pagos, reparaciones e inquilinos, este servicio puede cambiarle la vida. Te explicamos todo.',
    category: 'Servicios',
    readTime: '5 min',
    date: '10 de marzo, 2025',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
  },
]

const CATEGORIES = ['Todos', 'Guías', 'Financiamiento', 'Tasaciones', 'Alquiler', 'Inversión', 'Servicios']
const CATEGORY_COLORS: Record<string, string> = {
  Guías: '#2563EB', Financiamiento: '#059669', Tasaciones: '#C9A96E',
  Alquiler: '#7C3AED', Inversión: '#DC2626', Servicios: '#D97706',
}

export default function BlogPage() {
  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f7' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#171717', padding: '4.5rem 1.5rem 3.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#C9A96E', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Consejos e información</span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.85rem' }}>
            Blog Inmobiliario
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.65 }}>
            Guías, análisis de mercado y consejos prácticos para compradores, vendedores e inversores.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '2.5rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid #f0f0f0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', transition: 'box-shadow 0.3s' }}>
            <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ backgroundColor: CATEGORY_COLORS[featured.category] || '#C9A96E', color: '#fff', padding: '0.2rem 0.7rem', borderRadius: '9999px', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{featured.category}</span>
                <span style={{ fontSize: '0.75rem', color: '#737373' }}>{featured.readTime} de lectura</span>
              </div>
              <h2 style={{ fontWeight: 800, fontSize: '1.4rem', color: '#171717', lineHeight: 1.25, marginBottom: '0.85rem' }}>{featured.title}</h2>
              <p style={{ color: '#525252', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.78rem', color: '#a3a3a3' }}>{featured.date}</span>
                <span style={{ color: '#C9A96E', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Leer artículo
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #f0f0f0', boxShadow: '0 1px 8px rgba(0,0,0,0.05)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.3s, transform 0.3s' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} loading="lazy" />
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ backgroundColor: CATEGORY_COLORS[post.category] || '#C9A96E', color: '#fff', padding: '0.18rem 0.6rem', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>{post.category}</span>
                    <span style={{ fontSize: '0.72rem', color: '#a3a3a3' }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontWeight: 700, fontSize: '1rem', color: '#171717', lineHeight: 1.35, marginBottom: '0.6rem' }}>{post.title}</h2>
                  <p style={{ color: '#737373', fontSize: '0.82rem', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #f5f5f5' }}>
                    <span style={{ fontSize: '0.72rem', color: '#a3a3a3' }}>{post.date}</span>
                    <span style={{ color: '#C9A96E', fontWeight: 600, fontSize: '0.78rem' }}>Leer →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
