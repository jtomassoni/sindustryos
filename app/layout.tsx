import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { getOrganizationSchema, getSoftwareApplicationSchema } from '@/lib/structured-data'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Restaurant & Bar Website CMS, Signage & Private Dining`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'One platform for independent restaurants and bars: website CMS, menu & specials, event calendar, private dining CRM, and digital signage. From $99/month.',
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} — Restaurant & Bar Management Platform`,
    description:
      'Website CMS, private dining CRM, and digital signage for independent restaurants and bars. Replace multiple vendors.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Restaurant & Bar Management Platform`,
    description:
      'Website CMS, private dining CRM, and digital signage for independent restaurants and bars.',
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
  const softwareSchema = getSoftwareApplicationSchema()
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JsonLd id="organization-schema" data={organizationSchema} />
        <JsonLd id="software-schema" data={softwareSchema} />
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              id="ga4"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        ) : null}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
