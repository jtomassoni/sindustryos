import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Support',
  description:
    'Get help with SindustryOS — contact support, browse resources, or request onboarding help for your restaurant or bar.',
  path: '/support',
})

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Support</h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Customers get dedicated support once onboarded. For sales questions, demos, or technical
            help, reach out and we will get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button href="/contact" variant="primary" size="lg">
              Contact us
            </Button>
            <Button href="/resources" variant="outline" size="lg">
              Browse resources
            </Button>
          </div>
          <div className="grid gap-6 text-left">
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
              <div key={item.title} className="border border-dark-700 rounded-xl p-6 bg-dark-800">
                <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
                <p className="text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
