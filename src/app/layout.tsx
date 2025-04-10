import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Define fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: "Shivangi's Portfolio",
  description: 'Professional portfolio of Shivangi Patel, MSc IT student and developer.',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Shivangi's Portfolio",
    description: 'Professional portfolio of Shivangi Patel, MSc IT student and developer.',
    url: 'https://shivangi.works',
    siteName: "Shivangi's Portfolio",
    
    images: [{
      url: "https://shivangi.works/images/shivangi.JPG",
      width: 1200,
      height: 630,
      alt: "Shivangi logo/profile picture",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ["https://shivangi.works/images/shivangi.JPG"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
          <Analytics /> {/* Vercel Analytics */}
          <SpeedInsights /> {/* Vercel Speed Insights */}
        </main>
        <Footer />
      </body>
    </html>
  )
}