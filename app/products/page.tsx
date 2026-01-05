import type { Metadata } from 'next'
import Link from 'next/link'
import { FiGlobe, FiUsers, FiMonitor, FiArrowRight } from 'react-icons/fi'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Products - SindustryOS Restaurant & Bar Management Solutions',
  description: 'Explore SindustryOS products: Full Web CMS ($99/month), Private Dining Inquiries ($250/year), and Digital Signage ($49-99/month). All-in-one solutions for restaurants and bars.',
  keywords: ['sindustryos products', 'restaurant management products', 'bar management solutions'],
}

const products = [
  {
    name: 'Full Web CMS',
    price: '$99/month',
    description: 'Complete website CMS with menu management, event calendar, specials, gallery, and SEO optimization. All hosting included.',
    icon: FiGlobe,
    href: '/products/cms',
    features: ['1-5 pages of content', 'Menu management', 'Event calendar', 'Specials management', 'Gallery', 'SEO-optimized'],
  },
  {
    name: 'Private Dining Inquiries',
    price: '$250/year',
    description: 'Lead capture and CRM system for private event inquiries. Perfect for restaurants and bars hosting private parties.',
    icon: FiUsers,
    href: '/products/private-dining',
    features: ['Lead capture form', 'CRM functionality', 'Contact tracking', 'Event space management'],
  },
  {
    name: 'Digital Signage',
    price: '$99/month',
    description: 'TV signage display system with custom slide builder. Show specials, events, and announcements automatically.',
    icon: FiMonitor,
    href: '/products/digital-signage',
    features: ['TV display system', 'Custom slide builder', 'Specials rotator', 'Events display'],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Start with our core CMS and add powerful features as you need them
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <div
                  key={product.name}
                  className="bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 flex flex-col"
                >
                  <Icon className="w-12 h-12 text-primary-500 mb-6" />
                  <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-primary-500 text-xl font-semibold mb-4">{product.price}</p>
                  <p className="text-gray-400 mb-6 flex-grow">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300 text-sm">
                        <span className="text-primary-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-semibold transition-colors"
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
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Product You Need?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with our Full Web CMS at $99/month. It includes everything you need to get started, 
              and you can add features as your business grows.
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


