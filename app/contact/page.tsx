import type { Metadata } from 'next'
import { FiCheckCircle, FiClock, FiMessageSquare } from 'react-icons/fi'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Request a Menu Read | Contact SindustryOS',
  description:
    'Request a Menu Insights read or get started with restaurant website CMS, private dining, or digital signage. Reply within one business day.',
  alternates: { canonical: '/contact' },
}

const nextSteps = [
  {
    icon: FiClock,
    title: 'Reply in one business day',
    body: 'We confirm fit, pricing, and how to share a sales export.',
  },
  {
    icon: FiCheckCircle,
    title: 'First menu read',
    body: 'A short pass on leakage, margins, and what to fix first.',
  },
  {
    icon: FiMessageSquare,
    title: 'Form, not a shared inbox',
    body: 'Submissions land in the CRM. We sell in Baltimore first.',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <section className="pt-5 pb-8 md:pt-6">
        <div className="container mx-auto px-4">
          <div className="mb-4 max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Request a menu read
            </h1>
            <p className="mt-2 text-base leading-snug text-gray-300 md:text-lg">
              Tell us your POS. Website from $99, or $891 for the year.
            </p>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="order-2 lg:order-1">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-300">
                What happens next
              </h2>
              <ul className="space-y-3">
                {nextSteps.map((step) => {
                  const Icon = step.icon
                  return (
                    <li key={step.title} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" />
                      <div>
                        <p className="text-sm font-semibold text-white">{step.title}</p>
                        <p className="text-sm leading-snug text-gray-400">{step.body}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <p className="mt-4 rounded-lg border border-dark-700 bg-dark-800 px-3 py-2 text-sm text-gray-400">
                Already a customer? Include your account email so we can prioritize you.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
