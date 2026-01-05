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
    price: '$21/month',
    description: 'Add-on: Lead capture and CRM for private event inquiries. You handle calls and emails.',
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
    price: '$99/month',
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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-warm-50 via-warm-100 to-primary-50">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '35px 35px',
          color: '#2e2824',
        }} />
      </div>
      
      {/* Warm accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-50/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-dark-900 mb-6 leading-tight">
            Products & Solutions
          </h2>
          <p className="text-xl text-dark-700 leading-relaxed font-light">
            Start with our core CMS, then add powerful features as you need them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="flex flex-col"
              >
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-primary-600 mb-6" />
                  <h3 className="text-2xl font-display font-semibold text-dark-900 mb-3">{product.name}</h3>
                  <p className="text-primary-600 text-lg font-medium mb-4">{product.price}</p>
                  <p className="text-dark-700 mb-6 leading-relaxed">{product.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-dark-600 text-sm">
                      <span className="text-primary-600 mr-3 mt-1">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={product.href}
                  className="inline-flex items-center text-dark-900 border-b border-dark-900 pb-1 hover:opacity-70 transition-opacity text-sm mt-auto"
                >
                  Learn more
                  <span className="ml-2">→</span>
                </Link>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-dark-600 mb-4">And more features coming soon...</p>
          <Link href="/features" className="text-dark-900 border-b border-dark-900 pb-1 hover:opacity-70 transition-opacity text-sm">
            View All Features
          </Link>
        </div>
      </div>
    </section>
  )
}


