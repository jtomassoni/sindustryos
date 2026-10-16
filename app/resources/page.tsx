import type { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedPosts } from '@/lib/blog/posts'
import { resources as staticResources } from '@/lib/content/resources'
import { hasDatabase } from '@/lib/db'
import { pageMetadata } from '@/lib/seo-metadata'

export const revalidate = 3600

export const metadata: Metadata = pageMetadata({
  title: 'Restaurant & Bar Resources',
  description:
    'Guides for independent restaurants and bars: website CMS, specials, digital signage, private dining inquiries, and vendor consolidation.',
  path: '/resources',
})

export default async function ResourcesPage() {
  const articles = hasDatabase()
    ? await getPublishedPosts()
    : staticResources

  return (
    <main className="min-h-screen bg-dark-900">
      <section className="bg-dark-900 pt-5 pb-4 md:pt-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Resources for restaurants &amp; bars
          </h1>
          <p className="mt-2 text-base leading-snug text-gray-300 md:text-lg">
            Practical guides on websites, specials, events, signage, and private dining.
          </p>
        </div>
      </section>
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="block border border-dark-700 rounded-xl p-4 bg-dark-800 hover:border-primary-500/50 transition-colors"
            >
              <p className="text-sm text-primary-400 mb-2 uppercase tracking-wide">
                {article.category}
              </p>
              <h2 className="text-lg font-semibold text-white mb-1">{article.title}</h2>
              <p className="text-gray-300">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
