import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import FAQ from '@/components/products/FAQ'
import JsonLd from '@/components/seo/JsonLd'
import { getLocationBySlug, locations } from '@/lib/content/locations'
import { getFaqSchema } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo-metadata'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getLocationBySlug(slug)
  if (!page) return {}
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/locations/${page.slug}`,
  })
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const page = getLocationBySlug(slug)
  if (!page) notFound()

  const faqSchema = getFaqSchema(page.faqs)

  return (
    <>
      <JsonLd id={`faq-location-${page.slug}`} data={faqSchema} />
      <main className="min-h-screen bg-dark-900">
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8 max-w-3xl">
            <Breadcrumbs
              items={[
                { label: 'Locations', href: '/contact' },
                { label: `${page.city}, ${page.region}` },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {page.title}
            </h1>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-10">
              {page.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
              Built for {page.city} operators
            </h2>
            <ul className="space-y-3 text-gray-300 mb-12 list-disc pl-5">
              {page.localAngles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-white mb-6">FAQ</h2>
            <FAQ items={page.faqs} />

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Talk to us
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
