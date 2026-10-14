import type { Post, PostSection, PrimaryProduct } from '@/lib/db/schema'
import type { ResourceArticle } from '@/lib/content/resources'

export type BlogPostStatus = Post['status']

export type BlogPostInput = {
  slug?: string
  title: string
  description?: string
  category?: string
  keywords?: string[]
  sections?: PostSection[]
  primaryProduct?: PrimaryProduct
  status?: BlogPostStatus
  source?: Post['source']
  topicNotes?: string | null
  scheduledAt?: string | Date | null
  publishedAt?: string | Date | null
}

export function postToResourceArticle(post: Post): ResourceArticle {
  const published =
    post.publishedAt?.toISOString().slice(0, 10) ??
    post.scheduledAt?.toISOString().slice(0, 10) ??
    post.createdAt.toISOString().slice(0, 10)
  const modified = post.updatedAt.toISOString().slice(0, 10)

  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    datePublished: published,
    dateModified: modified,
    category: post.category,
    primaryProduct: post.primaryProduct,
    keywords: post.keywords,
    sections: post.sections,
  }
}

export function serializePost(post: Post) {
  return {
    ...post,
    scheduledAt: post.scheduledAt?.toISOString() ?? null,
    publishedAt: post.publishedAt?.toISOString() ?? null,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }
}

export type SerializedPost = ReturnType<typeof serializePost>
