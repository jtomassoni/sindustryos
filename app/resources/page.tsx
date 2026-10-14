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
      <section className="py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resources for restaurants &amp; bars
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Practical guides on websites, specials, events, signage, and private dining. Written for
            independents who run the floor.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl space-y-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="block border border-dark-700 rounded-xl p-6 bg-dark-800 hover:border-primary-500/50 transition-colors"
            >
              <p className="text-sm text-primary-400 mb-2 uppercase tracking-wide">
                {article.category}
              </p>
              <h2 className="text-2xl font-semibold text-white mb-2">{article.title}</h2>
              <p className="text-gray-300">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
