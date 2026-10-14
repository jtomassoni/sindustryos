import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ValueProposition from '@/components/sections/ValueProposition'
import SubValueStrip from '@/components/sections/SubValueStrip'
import ProductShowcase from '@/components/sections/ProductShowcase'
import Testimonial from '@/components/sections/Testimonial'
import PlatformClose from '@/components/sections/PlatformClose'
import JsonLd from '@/components/seo/JsonLd'
import { getServiceSchema, getProductSchema } from '@/lib/structured-data'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    absolute:
      'SindustryOS: Restaurant & Bar Website CMS, Digital Signage & Private Dining',
  },
  description:
    'Replace multiple vendors with one restaurant and bar platform. Website CMS, menu & specials, event calendar, private dining CRM, and digital signage from $99/month.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SindustryOS: Restaurant & Bar Management Platform',
    description:
      'Website CMS, private dining CRM, and digital signage for independent restaurants and bars.',
    url: absoluteUrl('/'),
    type: 'website',
  },
}

export default function Home() {
  const serviceSchema = getServiceSchema()
  const productSchema = getProductSchema()

  return (
    <>
      <JsonLd id="service-schema" data={serviceSchema} />
      <JsonLd id="product-schema" data={productSchema} />
      <main className="min-h-screen">
        <Hero />
        <ValueProposition />
        <SubValueStrip />
        <ProductShowcase />
        <Testimonial />
        <PlatformClose />
      </main>
    </>
  )
}
