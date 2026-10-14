import { eq } from 'drizzle-orm'
import { resources } from '../lib/content/resources'
import { getDb, posts } from '../lib/db'

async function main() {
  const db = getDb()
  let inserted = 0

  for (const article of resources) {
    const existing = await db
      .select({ id: posts.id })
      .from(posts)
      .where(eq(posts.slug, article.slug))
      .limit(1)

    if (existing[0]) continue

    await db.insert(posts).values({
      slug: article.slug,
      title: article.title,
      description: article.description,
      category: article.category,
      keywords: article.keywords,
      sections: article.sections,
      primaryProduct: article.primaryProduct,
      status: 'published',
      source: 'manual',
      publishedAt: new Date(article.datePublished),
      updatedAt: new Date(article.dateModified),
    })
    inserted += 1
  }

  console.log(`Seeded ${inserted} posts (${resources.length} static resources total)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
