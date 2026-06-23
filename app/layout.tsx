import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WAFloatButton from '@/components/WAFloatButton'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bahía Propiedades | Inmobiliaria en Bahía Blanca',
  description:
    'Encontrá tu próxima propiedad en Bahía Blanca. Casas, departamentos y terrenos en venta y alquiler. Asesoramiento personalizado.',
  keywords:
    'inmobiliaria Bahía Blanca, propiedades en venta, alquiler Bahía Blanca, casas departamentos',
  openGraph: {
    title: 'Bahía Propiedades | Inmobiliaria en Bahía Blanca',
    description: 'Encontrá tu próxima propiedad en Bahía Blanca.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WAFloatButton />
      </body>
    </html>
  )
}
