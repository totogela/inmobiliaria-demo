export interface Property {
  id: string;
  title: string;
  type: 'casa' | 'departamento' | 'terreno' | 'local' | 'cochera';
  operation: 'venta' | 'alquiler' | 'temporario';
  price: number;
  currency: 'USD' | 'ARS';
  zone: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  sqm: number;
  coveredSqm?: number;
  description: string;
  features: string[];
  images: string[];
  lat?: number;
  lng?: number;
  featured: boolean;
  aptaCredito?: boolean;
  pricePorDia?: number;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Casa con jardín en Villa Mitre',
    type: 'casa',
    operation: 'venta',
    price: 145000,
    currency: 'USD',
    zone: 'Villa Mitre',
    address: 'Calle Pringles 1423, Villa Mitre',
    bedrooms: 3,
    bathrooms: 2,
    sqm: 280,
    coveredSqm: 180,
    description:
      'Hermosa casa familiar ubicada en uno de los barrios más tranquilos y seguros de Bahía Blanca. Cuenta con amplio jardín, garage para dos vehículos y excelente iluminación natural. Ideal para familias que buscan calidad de vida y comodidad.',
    features: [
      'Jardín amplio',
      'Garage doble',
      'Quincho con parrilla',
      'Pileta',
      'Calefacción central',
      'Pisos de porcelanato',
      'Cocina equipada',
      'Lavadero',
    ],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7083,
    lng: -62.2663,
    featured: true,
    aptaCredito: true,
  },
  {
    id: '2',
    title: 'Departamento moderno en el Centro',
    type: 'departamento',
    operation: 'venta',
    price: 89000,
    currency: 'USD',
    zone: 'Centro',
    address: 'Av. Alem 850, Piso 4, Dpto B',
    bedrooms: 2,
    bathrooms: 1,
    sqm: 72,
    coveredSqm: 72,
    description:
      'Luminoso departamento a pasos de los principales comercios y servicios de Bahía Blanca. Piso alto con excelente vista, terminaciones de primera calidad y edificio con amenities. Ideal para invertir o para vivir.',
    features: [
      'Balcón con vista',
      'Cochera en edificio',
      'Seguridad 24hs',
      'Ascensor',
      'Aire acondicionado',
      'Pisos de madera',
      'Cocina americana',
      'Amenities: SUM y gimnasio',
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7196,
    lng: -62.2724,
    featured: true,
    aptaCredito: true,
  },
  {
    id: '3',
    title: 'Casa premium en Palihue',
    type: 'casa',
    operation: 'venta',
    price: 320000,
    currency: 'USD',
    zone: 'Palihue',
    address: 'Calle Los Robles 345, Palihue',
    bedrooms: 4,
    bathrooms: 3,
    sqm: 520,
    coveredSqm: 310,
    description:
      'Imponente residencia en el barrio más exclusivo de Bahía Blanca. Diseño arquitectónico de autor, materiales importados y acabados de altísima calidad. Entorno arbolado con total privacidad y seguridad.',
    features: [
      'Pileta climatizada',
      'Cancha de tenis',
      'Garage para 3 autos',
      'Quincho de lujo',
      'Domótica',
      'Seguridad perimetral',
      'Jardín paisajístico',
      'Estudio y sala de juegos',
    ],
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.6892,
    lng: -62.2441,
    featured: true,
  },
  {
    id: '4',
    title: 'Departamento en alquiler – Barrio Universitario',
    type: 'departamento',
    operation: 'alquiler',
    price: 280000,
    currency: 'ARS',
    zone: 'Barrio Universitario',
    address: 'Av. Colón 1200, Piso 2, Dpto A',
    bedrooms: 1,
    bathrooms: 1,
    sqm: 45,
    coveredSqm: 45,
    description:
      'Acogedor monoambiente ampliado ideal para estudiantes universitarios o profesionales. A pocas cuadras de la UNS y con excelente acceso al transporte público. Edificio moderno y bien mantenido.',
    features: [
      'Amoblado',
      'Expensas bajas',
      'Calefacción a gas',
      'Internet incluido',
      'Lavadero común',
      'Balcón',
    ],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7012,
    lng: -62.2598,
    featured: false,
  },
  {
    id: '5',
    title: 'Casa en alquiler – Las Villas',
    type: 'casa',
    operation: 'alquiler',
    price: 520000,
    currency: 'ARS',
    zone: 'Las Villas',
    address: 'Calle Tornquist 678, Las Villas',
    bedrooms: 3,
    bathrooms: 2,
    sqm: 200,
    coveredSqm: 140,
    description:
      'Casa cómoda y espaciosa en barrio privado con vigilancia. Perfecta para familias que buscan seguridad y tranquilidad. Amplio parque con parrilla y espacio para niños.',
    features: [
      'Barrio cerrado',
      'Vigilancia 24hs',
      'Jardín con parrilla',
      'Garage',
      'Calefacción central',
      'Luminosa',
    ],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.6955,
    lng: -62.2801,
    featured: true,
  },
  {
    id: '6',
    title: 'Terreno en Aldea Romana',
    type: 'terreno',
    operation: 'venta',
    price: 35000,
    currency: 'USD',
    zone: 'Aldea Romana',
    address: 'Lote 14, Manzana C, Aldea Romana',
    sqm: 600,
    description:
      'Lote en barrio privado Aldea Romana, uno de los desarrollos residenciales de mayor crecimiento en Bahía Blanca. Todos los servicios en la puerta. Escritura lista y sin deudas.',
    features: [
      'Escritura lista',
      'Luz y gas en calle',
      'Agua corriente',
      'Cloacas',
      'Pavimento',
      'Barrio privado',
      'Apto construcción inmediata',
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7310,
    lng: -62.2910,
    featured: false,
  },
  {
    id: '7',
    title: 'Departamento 3 ambientes – Centro',
    type: 'departamento',
    operation: 'venta',
    price: 115000,
    currency: 'USD',
    zone: 'Centro',
    address: "Calle O'Higgins 550, Piso 7, Dpto C",
    bedrooms: 2,
    bathrooms: 2,
    sqm: 95,
    coveredSqm: 95,
    description:
      'Amplio departamento en piso alto con vista panorámica a la ciudad. Dos dormitorios en suite, cocina totalmente equipada y living comedor de gran tamaño. Edificio de categoría con portería permanente.',
    features: [
      'Vista panorámica',
      'Dos suites',
      'Portería permanente',
      'Cochera fija',
      'Baulera',
      'Aire acondicionado central',
      'Pisos de porcelanato',
    ],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7198,
    lng: -62.2718,
    featured: true,
    aptaCredito: true,
  },
  {
    id: '8',
    title: 'Casa a refaccionar – Villa Mitre',
    type: 'casa',
    operation: 'venta',
    price: 58000,
    currency: 'USD',
    zone: 'Villa Mitre',
    address: 'Calle Rondeau 890, Villa Mitre',
    bedrooms: 3,
    bathrooms: 1,
    sqm: 240,
    coveredSqm: 120,
    description:
      'Oportunidad única para inversores o familias que deseen personalizar su hogar. Gran lote con buenas medidas, casa sólida que necesita refacciones. Barrio tranquilo con todos los servicios.',
    features: [
      'Gran lote',
      'Estructura sólida',
      'Todos los servicios',
      'Apto subdivisión',
      'Excelente ubicación',
    ],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7095,
    lng: -62.2655,
    featured: false,
  },
  {
    id: '9',
    title: 'Departamento de lujo – Macholand',
    type: 'departamento',
    operation: 'alquiler',
    price: 650000,
    currency: 'ARS',
    zone: 'Macholand',
    address: 'Av. Cabrera 1450, Piso 10',
    bedrooms: 3,
    bathrooms: 2,
    sqm: 110,
    coveredSqm: 110,
    description:
      'Departamento de categoría en torre premium con amenities completos. Vista al mar y a la ciudad, terminaciones importadas. Ideal para ejecutivos o familias de alto perfil.',
    features: [
      'Vista al mar',
      'SUM y piscina en terraza',
      'Gimnasio',
      'Cochera cubierta',
      'Seguridad 24hs',
      'Concierge',
      'Smart home',
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7340,
    lng: -62.2440,
    featured: true,
  },
  {
    id: '10',
    title: 'Terreno comercial – Zona Industrial',
    type: 'terreno',
    operation: 'venta',
    price: 75000,
    currency: 'USD',
    zone: 'Zona Industrial',
    address: 'Ruta 3 km 694, Parcela 22',
    sqm: 2500,
    description:
      'Terreno de gran superficie apto para uso industrial o logístico. Acceso directo desde Ruta 3, fácil ingreso para camiones. Zona de expansión industrial con todos los servicios trifásicos.',
    features: [
      'Acceso ruta 3',
      'Luz trifásica',
      'Gas industrial',
      'Agua y cloacas',
      'Apto galpón',
      'Gran superficie',
      'Escritura disponible',
    ],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7450,
    lng: -62.3120,
    featured: false,
  },
  {
    id: '11',
    title: 'Casa moderna – Barrio Universitario',
    type: 'casa',
    operation: 'venta',
    price: 195000,
    currency: 'USD',
    zone: 'Barrio Universitario',
    address: 'Calle Saavedra 234, Barrio Universitario',
    bedrooms: 4,
    bathrooms: 3,
    sqm: 320,
    coveredSqm: 220,
    description:
      'Moderna casa de diseño arquitectónico contemporáneo en barrio tranquilo. Amplios espacios, mucha luz natural y terminaciones de primera calidad. Cerca de la UNS y colegios privados.',
    features: [
      'Diseño contemporáneo',
      'Pileta con deck',
      'Garage doble techado',
      'Cocina de autor',
      'Domótica básica',
      'Paneles solares',
      'Jardín paisajístico',
    ],
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7015,
    lng: -62.2595,
    featured: true,
    aptaCredito: true,
  },
  {
    id: '12',
    title: 'Departamento 1 ambiente – Alquiler Centro',
    type: 'departamento',
    operation: 'alquiler',
    price: 195000,
    currency: 'ARS',
    zone: 'Centro',
    address: 'Calle Chiclana 740, Piso 3, Dpto F',
    bedrooms: 1,
    bathrooms: 1,
    sqm: 38,
    coveredSqm: 38,
    description:
      'Acogedor departamento monoambiente en pleno centro de Bahía Blanca. Ideal para estudiantes o profesionales. Edificio moderno con portería y acceso seguro.',
    features: [
      'Pleno centro',
      'Amoblado opcional',
      'Expensas bajas',
      'Calefacción',
      'Balcón',
      'Portería',
    ],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=85',
    ],
    lat: -38.7202,
    lng: -62.2730,
    featured: false,
  },
  {
    id: '13',
    title: 'Cabaña en Monte Hermoso – Alquiler Temporario',
    type: 'casa',
    operation: 'temporario',
    price: 45000,
    currency: 'ARS',
    zone: 'Monte Hermoso',
    address: 'Calle Los Pinos 234, Monte Hermoso',
    bedrooms: 2,
    bathrooms: 1,
    sqm: 60,
    coveredSqm: 60,
    description: 'Acogedora cabaña a 3 cuadras del mar. Ideal para familias o parejas que buscan descansar en la costa bonaerense. Totalmente equipada, parrilla, jardín y lugar para autos.',
    features: ['A 3 cuadras del mar', 'Totalmente amoblada', 'Parrilla', 'WiFi incluido', 'Aire acondicionado', 'Cochera', 'Ropa de cama incluida'],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85',
    ],
    featured: true,
    pricePorDia: 45000,
  },
  {
    id: '14',
    title: 'Departamento de verano – Centro Bahía Blanca',
    type: 'departamento',
    operation: 'temporario',
    price: 28000,
    currency: 'ARS',
    zone: 'Centro',
    address: 'Av. Colón 845, Piso 5, Dpto A',
    bedrooms: 1,
    bathrooms: 1,
    sqm: 48,
    coveredSqm: 48,
    description: 'Luminoso departamento en pleno centro, ideal para estadías cortas por trabajo o turismo. Amoblado con todo lo necesario, piso alto, excelente vista y edificio seguro.',
    features: ['Amoblado completo', 'WiFi de alta velocidad', 'Smart TV', 'Cocina equipada', 'Portería', 'Balcón', 'Mínimo 3 noches'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=85',
    ],
    featured: false,
    pricePorDia: 28000,
  },
  {
    id: '15',
    title: 'Casa con pileta – Temporario Palihue',
    type: 'casa',
    operation: 'temporario',
    price: 85000,
    currency: 'ARS',
    zone: 'Palihue',
    address: 'Calle Los Aromos 567, Palihue',
    bedrooms: 3,
    bathrooms: 2,
    sqm: 220,
    coveredSqm: 150,
    description: 'Espectacular casa en el barrio más tranquilo de Bahía Blanca. Pileta, jardín, parrilla y todas las comodidades para unas vacaciones perfectas. Ideal para familias grandes.',
    features: ['Pileta', 'Parrilla', 'Jardín amplio', '3 dormitorios', 'Totalmente equipada', 'Cochera doble', 'WiFi y Smart TV'],
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=85',
    ],
    featured: true,
    pricePorDia: 85000,
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function filterProperties(params: {
  operation?: string;
  type?: string;
  zone?: string;
  minPrice?: number;
  maxPrice?: number;
}): Property[] {
  return properties.filter((p) => {
    if (params.operation && p.operation !== params.operation) return false;
    if (params.type && p.type !== params.type) return false;
    if (params.zone && !p.zone.toLowerCase().includes(params.zone.toLowerCase())) return false;
    if (params.minPrice && p.price < params.minPrice) return false;
    if (params.maxPrice && p.price > params.maxPrice) return false;
    return true;
  });
}

export function formatPrice(price: number, currency: 'USD' | 'ARS'): string {
  if (currency === 'USD') {
    return `USD ${price.toLocaleString('es-AR')}`;
  }
  return `ARS $${price.toLocaleString('es-AR')}`;
}
