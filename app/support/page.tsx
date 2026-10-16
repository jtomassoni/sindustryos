import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Support',
  description:
    'Get help with SindustryOS. Contact support, browse resources, or request onboarding help for your restaurant or bar.',
  path: '/support',
})

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <section className="py-5 md:py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Support</h1>
          <p className="text-base md:text-lg text-gray-300 mb-4 leading-snug">
            Customers get dedicated support once onboarded. For sales questions, demos, or technical
            help, reach out and we will get back to you quickly.
          </p>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            <Button href="/contact" variant="primary" size="md">
              Contact us
            </Button>
            <Button href="/resources" variant="outline" size="md">
              Browse resources
            </Button>
          </div>
          <div className="grid gap-2 text-left">
            {[
              {
                title: 'New customers',
                body: 'Include your business name and which products you need (CMS, Private Dining, Signage). We will help you get set up.',
              },
              {
                title: 'Existing customers',
                body: 'Use the contact form with your account email so we can prioritize your request.',
              },
              {
                title: 'Self-serve reading',
                body: 'Guides on specials, events, signage, and vendor consolidation live in Resources.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-dark-700 rounded-xl p-3 bg-dark-800">
                <h2 className="text-base font-semibold text-white mb-1">{item.title}</h2>
                <p className="text-sm text-gray-300 leading-snug">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
