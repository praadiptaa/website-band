import Link from 'next/link'

export default function TourRemoved() {
  return (
    <section className="py-12">
      <div className="max-w-screen-md mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-cream">Tour page removed</h1>
        <p className="text-muted mt-4">We’ve removed the Tour page. For updates about shows and live content, follow our socials or visit <Link href="/video" className="text-cream underline">Video</Link> and <Link href="/contact" className="text-cream underline">Contact</Link>.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/music" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Music</Link>
          <Link href="/video" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-cream">Watch</Link>
        </div>
      </div>
    </section>
  )
}
