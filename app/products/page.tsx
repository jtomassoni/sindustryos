import type { Metadata } from 'next'
import Link from 'next/link'
import { FiGlobe, FiUsers, FiMonitor, FiArrowRight, FiShoppingCart, FiPackage, FiClock, FiTrendingUp } from 'react-icons/fi'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Products: Menu Insights, CMS, Signage & Private Dining',
  description:
    'SindustryOS products: Menu Insights ($149, or $99 in the bundle), Full Web CMS ($99), Private Dining ($49), Digital Signage ($99), plus upcoming ops tools.',
  alternates: { canonical: '/products' },
}

const products = [
  {
    name: 'Menu Insights',
    price: '$149/month · $99 in bundle',
    description:
      'Flagship: spot leakage, bad margins, and hidden opportunities from one month of sales data.',
    valueClaim: 'For the cost of one 4-top, fix one bad-margin item and cover months of the bill.',
    icon: FiTrendingUp,
    href: '/products/ingredient-optimization',
    features: [
      'Leakage & margin insights',
      'Actionable menu recommendations',
      'Same dashboard as your other tools',
      'Premium POS sync available',
    ],
    comingSoon: false,
  },
  {
    name: 'Full Web CMS',
    price: '$99/month',
    description: 'Complete website CMS with menu management, event calendar, specials, gallery, and SEO optimization. All hosting included.',
    valueClaim: 'For the cost of one 4-top, we rip SEO so strangers who never noticed you walk in.',
    icon: FiGlobe,
    href: '/products/cms',
    features: ['1-5 pages of content', 'Menu management', 'Event calendar', 'Specials management', 'Gallery', 'SEO-optimized'],
    comingSoon: false,
  },
  {
    name: 'Private Dining Inquiries',
    price: '$49/month',
    description: 'Add-on: Lead capture and CRM for private event inquiries. You handle calls and emails.',
    valueClaim: 'For the cost of one 4-top, stop letting private dining leads die in email.',
    icon: FiUsers,
    href: '/products/private-dining',
    features: ['Lead capture form', 'CRM functionality', 'Contact tracking', 'Event space management'],
    comingSoon: false,
  },
  {
    name: 'Digital Signage',
    price: '$99/month',
    description: 'TV signage display system with custom slide builder. Show specials, events, and announcements automatically.',
    valueClaim: 'For the cost of one 4-top, one extra special sold off the screen covers the month.',
    icon: FiMonitor,
    href: '/products/digital-signage',
    features: ['TV display system', 'Custom slide builder', 'Specials rotator', 'Events display'],
    comingSoon: false,
  },
  {
    name: 'Online Ordering',
    price: 'Coming Soon',
    description: 'Accept online orders directly through your website. Reduce third-party fees and keep more revenue.',
    icon: FiShoppingCart,
    href: '/products/online-ordering',
    features: ['Direct online ordering', 'Payment processing', 'Order management', 'Customer notifications'],
    comingSoon: true,
  },
  {
    name: 'Back of House Management',
    price: 'Coming Soon',
    description: 'Streamline kitchen operations with inventory tracking, recipe management, and production planning.',
    icon: FiPackage,
    href: '/products/back-of-house',
    features: ['Inventory tracking', 'Recipe management', 'Production planning', 'Waste reduction'],
    comingSoon: true,
  },
  {
    name: 'Staff Scheduling',
    price: 'Coming Soon',
    description: 'Simplify staff scheduling with automated shift management, availability tracking, and communication tools.',
    icon: FiClock,
    href: '/products/staff-scheduling',
    features: ['Automated scheduling', 'Availability tracking', 'Shift swaps', 'Time tracking'],
    comingSoon: true,
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 md:py-10 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
              Start with Menu Insights, then add website, signage, and inquiry tools in the same
              dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Available Products */}
      <section className="py-8 md:py-10 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Available Now</h2>
            <p className="text-gray-400 text-base md:text-lg">Products you can start using today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 max-w-7xl mx-auto">
            {products
              .filter(product => !product.comingSoon)
              .map((product, index, availableProducts) => {
                const Icon = product.icon
                const totalItems = availableProducts.length
                const itemsInLastRow = totalItems % 3
                const isLastItemAlone = itemsInLastRow === 1 && index === totalItems - 1
                
                return (
                  <div
                    key={product.name}
                    className={`bg-dark-800 border border-dark-700 rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col relative w-full hover:border-primary-500/50 ${
                      isLastItemAlone ? 'lg:col-start-2 lg:max-w-md lg:mx-auto' : ''
                    }`}
                  >
                    <Icon className="w-9 h-9 md:w-10 md:h-10 mb-3 text-primary-500" />
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1.5">{product.name}</h2>
                    <p className="text-lg md:text-xl font-semibold mb-2 text-primary-500">
                      {product.price}
                    </p>
                    <p className="text-gray-400 mb-2 text-sm md:text-base">{product.description}</p>
                    {'valueClaim' in product && product.valueClaim ? (
                      <p className="text-sm text-primary-300/90 italic mb-3 leading-snug flex-grow">
                        {product.valueClaim}
                      </p>
                    ) : (
                      <div className="flex-grow" />
                    )}
                    
                    <ul className="space-y-1 md:space-y-1.5 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <span className="mr-2 flex-shrink-0 text-primary-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 font-semibold transition-colors text-sm md:text-base text-primary-500 hover:text-primary-400"
                    >
                      Learn More <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400 text-base md:text-lg">New features we're working on</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 max-w-7xl mx-auto">
            {products
              .filter(product => product.comingSoon)
              .map((product, index, comingSoonProducts) => {
                const Icon = product.icon
                const totalItems = comingSoonProducts.length
                const itemsInLastRow = totalItems % 3
                const isLastItemAlone = itemsInLastRow === 1 && index === totalItems - 1
                
                return (
                  <div
                    key={product.name}
                    className={`bg-dark-900 border border-dark-600 rounded-2xl p-5 md:p-6 transition-all duration-300 flex flex-col relative w-full opacity-90 ${
                      isLastItemAlone ? 'lg:col-start-2 lg:max-w-md lg:mx-auto' : ''
                    }`}
                  >
                    <Icon className="w-9 h-9 md:w-10 md:h-10 mb-3 text-gray-500" />
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1.5">{product.name}</h2>
                    <p className="text-lg md:text-xl font-semibold mb-2 text-gray-500">
                      {product.price}
                    </p>
                    <p className="text-gray-500 mb-3 flex-grow text-sm md:text-base">{product.description}</p>
                    
                    <ul className="space-y-1 md:space-y-1.5 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-500 text-sm">
                          <span className="mr-2 flex-shrink-0 text-gray-600">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 font-semibold transition-colors text-sm md:text-base text-gray-500 cursor-default"
                    >
                      Learn More <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Not Sure Which Product You Need?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-3">
              Start with Menu Insights at $149/month ($99 in the bundle), or pick the dashboard tools
              you need. Add more as you grow.
            </p>
            <p className="text-sm text-primary-300/90 italic mb-5 max-w-xl mx-auto">
              For the cost of one 4-top, optimize your shit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get Started
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


