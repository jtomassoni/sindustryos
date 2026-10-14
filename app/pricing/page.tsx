import type { Metadata } from 'next'
import { FiCheck, FiX } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import FAQ from '@/components/products/FAQ'
import JsonLd from '@/components/seo/JsonLd'
import SubValueClaim from '@/components/sections/SubValueClaim'
import { getFaqSchema } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Restaurant Software Pricing: Menu Insights from $99/month',
  description:
    'SindustryOS pricing: Menu Insights $149/month ($99 in the bundle), Full Web CMS $99, Private Dining $49, Digital Signage $99, Complete Bundle $199. No long-term contracts.',
  path: '/pricing',
})

const flagship = {
  name: 'Menu Insights',
  price: '$149',
  period: '/month',
  bundlePrice: '$99',
  description:
    'Our flagship: spot leakage, bad margins, and hidden opportunities from one month of sales data.',
  features: [
    'Actionable menu and margin insights',
    'Leakage and opportunity spotting',
    'Works from one month of sales data',
    'Lives in the same dashboard as your other tools',
    'Premium plans: direct Square, Toast & modern POS sync',
  ],
  href: '/products/ingredient-optimization',
}

const products = [
  {
    name: 'Full Web CMS',
    price: '$99',
    period: '/month',
    description: 'Complete website CMS with all core features',
    valueClaim: 'For the cost of one 4-top, SEO that helps strangers find the door.',
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
  },
  {
    name: 'Private Dining Inquiries',
    price: '$49',
    period: '/month',
    description: 'Add-on: Lead capture and CRM for private events (you handle communications)',
    valueClaim: 'For the cost of one 4-top, stop letting private dining leads die in email.',
    features: [
      'Lead capture form',
      'CRM functionality',
      'Event space inquiry management',
      'Contact tracking',
      'Notes and follow-up system',
      'Integrated with your website',
    ],
    href: '/products/private-dining',
  },
  {
    name: 'Digital Signage',
    price: '$99',
    period: '/month',
    description: 'TV signage display system',
    valueClaim: 'For the cost of one 4-top, one special sold off the screen covers the month.',
    features: [
      'TV display system (10-30ft viewing)',
      'Custom slide builder',
      'Specials rotator',
      'Events display',
      'Announcements integration',
      '24/7 operation',
    ],
    href: '/products/digital-signage',
  },
]

const bundle = {
  name: 'Complete Bundle',
  price: '$199',
  period: '/month',
  compareAt: '$247',
  savings: 'Save $48/month',
  description:
    'Full Web CMS, Private Dining Inquiries, and Digital Signage on one bill. Add Menu Insights for $99/month instead of $149.',
  features: [
    'Everything in Full Web CMS',
    'Everything in Private Dining Inquiries',
    'Everything in Digital Signage',
    'Menu Insights for $99/mo when added (vs $149 alone)',
    'One platform, one bill',
    'Dedicated support',
  ],
  href: '/contact',
}

const faqItems = [
  {
    question: 'Do I need to sign a long-term contract?',
    answer: 'No, there are no long-term contracts. You can cancel anytime if the service doesn\'t meet your needs.',
  },
  {
    question: 'How much is Menu Insights?',
    answer:
      'Menu Insights is $149/month on its own, or $99/month when included in the Complete Bundle.',
  },
  {
    question: 'Can I start with just the CMS and add features later?',
    answer:
      'Absolutely! Start with the Full Web CMS at $99/month and add Private Dining, Digital Signage, or Menu Insights when you need them, or grab the Complete Bundle at $199/month and add Menu Insights for $99.',
  },
  {
    question: 'What\'s included in the Complete Bundle?',
    answer:
      'The Complete Bundle includes Full Web CMS, Private Dining Inquiries, and Digital Signage for $199/month ($48 less than buying all three separately at $247). Menu Insights is $99/month when added to the bundle (vs $149 alone).',
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
    question: 'How does this pay for itself?',
    answer:
      'Around the cost of one 4-top. Private Dining catches high-intent party requests that more than cover $49. For the CMS ($99), SEO helps people who never would have noticed you walk in. For Menu Insights, one bad-margin fix can cover months. The bundle is less than one mid-week private party.',
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
  const faqSchema = getFaqSchema(faqItems)

  return (
    <>
      <JsonLd id="faq-schema-pricing" data={faqSchema} />
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple restaurant software pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Flagship Menu Insights, then add the dashboard tools you want. No hidden fees, no
              long-term contracts.
            </p>
            <p className="text-base text-primary-300/90 italic max-w-2xl mx-auto leading-relaxed">
              Priced around what one good table brings in.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Flagship */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary-500 bg-gradient-to-br from-primary-600/25 via-dark-800 to-dark-900 shadow-[0_0_40px_-12px_rgba(13,148,136,0.45)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-primary-500 text-white px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                  Flagship
                </span>
              </div>

              <div className="p-8 md:p-10 pt-10 md:pt-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                  <div className="lg:w-2/5 shrink-0">
                    <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
                      Menu intelligence
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {flagship.name}
                    </h3>
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <span className="text-5xl font-bold text-white">{flagship.price}</span>
                      <span className="text-gray-400 text-lg">{flagship.period}</span>
                    </div>
                    <p className="inline-block mb-4 text-sm font-semibold text-primary-300 bg-primary-500/15 border border-primary-500/30 px-3 py-1 rounded-md">
                      {flagship.bundlePrice}/month in the Complete Bundle
                    </p>
                    <p className="text-gray-300 mb-3 leading-relaxed">{flagship.description}</p>
                    <p className="text-sm text-primary-300/90 italic mb-6 leading-snug">
                      For the cost of one 4-top, fix one bad-margin item and cover months of the
                      bill.
                    </p>
                    <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                      Get a menu read
                    </Button>
                  </div>

                  <div className="lg:w-3/5 lg:border-l lg:border-primary-500/20 lg:pl-12">
                    <p className="text-white font-semibold mb-4">What you get:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {flagship.features.map((feature) => (
                        <li key={feature} className="flex items-start text-gray-200 text-sm">
                          <FiCheck className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Bundle */}
            <div className="rounded-2xl border border-dark-600 bg-dark-800 p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                <div className="lg:w-2/5 shrink-0">
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
                    Best value for the stack
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{bundle.name}</h3>
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <span className="text-5xl font-bold text-white">{bundle.price}</span>
                    <span className="text-gray-400 text-lg">{bundle.period}</span>
                    <span className="text-gray-500 line-through text-lg">{bundle.compareAt}</span>
                  </div>
                  <p className="inline-block mb-4 text-sm font-semibold text-primary-300 bg-primary-500/15 border border-primary-500/30 px-3 py-1 rounded-md">
                    {bundle.savings}
                  </p>
                  <p className="text-gray-300 mb-3 leading-relaxed">{bundle.description}</p>
                  <p className="text-sm text-primary-300/90 italic mb-6 leading-snug">
                    For less than one mid-week private party, you get the whole stack: site, SEO,
                    inquiries, and signage.
                  </p>
                  <Button href={bundle.href} variant="outline" size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </div>

                <div className="lg:w-3/5 lg:border-l lg:border-dark-600 lg:pl-12">
                  <p className="text-white font-semibold mb-4">Everything included:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bundle.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-200 text-sm">
                        <FiCheck className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Individual products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="bg-dark-800 border-2 border-dark-700 rounded-2xl p-8 flex flex-col"
                >
                  <div className="mb-6 flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400">{product.period}</span>
                    </div>
                    <p className="text-gray-400 mb-3">{product.description}</p>
                    <p className="text-sm text-primary-300/90 italic mb-6 leading-snug">
                      {product.valueClaim}
                    </p>

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
                    <Button href={product.href} variant="outline" size="md" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-800/80 border-y border-dark-700/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <SubValueClaim
              claim="Private dining catch, SEO walk-ins, or one margin fix."
              detail="Around the cost of one 4-top, the math should feel obvious."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-medium block mb-1">$49 private dining</span>
                Catch high-intent requests before they die in email.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-medium block mb-1">$99 CMS + SEO</span>
                SEO that helps strangers find the door.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-medium block mb-1">$149 Menu Insights</span>
                One bad-margin fix can cover months.
              </p>
            </div>
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
              Menu Insights from $149 ($99 in the bundle), or the Complete Bundle at $199. No
              long-term contracts.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}


