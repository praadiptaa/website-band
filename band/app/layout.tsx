import './globals.css'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedContent from '../components/AnimatedContent'

export const metadata = {
  title: 'The Samo',
  description: 'Official site for The Samo',
  themeColor: '#0b0b0b',
  icons: {
    icon: '/images/band-logo.png',
    shortcut: '/images/band-logo.png',
    apple: '/images/band-logo.png'
  },
  openGraph: {
    images: ['https://i.scdn.co/image/ab676161000051741e59328f4658dbefde1ba074']
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen">
        <Navbar />
        {/* Use full-width main; children sections will opt into `container` where needed */}
        <main className="w-full px-4 pt-24 pb-8"><AnimatedContent>{children}</AnimatedContent></main>
        <Footer />
      </body>
    </html>
  )
}
