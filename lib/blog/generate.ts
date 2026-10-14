import { generateText, Output } from 'ai'
import { z } from 'zod'
import type { Post, PostSection, PrimaryProduct } from '@/lib/db/schema'

const PRODUCT_OPTIONS: PrimaryProduct[] = [
  { label: 'Full Web CMS', href: '/products/cms' },
  { label: 'Private Dining', href: '/products/private-dining' },
  { label: 'Digital Signage', href: '/products/digital-signage' },
  { label: 'See products', href: '/products' },
]

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  keywords: z.array(z.string()).min(2).max(8),
  primaryProductHref: z.enum([
    '/products/cms',
    '/products/private-dining',
    '/products/digital-signage',
    '/products',
  ]),
  sections: z
    .array(
      z.object({
        heading: z.string(),
        body: z.array(z.string()).min(1).max(4),
      })
    )
    .min(3)
    .max(6),
})

const calendarSchema = z.object({
  topics: z
    .array(
      z.object({
        title: z.string(),
        topicNotes: z.string(),
        category: z.string(),
        keywords: z.array(z.string()).min(2).max(6),
        primaryProductHref: z.enum([
          '/products/cms',
          '/products/private-dining',
          '/products/digital-signage',
          '/products',
        ]),
      })
    )
    .min(1),
})

const SYSTEM = `You write practical SEO content for SindustryOS, an all-in-one restaurant and bar management platform (website CMS, private dining CRM, digital signage) for independent venues.

Voice: direct, ops-first, no fluff, no emojis, no hype, no em dashes. Speak to owners and managers who work the floor. Prefer concrete workflows over buzzwords. Mention SindustryOS only when it naturally fits a decision. Never hard-sell every paragraph.

Audience: US independent restaurants and bars.`

function resolveProduct(href: string): PrimaryProduct {
  return (
    PRODUCT_OPTIONS.find((p) => p.href === href) ?? PRODUCT_OPTIONS[0]
  )
}

export async function generateArticleContent(input: {
  title: string
  topicNotes?: string | null
  category?: string
  keywords?: string[]
}): Promise<{
  title: string
  description: string
  category: string
  keywords: string[]
  sections: PostSection[]
  primaryProduct: PrimaryProduct
}> {
  const result = await generateText({
    model: 'openai/gpt-5.4',
    output: Output.object({ schema: articleSchema }),
    system: SYSTEM,
    prompt: `Write a complete resource article.

Working title: ${input.title}
Topic notes: ${input.topicNotes || 'None. Expand the title into a useful guide.'}
Preferred category: ${input.category || 'choose the best fit'}
Seed keywords: ${(input.keywords || []).join(', ') || 'derive from the topic'}

Requirements:
- 3-6 H2 sections with 1-3 short paragraphs each
- Practical, skimmable, SEO-useful without keyword stuffing
- Meta description under ~160 characters
- Pick the best primary product CTA href from the allowed list`,
  })

  const object = result.output
  if (!object) throw new Error('AI did not return article content')

  return {
    title: object.title,
    description: object.description,
    category: object.category,
    keywords: object.keywords,
    sections: object.sections,
    primaryProduct: resolveProduct(object.primaryProductHref),
  }
}

export async function generateCalendarTopics(input: {
  months: number
  postsPerMonth: number
  focus?: string
  existingTitles: string[]
}): Promise<
  Array<{
    title: string
    topicNotes: string
    category: string
    keywords: string[]
    primaryProduct: PrimaryProduct
  }>
> {
  const count = Math.min(input.months, 12) * input.postsPerMonth
  const result = await generateText({
    model: 'openai/gpt-5.4',
    output: Output.object({ schema: calendarSchema }),
    system: SYSTEM,
    prompt: `Create exactly ${count} unique SEO article topics for a ${Math.min(input.months, 12)}-month content calendar (${input.postsPerMonth}/month).

Focus: ${input.focus || 'restaurant/bar websites, specials, events, private dining, digital signage, vendor consolidation, local SEO for hospitality'}

Do NOT duplicate or closely paraphrase these existing titles:
${input.existingTitles.slice(0, 40).map((t) => `- ${t}`).join('\n') || '- (none)'}

Return ${count} topics with title, topicNotes (1-2 sentences of angle), category, keywords, and primaryProductHref.`,
  })

  const object = result.output
  if (!object?.topics?.length) throw new Error('AI did not return calendar topics')

  return object.topics.slice(0, count).map((t) => ({
    title: t.title,
    topicNotes: t.topicNotes,
    category: t.category,
    keywords: t.keywords,
    primaryProduct: resolveProduct(t.primaryProductHref),
  }))
}

export async function fillPostWithAi(post: Post) {
  return generateArticleContent({
    title: post.title,
    topicNotes: post.topicNotes,
    category: post.category,
    keywords: post.keywords,
  })
}
