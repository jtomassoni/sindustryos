import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

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

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const contactEmail = process.env.CONTACT_EMAIL || 'contact@sindustryos.com'
        
        await resend.emails.send({
          from: 'SindustryOS <onboarding@resend.dev>', // Update this to your verified domain
          to: contactEmail,
          reply_to: email,
          subject: `New Contact Form Submission: ${restaurant}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #f56b1a;">New Contact Form Submission</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Restaurant/Bar:</strong> ${restaurant}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Has Website:</strong> ${hasWebsite === 'yes' ? 'Yes' : 'No'}</p>
                ${message ? `<p><strong>Message:</strong></p><p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p>` : ''}
              </div>
              <p style="color: #666; font-size: 12px;">
                This email was sent from the SindustryOS contact form.
              </p>
            </div>
          `,
        })
      } catch (emailError) {
        console.error('Resend email error:', emailError)
        // Continue even if email fails - submission is still saved to CRM
      }
    } else {
      console.warn('RESEND_API_KEY not configured - email not sent')
    }

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

