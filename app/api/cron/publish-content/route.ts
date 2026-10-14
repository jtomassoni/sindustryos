import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import {
  listPostsNeedingContent,
  publishDuePosts,
  updatePost,
} from '@/lib/blog/posts'
import { fillPostWithAi } from '@/lib/blog/generate'

export const maxDuration = 300

function authorize(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return false
  const auth = request.headers.get('authorization')
  return auth === `Bearer ${secret}`
}

export async function GET(request: NextRequest) {
  if (!authorize(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Fill a few empty stubs before publishing (keeps calendar ahead without manual clicks)
    const needing = await listPostsNeedingContent(3)
    let generated = 0
    for (const post of needing) {
      try {
        const content = await fillPostWithAi(post)
        await updatePost(post.id, {
          title: content.title,
          description: content.description,
          category: content.category,
          keywords: content.keywords,
          sections: content.sections,
          primaryProduct: content.primaryProduct,
          status: post.status === 'draft' ? 'scheduled' : post.status,
          source: 'ai',
          scheduledAt: post.scheduledAt,
          topicNotes: post.topicNotes,
        })
        generated += 1
      } catch (err) {
        console.error('cron generate failed', post.id, err)
      }
    }

    const published = await publishDuePosts()
    for (const post of published) {
      revalidatePath('/resources')
      revalidatePath(`/resources/${post.slug}`)
    }
    if (published.length) {
      revalidatePath('/sitemap.xml')
    }

    return NextResponse.json({
      ok: true,
      generated,
      published: published.map((p) => p.slug),
    })
  } catch (error) {
    console.error('publish-content cron', error)
    return NextResponse.json({ error: 'Cron failed' }, { status: 500 })
  }
}
