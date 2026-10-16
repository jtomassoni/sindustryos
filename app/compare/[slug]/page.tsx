import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import { comparisons, getComparisonBySlug } from '@/lib/content/comparisons'
import { pageMetadata } from '@/lib/seo-metadata'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getComparisonBySlug(slug)
  if (!page) return {}
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/compare/${page.slug}`,
  })
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params
  const page = getComparisonBySlug(slug)
  if (!page) notFound()

  return (
    <main className="min-h-screen bg-dark-900">
      <section className="py-5 md:py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[{ label: 'Compare', href: '/resources' }, { label: page.title }]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">{page.title}</h1>
          <p className="text-base md:text-lg text-gray-300 mb-4 leading-snug">{page.summary}</p>

          <div className="overflow-x-auto border border-dark-700 rounded-xl mb-12">
            <table className="w-full text-left">
              <thead className="bg-dark-800">
                <tr>
                  <th className="p-4 text-warm-100 font-medium">Feature</th>
                  <th className="p-4 text-primary-400 font-medium">SindustryOS</th>
                  <th className="p-4 text-gray-300 font-medium">{page.competitor}</th>
                </tr>
              </thead>
              <tbody>
                {page.rows.map((row) => (
                  <tr key={row.feature} className="border-t border-dark-700">
                    <td className="p-4 text-white">{row.feature}</td>
                    <td className="p-4 text-gray-200">{row.us}</td>
                    <td className="p-4 text-gray-400">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-white mb-4">Verdict</h2>
          <ul className="space-y-3 text-gray-300 mb-12">
            {page.verdict.map((line) => (
              <li key={line} className="leading-relaxed">
                {line}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={page.ctaHref} variant="primary" size="lg">
              See product
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
