import { NextRequest, NextResponse } from 'next/server'
import { requireAdminSession } from '@/lib/auth'
import { getPostById, updatePost } from '@/lib/blog/posts'
import { fillPostWithAi } from '@/lib/blog/generate'
import { serializePost } from '@/lib/blog/types'

type Ctx = { params: Promise<{ id: string }> }

export async function POST(_request: NextRequest, context: Ctx) {
  const denied = await requireAdminSession()
  if (denied) return denied

  const { id } = await context.params
  const post = await getPostById(id)
  if (!post) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  try {
    const generated = await fillPostWithAi(post)
    const updated = await updatePost(id, {
      title: generated.title,
      description: generated.description,
      category: generated.category,
      keywords: generated.keywords,
      sections: generated.sections,
      primaryProduct: generated.primaryProduct,
      status: post.status === 'draft' ? 'scheduled' : post.status,
      source: 'ai',
      scheduledAt: post.scheduledAt,
      topicNotes: post.topicNotes,
    })
    return NextResponse.json({ post: serializePost(updated) })
  } catch (error) {
    console.error('generate post', error)
    return NextResponse.json(
      { error: 'AI generation failed' },
      { status: 500 }
    )
  }
}
