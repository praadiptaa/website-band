'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // no backend — just show a success state
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <footer className="bg-gradient-to-tr from-dark to-brown text-cream border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/images/band-logo.png" alt="The Samo logo" width={120} height={48} className="object-contain" />
              <div>
                <p className="text-sm text-muted">Rambling Shout, Chaotic Rock — Malang, ID</p>
              </div>
            </div>

            <p className="text-sm text-muted max-w-sm">Catch our latest releases and tour dates. Follow us for behind-the-scenes and exclusive drops.</p>

            <div className="flex items-center gap-3">
              <a href="https://open.spotify.com/intl-id/artist/1t1eZu4FSD62zDYeCnfGVU?si=jQQP_Y2pQ0CXfkeUucl48g" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="text-cream hover:text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.9 14.7c-.2.3-.5.4-.8.3-2.2-.9-4.9-1.1-8.3-0.7-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 3.8-.4 6.8-.2 9.4.9.3.1.5.4.5.8 0 .3-.1.6-.5.9zM17 10.2c-.2.3-.6.4-.9.3-1.6-.6-3.8-.8-6.7-.6-.4 0-.7-.3-.8-.7-.1-.4.2-.8.6-.9 3-.2 5.5 0 7.5.8.3.1.4.4.3.9zM15 7.2c-.1.4-.5.6-.9.5-1.9-.6-4.7-.7-7.1-.4-.5.1-.9-.2-1-.7-.1-.4.2-.9.7-1 2.6-.3 5.3-.2 7.7.5.4.1.7.6.6 1.1z" />
                </svg>
              </a>

              <a href="https://www.instagram.com/thesamo__/?igsh=anFqNGtsbTlzaGxr#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream hover:text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5" />
                  <path d="M16 11.37a4 4 0 1 1-7.999-.001A4 4 0 0 1 16 11.37z" strokeWidth="1.5" />
                  <path d="M17.5 6.5h.01" strokeWidth="1.5" />
                </svg>
              </a>

              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-cream hover:text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.8-.9-2.3-1-3.3-.3-8.2-.3-8.2-.3s-4.9 0-8.2.3c-.5.1-1.6.1-2.3 1C.7 4.5.5 6.2.5 6.2S.2 8 0 9.8v1.4C.2 13.8.5 15.5.5 15.5s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.8.1 7.6.3 7.6.3s4.9 0 8.2-.3c.5-.1 1.6-.1 2.3-1 .6-.7.8-2.4.8-2.4s.2-1.8.4-3.6v-1.4c-.2-1.8-.4-3.6-.4-3.6zM9.8 15.6V8.4l6.3 3.6-6.3 3.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/music" className="text-cream hover:text-accent">Music</Link></li>
              <li><Link href="/tour" className="text-cream hover:text-accent">Tour</Link></li>
              <li><Link href="/about" className="text-cream hover:text-accent">About</Link></li>
              <li><Link href="/contact" className="text-cream hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">Join the list</h4>
            <p className="text-sm text-muted mb-4">Get news and tour dates. No spam — promise.</p>

            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                type="email"
                aria-label="Email address"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-full bg-white/5 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="rounded-full" variant="primary">Join</Button>
            </form>

            {subscribed && <div className="mt-3 text-sm text-accent">Thanks — check your inbox!</div>}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-muted">
          <div>© {new Date().getFullYear()} The Samo. All Rights Reserved.</div>
          <div className="mt-3 md:mt-0">Designed & maintained by <a href="https://github.com/praadiptaa" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-accent">Dipta Isya</a></div>
        </div>
      </div>
    </footer>
  )
}
