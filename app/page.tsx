import type { Metadata } from 'next'
import Script from 'next/script'
import Hero from '@/components/sections/Hero'
import ValueProposition from '@/components/sections/ValueProposition'
import ProductShowcase from '@/components/sections/ProductShowcase'
import Testimonial from '@/components/sections/Testimonial'
import FeatureHighlights from '@/components/sections/FeatureHighlights'
import TargetAudience from '@/components/sections/TargetAudience'
import FinalCTA from '@/components/sections/FinalCTA'
import { getServiceSchema, getProductSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'SindustryOS - All-in-One Restaurant & Bar Management Platform | Replace Multiple Vendors',
  description: 'One platform replaces multiple vendors. SindustryOS handles your website, social media, delivery apps, menu optimization, staff scheduling, and more. Starting at $99/month. Built for small restaurants and bars.',
  keywords: [
    'restaurant management software',
    'bar management system',
    'dive bar website',
    'all-in-one restaurant solution',
    'restaurant CMS',
    'menu management',
    'event calendar software',
    'digital signage for restaurants',
    'restaurant website builder',
    'small business restaurant software',
    'denver restaurant software',
    'baltimore restaurant software',
  ],
  openGraph: {
    title: 'SindustryOS - All-in-One Restaurant & Bar Management Platform',
    description: 'One platform replaces multiple vendors. SindustryOS handles your website, social media, delivery apps, menu optimization, staff scheduling, and more.',
    url: 'https://www.sindustryos.com',
    siteName: 'SindustryOS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SindustryOS - All-in-One Restaurant & Bar Management Platform',
    description: 'One platform replaces multiple vendors. SindustryOS handles your website, social media, delivery apps, menu optimization, staff scheduling, and more.',
  },
}

export default function Home() {
  const serviceSchema = getServiceSchema()
  const productSchema = getProductSchema()
  
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main className="min-h-screen">
        <Hero />
        <ValueProposition />
        <ProductShowcase />
        <Testimonial />
        <FeatureHighlights />
        <TargetAudience />
        <FinalCTA />
      </main>
    </>
  )
}

