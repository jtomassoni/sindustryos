import { createPost, listPosts } from '@/lib/blog/posts'
import { generateCalendarTopics, generateArticleContent } from '@/lib/blog/generate'
import type { Post } from '@/lib/db/schema'

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setUTCDate(d.getUTCDate() + days)
  return d
}

/** Spread N posts evenly across `months` starting from `start`. */
export function scheduleDates(
  start: Date,
  months: number,
  postsPerMonth: number
): Date[] {
  const dates: Date[] = []
  const safeMonths = Math.min(Math.max(months, 1), 12)
  const perMonth = Math.min(Math.max(postsPerMonth, 1), 8)

  for (let m = 0; m < safeMonths; m += 1) {
    const monthStart = new Date(
      Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + m, 1, 14, 0, 0)
    )
    const daysInMonth = new Date(
      Date.UTC(monthStart.getUTCFullYear(), monthStart.getUTCMonth() + 1, 0)
    ).getUTCDate()

    for (let i = 0; i < perMonth; i += 1) {
      const day = Math.min(
        daysInMonth,
        Math.round(((i + 1) / (perMonth + 1)) * daysInMonth)
      )
      dates.push(
        new Date(
          Date.UTC(
            monthStart.getUTCFullYear(),
            monthStart.getUTCMonth(),
            day,
            14,
            0,
            0
          )
        )
      )
    }
  }

  return dates
}

export async function createContentCalendar(options: {
  months: number
  postsPerMonth: number
  focus?: string
  startDate?: string
  /** If true, generate full article bodies now. Otherwise leave stubs for later. */
  writeContent?: boolean
  /** scheduled = auto-publish on date; draft = human must promote to scheduled */
  status?: 'draft' | 'scheduled'
}): Promise<Post[]> {
  const months = Math.min(Math.max(options.months, 1), 12)
  const postsPerMonth = Math.min(Math.max(options.postsPerMonth, 1), 8)
  const start = options.startDate
    ? new Date(options.startDate)
    : addDays(new Date(), 7)
  const status = options.status ?? 'scheduled'
  const writeContent = options.writeContent ?? false

  const existing = await listPosts()
  const topics = await generateCalendarTopics({
    months,
    postsPerMonth,
    focus: options.focus,
    existingTitles: existing.map((p) => p.title),
  })

  const dates = scheduleDates(start, months, postsPerMonth)
  const created: Post[] = []

  for (let i = 0; i < topics.length; i += 1) {
    const topic = topics[i]
    const scheduledAt = dates[i] ?? addDays(start, (i + 1) * 7)

    let sections = [] as Post['sections']
    let description = ''
    let title = topic.title
    let category = topic.category
    let keywords = topic.keywords
    let primaryProduct = topic.primaryProduct

    if (writeContent) {
      const article = await generateArticleContent({
        title: topic.title,
        topicNotes: topic.topicNotes,
        category: topic.category,
        keywords: topic.keywords,
      })
      title = article.title
      description = article.description
      category = article.category
      keywords = article.keywords
      sections = article.sections
      primaryProduct = article.primaryProduct
    }

    const post = await createPost({
      title,
      description,
      category,
      keywords,
      sections,
      primaryProduct,
      topicNotes: topic.topicNotes,
      status,
      source: 'ai',
      scheduledAt,
    })
    created.push(post)
  }

  return created
}
