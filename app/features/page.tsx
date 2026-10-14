import type { Metadata } from 'next'
import { FiUsers, FiMonitor, FiBarChart2, FiGlobe } from 'react-icons/fi'
import FeatureHighlights from '@/components/sections/FeatureHighlights'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Features: Menu Insights, CMS, Signage & Private Dining',
  description:
    'What ships today in SindustryOS: Menu Insights, restaurant website CMS, private dining CRM, and digital signage—for independent restaurants and bars.',
  alternates: { canonical: '/features' },
}

const featureCategories = [
  {
    title: 'Menu Insights',
    icon: FiBarChart2,
    features: [
      {
        title: 'Leakage & margin spotting',
        description:
          'Surface items and patterns that look busy but quietly drain food cost or margin.',
      },
      {
        title: 'Actionable next steps',
        description:
          'One month of sales data in; clear calls on what to fix first—not a report you ignore.',
      },
      {
        title: 'Premium POS sync',
        description:
          'Direct connections to Square, Toast, and modern POS systems so insights stay current.',
      },
    ],
  },
  {
    title: 'Website & content',
    icon: FiGlobe,
    features: [
      {
        title: 'Menus & specials',
        description:
          'Organize sections, items, prices, and specials so the site matches the floor.',
      },
      {
        title: 'Calendar & events',
        description: 'One-time and recurring events with tags and venue organization.',
      },
      {
        title: 'Announcements & gallery',
        description: 'Guest-facing updates and image galleries without another vendor.',
      },
      {
        title: 'SEO-ready pages',
        description: 'Hosting included. Built so strangers can find the menu and the door.',
      },
    ],
  },
  {
    title: 'Private dining',
    icon: FiUsers,
    features: [
      {
        title: 'Inquiry capture',
        description: 'Headcount, date, and occasion before the lead dies in voicemail.',
      },
      {
        title: 'CRM & follow-up',
        description: 'Contact tracking, notes, and handoff so the next shift can continue.',
      },
    ],
  },
  {
    title: 'Digital signage',
    icon: FiMonitor,
    features: [
      {
        title: 'TV display system',
        description: 'Built for 10–30ft viewing: specials, events, and announcements.',
      },
      {
        title: 'Slide builder',
        description: 'Custom slides driven from the same content you publish elsewhere.',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What ships today
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Menu Insights plus the guest-facing tools that keep menus, leads, and screens honest.
              No vaporware on this page.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request a menu read
            </Button>
          </div>
        </div>
      </section>

      <FeatureHighlights />

      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {featureCategories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.title}>
                  <div className="flex items-center gap-4 mb-8">
                    <Icon className="w-10 h-10 text-primary-500" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start with Menu Insights
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              $149/month alone, or $99 when added to the Complete Bundle at $199.
            </p>
            <p className="text-sm text-primary-300/90 mb-8 max-w-xl mx-auto">
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
