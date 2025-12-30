import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getOrganizationSchema } from '@/lib/structured-data'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SindustryOS - All-in-One Restaurant & Bar Management Platform',
  description: 'One platform replaces multiple vendors. SindustryOS handles your website, social media, delivery apps, menu optimization, staff scheduling, and more. Built for small businesses.',
  keywords: ['restaurant management software', 'bar management system', 'dive bar website', 'all-in-one restaurant solution', 'restaurant CMS', 'menu management', 'event calendar software'],
  authors: [{ name: 'SindustryOS' }],
  creator: 'SindustryOS',
  publisher: 'SindustryOS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sindustryos.com'),
  openGraph: {
    title: 'SindustryOS - All-in-One Restaurant & Bar Management Platform',
    description: 'One platform replaces multiple vendors. SindustryOS handles your website, social media, delivery apps, menu optimization, staff scheduling, and more.',
    url: 'https://sindustryos.com',
    siteName: 'SindustryOS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SindustryOS - All-in-One Restaurant & Bar Management Platform',
    description: 'One platform replaces multiple vendors. SindustryOS handles your website, social media, delivery apps, menu optimization, staff scheduling, and more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = getOrganizationSchema()
  
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

