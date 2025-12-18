import Image from 'next/image'
import Button from './Button'

type Album = {
  id: string
  name: string
  release_date: string
  image: string
  spotify?: string
}

export default function FeaturedReleases() {
  // Static releases; replace images in /public/images when you have higher-res assets
  const albums: Album[] = [
    {
      id: 'enigma',
      name: 'Enigma',
      release_date: '2025',
      image: '/images/enigma.jpeg',
      spotify: 'https://open.spotify.com/album/6qzSr5y2DvWZsHw39m7zqd'
    },
    {
      id: 'extrafine',
      name: 'Extrafine Lunatic',
      release_date: '2024',
      image: '/images/extrafine.png',
      spotify: 'https://open.spotify.com/album/6kWQ5O7LMiqVSExxyIpeeA'
    }
  ]

  return (
    <section id="music" className="py-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cream">Featured Releases</h2>
          <p className="text-muted hidden sm:block">New & selected works — mastered for late-night listening.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {albums.map((r, idx) => (
            <article key={r.id} className="relative group rounded-2xl overflow-hidden transform transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/5 to-white/3">
                <div className="bg-[rgba(255,255,255,0.02)] rounded-xl p-6 flex gap-6 items-center">

                  <div className="w-44 h-44 md:w-52 md:h-52 relative flex-shrink-0 rounded-lg overflow-hidden shadow-2xl">
                    <Image src={r.image} alt={`${r.name} cover`} fill className="object-cover" />

                    {/* Play overlay */}
                    <a href={r.spotify ?? '#'} target="_blank" rel="noreferrer" aria-label={`Play ${r.name}`} className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5 3v18l15-9L5 3z" />
                        </svg>
                      </span>
                    </a>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-semibold text-cream">{r.name}</h3>
                      <span className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-muted">{r.release_date}</span>
                    </div>

                    <p className="text-muted mt-3 max-w-xl">A powerful release that showcases the band’s range — atmospherics, grit, and memorable hooks suited for late-night listening.</p>

                    <div className="mt-6 flex items-center gap-3">
                      <Button href={r.spotify ?? '#'} external variant="primary" className="px-6 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" />
                        </svg>
                        <span>Play on Spotify</span>
                      </Button>

                      <a href={r.spotify ?? '#'} target="_blank" rel="noreferrer" className="text-muted text-sm hover:text-cream transition">Open in Spotify →</a>
                    </div>

                    <div className="mt-4 text-xs text-muted">Mastered for streaming — available on major platforms.</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
