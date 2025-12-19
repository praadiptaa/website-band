'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-base navbar-solid bg-gradient-to-tr from-dark to-brown">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/band-logo.png" alt="The Samo logo" width={56} height={56} className="object-contain md:w-[84px] md:h-[84px]" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/music" className="hover:text-primary transition">Music</Link>
          <Link href="/video" className="hover:text-primary transition">Video</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          <Button href="/music" variant="primary" className="ml-4">Listen</Button>
        </nav>

        <button
          className="md:hidden p-2 rounded-md text-cream hover:bg-white/5 transition"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden ${open ? 'block' : 'hidden'} px-4 pb-4`}>
        <div className="mb-3">
          <Button href="/music" variant="primary" className="w-full">Listen</Button>
        </div>
        <nav className="flex flex-col space-y-3">
          <Link href="/" className="block rounded-md px-3 py-2 hover:bg-white/5">Home</Link>
          <Link href="/about" className="block rounded-md px-3 py-2 hover:bg-white/5">About</Link>
          <Link href="/music" className="block rounded-md px-3 py-2 hover:bg-white/5">Music</Link>
          <Link href="/video" className="block rounded-md px-3 py-2 hover:bg-white/5">Video</Link>
          <Link href="/contact" className="block rounded-md px-3 py-2 hover:bg-white/5">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
