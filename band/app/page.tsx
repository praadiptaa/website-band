import Hero from '../components/Hero'
import SpotifyEmbed from '../components/SpotifyEmbed'
import FeaturedReleases from '../components/FeaturedReleases'

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
                <h2 className="text-2xl font-bold mb-4 text-cream">Listen</h2>
                <p className="text-muted mb-6">Stream The Samo on Spotify or explore key tracks below. Use the player to listen to curated highlights.</p>
                <div className="glass-card p-4">
                  <SpotifyEmbed artistId="1t1eZu4FSD62zDYeCnfGVU" />
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
