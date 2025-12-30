import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, restaurant, hasWebsite, message } = body

    // Validation
    if (!name || !email || !restaurant || !hasWebsite) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Save to CRM
    try {
      const crmResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/crm/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          restaurant,
          hasWebsite,
          message,
        }),
      })

      if (!crmResponse.ok) {
        console.error('Failed to save to CRM')
      }
    } catch (error) {
      console.error('CRM save error:', error)
      // Continue even if CRM save fails
    }

    // TODO: Send email via Resend
    // This will be implemented when Resend API key is configured
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@sindustryos.com',
    //   to: process.env.CONTACT_EMAIL || 'contact@sindustryos.com',
    //   subject: `New Contact Form Submission from ${restaurant}`,
    //   html: `...`
    // })

    return NextResponse.json(
      { message: 'Thank you! We\'ll be in touch soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

