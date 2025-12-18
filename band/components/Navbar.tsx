'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 navbar-base ${scrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/band-logo.png" alt="The Samo logo" width={72} height={72} className="object-contain" />
        </Link>

        <nav className="space-x-5 text-sm">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/music" className="hover:text-primary transition">Music</Link>
          <Link href="/tour" className="hover:text-primary transition">Tour</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
