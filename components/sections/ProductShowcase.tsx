import Link from 'next/link'
import { FiGlobe, FiUsers, FiMonitor } from 'react-icons/fi'
import Button from '@/components/ui/Button'

const products = [
  {
    name: 'Full Web CMS',
    price: '$99/month',
    description: 'Complete website with content management, menu management, event calendar, and specials.',
    icon: FiGlobe,
    href: '/products/cms',
    features: [
      '1-5 pages of content',
      'Calendar of events management',
      'Menu management',
      'Specials management',
      'Gallery functionality',
      'SEO-optimized',
    ],
  },
  {
    name: 'Private Dining Inquiries',
    price: '$250/year',
    description: 'Lead capture and CRM system for private event inquiries and event space bookings.',
    icon: FiUsers,
    href: '/products/private-dining',
    features: [
      'Lead capture form',
      'CRM functionality',
      'Event space inquiries',
      'Contact tracking',
      'Notes and follow-up',
    ],
  },
  {
    name: 'Digital Signage',
    price: '$49-99/month',
    description: 'TV signage display system with custom slide builder for specials, events, and announcements.',
    icon: FiMonitor,
    href: '/products/digital-signage',
    features: [
      'TV display system',
      'Custom slide builder',
      'Specials rotator',
      'Events display',
      '10-30ft viewing distance',
    ],
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Products & Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start with our core CMS, then add powerful features as you need them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-primary-500 text-xl font-semibold mb-4">{product.price}</p>
                  <p className="text-gray-400 mb-6">{product.description}</p>
                </div>
                
                <ul className="space-y-2 mb-8 flex-grow">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300 text-sm">
                      <span className="text-primary-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button href={product.href} variant="outline" size="md" className="w-full">
                  Learn More
                </Button>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">And more features coming soon...</p>
          <Link href="/features" className="text-primary-500 hover:text-primary-400 font-semibold">
            View All Features →
          </Link>
        </div>
      </div>
    </section>
  )
}

