'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function AnimatedContent({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    // key on pathname so the div remounts when route changes, re-triggering CSS animations
    <div key={pathname} className="animate-in">
      {children}
    </div>
  )
}
