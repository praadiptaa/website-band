import Hero from '../components/Hero'
import SpotifyEmbed from '../components/SpotifyEmbed'
import FeaturedReleases from '../components/FeaturedReleases'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />

      <main className="mt-8">
        <FeaturedReleases />

        <section id="listen" className="mt-12 py-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-extrabold mb-3 text-cream">Listen</h2>
                <p className="text-muted mb-6">Stream The Samo on your favorite platform. Curated highlights and quick links to listen now.</p>

                <div className="glass-card p-6 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-2/3">
                      <SpotifyEmbed artistId="1t1eZu4FSD62zDYeCnfGVU" />
                    </div>

                    <div className="w-full md:w-1/3">
                      <div className="flex flex-col gap-4">
                        <a href="https://open.spotify.com/artist/1t1eZu4FSD62zDYeCnfGVU" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-md hover:scale-105 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.9 14.7c-.2.3-.5.4-.8.3-2.2-.9-4.9-1.1-8.3-0.7-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 3.8-.4 6.8-.2 9.4.9.3.1.5.4.5.8 0 .3-.1.6-.5.9zM17 10.2c-.2.3-.6.4-.9.3-1.6-.6-3.8-.8-6.7-.6-.4 0-.7-.3-.8-.7-.1-.4.2-.8.6-.9 3-.2 5.5 0 7.5.8.3.1.4.4.3.9zM15 7.2c-.1.4-.5.6-.9.5-1.9-.6-4.7-.7-7.1-.4-.5.1-.9-.2-1-.7-.1-.4.2-.9.7-1 2.6-.3 5.3-.2 7.7.5.4.1.7.6.6 1.1z" />
                          </svg>
                          <span className="font-medium">Listen on Spotify</span>
                        </a>

                        <div className="bg-black/10 rounded-lg p-3">
                          <h4 className="text-sm font-semibold text-cream">Top Tracks</h4>
                          <ol className="mt-2 text-muted space-y-3">
                            <li className="flex items-center gap-3">
                              <div className="w-10 h-10 relative rounded overflow-hidden">
                                <Image src="/images/enigma.jpeg" alt="Paralyzed" fill className="object-cover" />
                              </div>
                              <div>
                                <div className="text-sm text-cream">Paralyzed</div>
                                <div className="text-xs text-muted">Standout single</div>
                              </div>
                            </li>

                            <li className="flex items-center gap-3">
                              <div className="w-10 h-10 relative rounded overflow-hidden">
                                <Image src="/images/extrafine.png" alt="Stygian" fill className="object-cover" />
                              </div>
                              <div>
                                <div className="text-sm text-cream">Stygian</div>
                                <div className="text-xs text-muted">Atmospheric opener</div>
                              </div>
                            </li>

                            <li className="flex items-center gap-3">
                              <div className="w-10 h-10 relative rounded overflow-hidden">
                                <Image src="/images/enigma.jpeg" alt="Extrafine Lunatic" fill className="object-cover" />
                              </div>
                              <div>
                                <div className="text-sm text-cream">Extrafine Lunatic</div>
                                <div className="text-xs text-muted">Latest release</div>
                              </div>
                            </li>
                          </ol>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="md:w-1/3">
                <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-4">
                  <h3 className="font-semibold text-cream mb-3">Highlights</h3>
                  <ul className="text-muted space-y-3">
                    <li>Paralyzed — standout single</li>
                    <li>Stygian — atmospheric opener</li>
                    <li>Extrafine Lunatic — latest release</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
