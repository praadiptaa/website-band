import Image from 'next/image'
import Link from 'next/link'

export default function ExtrafinePage() {
  const tracklist = [
    'Extrafine Lunatic'
  ]

  return (
    <main className="py-12">
      <div className="max-w-screen-lg mx-auto px-4">

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-6 md:items-start bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl shadow-lg">

          {/* Cover */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image src="/images/extrafine.png" alt="Extrafine Lunatic cover" fill className="object-cover" />
            </div>

            <div className="mt-4 flex gap-3">
              <a href="https://open.spotify.com/album/6kWQ5O7LMiqVSExxyIpeeA" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-md hover:scale-105 transition-transform">Play on Spotify</a>
              <Link href="/music" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Back</Link>
            </div>
          </div>

          {/* Meta & Description */}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-cream">Extrafine Lunatic <span className="text-sm text-muted">— 2024 (single)</span></h1>

            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-muted">Released Nov 8, 2024</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-muted">Single</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-muted">Hard Rock / Garage</span>
            </div>

            <p className="text-muted mt-4">Extrafine Lunatic is the debut single from The Samo, an undisclosed instrumental quartet that has declared the formation of a band yielding a "Rambling Shout, Chaotic Rock" sound. Released on November 8th, 2024, this single heralds a new odyssey for the convocation of The Samo entities. The band blends hard rock and garage influences, featuring powerful vocals and raw instrumentation.</p>

            {/* Anchor nav */}
            <nav className="mt-6 border-b border-white/5">
              <ul className="flex gap-4 overflow-auto text-sm">
                <li><a href="#story" className="py-2 text-muted hover:text-cream">Story</a></li>
                <li><a href="#credits" className="py-2 text-muted hover:text-cream">Credits</a></li>
                <li><a href="#press" className="py-2 text-muted hover:text-cream">Press</a></li>
              </ul>
            </nav>

          </div>
        </div>

        {/* Story */}
        <section id="story" className="mt-8 bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl shadow-sm animate-in">
          <h2 className="text-xl font-semibold text-cream">The Story: A Sacred Provision</h2>

          <ol className="mt-4 space-y-6 text-muted stagger">
            <li>
              <div className="font-medium text-cream">The Whisper</div>
              <div className="text-sm mt-1">The story tells of an entity that receives a whisper from the depths of its subconscious, carrying a plea to seek an "Extrafine" clove.</div>
            </li>

            <li>
              <div className="font-medium text-cream">The Mission</div>
              <div className="text-sm mt-1">These cloves are intended as provisions for a sacred journey and serve as measurements to unravel the true origins of each entity.</div>
            </li>

            <li>
              <div className="font-medium text-cream">The Sound</div>
              <div className="text-sm mt-1">Embracing the Hard Rock Garage genre, the track is influenced by bands such as Black Sabbath, Wolfmother, 1000mods, The SIGIT, White Swan, and The Melting Minds.</div>
            </li>
          </ol>
        </section>

        {/* Credits */}
        <section id="credits" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-cream">Credits & Notes</h3>
            <dl className="mt-3 text-sm text-muted space-y-3">
              <div>
                <dt className="font-medium text-cream">The Band</dt>
                <dd>Referred to as "the four instrumentalist entities," the group consists of Silly Grime and his fellow "creatures".</dd>
              </div>

              <div>
                <dt className="font-medium text-cream">Key Members</dt>
                <dd>Silly Grime — vocalist & guitarist</dd>
              </div>

              <div>
                <dt className="font-medium text-cream">Musical Style</dt>
                <dd>Hard Rock / Garage Rock</dd>
              </div>

              <div>
                <dt className="font-medium text-cream">Availability</dt>
                <dd>Available on Spotify, Apple Music, and other Digital Streaming Services</dd>
              </div>

              <div>
                <dt className="font-medium text-cream">Contact</dt>
                <dd>Faizal: <a href="tel:+62895392824016" className="text-cream hover:underline">+62 89539282 4016</a>, Isya: <a href="tel:+6281456183898" className="text-cream hover:underline">+62 8145 6183 898</a>, Email: <a href="mailto:thesamogolt@gmail.com" className="text-cream hover:underline">thesamogolt@gmail.com</a></dd>
              </div>
            </dl>
          </div>

          {/* Press */}
          <div id="press" className="bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-cream">Press</h3>
            <blockquote className="mt-3 text-muted border-l-2 border-white/10 pl-4 italic">"Making an 'Extrafine Lunatic' debut single is a fresh experience for me and my creatures." — Silly Grime, Vocalist and Guitarist</blockquote>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-cream">Notes</h4>
              <p className="text-sm text-muted mt-2">For bookings and info, contact the band (details above). Media assets are available on request.</p>

              <div className="mt-4">
                <a href="/presskits/extrafine-presskit.pdf" download aria-label="Download Extrafine press kit" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Download Press Kit (PDF)</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
