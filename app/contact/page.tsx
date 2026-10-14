import type { Metadata } from 'next'
import { FiMail, FiClock, FiCheckCircle } from 'react-icons/fi'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Request a Menu Read | Contact SindustryOS',
  description:
    'Request a Menu Insights read or get started with restaurant website CMS, private dining, or digital signage. Reply within one business day.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Request a menu read
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              Tell us your POS and what you want first. We reply within one business day with next
              steps—usually how to send one month of sales data.
            </p>
            <p className="text-base text-primary-300/90 max-w-2xl mx-auto leading-relaxed">
              Menu Insights from $149/month · Complete Bundle $199/month · No long-term contracts
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Start here</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">What happens next</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg">
                    <FiClock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Reply in one business day</h3>
                    <p className="text-gray-400">
                      We confirm fit, pricing, and how to share a sales export (or connect POS on
                      premium plans).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg">
                    <FiCheckCircle className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">First menu read</h3>
                    <p className="text-gray-400">
                      You get a clear pass on leakage, margins, and what to fix first—not a
                      40-page report you will ignore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg">
                    <FiMail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email us directly</h3>
                    <p className="text-gray-400">
                      <a
                        href="mailto:hello@sindustryos.com"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        hello@sindustryos.com
                      </a>
                      <span className="block mt-1 text-sm">
                        Serving restaurants and bars across the U.S. Stronger on-the-ground roots
                        in Denver and Baltimore.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Already a customer?</h3>
                <p className="text-gray-400">
                  Use the dedicated support email and number from onboarding, or include your
                  account email in the form so we can prioritize you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
