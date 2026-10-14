import type { Metadata } from 'next'
import Link from 'next/link'
import { FiGlobe, FiUsers, FiMonitor, FiArrowRight, FiTrendingUp } from 'react-icons/fi'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Products: Menu Insights, CMS, Signage & Private Dining',
  description:
    'SindustryOS products: Menu Insights ($149, or $99 in the bundle), Full Web CMS ($99), Private Dining ($49), Digital Signage ($99).',
  alternates: { canonical: '/products' },
}

const products = [
  {
    name: 'Menu Insights',
    price: '$149/month · $99 in bundle',
    description:
      'Flagship: spot leakage, bad margins, and what to fix from one month of sales data.',
    valueClaim: 'Fix one bad-margin item and cover months of the bill.',
    icon: FiTrendingUp,
    href: '/products/ingredient-optimization',
    features: [
      'Leakage & margin insights',
      'Actionable menu recommendations',
      'Same dashboard as your other tools',
      'Premium POS sync available',
    ],
    primary: true,
  },
  {
    name: 'Full Web CMS',
    price: '$99/month',
    description:
      'Guest-facing website with menus, events, specials, gallery, hosting, and SEO.',
    valueClaim: 'SEO that helps people who never noticed you walk in.',
    icon: FiGlobe,
    href: '/products/cms',
    features: [
      'Menu management',
      'Event calendar',
      'Specials management',
      'Gallery',
      'SEO-optimized',
    ],
    primary: false,
  },
  {
    name: 'Private Dining Inquiries',
    price: '$49/month',
    description:
      'Lead capture and CRM for private event inquiries. You handle calls and emails.',
    valueClaim: 'Stop letting private dining leads die in email.',
    icon: FiUsers,
    href: '/products/private-dining',
    features: [
      'Lead capture form',
      'CRM functionality',
      'Contact tracking',
      'Event space management',
    ],
    primary: false,
  },
  {
    name: 'Digital Signage',
    price: '$99/month',
    description:
      'TV signage with a slide builder for specials, events, and announcements.',
    valueClaim: 'One extra special sold off the screen covers the month.',
    icon: FiMonitor,
    href: '/products/digital-signage',
    features: [
      'TV display system',
      'Custom slide builder',
      'Specials rotator',
      'Events display',
    ],
    primary: false,
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-8 md:py-10 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Products that ship today
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
              Start with Menu Insights. Add website, private dining, and signage in the same
              dashboard—or take the Complete Bundle at $199/month.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7 max-w-7xl mx-auto">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <div
                  key={product.name}
                  className={`bg-dark-800 border rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col relative w-full hover:border-primary-500/50 ${
                    product.primary
                      ? 'border-primary-500/60 md:col-span-2 lg:max-w-3xl lg:mx-auto'
                      : 'border-dark-700'
                  }`}
                >
                  {product.primary && (
                    <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wide text-primary-300 bg-primary-500/15 border border-primary-500/30 px-2.5 py-1 rounded-md">
                      Start here
                    </span>
                  )}
                  <Icon className="w-9 h-9 md:w-10 md:h-10 mb-3 text-primary-500" />
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1.5">{product.name}</h2>
                  <p className="text-lg md:text-xl font-semibold mb-2 text-primary-500">
                    {product.price}
                  </p>
                  <p className="text-gray-400 mb-2 text-sm md:text-base">{product.description}</p>
                  <p className="text-sm text-primary-300/90 mb-3 leading-snug flex-grow">
                    {product.valueClaim}
                  </p>

                  <ul className="space-y-1 md:space-y-1.5 mb-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-300 text-sm">
                        <span className="mr-2 flex-shrink-0 text-primary-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 font-semibold transition-colors text-sm md:text-base text-primary-500 hover:text-primary-400"
                  >
                    Learn more <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Not sure where to start?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-3">
              Request a menu read. We will tell you if Insights, the bundle, or a single tool is
              the right first buy.
            </p>
            <p className="text-sm text-primary-300/90 mb-5 max-w-xl mx-auto">
              Priced around what one good table brings in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Request a menu read
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
