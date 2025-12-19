'use client'

import Link from 'next/link'
import { useState } from 'react'
import Lightbox from '../../components/Lightbox'

type Video = {
  id: string
  title: string
  youtubeId: string
  caption?: string
} 

const videos: Video[] = [
  { id: 'v1', title: 'The Samo - Stygian I Live at Fest for Music 2025', youtubeId: 'B5-JMLF2Chk', caption: 'Official music video.' },
  { id: 'v2', title: 'The Samo - Extrafine Lunatic (CCTV Rehearsal Session at Soundville Studio)', youtubeId: 'umvO-zUBjrU', caption: 'Live performance.' },
  { id: 'v3', title: 'The Samo - A quartet of unknown entities will attempt to discover their origin.', youtubeId: 'Db5oaXdqbHY', caption: 'Behind the scenes and studio clips.' }
]

export default function VideoPage() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [openTitle, setOpenTitle] = useState<string | undefined>(undefined)

  const handleOpen = (id: string, title?: string) => { setOpenId(id); setOpenTitle(title) }
  const handleClose = () => { setOpenId(null); setOpenTitle(undefined) }

  return (
    <main className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Hero */}
        <div className="rounded-2xl bg-[rgba(255,255,255,0.02)] p-8 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold text-cream">Video</h1>
              <p className="text-muted mt-3 max-w-2xl">Official music videos, live performances, and behind-the-scenes — curated in one immersive gallery. Watch the cinematic visuals and live energy from The Samo.</p>
              <div className="mt-4 flex gap-3">
                <Link href="/music" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream hover:bg-white/5 transition">Back to music</Link>
                <a href="https://open.spotify.com/artist/1t1eZu4FSD62zDYeCnfGVU" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-cream">Follow on Spotify</a>
              </div>
            </div>

            <div className="w-full md:w-80">
              <div className="bg-black/10 rounded-lg p-4 text-center">
                <div className="text-sm text-muted">Curated selection</div>
                <div className="mt-3"> 
                  <p className="text-sm text-muted">All videos are shown below — no filters applied.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            {videos.map((v: Video) => (
              <article key={v.id} className="group bg-[rgba(255,255,255,0.02)] rounded-2xl overflow-hidden shadow-sm animate-in">
                <div className="relative w-full cursor-pointer" style={{ paddingBottom: '56.25%' }}>
                  <img src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`} alt={v.title} className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform" />

                  <button onClick={() => handleOpen(v.youtubeId, v.title)} aria-label={`Open ${v.title}`} className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-600 text-cream shadow-lg transform scale-100 hover:scale-105 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3v18l15-9L5 3z" />
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-start">
                    <h4 className="text-sm font-semibold text-cream">{v.title}</h4>
                  </div>
                  <p className="text-sm text-muted mt-2">{v.caption}</p>
                </div>
              </article>
            ))}

            {openId && <Lightbox videoId={openId} title={openTitle} onClose={handleClose} />}
          </div>
        </section>
      </div>
    </main>
  )
}
