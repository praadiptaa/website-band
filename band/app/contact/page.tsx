import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: hero image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/band-photo.jpeg" alt="The Samo live on stage" width={1200} height={800} className="w-full h-80 object-cover" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded overflow-hidden shadow-lg">
                <Image src="/images/band-photo2.JPG" alt="The Samo" width={400} height={260} className="w-full h-24 object-cover" />
              </div>
              <div className="rounded overflow-hidden shadow-lg">
                <Image src="/images/band-photo3.jpeg" alt="The Samo live" width={400} height={260} className="w-full h-24 object-cover" />
              </div>
              <div className="rounded overflow-hidden shadow-lg">
                <Image src="/images/enigma.jpeg" alt="Enigma cover" width={400} height={260} className="w-full h-24 object-cover" />
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-cream">Contact</h1>
            <p className="text-muted mt-3 mb-8">For bookings, press, or general enquiries — reach out via the channels below.</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              <a href="https://open.spotify.com/artist/1t1eZu4FSD62zDYeCnfGVU" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-cream group-hover:bg-primary transition">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.9 14.7c-.2.3-.5.4-.8.3-2.2-.9-4.9-1.1-8.3-0.7-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 3.8-.4 6.8-.2 9.4.9.3.1.5.4.5.8 0 .3-.1.6-.5.9zM17 10.2c-.2.3-.6.4-.9.3-1.6-.6-3.8-.8-6.7-.6-.4 0-.7-.3-.8-.7-.1-.4.2-.8.6-.9 3-.2 5.5 0 7.5.8.3.1.4.4.3.9zM15 7.2c-.1.4-.5.6-.9.5-1.9-.6-4.7-.7-7.1-.4-.5.1-.9-.2-1-.7-.1-.4.2-.9.7-1 2.6-.3 5.3-.2 7.7.5.4.1.7.6.6 1.1z" />
                  </svg>
                </div>
                <div className="text-sm text-cream">Spotify</div>
              </a>

              <a href="https://instagram.com/thesamo__" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-cream group-hover:bg-accent transition">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.2" />
                    <path d="M16 11.37a4 4 0 1 1-8 0" strokeWidth="1.2" />
                    <circle cx="17.5" cy="6.5" r="0.5" />
                  </svg>
                </div>
                <div className="text-sm text-cream">Instagram</div>
              </a>

              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-cream group-hover:bg-accent transition">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.8-.9-2.3-1-3.3-.3-8.2-.3-8.2-.3s-4.9 0-8.2.3c-.5.1-1.6.1-2.3 1C.7 4.5.5 6.2.5 6.2S.2 8 0 9.8v1.4C.2 13.8.5 15.5.5 15.5s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.8.1 7.6.3 7.6.3s4.9 0 8.2-.3c.5-.1 1.6-.1 2.3-1 .6-.7.8-2.4.8-2.4s.2-1.8.4-3.6v-1.4c-.2-1.8-.4-3.6-.4-3.6zM9.8 15.6V8.4l6.3 3.6-6.3 3.6z" />
                  </svg>
                </div>
                <div className="text-sm text-cream">YouTube</div>
              </a>

              <a href="mailto:booking@thesamo.example" className="group flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-cream group-hover:bg-accent transition">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                    <path d="M3 8.5l9 6 9-6" strokeWidth="1.4" />
                    <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.2" />
                  </svg>
                </div>
                <div className="text-sm text-cream">Booking</div>
              </a>
            </div>

            <div className="mt-4">
              <div className="inline-flex items-center gap-3">
                <a href="/TheSamo-Booklet.pdf" className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-cream shadow-md hover:scale-105 transition-transform" download>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                    <path d="M12 3v12" strokeWidth="1.6" />
                    <path d="M8 11l4 4 4-4" strokeWidth="1.6" />
                    <path d="M21 21H3" strokeWidth="1.2" />
                  </svg>
                  <span>Download Booklet (PDF)</span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
