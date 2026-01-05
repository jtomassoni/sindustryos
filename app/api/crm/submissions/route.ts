import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory storage (replace with database in production)
// This is just for the MVP - will be replaced with proper database
let submissions: Array<{
  id: string
  name: string
  email: string
  restaurant: string
  hasWebsite: string
  message?: string
  timestamp: string
  status: 'new' | 'contacted' | 'converted' | 'archived'
}> = []

export async function GET(request: NextRequest) {
  // Simple auth check - in production, use proper authentication
  const authHeader = request.headers.get('authorization')
  const expectedAuth = process.env.CRM_AUTH_TOKEN

  if (!expectedAuth || authHeader !== `Bearer ${expectedAuth}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  return NextResponse.json({ submissions }, { status: 200 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, restaurant, hasWebsite, message } = body

    const submission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      restaurant,
      hasWebsite,
      message: message || '',
      timestamp: new Date().toISOString(),
      status: 'new' as const,
    }

    submissions.push(submission)

    return NextResponse.json(
      { message: 'Submission saved', submission },
      { status: 201 }
    )
  } catch (error) {
    console.error('CRM submission error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}


