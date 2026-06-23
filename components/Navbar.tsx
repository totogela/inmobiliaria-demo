'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PROP_DROPDOWN = [
  {
    href: '/propiedades?operation=venta', label: 'En venta',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    href: '/propiedades?operation=alquiler', label: 'En alquiler',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    href: '/alquiler-temporario', label: 'Alquiler temporario',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    href: '/apto-credito', label: 'Apto Crédito', highlight: true,
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [propOpen, setPropOpen] = useState(false)
  const propRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    const t = setTimeout(() => setVisible(true), 50)
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(t) }
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (propRef.current && !propRef.current.contains(e.target as Node)) setPropOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isPropActive = pathname.startsWith('/propiedades') || pathname === '/alquiler-temporario' || pathname === '/apto-credito'

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #f0f0f0',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'box-shadow 0.3s, opacity 0.4s, transform 0.4s',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-12px)',
    }}>
      <nav style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem',
        height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#171717' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>Bahía Propiedades</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '0', alignItems: 'center' }} className="desktop-nav">

          <NavLink href="/" active={pathname === '/'}>Inicio</NavLink>

          {/* Propiedades dropdown */}
          <div ref={propRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setPropOpen(!propOpen)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                color: isPropActive ? '#171717' : '#525252',
                fontWeight: isPropActive ? 600 : 500,
                fontSize: '0.82rem', background: 'none', border: 'none',
                cursor: 'pointer', padding: '0.4rem 0.5rem', borderRadius: '0.4rem',
                transition: 'color 0.15s',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isPropActive ? '#171717' : '#525252')}
            >
              Propiedades
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transition: 'transform 0.2s', transform: propOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
              {isPropActive && <span style={{ position: 'absolute', bottom: '-2px', left: '0.6rem', right: '0.6rem', height: '2px', backgroundColor: '#C9A96E', borderRadius: '9999px' }} />}
            </button>

            {propOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
                backgroundColor: '#ffffff', borderRadius: '0.85rem',
                border: '1px solid #f0f0f0', boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                minWidth: '220px', padding: '0.4rem',
                animation: 'scaleIn 0.15s ease',
                zIndex: 100,
              }}>
                {PROP_DROPDOWN.map((item) => (
                  <Link key={item.href} href={item.href}
                    onClick={() => setPropOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      padding: '0.65rem 0.85rem', borderRadius: '0.55rem',
                      textDecoration: 'none', color: '#262626', fontSize: '0.875rem', fontWeight: 500,
                      backgroundColor: item.highlight ? '#fdf8f0' : 'transparent',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = item.highlight ? '#f5edd6' : '#f5f5f5' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = item.highlight ? '#fdf8f0' : 'transparent' }}
                  >
                    <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                    <span>{item.label}</span>
                    {item.highlight && (
                      <span style={{ marginLeft: 'auto', backgroundColor: '#2563EB', color: '#fff', fontSize: '0.6rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: '9999px', textTransform: 'uppercase' }}>HOT</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/tasaciones" active={pathname === '/tasaciones'}>Tasaciones</NavLink>
          <NavLink href="/calculadora" active={pathname === '/calculadora'}>Calculadora</NavLink>
          <NavLink href="/servicios" active={pathname === '/servicios'}>Servicios</NavLink>

          {/* Separator */}
          <span style={{ width: '1px', height: '18px', backgroundColor: '#e5e5e5', margin: '0 0.25rem' }} />

          <NavLink href="/blog" active={pathname.startsWith('/blog')}>Blog</NavLink>
          <NavLink href="/nosotros" active={pathname === '/nosotros'}>Nosotros</NavLink>
          <NavLink href="/contacto" active={pathname === '/contacto'}>Contacto</NavLink>
        </div>

        {/* WA CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="https://wa.me/5492914000000" target="_blank" rel="noopener noreferrer"
            className="wa-btn-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#22c55e', color: '#fff', padding: '0.5rem 1.1rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', transition: 'background-color 0.2s' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#16a34a')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#22c55e')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.09 1.512 5.813L.057 23.054a.75.75 0 0 0 .92.92l5.24-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.516-5.17-1.413l-.37-.22-3.828 1.063 1.063-3.828-.22-.37A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            className="hamburger-btn" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2">
              {menuOpen ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>) : (<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>)}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f0', padding: '1rem 1.5rem 1.5rem' }} className="mobile-menu">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/propiedades', label: 'Propiedades en venta' },
            { href: '/propiedades?operation=alquiler', label: 'Propiedades en alquiler' },
            { href: '/alquiler-temporario', label: 'Alquiler temporario' },
            { href: '/apto-credito', label: 'Apto Crédito' },
            { href: '/tasaciones', label: 'Tasaciones' },
            { href: '/calculadora', label: 'Calculadora hipotecaria' },
            { href: '/servicios', label: 'Servicios' },
            { href: '/blog', label: 'Blog' },
            { href: '/nosotros', label: 'Nosotros' },
            { href: '/contacto', label: 'Contacto' },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.75rem 0', color: '#171717', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid #f5f5f5', fontSize: '0.9rem' }}>
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
          .wa-btn-nav { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  )
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link href={href}
      style={{ color: active ? '#171717' : '#525252', fontWeight: active ? 600 : 500, fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.15s', position: 'relative', padding: '0.4rem 0.5rem', borderRadius: '0.4rem', whiteSpace: 'nowrap' }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#C9A96E')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = active ? '#171717' : '#525252')}
    >
      {children}
      {active && <span style={{ position: 'absolute', bottom: '-2px', left: '0.5rem', right: '0.5rem', height: '2px', backgroundColor: '#C9A96E', borderRadius: '9999px' }} />}
    </Link>
  )
}
