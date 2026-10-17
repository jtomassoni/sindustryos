import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowRight, FiGlobe, FiMonitor, FiShare2, FiTrendingUp, FiUsers } from 'react-icons/fi'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Products: Analytics Engine, Website & Add-ons',
  description:
    'SindustryOS: analytics engine that digests sales reports into actionable insights, customizable website (Tier 1), plus add-ons for private dining, digital signage, and social media.',
  alternates: { canonical: '/products' },
}

const flagshipPoints = [
  'A month of sales, read for leakage and weak margins',
  'A short list of what to fix first, not another dashboard',
  'Lives next to the website, dining, and signage',
  'Premium plans sync Square, Toast, and modern POS',
]

const products = [
  {
    name: 'Customizable website',
    price: '$99',
    period: '/month',
    badge: 'Tier 1',
    description:
      'The guest-facing site: menus, events, specials, gallery, hosting, and SEO. Updated from the same place you read the numbers.',
    outcome: 'People who never noticed you can find the door.',
    icon: FiGlobe,
    href: '/products/cms',
    features: ['Menus and specials', 'Events calendar', 'Hosting and SEO included'],
    cta: 'See the website',
  },
  {
    name: 'Private dining',
    price: '$149',
    period: '/month',
    badge: 'Add-on',
    description:
      'A private dining page plus the inquiry and the CRM. You still make the call. The lead doesn’t die in a shared inbox.',
    outcome: 'One booking covers the month.',
    icon: FiUsers,
    href: '/products/private-dining',
    features: ['Guest-facing dining page', 'Inquiry form', 'Notes and follow-up'],
    cta: 'See private dining',
  },
  {
    name: 'Digital signage',
    price: '$199',
    period: '/month',
    badge: 'Add-on',
    description:
      'TVs that sell what you already prepped. Specials, events, and announcements, built for a room, not a phone.',
    outcome: 'One special off the screen covers the month.',
    icon: FiMonitor,
    href: '/products/digital-signage',
    features: ['Slide builder', 'Specials rotator', '10–30ft viewing'],
    cta: 'See signage',
  },
  {
    name: 'Social',
    price: '$149',
    period: '/month',
    badge: 'Add-on',
    description:
      'Connect the social pages and post from the same dashboard as the site. Specials don’t get rewritten five times.',
    outcome: 'One login for the channels guests actually scroll.',
    icon: FiShare2,
    href: '/contact',
    features: ['Multiple pages, one app', 'Posts from the dashboard', 'Tied to site content'],
    cta: 'Ask about social',
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <section className="border-b border-dark-700/80 pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-5 flex flex-col gap-4 lg:mb-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-400">
                What you can buy
              </p>
              <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
                Analytics engine first. The rest of the stack lives beside it.
              </h1>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
              The analytics engine is the product. The website, private dining, signage, and social
              sit in the same dashboard so you’re not paying four vendors to stay current.
            </p>
          </div>

          <article className="overflow-hidden rounded-2xl border border-primary-500/40 bg-gradient-to-br from-primary-600/20 via-dark-800 to-dark-900">
            <div className="grid gap-6 p-5 md:p-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/15 text-primary-300">
                    <FiTrendingUp className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-300">
                    Core product
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">Analytics engine</h2>
                <p className="mt-2 text-base leading-relaxed text-gray-300">
                  Send one month of sales. Get the leakage, the bad margins, and the first thing
                  worth fixing. Around the cost of one 4-top.
                </p>
                <p className="mt-3 text-sm font-medium text-primary-200">
                  Fix one bad-margin item and the bill is covered for months.
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Button href="/contact" variant="primary" size="md">
                    Request a menu read
                  </Button>
                  <Button href="/products/ingredient-optimization" variant="outline" size="md">
                    See the engine
                  </Button>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      $249
                      <span className="text-lg font-medium text-gray-400">/month</span>
                    </p>
                    <p className="mt-1 text-sm text-primary-300">$199/month inside the bundle</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {flagshipPoints.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-snug text-gray-200">
                      <span className="mt-0.5 text-primary-400" aria-hidden>
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <article
                  key={product.name}
                  className="flex flex-col rounded-2xl border border-dark-700 bg-dark-800 p-5"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-900 text-primary-400">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-300">
                          {product.badge}
                        </p>
                        <h2 className="text-xl font-semibold text-white">{product.name}</h2>
                      </div>
                    </div>
                    <p className="text-right text-xl font-semibold text-white">
                      {product.price}
                      {product.period ? (
                        <span className="text-sm font-medium text-gray-400">{product.period}</span>
                      ) : null}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">{product.description}</p>
                  <p className="mt-2 text-sm font-medium text-primary-200">{product.outcome}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-dark-700 pt-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-primary-400" aria-hidden>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-primary-300"
                  >
                    {product.cta}
                    <FiArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-dark-800 py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 rounded-2xl border border-dark-600 bg-dark-900 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-300">
                Complete bundle · $349/month
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Website, private dining, and signage on one bill.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                $98 less than buying those three apart ($447). Add the analytics engine for $199
                instead of $249. Social is $149.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
              <Button href="/pricing" variant="primary" size="md">
                See the bundle
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Talk through a first buy
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
