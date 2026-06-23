import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS } from '../page'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

const CATEGORY_COLORS: Record<string, string> = {
  Guías: '#2563EB', Financiamiento: '#059669', Tasaciones: '#C9A96E',
  Alquiler: '#7C3AED', Inversión: '#DC2626', Servicios: '#D97706',
}

const CONTENT: Record<string, string[]> = {
  'como-elegir-barrio-bahia-blanca': [
    'Elegir el barrio donde vas a vivir es una de las decisiones más importantes de tu vida. En Bahía Blanca, cada zona tiene su propia identidad, ventajas y perfil de habitante. Antes de tomar una decisión, es fundamental entender qué ofrece cada barrio.',
    'Palihue es el barrio más exclusivo de la ciudad. Con calles arboladas, casas amplias y seguridad privada, es ideal para familias que buscan tranquilidad y estatus. Los precios son más altos, pero la calidad de vida y la revalorización constante lo justifican.',
    'Villa Mitre es el clásico barrio familiar bahiense: tranquilo, seguro, con excelente infraestructura de colegios y plazas. Es una de las zonas con mayor demanda y buen equilibrio entre precio y calidad.',
    'El Centro concentra comercios, servicios, transporte y cultura. Ideal para personas que valoran la comodidad urbana. Los departamentos son la tipología dominante y hay gran movimiento de alquileres.',
    'Barrio Universitario, cercano a la UNS, tiene alta demanda de alquiler por parte de estudiantes e inversores. Los precios son accesibles y la rentabilidad como inversor es excelente.',
    'Aldea Romana y Las Villas son barrios privados en expansión, con propiedades modernas, lotes disponibles y toda la infraestructura. Son la apuesta de muchas familias jóvenes que buscan seguridad y modernidad.',
    'La recomendación de nuestros asesores es siempre visitar el barrio a distintos horarios, hablar con vecinos y evaluar el acceso a los servicios que más usás en el día a día. Cada familia tiene necesidades diferentes y el barrio ideal es el que se adapta a las tuyas.',
  ],
  'creditos-hipotecarios-argentina-2025': [
    'El mercado de créditos hipotecarios en Argentina atraviesa un momento de reactivación en 2025. Los bancos públicos y privados están ofreciendo condiciones más accesibles después de años de restricciones.',
    'Los créditos hipotecarios en pesos ajustados por UVA son la modalidad más común. La cuota se ajusta por inflación, lo que implica un riesgo a considerar. Sin embargo, para quienes tienen ingresos indexados, puede ser una opción viable.',
    'El Banco Nación y el Banco Provincia lideran el mercado con tasas nominales que rondan el 4-5% anual para líneas especiales. Los requisitos básicos incluyen: antigüedad laboral mínima de 1 año, ingresos demostrables, y que la cuota no supere el 30-35% del ingreso neto.',
    'El monto máximo que podés financiar depende del banco y tu capacidad de pago. En general, es posible acceder a hasta el 80% del valor de la propiedad, siendo el 20% restante más los gastos de escritura el capital propio mínimo necesario.',
    'Los documentos que generalmente te van a pedir: DNI, últimos 6 recibos de sueldo o declaración jurada de ingresos, certificado de libre deuda, estado de cuenta bancario, y la documentación de la propiedad (título, planos, libre de deudas).',
    'El proceso desde la pre-calificación hasta la firma puede llevar entre 45 y 90 días. En Bahía Propiedades acompañamos a nuestros clientes en todo este proceso, coordinando con los bancos y el escribano para que sea lo más ágil posible.',
  ],
  'cuanto-vale-mi-propiedad': [
    'Una de las preguntas más frecuentes que recibimos es "¿cuánto vale mi propiedad?". La respuesta nunca es simple: el valor de mercado de un inmueble depende de una combinación de factores objetivos y subjetivos.',
    'Los principales factores que determinan el valor son: la ubicación (barrio, calle, vista), la superficie (total y cubierta), la cantidad de ambientes y baños, el estado de conservación, los materiales y terminaciones, los amenities (cochera, pileta, jardín) y el piso (en el caso de departamentos).',
    'Un error muy común es basarse en el precio al que compró la propiedad años atrás o en lo que pagaron los vecinos. El mercado inmobiliario es dinámico y los valores cambian constantemente según la economía, la demanda y la oferta de cada zona.',
    'La forma más precisa de conocer el valor de tu propiedad es a través de una tasación profesional. Un tasador matriculado analiza comparativos de mercado (ventas recientes de propiedades similares en la misma zona), calcula el valor por metro cuadrado y emite un informe formal.',
    'En Bahía Propiedades realizamos tasaciones gratuitas para propietarios que estén considerando vender o alquilar. El informe que entregamos es reconocido por los principales bancos de la región para trámites hipotecarios.',
    'Un precio bien determinado desde el inicio es fundamental para no perder tiempo. Una propiedad sobrevaluada se queda años en el mercado, y al final termina vendiéndose por debajo de lo que se hubiera obtenido con una estrategia correcta desde el principio.',
  ],
  'consejos-para-alquilar-tu-propiedad': [
    'Poner una propiedad en alquiler puede ser una excelente fuente de ingresos pasivos, pero hacerlo mal puede significar meses de vacancia, conflictos con inquilinos o pérdida de dinero. Estos son los 10 consejos que nuestros asesores dan a todos los propietarios.',
    '1. Fijar un precio de mercado realista: El error más común. Un alquiler muy alto espanta a buenos inquilinos. Consultá comparativos de zona antes de definir el precio.',
    '2. Presentar la propiedad impecable: Una propiedad limpia, con pequeñas reparaciones resueltas y bien iluminada se alquila mucho más rápido. La primera impresión es decisiva.',
    '3. Hacer fotos profesionales: El 90% de los inquilinos descarta propiedades por las fotos. Fotos bien iluminadas, en ángulo amplio y que muestren cada espacio marcan la diferencia.',
    '4. Publicar en todos los portales: Zonaprop, Argenprop, MercadoLibre y redes sociales. Cuanta más visibilidad, más rápido vas a encontrar el inquilino ideal.',
    '5. Calificar bien al inquilino: Verificá ingresos, antecedentes crediticios y referencias laborales. Un buen inquilino vale oro; un mal inquilino puede costarte mucho más que el alquiler de varios meses.',
    '6. Tener el contrato bien redactado: El contrato debe contemplar todos los escenarios posibles. Un buen contrato evita conflictos futuros.',
    '7. Considerar delegar la administración: Si no tenés tiempo o vivís lejos, una inmobiliaria puede encargarse de todo por un porcentaje del alquiler mensual.',
    '8. Mantener la propiedad en buen estado: Un propietario responsivo que resuelve los problemas rápido retiene a sus buenos inquilinos por años.',
    '9. Actualizar el precio periódicamente: Según el contrato y la inflación, actualizá el valor para no quedarte rezagado respecto al mercado.',
    '10. Asegurar la propiedad: Un seguro de alquiler cubre incendio, robo y hasta la falta de pago del inquilino. Es una inversión que vale la pena.',
  ],
  'mejores-barrios-para-invertir-bahia-blanca': [
    'Bahía Blanca consolida su posición como uno de los mercados inmobiliarios más estables del interior del país. Para los inversores, 2025 presenta oportunidades concretas en varios barrios con alto potencial de revalorización y rentabilidad.',
    'Barrio Universitario lidera el ranking de rentabilidad. Con una demanda estructural de alquiler (estudiantes e investigadores de la UNS), la tasa de vacancia es históricamente baja. Un departamento de 1 ambiente puede generar una renta del 5-7% anual en USD.',
    'Aldea Romana es el barrio privado de mayor crecimiento. Con lotes a precios todavía accesibles y una oferta escasa, los terrenos se han revalorizado un 40% en los últimos 3 años. Ideal para quien quiera construir y vender.',
    'Centro ofrece oportunidades de compra de departamentos para refaccionar a precios bajos y reventa o alquiler a precios de mercado. El spread de ganancia puede ser importante si se elige bien la propiedad.',
    'Las Villas, el barrio cerrado en expansión, atrae a familias de clase media alta que buscan seguridad. La demanda de alquiler supera la oferta, lo que mantiene los precios altos y el tiempo de vacancia muy bajo.',
    'La regla de oro para invertir en inmuebles sigue siendo la misma: ubicación, ubicación, ubicación. Un asesor inmobiliario con conocimiento local puede ser la diferencia entre una buena inversión y una costosa equivocación.',
  ],
  'que-es-administracion-de-alquileres': [
    'Si tenés una propiedad alquilada, sabés lo que significa estar pendiente de los pagos mensuales, atender llamados del inquilino por problemas en la heladera a las 11 de la noche, o discutir sobre quién paga qué cuando vence el contrato.',
    'La administración de alquileres es un servicio mediante el cual una inmobiliaria o empresa gestora se hace cargo de todo lo que implica tener un inmueble alquilado. Básicamente, te despreocupás completamente de tu inversión.',
    '¿Qué incluye? Cobranza mensual del alquiler, liquidación y transferencia al propietario, pago de expensas e impuestos, atención y resolución de consultas del inquilino, coordinación de reparaciones con presupuesto previo, informe mensual detallado, gestión de renovaciones contractuales, y proceso de desocupación cuando corresponde.',
    '¿Cuánto cuesta? En general, la comisión de administración es un porcentaje del alquiler mensual (generalmente entre el 8% y el 12%). Este costo se compensa fácilmente con la tranquilidad y el tiempo que ahorrás.',
    '¿Conviene si vivís lejos o en el exterior? Absolutamente. Es la única forma de tener tu inversión funcionando sin que debas estar presente. Nosotros nos encargamos de todo y te enviamos los informes y pagos periódicamente.',
    'En Bahía Propiedades administramos más de 150 propiedades en toda la ciudad. Contactanos para conocer nuestras condiciones y dar el primer paso hacia una inversión inmobiliaria sin complicaciones.',
  ],
}

type Props = { params: Promise<{ slug: string }> }

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const content = CONTENT[slug] || []
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3)
  const color = CATEGORY_COLORS[post.category] || '#C9A96E'

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f7' }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f0f0f0', padding: '0.85rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '0.5rem', fontSize: '0.82rem', color: '#737373' }}>
          <Link href="/" style={{ color: '#737373', textDecoration: 'none' }}>Inicio</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: '#737373', textDecoration: 'none' }}>Blog</Link>
          <span>›</span>
          <span style={{ color: '#171717' }}>{post.category}</span>
        </div>
      </div>

      {/* Article */}
      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Meta */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ backgroundColor: color, color: '#fff', padding: '0.22rem 0.75rem', borderRadius: '9999px', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{post.category}</span>
          <span style={{ fontSize: '0.78rem', color: '#a3a3a3' }}>{post.date}</span>
          <span style={{ fontSize: '0.78rem', color: '#a3a3a3' }}>·</span>
          <span style={{ fontSize: '0.78rem', color: '#a3a3a3' }}>{post.readTime} de lectura</span>
        </div>

        <h1 style={{ fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#171717', lineHeight: 1.2, marginBottom: '1rem' }}>{post.title}</h1>
        <p style={{ color: '#525252', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', borderLeft: `3px solid ${color}`, paddingLeft: '1rem' }}>{post.excerpt}</p>

        <img src={post.image} alt={post.title} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '2.5rem', display: 'block' }} />

        {/* Content */}
        <div style={{ fontSize: '0.97rem', lineHeight: 1.85, color: '#404040' }}>
          {content.map((paragraph, i) => (
            <p key={i} style={{ marginBottom: '1.4rem' }}>{paragraph}</p>
          ))}
        </div>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid #f0f0f0', marginTop: '3rem' }}>
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=80&q=80" alt="Roberto Álvarez" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} loading="lazy" />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#171717' }}>Roberto Álvarez</div>
            <div style={{ fontSize: '0.78rem', color: '#C9A96E', fontWeight: 600 }}>Director — Bahía Propiedades</div>
            <div style={{ fontSize: '0.78rem', color: '#737373', marginTop: '0.2rem' }}>Más de 20 años en el mercado inmobiliario bahiense.</div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: '#171717', borderRadius: '1.25rem', padding: '2.5rem', textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.6rem' }}>¿Necesitás asesoramiento?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Nuestros asesores están disponibles para ayudarte sin costo ni compromiso.</p>
          <a href="https://wa.me/5492914000000" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#22c55e', color: '#fff', padding: '0.85rem 1.75rem', borderRadius: '0.65rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
            Consultar por WhatsApp
          </a>
        </div>
      </article>

      {/* Related */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#171717', marginBottom: '1.5rem' }}>Otros artículos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#ffffff', borderRadius: '0.85rem', overflow: 'hidden', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '140px', objectFit: 'cover' }} loading="lazy" />
                <div style={{ padding: '1.1rem' }}>
                  <span style={{ backgroundColor: CATEGORY_COLORS[p.category] || '#C9A96E', color: '#fff', padding: '0.18rem 0.6rem', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 700 }}>{p.category}</span>
                  <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#171717', lineHeight: 1.35, marginTop: '0.6rem' }}>{p.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
