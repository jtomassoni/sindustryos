import { NextRequest, NextResponse } from 'next/server'
import { requireAdminSession } from '@/lib/auth'
import { createPost, listPosts } from '@/lib/blog/posts'
import { serializePost } from '@/lib/blog/types'
import type { BlogPostInput } from '@/lib/blog/types'

export async function GET(request: NextRequest) {
  const denied = await requireAdminSession()
  if (denied) return denied

  try {
    const status = request.nextUrl.searchParams.get('status') as
      | BlogPostInput['status']
      | null
    const posts = await listPosts(
      status ? { status } : undefined
    )
    return NextResponse.json({ posts: posts.map(serializePost) })
  } catch (error) {
    console.error('list posts', error)
    return NextResponse.json(
      { error: 'Failed to list posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  const denied = await requireAdminSession()
  if (denied) return denied

  try {
    const body = (await request.json()) as BlogPostInput
    if (!body.title?.trim()) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 })
    }
    const post = await createPost(body)
    return NextResponse.json({ post: serializePost(post) }, { status: 201 })
  } catch (error) {
    console.error('create post', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
