import { NextRequest, NextResponse } from 'next/server'
import { requireAdminSession } from '@/lib/auth'
import { createContentCalendar } from '@/lib/blog/calendar'
import { serializePost } from '@/lib/blog/types'

export const maxDuration = 300

export async function POST(request: NextRequest) {
  const denied = await requireAdminSession()
  if (denied) return denied

  try {
    const body = await request.json()
    const months = Number(body.months ?? 12)
    const postsPerMonth = Number(body.postsPerMonth ?? 2)
    const focus = typeof body.focus === 'string' ? body.focus : undefined
    const startDate =
      typeof body.startDate === 'string' ? body.startDate : undefined
    const writeContent = body.writeContent === true
    const status = body.status === 'draft' ? 'draft' : 'scheduled'

    if (months < 1 || months > 12) {
      return NextResponse.json(
        { error: 'months must be 1-12' },
        { status: 400 }
      )
    }
    if (postsPerMonth < 1 || postsPerMonth > 8) {
      return NextResponse.json(
        { error: 'postsPerMonth must be 1-8' },
        { status: 400 }
      )
    }

    const created = await createContentCalendar({
      months,
      postsPerMonth,
      focus,
      startDate,
      writeContent,
      status,
    })

    return NextResponse.json({
      count: created.length,
      posts: created.map(serializePost),
    })
  } catch (error) {
    console.error('generate calendar', error)
    return NextResponse.json(
      { error: 'Failed to generate content calendar' },
      { status: 500 }
    )
  }
}
