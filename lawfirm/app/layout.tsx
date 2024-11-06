import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1a365d',
}

export const metadata: Metadata = {
  title: 'G Van Zyl Attorneys | Cape Town Legal Services',
  description: 'Expert legal services in Cape Town, specializing in corporate, family, and criminal law with over two decades of experience.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://gvanzyl.co.za',
    title: 'G Van Zyl Attorneys | Cape Town Legal Services',
    description: 'Expert legal services in Cape Town, specializing in corporate, family, and criminal law with over two decades of experience.',
    siteName: 'G Van Zyl Attorneys',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
