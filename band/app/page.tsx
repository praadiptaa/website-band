import Hero from '../components/Hero'
import SpotifyEmbed from '../components/SpotifyEmbed'
import FeaturedReleases from '../components/FeaturedReleases'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />

      <main className="mt-8">

        {/* About summary: concise band intro for homepage */}
        <section id="about-summary" className="py-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="rounded-2xl bg-[rgba(255,255,255,0.02)] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">

              <div className="w-full md:w-1/3 flex items-center justify-center">
                <div className="w-40 h-40 rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/band-photo2.JPG" alt="The Samo" width={400} height={400} className="object-cover w-full h-full" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-4 mb-2">
                  <span className="block w-12 h-0.5 rounded bg-primary" aria-hidden></span>
                  <h3 className="text-2xl font-extrabold text-cream">About the band</h3>
                </div>

                <p className="text-muted max-w-xl">The Samo are a Malang-based rock outfit forging a cinematic, high-energy sound — "Rambling Shout" and "Chaotic Rock". From gritty riffs to textured atmospherics, their records (like <em>Enigma</em>) and live shows deliver intensity with craft.</p>

                <div className="mt-4 flex gap-3 justify-center md:justify-start">
                  <Link href="/about" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-cream shadow-md hover:scale-105 transition">Learn more</Link>
                  <Link href="/music" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Listen</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <FeaturedReleases />

        <section id="listen" className="mt-12 py-12">
          <div className="max-w-screen-xl mx-auto">
            <div className="listen-hero bg-gradient-to-br from-[#0b0b0b] to-[#2e1a17] rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden">

              {/* Section title */}
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  <span className="block w-12 h-0.5 rounded bg-primary" aria-hidden></span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-cream">Listen</h2>
                </div>
                <p className="text-muted mt-2 max-w-2xl">Stream The Samo on your favorite platform — curated highlights and featured releases in one place.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative w-full max-w-md h-72 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                    <Image src="/images/enigma.jpeg" alt="Enigma album" fill className="object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-cream">Enigma — 2025</h3>
                        <p className="text-sm text-muted mt-1">Featured release — atmospheric, intense, and refined.</p>
                        <div className="mt-3 flex gap-3">
                          <a href="https://open.spotify.com/album/6qzSr5y2DvWZsHw39m7zqd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-md hover:scale-105 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M5 3v18l15-9L5 3z" />
                            </svg>
                            <span className="text-sm">Play Album</span>
                          </a>

                          <Link href="/music" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/3 transition">Explore</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="rounded-xl overflow-hidden bg-black/10 p-4">
                    <SpotifyEmbed artistId="1t1eZu4FSD62zDYeCnfGVU" />
                    </div>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <a href="https://open.spotify.com/artist/1t1eZu4FSD62zDYeCnfGVU" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-md hover:scale-105 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.9 14.7c-.2.3-.5.4-.8.3-2.2-.9-4.9-1.1-8.3-0.7-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 3.-2 5.5 0 7.5.8.3.1.4.4.3.9zM15 7.2c-.1.4-.5.6-.9.5-1.9-.6-4.7-.7-7.1-.4-.5.1-.9-.2-1-.7-.1-.4.2-.9.7-1 2.6-.3 5.3-.2 7.7.5.4.1.7.6.6 1.1z" /></svg>
                        <span className="text-sm font-medium">Listen on Spotify</span>
                      </a>

                      <Link href="/music" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/3 transition">Explore releases</Link>
                    </div>

                    <div className="hidden sm:block w-full sm:w-auto">
                      <div className="bg-black/5 rounded-lg p-3">
                        <h4 className="text-sm font-semibold text-cream">Top Tracks</h4>
                        <ol className="mt-2 text-muted">
                          <li className="text-sm">Paralyzed — standout single</li>
                          <li className="text-sm">Stygian — atmospheric opener</li>
                          <li className="text-sm">Extrafine Lunatic — latest release</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
