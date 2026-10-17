import { NextRequest, NextResponse } from 'next/server'
import { getSessionUsername, requireAdminSession } from '@/lib/auth'
import { addSubmission, claimSubmission, listSubmissions } from '@/lib/crm-store'

export async function GET() {
  const denied = await requireAdminSession()
  if (denied) return denied

  const viewer = await getSessionUsername()
  return NextResponse.json({ viewer, submissions: listSubmissions() }, { status: 200 })
}

export async function PATCH(request: NextRequest) {
  const denied = await requireAdminSession()
  if (denied) return denied

  const viewer = await getSessionUsername()
  if (!viewer) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const id = typeof body.id === 'string' ? body.id : ''
    if (!id || body.action !== 'claim') {
      return NextResponse.json({ error: 'Missing lead id' }, { status: 400 })
    }

    const submission = claimSubmission(id, viewer)
    if (!submission) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json({ submission }, { status: 200 })
  } catch (error) {
    console.error('CRM claim error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const denied = await requireAdminSession()
  if (denied) return denied

  try {
    const body = await request.json()
    const { name, email, restaurant, interest, pos, message } = body

    if (!name || !email || !restaurant || !interest || !pos) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const submission = addSubmission({
      name,
      email,
      restaurant,
      interest,
      pos,
      message,
    })

    return NextResponse.json(
      { message: 'Submission saved', submission },
      { status: 201 }
    )
  } catch (error) {
    console.error('CRM submission error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
