'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Button from './Button'

const slides = [
  { id: 'band-1', image: '/images/band-photo.jpeg', alt: 'The Samo live' },
  { id: 'band-2', image: '/images/band-photo2.JPG', alt: 'The Samo live 2' },
  { id: 'band-3', image: '/images/band-photo3.jpg', alt: 'The Samo live 3' }
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const autoplayRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Autoplay every 6s
    if (!paused) {
      autoplayRef.current = window.setInterval(() => {
        setIndex(i => (i + 1) % slides.length)
      }, 6000)
    }
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
    }
  }, [paused])

  const goPrev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
  const goNext = () => setIndex(i => (i + 1) % slides.length)
  const goTo = (i: number) => setIndex(i)

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
      tabIndex={0}
    >
      <div className="absolute inset-0 -z-10 h-full">
        <div className="h-full flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div key={s.id} className={`min-w-full relative h-full slide ${i === index ? 'slide-active' : ''}`}>
              <Image src={s.image} alt={s.alt} fill className="object-cover object-center" priority />
              <div className="absolute inset-0 animated-overlay" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto h-full flex flex-col items-center justify-center text-center px-6 max-w-screen-xl">
        <Image src="/images/band-logo.png" alt="The Samo logo" width={64} height={64} className="object-contain mb-4 drop-shadow-md" />

        <h1 className="hero-title text-5xl md:text-6xl font-extrabold text-cream drop-shadow-xl mb-2" aria-live="polite">The Samo</h1>
        <p className="hero-subtitle mt-0 text-muted max-w-2xl text-lg md:text-xl font-light mb-6 drop-shadow" style={{textShadow: '0 2px 8px rgba(0,0,0,0.32)'}}>Rambling Shout, Chaotic Rock — Hailing from Malang, ID</p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full max-w-xs mx-auto">
          <Button href="/music" variant="primary" className="w-full sm:w-auto">Listen</Button>
          <Button href="/tour" variant="outline" className="w-full sm:w-auto">Tour</Button>
        </div>

        {/* Dots */}
        <div className="mt-8">
          <div className="slider-dots">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`slider-dot ${i === index ? 'slider-dot-active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        {/* Accessible hint for CTAs */}
        <div className="sr-only" aria-hidden>
          Use left and right arrows to change slide. Buttons are accessible via keyboard.
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 slider-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 slider-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}
