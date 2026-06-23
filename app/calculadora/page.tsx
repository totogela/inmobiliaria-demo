'use client'

import { useState, useMemo } from 'react'

const BANCOS = [
  { nombre: 'Banco Nación', tasa: 8.5, logo: 'BNA' },
  { nombre: 'Banco Provincia', tasa: 9.0, logo: 'BAPRO' },
  { nombre: 'Santander', tasa: 9.5, logo: 'SAN' },
  { nombre: 'Galicia', tasa: 9.75, logo: 'GAL' },
  { nombre: 'HSBC', tasa: 10.0, logo: 'HSB' },
  { nombre: 'BBVA', tasa: 9.25, logo: 'BBV' },
]

function formatARS(n: number) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n)
}
function formatUSD(n: number) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export default function CalculadoraPage() {
  const [monto, setMonto] = useState('50000')
  const [moneda, setMoneda] = useState<'USD' | 'ARS'>('USD')
  const [plazo, setPlazo] = useState('20')
  const [tasa, setTasa] = useState('9')
  const [bancoSeleccionado, setBancoSeleccionado] = useState<string | null>(null)

  const resultado = useMemo(() => {
    const P = Number(monto)
    const n = Number(plazo) * 12
    const r = Number(tasa) / 100 / 12
    if (!P || !n || !r || isNaN(P) || isNaN(n) || isNaN(r)) return null

    const cuota = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPagar = cuota * n
    const totalIntereses = totalPagar - P

    // tabla de amortización — primeras 12 cuotas
    const tabla: { mes: number; cuota: number; capital: number; interes: number; saldo: number }[] = []
    let saldo = P
    for (let i = 1; i <= Math.min(12, n); i++) {
      const interesMes = saldo * r
      const capitalMes = cuota - interesMes
      saldo -= capitalMes
      tabla.push({ mes: i, cuota, capital: capitalMes, interes: interesMes, saldo: Math.max(0, saldo) })
    }

    return { cuota, totalPagar, totalIntereses, tabla, porcentajeInteres: (totalIntereses / totalPagar) * 100 }
  }, [monto, plazo, tasa])

  function seleccionarBanco(nombre: string, tasaBanco: number) {
    setBancoSeleccionado(nombre)
    setTasa(String(tasaBanco))
  }

  const fmt = moneda === 'USD' ? formatUSD : formatARS

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f7' }}>

      {/* Hero */}
      <div style={{ backgroundColor: '#171717', padding: '4rem 1.5rem 3.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#C9A96E', fontWeight: 700, fontSize: '0.73rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
            Herramienta gratuita
          </span>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.85rem' }}>
            Calculadora hipotecaria
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '1rem', lineHeight: 1.65 }}>
            Simulá tu cuota mensual, el total a pagar y la tabla de amortización. Sin registro.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>

          {/* Panel de entrada */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', border: '1px solid #f0f0f0', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid #f5f5f5' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#171717' }}>Parámetros del crédito</h2>
            </div>
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

              {/* Moneda */}
              <div>
                <label style={lbl}>Moneda</label>
                <div style={{ display: 'flex', backgroundColor: '#f5f5f5', borderRadius: '0.65rem', padding: '3px', gap: '3px' }}>
                  {(['USD', 'ARS'] as const).map((m) => (
                    <button key={m} type="button" onClick={() => setMoneda(m)}
                      style={{ flex: 1, padding: '0.6rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.2s', backgroundColor: moneda === m ? '#171717' : 'transparent', color: moneda === m ? '#ffffff' : '#737373' }}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monto */}
              <div>
                <label style={lbl}>Monto del crédito</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#a3a3a3', fontSize: '0.9rem', fontWeight: 600 }}>
                    {moneda === 'USD' ? 'USD' : 'ARS'}
                  </span>
                  <input
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    style={{ ...inp, paddingLeft: '3.5rem' }}
                    placeholder="50000"
                    min="1000"
                  />
                </div>
              </div>

              {/* Plazo */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label style={{ ...lbl, marginBottom: 0 }}>Plazo</label>
                  <span style={{ color: '#C9A96E', fontWeight: 700, fontSize: '0.9rem' }}>{plazo} años</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="5"
                  value={plazo}
                  onChange={(e) => setPlazo(e.target.value)}
                  style={{ width: '100%', accentColor: '#C9A96E', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#a3a3a3', marginTop: '0.25rem' }}>
                  <span>5 años</span><span>15 años</span><span>30 años</span>
                </div>
              </div>

              {/* Tasa */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label style={{ ...lbl, marginBottom: 0 }}>Tasa anual</label>
                  <span style={{ color: '#C9A96E', fontWeight: 700, fontSize: '0.9rem' }}>{tasa}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.25"
                  value={tasa}
                  onChange={(e) => setTasa(e.target.value)}
                  style={{ width: '100%', accentColor: '#C9A96E', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#a3a3a3', marginTop: '0.25rem' }}>
                  <span>5%</span><span>12.5%</span><span>20%</span>
                </div>
              </div>

              {/* Bancos */}
              <div>
                <label style={lbl}>Tasas por banco (referencia)</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {BANCOS.map((b) => (
                    <button
                      key={b.nombre}
                      type="button"
                      onClick={() => seleccionarBanco(b.nombre, b.tasa)}
                      title={b.nombre}
                      style={{
                        padding: '0.5rem 0.4rem',
                        borderRadius: '0.55rem',
                        border: '1.5px solid',
                        borderColor: bancoSeleccionado === b.nombre ? '#C9A96E' : '#e5e5e5',
                        backgroundColor: bancoSeleccionado === b.nombre ? '#fdf8f0' : '#fafafa',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.18s',
                      }}
                    >
                      <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#525252', letterSpacing: '0.03em' }}>{b.logo}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C9A96E', marginTop: '1px' }}>{b.tasa}%</div>
                    </button>
                  ))}
                </div>
                <p style={{ fontSize: '0.7rem', color: '#a3a3a3', marginTop: '0.5rem' }}>* Tasas orientativas. Consultá con tu banco.</p>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {resultado ? (
              <>
                {/* Cuota destacada */}
                <div style={{
                  background: 'linear-gradient(135deg, #171717 0%, #2a2a2a 100%)',
                  borderRadius: '1.25rem',
                  padding: '2.25rem',
                  textAlign: 'center',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    Cuota mensual estimada
                  </p>
                  <div style={{ color: '#C9A96E', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {fmt(resultado.cuota)}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', marginTop: '0.6rem' }}>
                    durante {plazo} años · tasa {tasa}% anual
                  </p>
                </div>

                {/* Resumen */}
                <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                  <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #f5f5f5' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#171717' }}>Resumen del crédito</h3>
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <Row label="Capital solicitado" value={fmt(Number(monto))} />
                    <Row label="Total de cuotas" value={`${Number(plazo) * 12} cuotas`} />
                    <Row label="Total de intereses" value={fmt(resultado.totalIntereses)} accent />
                    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '0.85rem' }}>
                      <Row label="Total a pagar" value={fmt(resultado.totalPagar)} bold />
                    </div>
                  </div>

                  {/* Barra de proporción */}
                  <div style={{ padding: '0 1.5rem 1.5rem' }}>
                    <p style={{ fontSize: '0.72rem', color: '#a3a3a3', marginBottom: '0.5rem' }}>Proporción capital / intereses</p>
                    <div style={{ height: '8px', borderRadius: '9999px', backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${100 - resultado.porcentajeInteres}%`,
                        backgroundColor: '#171717',
                        borderRadius: '9999px',
                        transition: 'width 0.5s ease',
                      }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginTop: '0.35rem' }}>
                      <span style={{ color: '#171717', fontWeight: 600 }}>Capital {(100 - resultado.porcentajeInteres).toFixed(0)}%</span>
                      <span style={{ color: '#C9A96E', fontWeight: 600 }}>Intereses {resultado.porcentajeInteres.toFixed(0)}%</span>
                    </div>
                  </div>
                </div>

                {/* Tabla de amortización */}
                <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                  <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #f5f5f5' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#171717' }}>Primeros 12 meses</h3>
                  </div>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#fafafa' }}>
                          {['Mes', 'Cuota', 'Capital', 'Interés', 'Saldo'].map((h) => (
                            <th key={h} style={{ padding: '0.65rem 1rem', textAlign: 'right', fontWeight: 700, color: '#737373', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #f0f0f0', whiteSpace: 'nowrap' }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {resultado.tabla.map((row) => (
                          <tr key={row.mes} style={{ borderBottom: '1px solid #f9f9f9' }}>
                            <td style={{ padding: '0.6rem 1rem', textAlign: 'right', fontWeight: 600, color: '#525252' }}>{row.mes}</td>
                            <td style={{ padding: '0.6rem 1rem', textAlign: 'right', color: '#262626', fontWeight: 600 }}>{fmt(row.cuota)}</td>
                            <td style={{ padding: '0.6rem 1rem', textAlign: 'right', color: '#262626' }}>{fmt(row.capital)}</td>
                            <td style={{ padding: '0.6rem 1rem', textAlign: 'right', color: '#C9A96E' }}>{fmt(row.interes)}</td>
                            <td style={{ padding: '0.6rem 1rem', textAlign: 'right', color: '#525252' }}>{fmt(row.saldo)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CTA */}
                <div style={{ backgroundColor: '#C9A96E', borderRadius: '1.25rem', padding: '2rem', textAlign: 'center' }}>
                  <h3 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                    ¿Encontraste propiedades que te interesan?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                    Nuestros asesores te ayudan a gestionar el crédito hipotecario sin costo.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="/propiedades?aptaCredito=true"
                      style={{ backgroundColor: '#ffffff', color: '#171717', padding: '0.7rem 1.5rem', borderRadius: '0.65rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem' }}>
                      Ver propiedades apto crédito
                    </a>
                    <a href="https://wa.me/5492914000000?text=Hola%2C%20quiero%20consultar%20sobre%20cr%C3%A9ditos%20hipotecarios"
                      target="_blank" rel="noopener noreferrer"
                      style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: '#ffffff', padding: '0.7rem 1.5rem', borderRadius: '0.65rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem' }}>
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', border: '1px solid #f0f0f0', padding: '3rem', textAlign: 'center' }}>
                <p style={{ color: '#a3a3a3' }}>Completá los datos para ver el resultado.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, bold, accent }: { label: string; value: string; bold?: boolean; accent?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '0.85rem', color: '#737373' }}>{label}</span>
      <span style={{ fontSize: '0.9rem', fontWeight: bold ? 800 : 600, color: accent ? '#C9A96E' : '#171717' }}>{value}</span>
    </div>
  )
}

const lbl: React.CSSProperties = { display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#737373', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }
const inp: React.CSSProperties = { width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #e5e5e5', borderRadius: '0.65rem', fontSize: '0.9rem', outline: 'none', backgroundColor: '#fafafa', boxSizing: 'border-box', fontFamily: 'inherit', color: '#171717' }
