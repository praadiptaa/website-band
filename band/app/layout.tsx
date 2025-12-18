import './globals.css'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      <body className="min-h-screen">
        <Navbar />
        {/* Use full-width main; children sections will opt into `container` where needed */}
        <main className="w-full px-4 pt-24 pb-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
