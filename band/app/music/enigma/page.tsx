import Image from 'next/image'
import Link from 'next/link'

export default function EnigmaPage() {
  const tracklist = [
    'Initiate of Enigma',
    'Paralyzed',
    'I See The World',
    'Stygian'
  ]

  return (
    <main className="py-12">
      <div className="max-w-screen-lg mx-auto px-4">

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-6 md:items-start bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl shadow-lg animate-in">

          {/* Cover */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image src="/images/enigma.jpeg" alt="Enigma cover" fill className="object-cover" />
            </div>

            <div className="mt-4 flex gap-3">
              <a href="https://open.spotify.com/album/6qzSr5y2DvWZsHw39m7zqd" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-md hover:scale-105 transition-transform">Play on Spotify</a>
              <Link href="/music" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Back</Link>
            </div>
          </div>

          {/* Meta & Description */}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-cream">Enigma <span className="text-sm text-muted">— 2025 (EP)</span></h1>

            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-muted">Released Sep 13, 2025</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-muted">EP</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-muted">Malang, ID</span>
            </div>

            <p className="text-muted mt-4">Enigma is the 2025 EP from The Samo, a "Rambling Shout, Chaotic Rock" band hailing from Malang, Indonesia. Released on September 13th, 2025, the record features a mythic quest to heal the broken land of Samogolt. The sound design crafts an ominous atmosphere, utilizing whistling sounds to reinforce its dark, cinematic theme.</p>

            {/* Anchor nav */}
            <nav className="mt-6 border-b border-white/5">
              <ul className="flex gap-4 overflow-auto text-sm">
                <li><a href="#tracklist" className="py-2 text-muted hover:text-cream">Tracklist</a></li>
                <li><a href="#credits" className="py-2 text-muted hover:text-cream">Credits</a></li>
                <li><a href="#press" className="py-2 text-muted hover:text-cream">Press</a></li>
              </ul>
            </nav>

          </div>
        </div>

        {/* Tracklist */}
        <section id="tracklist" className="mt-8 bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold text-cream">Tracklist: A Story of Ruin and Redemption</h2>

          <ol className="mt-4 space-y-6 text-muted stagger">
            <li>
              <div className="font-medium text-cream">Initiate of Enigma</div>
              <div className="text-sm mt-1">A dark dirge sung by the minders who guide the pilgrim to Samogolt's gates.</div>
            </li>

            <li>
              <div className="font-medium text-cream">Paralyzed</div>
              <div className="text-sm mt-1">An ode chronicling the suffering and injustice met by minoritized citizens under a corrupt regime.</div>
            </li>

            <li>
              <div className="font-medium text-cream">I See The World</div>
              <div className="text-sm mt-1">Narrates the history of a greedy lord whose endless desire brought ruin to the realm.</div>
            </li>

            <li>
              <div className="font-medium text-cream">Stygian</div>
              <div className="text-sm mt-1">The final, climactic track where the warden Stygian and the "geese of Hades" confront the destructive ruler.</div>
            </li>
          </ol>
        </section>

        {/* Credits */}
        <section id="credits" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-cream">Credits & Notes</h3>
            <dl className="mt-3 text-sm text-muted space-y-3">
              <div>
                <dt className="font-medium text-cream">Lineup</dt>
                <dd>Silly Grime (vocal/guitar), Dipta Isya (guitar), Azam Akbar (bass), Eden Husain (drums)</dd>
              </div>

              <div>
                <dt className="font-medium text-cream">Live Debut</dt>
                <dd>Made its live debut on September 13th at the Fest For Music stage.</dd>
              </div>

              <div>
                <dt className="font-medium text-cream">Contact</dt>
                <dd>Prana — <a href="tel:+6285330221874" className="text-cream hover:underline">+62 853-3022-1874</a>, <a href="mailto:thesamogolt@gmail.com" className="text-cream hover:underline">thesamogolt@gmail.com</a></dd>
              </div>

              <div>
                <dt className="font-medium text-cream">Media</dt>
                <dd>Additional photos and documents are available via their Linktree.</dd>
              </div>
            </dl>
          </div>

          {/* Press */}
          <div id="press" className="bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-cream">Press</h3>
            <blockquote className="mt-3 text-muted border-l-2 border-white/10 pl-4 italic">“The sound design on our newest EP album crafts an ominous atmosphere with a whistling sound to assist its major theme." — Silly Grime, The Samo</blockquote>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-cream">Notes</h4>
              <p className="text-sm text-muted mt-2">For bookings and info, contact the band (details above). Media assets are available on request.</p>

              <div className="mt-4">
                <a href="/presskits/enigma-presskit.pdf" download aria-label="Download Enigma press kit" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Download Press Kit (PDF)</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
