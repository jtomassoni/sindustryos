import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiUsers, FiMail, FiFileText, FiCalendar, FiMessageSquare, FiMapPin } from 'react-icons/fi'
import FeatureList from '@/components/products/FeatureList'
import PricingDisplay from '@/components/products/PricingDisplay'
import FAQ from '@/components/products/FAQ'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import SubValueClaim from '@/components/sections/SubValueClaim'
import JsonLd from '@/components/seo/JsonLd'
import { getFaqSchema, getProductSchema } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Private Dining Inquiry CRM for Restaurants: $49/month',
  description:
    'Capture private dining and event space inquiries for neighborhood restaurants and bars. Built for venues near weddings, schools, and local gatherings. $49/month.',
  path: '/products/private-dining',
})

const features = [
  {
    title: 'Lead Capture Form',
    description:
      'A guest-facing inquiry form that catches headcount, date, and occasion before the lead vanishes into a voicemail.',
    icon: FiMail,
  },
  {
    title: 'CRM Functionality',
    description:
      'Track every private dining and event-space inquiry in one dashboard, not a buried inbox thread.',
    icon: FiUsers,
  },
  {
    title: 'Event Space Inquiry Management',
    description:
      'Organize wedding overflow, school events, memorial gatherings, and private parties in one pipeline.',
    icon: FiCalendar,
  },
  {
    title: 'Contact Tracking',
    description: 'Keep every follow-up attached to the right inquiry so nothing slips during a busy week.',
    icon: FiFileText,
  },
  {
    title: 'Notes and Follow-Up System',
    description: 'Add notes, set reminders, and move inquiries toward bookings without a separate CRM login.',
    icon: FiMessageSquare,
  },
  {
    title: 'Built for Neighborhood Demand',
    description:
      'When you sit near a wedding venue, a high school, or a cemetery, the leads are already there. The site has to catch them.',
    icon: FiMapPin,
  },
]

const faqItems = [
  {
    question: 'How does the pricing work?',
    answer:
      'Private Dining Inquiries is $49 per month. For the cost of one 4-top, you’re catching high-intent party requests that would otherwise die in voicemail. One solid booking covers the sub; the rest is upside.',
  },
  {
    question: 'Who is this actually for?',
    answer:
      'Neighborhood restaurants and bars with a private room or buyout potential, especially places sitting next to built-in demand like wedding venues, schools, and gathering spots. Catch local, high-intent inquiries instead of hoping they call back.',
  },
  {
    question: 'Can I customize the inquiry form?',
    answer:
      'Yes. Capture the details you need for your space: headcount, date, occasion, and anything else that helps you quote fast.',
  },
  {
    question: 'How do I access the CRM?',
    answer:
      'It lives in your SindustryOS admin dashboard with the rest of your site tools. Same login, no extra stack.',
  },
  {
    question: 'What if I don’t get many inquiries?',
    answer:
      'This is a niche, high-intent form. A few good requests a month is the job. If your location has nearby demand, the form’s job is to catch it cleanly before those leads vanish.',
  },
  {
    question: 'Can I use this for other types of events?',
    answer:
      'Yes. Private dining, patio buyouts, rehearsal dinners, school celebrations, memorial gatherings. Anything your space can host.',
  },
]

export default function PrivateDiningPage() {
  const productSchema = getProductSchema({
    name: 'SindustryOS Private Dining Inquiries',
    description:
      'Lead capture and CRM for private dining and event space inquiries at restaurants and bars.',
    price: '49',
    url: 'https://www.sindustryos.com/products/private-dining',
  })
  const faqSchema = getFaqSchema(faqItems)

  return (
    <>
      <JsonLd id="product-schema-private-dining" data={productSchema} />
      <JsonLd id="faq-schema-private-dining" data={faqSchema} />
      <main className="min-h-screen">
        <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: 'Products', href: '/products' },
                { label: 'Private Dining Inquiries' },
              ]}
            />
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Catch the private dining leads your neighborhood already sends
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Inquiry form + CRM for restaurants and bars with a room to fill, especially when
                weddings, schools, and local gatherings are already around the corner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Get Started
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-dark-900 border-b border-dark-700/60">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SubValueClaim
                claim="Catch the private dining asks before they vanish."
                detail="A few high-intent requests a month for parties of 20-100 is the job. For $49/month, one solid booking covers the sub."
              />
              <p className="mt-4 text-sm text-gray-500">
                <Link
                  href="/customers/monaghans-bar-and-grill"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Read a customer story →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Foolproof lead territory if the site can take the inquiry
              </h2>
              <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
                Sit near a wedding venue, a high school, or a cemetery and you’ve got built-in
                demand for rehearsal dinners, school events, and post-service gatherings. The
                website’s job is catching it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-2 border-primary-500 pl-5">
                  <h3 className="text-lg font-semibold text-white mb-2">Wedding overflow</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nearby venues send rehearsal dinners, after-parties, and weekend buyouts looking
                    for a room that can host 20-100.
                  </p>
                </div>
                <div className="border-l-2 border-primary-500 pl-5">
                  <h3 className="text-lg font-semibold text-white mb-2">School & team events</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    High schools and sports calendars create recurring celebrations. Parents and
                    coaches need a place that answers fast.
                  </p>
                </div>
                <div className="border-l-2 border-primary-500 pl-5">
                  <h3 className="text-lg font-semibold text-white mb-2">Gatherings & memorials</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Local cemeteries and funeral homes drive quiet, high-intent group dining. Those
                    leads should never die in a missed call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Capture, track, follow up
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Everything you need to turn neighborhood demand into a clean inquiry pipeline.
              </p>
            </div>

            <FeatureList features={features} columns={2} />
          </div>
        </section>

        <section className="py-20 bg-dark-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Built for</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Neighborhood bars with a room
                  </h3>
                  <p className="text-gray-400">
                    A busy floor plus private dining demand from what’s already nearby, not from
                    national ad spend.
                  </p>
                </div>

                <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Wedding & venue overflow</h3>
                  <p className="text-gray-400">
                    Rehearsal dinners and after-parties when the formal venue is booked or too far
                    from the hotel block.
                  </p>
                </div>

                <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">School & team celebrations</h3>
                  <p className="text-gray-400">
                    Banquets, send-offs, and parent groups that need a date, a headcount, and a yes
                    without a maze of emails.
                  </p>
                </div>

                <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Memorials & private gatherings
                  </h3>
                  <p className="text-gray-400">
                    Quiet, high-intent groups that deserve a form that works the first time, not a
                    phone tree.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Simple Monthly Pricing
                </h2>
                <p className="text-xl text-gray-400 mb-6">
                  $49 per month. For the cost of one 4-top, stop letting neighborhood leads die in
                  email.
                </p>
                <SubValueClaim
                  className="text-left max-w-xl mx-auto mb-10"
                  claim="Capture the ask, track the follow-up, fill the room."
                  detail="Same dashboard as your site. No extra stack."
                />
              </div>

              <PricingDisplay
                price="$49"
                period="/month"
                description="Private dining inquiry capture + CRM"
                features={[
                  'Lead capture form',
                  'Full CRM functionality',
                  'Contact tracking',
                  'Notes and follow-up system',
                  'Event space management',
                  'Integrated with your website',
                ]}
              />
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/hero-bg.jpg"
              alt=""
              fill
              className="object-cover object-[65%_center]"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/85 to-dark-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-xl">
              <p className="text-primary-400 text-sm font-medium tracking-wide uppercase mb-3">
                Real floor, real demand
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                The room fills when the inquiry gets caught
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Neighborhood bars already get the asks: wedding overflow, school nights, gatherings
                after services. The form and CRM make sure those requests land somewhere you can
                act on.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              </div>

              <FAQ items={faqItems} />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your neighborhood is already sending leads
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Make sure the site can catch them—around the cost of one 4-top a month.
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
