import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

type Release = {
  id: string
  title: string
  year: string
  image: string
  spotify?: string
  blurb?: string
  description?: string
}

export default function MusicContent() {
  const releases: Release[] = [
    {
      id: 'enigma',
      title: 'Enigma',
      year: '2025',
      image: '/images/enigma.jpeg',
      spotify: 'https://open.spotify.com/album/6qzSr5y2DvWZsHw39m7zqd',
      blurb: 'A dark, atmospheric record that blends heavy riffs with cinematic arrangements.',
      description: 'Enigma — 2025 EP (released Sep 13, 2025): a mythic quest to heal Samogolt with ominous, cinematic sound design and whistling motifs.'
    },
    {
      id: 'extrafine',
      title: 'Extrafine Lunatic',
      year: '2024',
      image: '/images/extrafine.png',
      spotify: 'https://open.spotify.com/album/6kWQ5O7LMiqVSExxyIpeeA',
      blurb: 'A lean collection of singles that show the band’s penchant for melody and noise.',
      description: 'Extrafine Lunatic — debut single (Nov 8, 2024). Hard Rock / Garage fusion featuring powerful vocals and raw instrumentation; available on major streaming services.'
    }
  ]

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 gap-8 stagger">
        {releases.map((r, idx) => (
          <article key={r.id} className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-2xl p-6 bg-[rgba(255,255,255,0.02)] shadow-lg hover:shadow-2xl transition animate-in">
            <div className="md:col-span-5 relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image src={r.image} alt={`${r.title} cover`} fill className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform" />
              <div className="absolute left-4 bottom-4 flex items-center gap-3">
                <a href={r.spotify} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-md hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3v18l15-9L5 3z"/></svg>
                  <span className="text-sm">Play</span>
                </a>

                <Link href={`/music/${r.id}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Details</Link>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold text-cream">{r.title}</h3>
                <span className="ml-auto text-xs px-3 py-1 rounded-full bg-black/30 text-muted">{r.year}</span>
              </div>

              <p className="text-muted mb-4">{r.description ?? r.blurb}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href={r.spotify ?? '#'} external variant="primary" className="w-full sm:w-auto">Listen on Spotify</Button>
                <Link href="/music" className="inline-flex justify-center w-full sm:w-auto items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">More Releases</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted mb-4">Want the full discography? Browse our releases or follow us on streaming platforms for updates.</p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link href="/music" className="inline-flex justify-center w-full sm:w-auto items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Full Discography</Link>
          <a href="https://open.spotify.com/artist/1t1eZu4FSD62zDYeCnfGVU" target="_blank" rel="noreferrer" className="inline-flex justify-center w-full sm:w-auto items-center gap-2 px-5 py-3 rounded-full bg-primary text-cream shadow-md hover:scale-105 transition">Follow on Spotify</a>
        </div>
      </div>
    </section>
  )
}
