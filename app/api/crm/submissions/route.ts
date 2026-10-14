import { NextRequest, NextResponse } from 'next/server'
import { requireAdminSession } from '@/lib/auth'
import { addSubmission, listSubmissions } from '@/lib/crm-store'

export async function GET() {
  const denied = await requireAdminSession()
  if (denied) return denied

  return NextResponse.json({ submissions: listSubmissions() }, { status: 200 })
}

export async function POST(request: NextRequest) {
  const denied = await requireAdminSession()
  if (denied) return denied

  try {
    const body = await request.json()
    const { name, email, restaurant, hasWebsite, message } = body

    if (!name || !email || !restaurant || !hasWebsite) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const submission = addSubmission({
      name,
      email,
      restaurant,
      hasWebsite,
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
