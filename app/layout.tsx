import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import dynamic from 'next/dynamic'

const LoadingScreen = dynamic(() => import('@/components/Loading/LoadingScreen'), {
  ssr: false
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Hamon Cooling India',
  description: 'Sustainable technology infrastructure powered by clean energy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <LoadingScreen />
        <div id="main-content">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}