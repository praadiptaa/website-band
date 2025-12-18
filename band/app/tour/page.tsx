import Image from 'next/image'
import Button from '../../components/Button'

type Show = {
  id: string
  date: string
  venue: string
  city: string
  tickets?: string
}

const upcoming: Show[] = [
  { id: 's1', date: 'Sat, Jan 24 2026 · 20:00', venue: 'Ruang Tunggu', city: 'Malang, ID', tickets: '#' },
  { id: 's2', date: 'Fri, Feb 13 2026 · 19:30', venue: 'Studio 22', city: 'Surabaya, ID', tickets: '#' },
  { id: 's3', date: 'Sat, Mar 07 2026 · 21:00', venue: 'Huxley Club', city: 'Jakarta, ID', tickets: '#' }
]

export default function Tour() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto">

        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-cream">Tour</h1>
          <p className="text-muted mt-2 max-w-2xl mx-auto">Catch The Samo live. Find upcoming shows, ticket links, and tour updates below.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Upcoming shows */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-cream mb-4">Upcoming Shows</h2>

            <div className="space-y-4">
              {upcoming.map(s => (
                <article key={s.id} className="flex items-center justify-between rounded-xl p-4 bg-[rgba(255,255,255,0.02)] shadow-sm">
                  <div>
                    <div className="text-sm text-muted">{s.date}</div>
                    <div className="text-lg font-semibold text-cream">{s.venue}</div>
                    <div className="text-sm text-muted">{s.city}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    {s.tickets ? (
                      <a href={s.tickets} target="_blank" rel="noreferrer">
                        <Button variant="primary">Get tickets</Button>
                      </a>
                    ) : (
                      <div className="text-sm text-muted">Tickets TBA</div>
                    )}
                  </div>
                </article>
              ))}

              <div className="mt-4">
                <Button href="/contact" variant="outline">Booking & press</Button>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-cream mb-3">Past shows</h3>
              <p className="text-muted">Selected highlights and memorable venues from previous runs.</p>
              <ul className="mt-3 text-muted list-disc list-inside">
                <li>Ruang Tunggu — Album launch (2025)</li>
                <li>Underground Fest — Headline slot (2024)</li>
                <li>Local Radio Live — Session (2023)</li>
              </ul>
            </div>
          </div>

          {/* Map & promo */}
          <aside className="rounded-xl overflow-hidden shadow-2xl p-4 bg-[rgba(255,255,255,0.02)]">
            <div className="h-48 relative rounded overflow-hidden">
              <Image src="/images/band-photo.jpeg" alt="Tour map placeholder" fill className="object-cover" />
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-cream">Plan your trip</h4>
              <p className="text-muted mt-2">Click a show to get directions and more details. We update tickets and announcements regularly on our socials.</p>

              <div className="mt-4">
                <a href="https://open.spotify.com/artist/1t1eZu4FSD62zDYeCnfGVU" target="_blank" rel="noreferrer"><Button variant="primary">Listen while you travel</Button></a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  )
}
