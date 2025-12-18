import Image from 'next/image'
import Link from 'next/link'
import MusicContent from '../../components/MusicContent'
import SpotifyEmbed from '../../components/SpotifyEmbed'
import Button from '../../components/Button'

export default function Music() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto">

        {/* Hero */}
        <header className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-96 md:h-[520px]">
            <Image src="/images/band-photo3.jpeg" alt="The Samo live" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center text-center px-6">
              <Image src="/images/band-logo.png" alt="The Samo logo" width={240} height={80} className="object-contain mb-4" />
              <h1 className="sr-only">Music</h1>
              <p className="text-muted max-w-2xl">Explore our records, curated playlists and key tracks — produced for late-night listening and high-volume rooms.</p>

              <div className="mt-6 flex gap-3">
                <a href="https://open.spotify.com/artist/1t1eZu4FSD62zDYeCnfGVU" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-md hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.21 15.89c-.24 0-.45-.09-.62-.27-.2-.2-.24-.46-.1-.7.83-1.36 2.58-2.55 4.88-3.29.26-.08.55-.01.74.18.18.2.23.45.12.68-.82 1.36-2.62 2.64-4.86 3.38-.17.06-.31.1-.44.1z"/></svg>
                  <span>Listen on Spotify</span>
                </a>

                <Link href="/music" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Explore releases</Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-extrabold text-cream">Featured Releases</h2>
              <p className="text-muted hidden md:block">Latest records, singles and curated playlists.</p>
            </div>

            <MusicContent />

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-cream mb-4">In the studio</h3>
              <p className="text-muted">We record with analogue-inspired tones and modern production — expect dynamic mixes and textured arrangements. Follow our socials for behind-the-scenes and upcoming drops.</p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-xl bg-black/10 p-4 mb-6">
              <h4 className="text-sm font-semibold text-cream mb-3">Listen — Artist Player</h4>
              <SpotifyEmbed artistId="1t1eZu4FSD62zDYeCnfGVU" />
            </div>

            <div className="rounded-xl bg-[rgba(255,255,255,0.02)] p-4">
              <h4 className="text-sm font-semibold text-cream mb-3">Top Tracks</h4>
              <ol className="space-y-3 text-muted">
                <li>Paralyzed — standout single</li>
                <li>Stygian — atmospheric opener</li>
                <li>Extrafine Lunatic — latest release</li>
              </ol>

              <div className="mt-6">
                <h5 className="text-sm font-semibold text-cream mb-2">Get tour-ready updates</h5>
                <p className="text-xs text-muted mb-3">Subscribe for news, presales and exclusive content.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Contact & Bookings</Link>
              </div>
            </div>
          </aside>

        </main>
      </div>
    </section>
  )
}
