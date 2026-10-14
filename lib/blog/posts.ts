import { and, asc, desc, eq, lte, ne, or, sql } from 'drizzle-orm'
import { getDb, posts, type NewPost, type Post } from '@/lib/db'
import { resources, type ResourceArticle } from '@/lib/content/resources'
import { postToResourceArticle, type BlogPostInput } from '@/lib/blog/types'
import { slugify, uniqueSlug } from '@/lib/blog/slug'

function parseDate(value: string | Date | null | undefined): Date | null {
  if (value == null || value === '') return null
  if (value instanceof Date) return value
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d
}

export async function listPosts(options?: {
  status?: Post['status']
}): Promise<Post[]> {
  const db = getDb()
  if (options?.status) {
    return db
      .select()
      .from(posts)
      .where(eq(posts.status, options.status))
      .orderBy(desc(posts.scheduledAt), desc(posts.updatedAt))
  }
  return db.select().from(posts).orderBy(desc(posts.updatedAt))
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const db = getDb()
  const rows = await db.select().from(posts).where(eq(posts.id, id)).limit(1)
  return rows[0]
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const db = getDb()
  const rows = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1)
  return rows[0]
}

export async function getPublishedPosts(): Promise<ResourceArticle[]> {
  const db = getDb()
  const now = new Date()
  const rows = await db
    .select()
    .from(posts)
    .where(
      and(
        eq(posts.status, 'published'),
        or(lte(posts.publishedAt, now), sql`${posts.publishedAt} is null`)
      )
    )
    .orderBy(desc(posts.publishedAt), desc(posts.createdAt))

  const fromDb = rows.map(postToResourceArticle)
  const dbSlugs = new Set(fromDb.map((p) => p.slug))
  const fromStatic = resources.filter((r) => !dbSlugs.has(r.slug))
  return [...fromDb, ...fromStatic].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  )
}

export async function getPublishedPostBySlug(
  slug: string
): Promise<ResourceArticle | undefined> {
  const post = await getPostBySlug(slug)
  if (post?.status === 'published') {
    const now = new Date()
    if (!post.publishedAt || post.publishedAt <= now) {
      return postToResourceArticle(post)
    }
  }
  return resources.find((r) => r.slug === slug)
}

export async function createPost(input: BlogPostInput): Promise<Post> {
  const db = getDb()
  const existing = await db.select({ slug: posts.slug }).from(posts)
  const slugSet = new Set(existing.map((r) => r.slug))
  const slug = uniqueSlug(input.slug || input.title, slugSet)
  const now = new Date()
  const status = input.status ?? 'draft'
  const scheduledAt = parseDate(input.scheduledAt)
  let publishedAt = parseDate(input.publishedAt)
  if (status === 'published' && !publishedAt) publishedAt = now

  const values: NewPost = {
    slug,
    title: input.title,
    description: input.description ?? '',
    category: input.category ?? 'Guides',
    keywords: input.keywords ?? [],
    sections: input.sections ?? [],
    primaryProduct: input.primaryProduct ?? {
      label: 'Full Web CMS',
      href: '/products/cms',
    },
    status,
    source: input.source ?? 'manual',
    topicNotes: input.topicNotes ?? null,
    scheduledAt,
    publishedAt,
    updatedAt: now,
  }

  const inserted = await db.insert(posts).values(values).returning()
  return inserted[0]
}

export async function updatePost(id: string, input: BlogPostInput): Promise<Post> {
  const db = getDb()
  const existing = await getPostById(id)
  if (!existing) throw new Error('Post not found')

  const now = new Date()
  const status = input.status ?? existing.status
  let slug = existing.slug
  if (input.slug && input.slug !== existing.slug) {
    const others = await db
      .select({ slug: posts.slug })
      .from(posts)
      .where(ne(posts.id, id))
    slug = uniqueSlug(input.slug, new Set(others.map((r) => r.slug)))
  } else if (input.title && !input.slug) {
    // keep existing slug unless explicitly changed
  }

  const scheduledAt =
    input.scheduledAt !== undefined
      ? parseDate(input.scheduledAt)
      : existing.scheduledAt
  let publishedAt =
    input.publishedAt !== undefined
      ? parseDate(input.publishedAt)
      : existing.publishedAt
  if (status === 'published' && !publishedAt) publishedAt = now
  if (status !== 'published' && input.status && input.status !== 'published') {
    // leave publishedAt as historical unless cleared
  }

  const updated = await db
    .update(posts)
    .set({
      slug,
      title: input.title ?? existing.title,
      description: input.description ?? existing.description,
      category: input.category ?? existing.category,
      keywords: input.keywords ?? existing.keywords,
      sections: input.sections ?? existing.sections,
      primaryProduct: input.primaryProduct ?? existing.primaryProduct,
      status,
      source: input.source ?? existing.source,
      topicNotes:
        input.topicNotes !== undefined ? input.topicNotes : existing.topicNotes,
      scheduledAt,
      publishedAt,
      updatedAt: now,
    })
    .where(eq(posts.id, id))
    .returning()

  return updated[0]
}

export async function deletePost(id: string): Promise<void> {
  const db = getDb()
  await db.delete(posts).where(eq(posts.id, id))
}

export async function publishDuePosts(now = new Date()): Promise<Post[]> {
  const db = getDb()
  const due = await db
    .select()
    .from(posts)
    .where(
      and(
        eq(posts.status, 'scheduled'),
        lte(posts.scheduledAt, now),
        sql`jsonb_array_length(${posts.sections}) > 0`
      )
    )
    .orderBy(asc(posts.scheduledAt))

  const published: Post[] = []
  for (const post of due) {
    const rows = await db
      .update(posts)
      .set({
        status: 'published',
        publishedAt: post.scheduledAt ?? now,
        updatedAt: now,
      })
      .where(eq(posts.id, post.id))
      .returning()
    if (rows[0]) published.push(rows[0])
  }
  return published
}

export async function listPostsNeedingContent(limit = 5): Promise<Post[]> {
  const db = getDb()
  // Prefer posts that publish soon so the calendar stays stocked ahead of time
  return db
    .select()
    .from(posts)
    .where(
      and(
        or(eq(posts.status, 'draft'), eq(posts.status, 'scheduled')),
        sql`jsonb_array_length(coalesce(${posts.sections}, '[]'::jsonb)) = 0`
      )
    )
    .orderBy(asc(posts.scheduledAt), asc(posts.createdAt))
    .limit(limit)
}

export { slugify }
