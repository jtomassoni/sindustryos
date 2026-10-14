import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { requireAdminSession } from '@/lib/auth'
import { deletePost, getPostById, updatePost } from '@/lib/blog/posts'
import { serializePost, type BlogPostInput } from '@/lib/blog/types'

type Ctx = { params: Promise<{ id: string }> }

export async function GET(_request: NextRequest, context: Ctx) {
  const denied = await requireAdminSession()
  if (denied) return denied

  const { id } = await context.params
  const post = await getPostById(id)
  if (!post) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ post: serializePost(post) })
}

export async function PATCH(request: NextRequest, context: Ctx) {
  const denied = await requireAdminSession()
  if (denied) return denied

  const { id } = await context.params
  try {
    const body = (await request.json()) as BlogPostInput
    const post = await updatePost(id, body)
    if (post.status === 'published') {
      revalidatePath('/resources')
      revalidatePath(`/resources/${post.slug}`)
      revalidatePath('/sitemap.xml')
    }
    return NextResponse.json({ post: serializePost(post) })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Update failed'
    const status = message === 'Post not found' ? 404 : 500
    return NextResponse.json({ error: message }, { status })
  }
}

export async function DELETE(_request: NextRequest, context: Ctx) {
  const denied = await requireAdminSession()
  if (denied) return denied

  const { id } = await context.params
  const existing = await getPostById(id)
  if (!existing) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  await deletePost(id)
  revalidatePath('/resources')
  revalidatePath(`/resources/${existing.slug}`)
  return NextResponse.json({ ok: true })
}
