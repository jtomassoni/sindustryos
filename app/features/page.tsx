import type { Metadata } from 'next'
import { FiUsers, FiMonitor, FiBarChart2, FiGlobe, FiShare2 } from 'react-icons/fi'
import FeatureHighlights from '@/components/sections/FeatureHighlights'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Features: Analytics Engine, Website & Add-ons',
  description:
    'SindustryOS: an analytics engine that digests your sales reports into actionable insights—plus a customizable website and add-ons for private dining, digital signage, and social media.',
  alternates: { canonical: '/features' },
}

const featureCategories = [
  {
    title: 'Analytics engine',
    badge: 'Core product',
    icon: FiBarChart2,
    intro:
      'The main product: upload or sync your sales reports and get clear, actionable insights—not another dashboard you ignore.',
    features: [
      {
        title: 'Sales report digestion',
        description:
          'One month of sales data in. The engine reads what’s selling, what’s lagging, and where money quietly leaks.',
      },
      {
        title: 'Actionable insights',
        description:
          'Clear next steps on margins, leakage, and menu opportunities—so you know what to fix first.',
      },
      {
        title: 'Premium POS sync',
        description:
          'Direct connections to Square, Toast, and modern POS systems so insights stay current without manual uploads.',
      },
    ],
  },
  {
    title: 'Customizable website',
    badge: 'Tier 1',
    icon: FiGlobe,
    intro:
      'Your guest-facing site—menus, specials, events, and SEO—managed in the same place as your insights.',
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
    badge: 'Add-on',
    icon: FiUsers,
    intro: 'A dedicated private dining page plus inquiry capture so party leads don’t die in email.',
    features: [
      {
        title: 'Private dining page',
        description:
          'A guest-facing page for spaces, packages, and how to book—tied to your site.',
      },
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
    badge: 'Add-on',
    icon: FiMonitor,
    intro: 'In-house TVs that show specials, events, and announcements from the same content you already manage.',
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
  {
    title: 'Social media connection',
    badge: 'Add-on',
    icon: FiShare2,
    intro: 'Connect and manage all your social pages from one app—so posts and updates don’t live in five logins.',
    features: [
      {
        title: 'One-app management',
        description:
          'Connect your social accounts and manage pages from the same dashboard as your site and insights.',
      },
      {
        title: 'Cross-channel updates',
        description:
          'Keep specials, events, and announcements consistent across the channels guests actually scroll.',
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
              Analytics first. Tools that bundle.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Digests your sales reports into actionable insights. Then add a customizable website
              and the guest-facing tools that belong next to it.
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
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Icon className="w-10 h-10 text-primary-500" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary-300 bg-primary-500/15 border border-primary-500/30 px-2.5 py-1 rounded-md">
                      {category.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-8 max-w-3xl leading-relaxed">{category.intro}</p>

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
              Start with the analytics engine
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
