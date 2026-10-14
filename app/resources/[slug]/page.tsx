import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import JsonLd from '@/components/seo/JsonLd'
import { getPublishedPostBySlug, getPublishedPosts } from '@/lib/blog/posts'
import { getResourceBySlug, resources } from '@/lib/content/resources'
import { hasDatabase } from '@/lib/db'
import { getArticleSchema } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo-metadata'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  if (!hasDatabase()) {
    return resources.map((r) => ({ slug: r.slug }))
  }
  try {
    const published = await getPublishedPosts()
    return published.map((r) => ({ slug: r.slug }))
  } catch {
    return resources.map((r) => ({ slug: r.slug }))
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = hasDatabase()
    ? await getPublishedPostBySlug(slug)
    : getResourceBySlug(slug)
  if (!article) return {}
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
  })
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params
  const article = hasDatabase()
    ? await getPublishedPostBySlug(slug)
    : getResourceBySlug(slug)
  if (!article) notFound()

  const schema = getArticleSchema({
    headline: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
  })

  return (
    <>
      <JsonLd id={`article-${article.slug}`} data={schema} />
      <main className="min-h-screen bg-dark-900">
        <article className="py-16">
          <div className="container mx-auto px-6 md:px-8 max-w-3xl">
            <Breadcrumbs
              items={[
                { label: 'Resources', href: '/resources' },
                { label: article.title },
              ]}
            />
            <p className="text-sm text-primary-400 mb-3 uppercase tracking-wide">
              {article.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-300 mb-12">{article.description}</p>

            <div className="space-y-10">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-white mb-4">{section.heading}</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    {section.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 p-8 border border-dark-700 rounded-xl bg-dark-800 text-center">
              <h2 className="text-2xl font-semibold text-white mb-3">
                Ready to put this into practice?
              </h2>
              <p className="text-gray-300 mb-6">
                See {article.primaryProduct.label} or talk to us about your venue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={article.primaryProduct.href} variant="primary" size="lg">
                  {article.primaryProduct.label}
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Contact
                </Button>
              </div>
            </div>

            <p className="mt-10 text-center text-gray-500 text-sm">
              <Link href="/resources" className="hover:text-primary-400">
                ← All resources
              </Link>
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
