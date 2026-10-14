import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for SindustryOS — how we collect, use, and protect information.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-10">Last updated: October 13, 2026</p>
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Who we are</h2>
              <p>
                SindustryOS (&quot;we&quot;, &quot;us&quot;) operates www.sindustryos.com and related product
                services for restaurants and bars. Contact:{' '}
                <a href="/contact" className="text-primary-400 hover:underline">
                  Contact form
                </a>
                .
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Information we collect</h2>
              <p>
                When you submit our contact form or become a customer, we may collect your name,
                business name, email address, phone number, and message content. We also collect
                standard technical logs (IP address, browser type, pages viewed) needed to operate
                and secure the site.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">How we use information</h2>
              <p>
                We use information to respond to inquiries, provide and improve the product, send
                service-related communications, and analyze site performance. We do not sell personal
                information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Cookies &amp; analytics</h2>
              <p>
                If Google Analytics or similar tools are enabled, they may set cookies to measure
                traffic. You can control cookies through your browser settings.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Data retention &amp; security</h2>
              <p>
                We retain inquiry and account data as long as needed to provide services and meet
                legal obligations. We use reasonable administrative and technical safeguards; no
                method of transmission is 100% secure.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Your choices</h2>
              <p>
                To access, correct, or delete personal information we hold about you, contact us via
                the contact page. Depending on your location, additional rights may apply.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Changes</h2>
              <p>
                We may update this policy from time to time. The &quot;Last updated&quot; date will change
                when we do.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
