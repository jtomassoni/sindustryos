import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import { caseStudies, getCaseStudyBySlug } from '@/lib/content/case-studies'
import { pageMetadata } from '@/lib/seo-metadata'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return {}
  return pageMetadata({
    title: study.title,
    description: study.description,
    path: `/customers/${study.slug}`,
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()

  return (
    <main className="min-h-screen bg-dark-900">
      <section className="py-5 md:py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Customers', href: '/resources' },
              { label: study.business },
            ]}
          />
          <p className="text-sm text-primary-400 mb-3 uppercase tracking-wide">
            Case study · {study.location}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {study.title}
          </h1>

          <blockquote className="border-l-4 border-primary-500 pl-4 mb-6">
            <p className="text-xl text-gray-200 italic leading-relaxed mb-4">
              &ldquo;{study.quote}&rdquo;
            </p>
            <footer className="text-gray-400">
              {study.quoteAttribution}
              {study.website ? (
                <>
                  {' · '}
                  <a
                    href={study.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:underline"
                  >
                    {study.business}
                  </a>
                </>
              ) : (
                <> · {study.business}</>
              )}
            </footer>
          </blockquote>

          <h2 className="text-2xl font-semibold text-white mb-4">Challenges</h2>
          <ul className="space-y-3 text-gray-300 mb-10 list-disc pl-5">
            {study.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-white mb-4">Results</h2>
          <ul className="space-y-3 text-gray-300 mb-10 list-disc pl-5">
            {study.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-white mb-4">Products used</h2>
          <p className="text-gray-300 mb-12">{study.productsUsed.join(' · ')}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get started
            </Button>
            <Button href="/products/cms" variant="outline" size="lg">
              See Full Web CMS
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
