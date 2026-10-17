import Link from 'next/link'

const offers = [
  {
    name: 'Analytics engine',
    price: '$249/mo',
    note: '$199 in the bundle',
    href: '/products/ingredient-optimization',
  },
  {
    name: 'Website',
    price: '$99/mo',
    note: 'Menus, events, SEO',
    href: '/products/cms',
  },
  {
    name: 'Private dining',
    price: '$149/mo',
    note: 'Inquiries and CRM',
    href: '/products/private-dining',
  },
  {
    name: 'Digital signage',
    price: '$199/mo',
    note: 'Specials on the TVs',
    href: '/products/digital-signage',
  },
  {
    name: 'Complete bundle',
    price: '$349/mo',
    note: 'Site, dining, signage',
    href: '/pricing',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundPosition: '65% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/85 to-dark-900/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/70 to-dark-900/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-6 pt-5 md:px-8 md:pb-8 md:pt-7">
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
          <div>
            <h1 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white text-balance md:text-4xl lg:text-[2.6rem]">
              Send one month of sales. See where your menu is leaking money.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-snug text-gray-300 md:text-lg">
              The analytics engine reads your sales reports and tells you what to fix first. Around
              the cost of one 4-top a month.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="/contact"
                className="inline-flex items-center border-b-2 border-primary-500 pb-0.5 text-base font-medium text-white hover:border-primary-400"
              >
                Request a menu read
                <span className="ml-2" aria-hidden>
                  →
                </span>
              </a>
              <a href="/pricing" className="text-base text-gray-400 hover:text-white">
                See pricing
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {offers.map((offer) => (
              <li key={offer.name}>
                <Link
                  href={offer.href}
                  className="flex items-baseline justify-between gap-3 rounded-lg border border-dark-700/80 bg-dark-900/70 px-3 py-2 hover:border-primary-500/50"
                >
                  <span>
                    <span className="block text-sm font-semibold text-white">{offer.name}</span>
                    <span className="block text-xs text-gray-400">{offer.note}</span>
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold text-primary-300">
                    {offer.price}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
