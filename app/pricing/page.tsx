import type { Metadata } from 'next'
import Link from 'next/link'
import { FiCheck, FiX } from 'react-icons/fi'
import PricingDisplay from '@/components/products/PricingDisplay'
import Button from '@/components/ui/Button'
import FAQ from '@/components/products/FAQ'

export const metadata: Metadata = {
  title: 'Pricing - SindustryOS',
  description: 'Simple, transparent pricing for SindustryOS. Full Web CMS starting at $99/month. Add-ons available for Private Dining and Digital Signage.',
  keywords: ['sindustryos pricing', 'restaurant software pricing', 'bar management pricing'],
}

const products = [
  {
    name: 'Full Web CMS',
    price: '$99',
    period: '/month',
    description: 'Complete website CMS with all core features',
    features: [
      '1-5 pages of content',
      'Calendar of events management',
      'Menu management',
      'Specials management',
      'Gallery functionality',
      'SEO-optimized website',
      'All hosting included',
      'Unlimited pages, events, menu items',
      'Dedicated support',
    ],
    href: '/products/cms',
    popular: true,
  },
  {
    name: 'Private Dining Inquiries',
    price: '$250',
    period: '/year',
    description: 'Lead capture and CRM for private events',
    features: [
      'Lead capture form',
      'CRM functionality',
      'Event space inquiry management',
      'Contact tracking',
      'Notes and follow-up system',
      'Integrated with your website',
    ],
    href: '/products/private-dining',
    popular: false,
  },
  {
    name: 'Digital Signage',
    price: '$49-99',
    period: '/month',
    description: 'TV signage display system',
    features: [
      'TV display system (10-30ft viewing)',
      'Custom slide builder',
      'Specials rotator',
      'Events display',
      'Announcements integration',
      '24/7 operation',
    ],
    href: '/products/digital-signage',
    popular: false,
  },
]

const faqItems = [
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'No, there are no long-term contracts. You can cancel anytime if the service doesn\'t meet your needs.',
  },
  {
    question: 'Can I start with just the CMS and add features later?',
    answer: 'Absolutely! Start with the Full Web CMS at $99/month and add Private Dining or Digital Signage when you need them.',
  },
  {
    question: 'What happens if I need to cancel?',
    answer: 'You can cancel anytime. There are no cancellation fees or penalties.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees. You only pay the monthly or annual subscription price.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards. Annual plans are paid upfront.',
  },
  {
    question: 'Do you offer discounts for annual plans?',
    answer: 'Contact us to discuss annual pricing options. We\'re happy to work with you on a plan that fits your budget.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Start with our core CMS and add features as you need them. 
              No hidden fees, no long-term contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.name}
                className={`bg-dark-800 border-2 rounded-2xl p-8 flex flex-col ${
                  product.popular
                    ? 'border-primary-500 relative'
                    : 'border-dark-700'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400">{product.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{product.description}</p>
                  
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300 text-sm">
                        <FiCheck className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button
                    href={product.href}
                    variant={product.popular ? 'primary' : 'outline'}
                    size="md"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What's Included
            </h2>
            
            <div className="bg-dark-900 border border-dark-700 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-700">
                      <th className="text-left p-4 text-white font-semibold">Feature</th>
                      <th className="text-center p-4 text-white font-semibold">Full Web CMS</th>
                      <th className="text-center p-4 text-white font-semibold">Private Dining</th>
                      <th className="text-center p-4 text-white font-semibold">Digital Signage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-dark-700">
                      <td className="p-4 text-gray-300">Website CMS</td>
                      <td className="p-4 text-center">
                        <FiCheck className="w-5 h-5 text-primary-500 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="p-4 text-gray-300">Menu Management</td>
                      <td className="p-4 text-center">
                        <FiCheck className="w-5 h-5 text-primary-500 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="p-4 text-gray-300">Event Calendar</td>
                      <td className="p-4 text-center">
                        <FiCheck className="w-5 h-5 text-primary-500 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiCheck className="w-5 h-5 text-primary-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="p-4 text-gray-300">Private Dining CRM</td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiCheck className="w-5 h-5 text-primary-500 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-300">TV Display System</td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiX className="w-5 h-5 text-gray-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <FiCheck className="w-5 h-5 text-primary-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Pricing Questions
              </h2>
            </div>
            
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with our Full Web CMS at $99/month. No long-term contracts, cancel anytime.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

