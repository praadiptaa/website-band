'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CP_PHONE = '6285707611126'
const CP_NAME = 'Angke'

type Product = {
	id: string
	type: string
	name: string
	images: string[]
	sizes: string[]
	prices: Record<string, number>
	description?: string
}

const products: Product[] = [
	{
		id: 'enigma-tee',
		type: 'clothing',
		name: 'T-Shirt Enigma',
		images: [
			'/images/Tshirt-Front.jpg',
			'/images/Tshirt-Back.jpg',
			'/images/Tshirt-FrontDetail.jpg',
		],
		sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
		prices: {
			S: 150000,
			M: 150000,
			L: 150000,
			XL: 150000,
			'2XL': 160000,
			'3XL': 170000,
		} as Record<string, number>,
	},
	{
		id: 'enigma-longsleeve',
		type: 'clothing',
		name: 'Longsleeve Enigma',
		images: [
			'/images/Longsleeve-Front.jpg',
			'/images/Longsleeve-Detail.jpg',
		],
		sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
		prices: {
			S: 150000,
			M: 150000,
			L: 150000,
			XL: 150000,
			'2XL': 160000,
			'3XL': 170000,
		} as Record<string, number>,
	},
]

function buildWhatsAppLink(productId: string, size: string, qty: number = 1) {
	const product = products.find((p) => p.id === productId)
	const price = product?.prices[size] || 0
	const sizePart = size ? ` Ukuran: ${size}.` : ''
	const qtyPart = ` Jumlah: ${qty}.`
	const pricePart = ` Harga: Rp ${price.toLocaleString('id-ID')}.`
	const template = `Halo ${CP_NAME}, saya ingin memesan *${product?.name || productId}*.${sizePart}${qtyPart}${pricePart} Nama: [Nama Anda]. Alamat: [Alamat pengiriman].`
	const url = `https://api.whatsapp.com/send/?phone=${CP_PHONE}&text=${encodeURIComponent(
		template
	)}&app_absent=0`
	return url
}

function formatPrice(value: number) {
	return `Rp ${value.toLocaleString('id-ID')}`
}

function getPriceRange(p: Product) {
	const vals = Object.values(p.prices)
	const min = Math.min(...vals)
	const max = Math.max(...vals)
	return min === max ? formatPrice(min) : `${formatPrice(min)} - ${formatPrice(max)}`
}

export default function MerchandisePage() {
	const [sizes, setSizes] = useState<Record<string, string>>(() => {
		const initial: Record<string, string> = {}
		products.forEach((p) => {
			if ((p as any).sizes && (p as any).sizes.length)
				initial[p.id] = (p as any).sizes.includes('M') ? 'M' : (p as any).sizes[0]
		})
		return initial
	})

	const [quantities, setQuantities] = useState<Record<string, number>>(() => {
		const q: Record<string, number> = {}
		products.forEach((p) => {
			q[p.id] = 1
		})
		return q
	})

	const [modalProduct, setModalProduct] = useState<null | Product>(null)
	const [modalImageIndex, setModalImageIndex] = useState(0)
	const [showSizeGuide, setShowSizeGuide] = useState(false)

	useEffect(() => {
		setModalImageIndex(0)
		setShowSizeGuide(false)
	}, [modalProduct])

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') setModalProduct(null)
		}
		if (modalProduct) window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [modalProduct])

	return (
		<main className="py-12">
			<div className="max-w-screen-xl mx-auto px-4">
				<header className="mb-8">
					<h1 className="text-3xl md:text-4xl font-extrabold text-cream">
						Merchandise
					</h1>
					<p className="text-muted mt-2">
						Official band merch — Enigma T-Shirt & Longsleeve. Klik Quick View
						untuk melihat detail produk dan size chart.
					</p>
				</header>

				<section className="grid grid-cols-2 md:grid-cols-3 gap-6 items-start">
					{products.map((p) => {
						const displaySize = sizes[p.id] || p.sizes[0]
						return (
							<article
								key={p.id}
								className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 flex flex-col cursor-pointer max-w-xs mx-auto"
								style={{ width: '100%', minWidth: 0 }}
								role="button"
								tabIndex={0}
								onClick={() => setModalProduct(p)}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault()
										setModalProduct(p)
									}
								}}
							>
								<div className="relative w-full aspect-[3/4] bg-white flex items-center justify-center" style={{ height: 260 }}>
									<Image
										src={p.images[0]}
										alt={p.name}
										fill
										className="object-contain"
										sizes="(max-width: 640px) 100vw, 50vw"
										priority
									/>
								</div>
								<div className="p-4 flex-1 flex flex-col">
									<h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
									<div className="text-xs text-gray-600 mt-1">{getPriceRange(p)}</div>
									<p className="text-xs text-gray-500 mt-2">Material: high-quality cotton. Siluet modern.</p>
									<div className="mt-3 flex items-center gap-2">
										<button
											type="button"
											onClick={e => { e.stopPropagation(); setModalProduct(p) }}
											className="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"
										>
											Detail
										</button>
										<a
											href={buildWhatsAppLink(p.id, displaySize, quantities[p.id])}
											onClick={e => e.stopPropagation()}
											className="ml-auto inline-flex items-center gap-2 px-3 py-1 bg-primary-600 text-white rounded text-xs font-semibold"
											aria-label={`Order ${p.name} on WhatsApp`}
										>
											Order
										</a>
									</div>
								</div>
							</article>
						)
					})}
				</section>

				{/* Modal Popup */}
				{modalProduct && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
						onClick={() => setModalProduct(null)}
					>
						<div
							className="bg-white rounded-2xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="md:flex">
								<div className="md:w-1/2 w-full bg-gray-50 p-4 flex flex-col items-center">
									<div className="w-full h-64 relative mb-3 bg-white flex items-center justify-center rounded">
										<Image
											src={modalImageIndex < modalProduct.images.length ? modalProduct.images[modalImageIndex] : '/images/Size-Chart.jpg'}
											alt={modalImageIndex < modalProduct.images.length ? modalProduct.name : 'Size Chart'}
											fill
											className="object-contain"
										/>
									</div>
									<div className="flex gap-2 mt-2">
										{modalProduct.images.map((img, idx) => (
											<button
												key={img + idx}
												type="button"
												className={`w-10 h-10 rounded overflow-hidden border ${modalImageIndex === idx ? 'border-primary-600' : 'border-gray-200'}`}
												onClick={() => setModalImageIndex(idx)}
											>
												<div className="relative w-full h-full">
													<Image src={img} alt={modalProduct.name + ' thumb ' + (idx + 1)} fill className="object-contain" />
												</div>
											</button>
										))}
										<button
											key="sizechart"
											type="button"
											className={`w-10 h-10 rounded overflow-hidden border ${modalImageIndex === modalProduct.images.length ? 'border-primary-600' : 'border-gray-200'}`}
											onClick={() => setModalImageIndex(modalProduct.images.length)}
										>
											<div className="relative w-full h-full">
												<Image src="/images/Size-Chart.jpg" alt="Size Chart thumb" fill className="object-contain" />
											</div>
										</button>
									</div>
								</div>

								<div className="md:w-1/2 w-full p-4 flex flex-col">
									<div className="flex items-start justify-between">
										<div>
											<h2 className="text-xl font-extrabold text-gray-900">{modalProduct.name}</h2>
											<div className="text-xs text-gray-600 mt-1">Pilih ukuran untuk melihat harga</div>
										</div>
										<button
											className="text-gray-400 hover:text-primary-600"
											onClick={() => setModalProduct(null)}
											aria-label="Close"
										>
											&times;
										</button>
									</div>

									<div className="mt-2">
										<div className="text-xs font-semibold text-gray-900">Harga</div>
										<div className="text-lg font-bold text-primary-600 mt-1">{formatPrice(modalProduct.prices[sizes[modalProduct.id] || modalProduct.sizes[0]])}</div>
									</div>

									<div className="mt-4">
										<div className="text-xs font-semibold text-gray-900 mb-1">Pilih Size</div>
										<div className="flex flex-wrap gap-2">
											{modalProduct.sizes.map((s) => {
												const selected = (sizes[modalProduct.id] || modalProduct.sizes[0]) === s
												return (
													<button
														key={s}
														type="button"
														onClick={() => setSizes((prev) => ({ ...prev, [modalProduct.id]: s }))}
														className={`px-2 py-1 border rounded text-xs ${selected ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-800 border-gray-200'}`}
													>
														{s}
													</button>
												)
											})}
										</div>
									</div>

									<div className="mt-4 flex items-center gap-3">
										<div className="text-xs font-semibold text-gray-900">Jumlah</div>
										<div className="flex items-center border rounded overflow-hidden">
											<button type="button" className="px-2 py-1 text-base" onClick={() => setQuantities((prev) => ({ ...prev, [modalProduct.id]: Math.max(1, (prev[modalProduct.id] || 1) - 1) }))}>-</button>
											<input value={quantities[modalProduct.id] || 1} onChange={(e) => setQuantities((prev) => ({ ...prev, [modalProduct.id]: Math.max(1, Number(e.target.value) || 1) }))} className="w-10 text-center py-1 text-xs" />
											<button type="button" className="px-2 py-1 text-base" onClick={() => setQuantities((prev) => ({ ...prev, [modalProduct.id]: (prev[modalProduct.id] || 1) + 1 }))}>+</button>
										</div>
									</div>

									<div className="mt-4">
										<button type="button" className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded font-bold text-xs" onClick={() => window.open(buildWhatsAppLink(modalProduct.id, sizes[modalProduct.id] || modalProduct.sizes[0], quantities[modalProduct.id] || 1), '_blank')}>Order via WhatsApp</button>
									</div>

									<div className="mt-4 text-xs text-gray-500">Pertanyaan lain? Hubungi kami via WhatsApp atau kunjungi halaman <Link href="/contact" className="text-primary-600 underline">Contact</Link>.</div>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className="mt-8 text-sm text-muted">
					Untuk pemesanan banyak atau pertanyaan khusus, hubungi{' '}
					<Link
						href="/contact"
						className="text-cream hover:underline"
					>
						Contact
					</Link>
					.
				</div>
			</div>
		</main>
	)
}