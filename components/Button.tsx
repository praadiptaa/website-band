'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
  external?: boolean
}

export default function Button({ children, href, variant = 'primary', className = '', external = false }: ButtonProps) {
  const base = 'relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition transform overflow-hidden'
  const variants: Record<string, string> = {
    primary: 'bg-primary text-cream shadow-md hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border border-muted text-cream hover:bg-white/5'
  }
  const classes = `${base} ${variants[variant]} ${className} focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`

  // simple ripple on click
  const createRipple = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const circle = document.createElement('span')
    const size = Math.max(rect.width, rect.height)
    const left = e.clientX - rect.left - size / 2
    const top = e.clientY - rect.top - size / 2

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.left = `${left}px`
    circle.style.top = `${top}px`
    circle.className = 'ripple'

    target.appendChild(circle)
    setTimeout(() => circle.remove(), 700)
  }

  if (href) {
    // external anchors should use <a>
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={(e) => createRipple(e as unknown as React.MouseEvent)}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} onClick={(e:any) => createRipple(e)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type="button" onClick={(e) => createRipple(e)}>
      {children}
    </button>
  )
}
