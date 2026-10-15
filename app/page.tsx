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
      'SindustryOS: Analytics Engine for Restaurants & Bars — from $149/month',
  },
  description:
    'Digests your sales reports into actionable insights. Add a customizable website, private dining, digital signage, and social in the same dashboard.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SindustryOS: Analytics Engine for Independent Restaurants & Bars',
    description:
      'Analytics from sales data, plus website, private dining, signage, and social in one dashboard. From $149/month.',
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
