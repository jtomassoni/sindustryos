import {
  index,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const postStatusEnum = pgEnum('post_status', [
  'draft',
  'scheduled',
  'published',
  'archived',
])

export const postSourceEnum = pgEnum('post_source', ['manual', 'ai'])

export type PostSection = {
  heading: string
  body: string[]
}

export type PrimaryProduct = {
  label: string
  href: string
}

export const posts = pgTable(
  'posts',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    slug: text('slug').notNull().unique(),
    title: text('title').notNull(),
    description: text('description').notNull().default(''),
    category: text('category').notNull().default('Guides'),
    keywords: jsonb('keywords').$type<string[]>().notNull().default([]),
    sections: jsonb('sections').$type<PostSection[]>().notNull().default([]),
    primaryProduct: jsonb('primary_product')
      .$type<PrimaryProduct>()
      .notNull()
      .default({ label: 'Full Web CMS', href: '/products/cms' }),
    status: postStatusEnum('status').notNull().default('draft'),
    source: postSourceEnum('source').notNull().default('manual'),
    topicNotes: text('topic_notes'),
    scheduledAt: timestamp('scheduled_at', { withTimezone: true }),
    publishedAt: timestamp('published_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index('posts_status_idx').on(table.status),
    index('posts_scheduled_at_idx').on(table.scheduledAt),
    index('posts_published_at_idx').on(table.publishedAt),
  ]
)

export type Post = typeof posts.$inferSelect
export type NewPost = typeof posts.$inferInsert
