'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CP_PHONE = '6285707611126'
const CP_NAME = 'Angke'

const products = [
  { id: 'm1', type: 'clothing', name: 'The Samo Tee (Black)', price: 'Rp 150.000', image: '/images/merch-shirt.svg', sizes: ['S','M','L','XL'] },
  { id: 'm2', type: 'accessory', name: 'The Samo Patch', price: 'Rp 40.000', image: '/images/merch-patch.svg' },
  { id: 'm3', type: 'vinyl', name: 'Enigma - Limited Vinyl', price: 'Rp 350.000', image: '/images/merch-vinyl.svg' }
]

function buildWhatsAppLink(productName: string, size?: string, qty: number = 1) {
  const sizePart = size ? ` Ukuran: ${size}.` : ''
  const qtyPart = ` Jumlah: ${qty}.`
  const template = `Halo ${CP_NAME}, saya ingin memesan *${productName}*.${sizePart}${qtyPart} Nama: [Nama Anda]. Alamat: [Alamat pengiriman].` // user will fill placeholders
  const url = `https://api.whatsapp.com/send/?phone=${CP_PHONE}&text=${encodeURIComponent(template)}&app_absent=0`
  return url
} 

export default function MerchandisePage() {
  const [sizes, setSizes] = useState<Record<string,string>>(() => {
    const initial: Record<string,string> = {}
    products.forEach(p => {
      if ((p as any).sizes && (p as any).sizes.length) initial[p.id] = (p as any).sizes.includes('M') ? 'M' : (p as any).sizes[0]
    })
    return initial
  })

  const [quantities, setQuantities] = useState<Record<string,number>>(() => {
    const q: Record<string,number> = {}
    products.forEach(p => { q[p.id] = 1 })
    return q
  })
  return (
    <main className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-cream">Merchandise</h1>
          <p className="text-muted mt-2">Official band merch — tees, patches, and limited vinyl. Click "Order" to contact our CP on WhatsApp with a pre-filled message.</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <article key={p.id} className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-6 shadow-lg flex flex-col items-stretch animate-in">
              <div className="w-full h-36 sm:h-44 relative mb-4 overflow-hidden rounded-lg glass-card flex items-center justify-center">
                <Image src={p.image} alt={p.name} fill className="object-contain p-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-cream">{p.name}</h3>
                <div className="text-sm text-muted mt-2">High-quality official merchandise. Limited quantities for vinyl releases.</div>
              </div>

              {(p as any).sizes ? (
                <div className="mt-4 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor={`size-${p.id}`} className="text-sm text-muted">Size</label>
                      <select
                        id={`size-${p.id}`}
                        value={sizes[p.id]}
                        onChange={(e) => setSizes(prev => ({ ...prev, [p.id]: e.target.value }))}
                        className="mt-1 block w-full bg-black/20 border border-white/10 text-cream rounded px-3 py-2"
                        aria-label={`Pilih ukuran untuk ${p.name}`}
                      >
                        {(p as any).sizes.map((s: string) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor={`qty-${p.id}`} className="text-sm text-muted">Jumlah</label>
                      <input
                        id={`qty-${p.id}`}
                        type="number"
                        min={1}
                        value={quantities[p.id]}
                        onChange={(e) => setQuantities(prev => ({ ...prev, [p.id]: Math.max(1, Number(e.target.value) || 1) }))}
                        className="mt-1 w-full sm:w-24 bg-black/20 border border-white/10 text-cream rounded px-3 py-2"
                        aria-label={`Jumlah pesanan untuk ${p.name}`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="font-medium text-cream">{p.price}</div>
                    <a href={buildWhatsAppLink(p.name, sizes[p.id], quantities[p.id])} target="_blank" rel="noreferrer" aria-label={`Order ${p.name} on WhatsApp`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream">Order</a>
                  </div>
                </div>
              ) : (
                <div className="mt-4 space-y-3 w-full">
                  <div>
                    <label htmlFor={`qty-${p.id}`} className="text-sm text-muted">Jumlah</label>
                    <input
                      id={`qty-${p.id}`}
                      type="number"
                      min={1}
                      value={quantities[p.id]}
                      onChange={(e) => setQuantities(prev => ({ ...prev, [p.id]: Math.max(1, Number(e.target.value) || 1) }))}
                      className="mt-1 w-full sm:w-24 bg-black/20 border border-white/10 text-cream rounded px-3 py-2"
                      aria-label={`Jumlah pesanan untuk ${p.name}`}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="font-medium text-cream">{p.price}</div>
                    <a href={buildWhatsAppLink(p.name, undefined, quantities[p.id])} target="_blank" rel="noreferrer" aria-label={`Order ${p.name} on WhatsApp`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream">Order</a>
                  </div>
                </div>
              )}
            </article>
          ))}
        </section>

        <div className="mt-8 text-sm text-muted">For bulk orders or special requests, contact <Link href="/contact" className="text-cream hover:underline">Contact</Link>.</div>
      </div>
    </main>
  )
}