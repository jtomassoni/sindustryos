import type { Metadata } from 'next'
import { FiShoppingCart, FiCreditCard, FiBell, FiPackage } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FeatureList from '@/components/products/FeatureList'

export const metadata: Metadata = {
  title: 'Online Ordering - Coming Soon | SindustryOS',
  description: 'Accept online orders directly through your website. Reduce third-party fees and keep more revenue. Coming soon to SindustryOS.',
  keywords: [
    'online ordering',
    'restaurant online ordering',
    'direct ordering',
    'reduce delivery fees',
    'restaurant order management',
  ],
  openGraph: {
    title: 'Online Ordering - Coming Soon | SindustryOS',
    description: 'Accept online orders directly through your website. Reduce third-party fees and keep more revenue.',
    url: 'https://sindustryos.com/products/online-ordering',
    type: 'website',
  },
}

const features = [
  {
    title: 'Direct Online Ordering',
    description: 'Accept orders directly through your website, reducing dependency on third-party platforms and their fees.',
    icon: FiShoppingCart,
  },
  {
    title: 'Payment Processing',
    description: 'Secure payment processing integrated directly into your ordering system for seamless checkout.',
    icon: FiCreditCard,
  },
  {
    title: 'Order Management',
    description: 'Track and manage all orders in real-time with an intuitive dashboard for your kitchen and staff.',
    icon: FiPackage,
  },
  {
    title: 'Customer Notifications',
    description: 'Automated notifications keep customers informed about order status, estimated pickup times, and delivery updates.',
    icon: FiBell,
  },
]

export default function OnlineOrderingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Online Ordering' }]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-500/20 text-primary-400 text-sm font-semibold px-4 py-2 rounded-full border border-primary-500/30 mb-6">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Online Ordering
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accept online orders directly through your website. Reduce third-party fees and keep more revenue in your pocket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get Notified When Available
              </Button>
              <Button href="/products" variant="outline" size="lg">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to help you take control of your online ordering and reduce costs.
            </p>
          </div>
          
          <FeatureList features={features} columns={2} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Online Ordering?
            </h2>
            
            <div className="space-y-8">
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Reduce Third-Party Fees
                </h3>
                <p className="text-gray-300">
                  Third-party delivery platforms charge significant fees (often 15-30% per order). By accepting orders directly, 
                  you keep more of your revenue and can offer better prices to customers.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Better Customer Relationships
                </h3>
                <p className="text-gray-300">
                  Direct ordering means you own the customer relationship. Build loyalty programs, collect customer data, 
                  and communicate directly with your customers.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Integrated with Your Existing System
                </h3>
                <p className="text-gray-300">
                  Online ordering will integrate seamlessly with your SindustryOS CMS, menu management, and other features 
                  for a unified experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Be Notified When This Launches?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to be added to our waitlist and get early access to online ordering.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

