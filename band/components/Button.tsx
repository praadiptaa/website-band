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
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition transform'
  const variants: Record<string, string> = {
    primary: 'bg-primary text-cream shadow-md hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border border-muted text-cream hover:bg-white/5'
  }
  const classes = `${base} ${variants[variant]} ${className} focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`

  if (href) {
    // external anchors should use <a>
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  )
}
