import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for using SindustryOS products and the sindustryos.com website.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <section className="py-5 md:py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-gray-400 mb-6">Last updated: October 13, 2026</p>
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Agreement</h2>
              <p>
                By accessing www.sindustryos.com or using SindustryOS products, you agree to these
                terms. If you are using the service on behalf of a business, you represent that you
                have authority to bind that business.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Services</h2>
              <p>
                SindustryOS provides restaurant and bar software including website CMS, private
                dining inquiry tools, digital signage, and related features described on our product
                and pricing pages. Features marked &quot;Coming Soon&quot; are not yet available.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Accounts &amp; billing</h2>
              <p>
                Paid plans are billed according to the pricing you select. Unless otherwise agreed in
                writing, subscriptions renew monthly and may be canceled at any time. Fees already
                paid are non-refundable except where required by law or explicitly stated.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Acceptable use</h2>
              <p>
                You may not misuse the service, attempt unauthorized access, upload unlawful content,
                or interfere with other customers. You are responsible for content you publish through
                the platform (menus, images, events, etc.).
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Intellectual property</h2>
              <p>
                SindustryOS software, branding, and site content are owned by us or our licensors.
                Your menus, photos, and business content remain yours. You grant us a limited license
                to host and display that content to provide the service.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Disclaimer &amp; liability</h2>
              <p>
                The service is provided &quot;as is.&quot; To the fullest extent permitted by law, we
                disclaim warranties of merchantability and fitness for a particular purpose, and our
                total liability for any claim related to the service is limited to the fees you paid
                us in the three months preceding the claim.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
              <p>
                Questions about these terms:{' '}
                <a href="/contact" className="text-primary-400 hover:underline">
                  Contact us
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
