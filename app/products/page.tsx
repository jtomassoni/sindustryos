import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Products: Analytics Engine, Website & Add-ons',
  description:
    'SindustryOS: analytics engine that digests sales reports into actionable insights, customizable website (Tier 1), plus add-ons for private dining, digital signage, and social media.',
  alternates: { canonical: '/products' },
}

const products = [
  {
    name: 'Analytics engine',
    price: '$149/mo',
    badge: 'Core',
    description: 'Sales reports in. Leakage, margins, and what to fix first.',
    href: '/products/ingredient-optimization',
  },
  {
    name: 'Website',
    price: '$99/mo',
    badge: 'Tier 1',
    description: 'Menus, events, specials, gallery, hosting, and SEO.',
    href: '/products/cms',
  },
  {
    name: 'Private dining',
    price: '$49/mo',
    badge: 'Add-on',
    description: 'Inquiry page and CRM so party leads don’t die in email.',
    href: '/products/private-dining',
  },
  {
    name: 'Digital signage',
    price: '$99/mo',
    badge: 'Add-on',
    description: 'TV slides for specials, events, and announcements.',
    href: '/products/digital-signage',
  },
  {
    name: 'Social',
    price: 'Ask',
    badge: 'Add-on',
    description: 'Connect and post to your social pages from one dashboard.',
    href: '/contact',
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <section className="pt-5 pb-8 md:pt-6">
        <div className="container mx-auto px-4">
          <div className="mb-4 max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Products that ship today
            </h1>
            <p className="mt-2 text-base leading-snug text-gray-300 md:text-lg">
              Start with the analytics engine at $149. Add a website, then dining, signage, and
              social. The site, dining, and signage bundle is $199.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="flex flex-col rounded-xl border border-dark-700 bg-dark-800 px-3 py-2 hover:border-primary-500/50"
              >
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h2 className="text-base font-semibold text-white">{product.name}</h2>
                  <span className="whitespace-nowrap text-sm font-semibold text-primary-400">
                    {product.price}
                  </span>
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-300">
                  {product.badge}
                </p>
                <p className="mt-1 line-clamp-2 flex-grow text-sm leading-snug text-gray-400">
                  {product.description}
                </p>
                <span className="mt-1.5 text-sm font-medium text-primary-400">
                  {product.href === '/contact' ? 'Ask about social →' : 'Learn more →'}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Button href="/contact" variant="primary" size="md">
              Request a menu read
            </Button>
            <Button href="/pricing" variant="outline" size="md">
              Compare pricing
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
