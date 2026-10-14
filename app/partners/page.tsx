import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Partners — Find Fed-Up Restaurants We Can Actually Help',
  description:
    'SindustryOS partners with people who know local restaurants. We build with owners — less copy-paste and fewer clicks, not fewer jobs. Denver, Baltimore, Orlando.',
  alternates: { canonical: '/partners' },
}

const markets = [
  { city: 'Denver', href: '/locations/denver', note: 'Live proof in market' },
  { city: 'Baltimore', href: '/locations/baltimore', note: 'Independents, personality-first' },
  { city: 'Orlando', href: '/locations/orlando', note: 'Tourism + neighborhood venues' },
]

const whoFits = [
  'Owners who are tired of asking a web person every time the specials change',
  'Bars where the site, the TVs, and the floor never match',
  'Places that get private-party asks and lose them in voicemail',
  'Anyone who has paid for “restaurant tech” that still makes them copy and paste',
]

const weDeliver = [
  {
    title: 'Website they can update',
    detail: 'Menus, specials, events, hours — without a ticket queue.',
  },
  {
    title: 'Private dining catch',
    detail: 'High-intent party asks land somewhere someone can answer.',
  },
  {
    title: 'Wall TV for specials',
    detail: 'Same content as the site, on a screen guests can read. Hardware hang is the install — software is ready.',
  },
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-400 text-sm font-medium tracking-wide uppercase mb-3">
              For partners
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-white mb-5 leading-tight text-balance">
              Find owners who are fed up with restaurant tech. We deliver.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              This is not a sales playbook product. It is how we work with a few people who know
              their cities — and how we talk to restaurants without the BS.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dark-900">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            What we believe
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We partner with restaurants to build solutions. We are not here to cut jobs. We are here
            to cut the stupid work: copy-paste between tools, clicks that should not exist, and
            “wait for the vendor” every time Tuesday’s special changes.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="border-l-2 border-primary-500 pl-4">Partner with the owner — do not replace their people.</li>
            <li className="border-l-2 border-primary-500 pl-4">Reduce copy-paste and busywork. Keep the hospitality jobs.</li>
            <li className="border-l-2 border-primary-500 pl-4">Ship what we can deliver. Do not sell vapor.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dark-800">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Who to look for
          </h2>
          <p className="text-gray-400 mb-8">
            The signal is frustration with the stack they already paid for — not “need more AI.”
          </p>
          <ul className="space-y-4">
            {whoFits.map((item) => (
              <li key={item} className="text-lg text-gray-300 leading-relaxed flex gap-3">
                <span className="text-primary-500 mt-1 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dark-900">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            What we can deliver today
          </h2>
          <p className="text-gray-400 mb-10">
            Learn these three. That is the honest product. Everything else is conversation, not a
            promise.
          </p>
          <div className="space-y-8">
            {weDeliver.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-display font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-gray-500 leading-relaxed">
            Live proof:{' '}
            <Link
              href="/customers/monaghans-bar-and-grill"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Monaghan’s in Denver
            </Link>
            . Specials and events are the day-to-day. Private dining leads come in. The TV product
            works — hanging the screen is the remaining floor step.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dark-800">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4">
            Talk track (keep it short)
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              <span className="text-white font-medium">Opening:</span> “You already change specials
              and events every week. Your site and screens should keep up without another vendor
              ticket.”
            </p>
            <p>
              <span className="text-white font-medium">Proof:</span> “We run this for a Denver bar
              today. Owners update specials. Private dining asks land in one place. The wall TV
              pulls the same content.”
            </p>
            <p>
              <span className="text-white font-medium">Close:</span> “We partner with you to build
              what you need next — less busywork, not fewer people. If you are fed up with the
              stack, we can show you in twenty minutes.”
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dark-900">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-8">
            Markets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {markets.map((m) => (
              <Link
                key={m.city}
                href={m.href}
                className="border-l-2 border-primary-500 pl-4 hover:border-primary-400 transition-colors"
              >
                <p className="text-white font-display font-semibold text-lg">{m.city}</p>
                <p className="text-sm text-gray-400 mt-1">{m.note}</p>
              </Link>
            ))}
          </div>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Your job: know the neighborhood, find the fed-up owners, get a conversation. Our job:
            deliver, and keep learning the floor with them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Talk to us
            </Button>
            <Button href="/products" variant="outline" size="lg">
              See the products
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
