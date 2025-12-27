import Image from 'next/image'
import Link from 'next/link'
import Button from '../../components/Button'

export default function About() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: hero image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/band-photo3.jpeg" alt="The Samo live" width={1200} height={900} className="object-cover w-full h-96 md:h-[520px]" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="flex items-center gap-4">
                  <Image src="/images/band-logo.png" alt="The Samo logo" width={160} height={48} className="object-contain" />
                  <p className="text-sm text-muted mt-1">Rambling Shout • Chaotic Rock — Malang, ID</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-2xl font-bold text-cream">2024</div>
                <div className="text-xs text-muted">Formed</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-cream">2</div>
                <div className="text-xs text-muted">Releases</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-cream">10+</div>
                <div className="text-xs text-muted">Live shows</div>
              </div>
            </div>
          </div>

          {/* Right: bio, members, press, CTAs */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-cream">Story</h2>
              <p className="mt-3 text-muted leading-relaxed">Born out of late-night jam sessions and a shared taste for cinematic intensity, The Samo craft songs that balance raw immediacy with composed atmospheres. Their sound explores contrast — brutal riffs softened by melodic arcs, chaotic energy framed in precise production.</p>

              <p className="mt-4 text-muted leading-relaxed">Over the past years they’ve built a modest but devoted following across the Indonesian scene, releasing a trio of records that chart a clear trajectory from grit to refinement. The band’s live performances are celebrated for their visceral energy and tight musicianship.</p>
            </div>

            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-4">
                <div className="font-semibold text-cream">Silly Grime</div>
                <div className="text-xs text-muted mt-1">Shouter / Vocals • Pulser / Guitar</div>
              </div>

              <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-4">
                <div className="font-semibold text-cream">Dipta Isya</div>
                <div className="text-xs text-muted mt-1">Picker / Guitar</div>
              </div>

              <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-4">
                <div className="font-semibold text-cream">Azam Akbar</div>
                <div className="text-xs text-muted mt-1">Rooter / Bass</div>
              </div>

              <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-4">
                <div className="font-semibold text-cream">Eden Husain</div>
                <div className="text-xs text-muted mt-1">Detonator / Drums</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-cream">Press</h3>
              <blockquote className="mt-3 text-muted italic border-l-2 border-white/6 pl-4">"A thrilling record that sits at the intersection of noise and melody — formidable and unforgettable." — IndieMusicMag</blockquote>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/music" variant="primary" className="w-full sm:w-auto">Listen</Button>
              <Button href="/video" variant="outline" className="w-full sm:w-auto">Watch</Button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 text-cream hover:bg-white/3 transition">Press / Booking</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
