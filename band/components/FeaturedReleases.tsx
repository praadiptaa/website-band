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
        <h2 className="text-2xl font-bold text-cream mb-6">Featured Releases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {albums.map((r) => (
            <article key={r.id} className="group bg-[rgba(255,255,255,0.025)] rounded-2xl p-4 flex gap-6 items-center hover:-translate-y-2 transform transition-shadow duration-300">
              <div className="w-36 h-36 md:w-44 md:h-44 relative flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                <Image src={r.image} alt={`${r.name} cover`} fill className="object-cover" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-cream">{r.name}</h3>
                <p className="text-muted mt-1">{r.release_date}</p>
                <p className="text-muted mt-3 max-w-xl">A powerful release that showcases the band’s range — atmospherics, grit, and memorable hooks suited for late-night listening.</p>

                <div className="mt-4 flex items-center gap-3">
                  <Button href={r.spotify ?? '#'} external variant="primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" />
                    </svg>
                    <span>Listen</span>
                  </Button>
                  <a href={r.spotify ?? '#'} target="_blank" rel="noreferrer" className="text-muted text-sm hover:text-cream transition">View on Spotify →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
