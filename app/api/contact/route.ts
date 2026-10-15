import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { addSubmission } from '@/lib/crm-store'

const interestLabels: Record<string, string> = {
  'menu-insights': 'Menu Insights / menu read',
  bundle: 'Complete Bundle',
  website: 'Website CMS',
  'private-dining': 'Private dining',
  signage: 'Digital signage',
  'not-sure': 'Not sure yet',
}

const posLabels: Record<string, string> = {
  toast: 'Toast',
  square: 'Square',
  clover: 'Clover',
  other: 'Other',
  none: 'No POS / not sure',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, restaurant, interest, pos, message } = body

    if (!name || !email || !restaurant || !interest || !pos) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    try {
      addSubmission({ name, email, restaurant, interest, pos, message })
    } catch (error) {
      console.error('CRM save error:', error)
    }

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const contactEmail = process.env.CONTACT_EMAIL || 'jtomassoni@gmail.com'
        const interestLabel = interestLabels[interest] || interest
        const posLabel = posLabels[pos] || pos

        await resend.emails.send({
          from: 'SindustryOS <onboarding@resend.dev>',
          to: contactEmail,
          reply_to: email,
          subject: `Menu read request: ${restaurant}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0d9488;">New sales inquiry</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Restaurant/Bar:</strong> ${restaurant}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Interest:</strong> ${interestLabel}</p>
                <p><strong>POS:</strong> ${posLabel}</p>
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
      }
    } else {
      console.warn('RESEND_API_KEY not configured - email not sent')
    }

    return NextResponse.json(
      { message: 'Got it. We typically reply within one business day.' },
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
