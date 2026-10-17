import type { Metadata } from 'next'
import { FiCalendar, FiMenu, FiTag, FiImage, FiSearch, FiGlobe } from 'react-icons/fi'
import FeatureList from '@/components/products/FeatureList'
import PricingDisplay from '@/components/products/PricingDisplay'
import FAQ from '@/components/products/FAQ'
import Button from '@/components/ui/Button'
import ProductFold from '@/components/products/ProductFold'
import SubValueClaim from '@/components/sections/SubValueClaim'
import JsonLd from '@/components/seo/JsonLd'
import { getFaqSchema, getProductSchema } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo-metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Restaurant & Bar Website CMS: $99/month',
  description:
    'Restaurant website builder and CMS for bars and independents. Menu management, event calendar, specials, gallery, hosting, and SEO included. $99/month.',
  path: '/products/cms',
})

const features = [
  {
    title: '1-5 Pages of Content',
    description: 'Create and manage multiple pages including About, Gallery, Events, and more. Easy-to-use content editor.',
    icon: FiGlobe,
  },
  {
    title: 'Calendar of Events Management',
    description: 'Manage one-time and recurring events with drag-and-drop editing, venue area organization, and event tags.',
    icon: FiCalendar,
  },
  {
    title: 'Menu Management',
    description: 'Organize menu sections, add item details (descriptions, prices, images), modifiers, and track availability.',
    icon: FiMenu,
  },
  {
    title: 'Specials Management',
    description: 'Schedule food specials by weekday and drink specials by time windows. Set date ranges and exceptions with image support.',
    icon: FiTag,
  },
  {
    title: 'Gallery Functionality',
    description: 'Showcase your restaurant or bar with beautiful image galleries that engage customers.',
    icon: FiImage,
  },
  {
    title: 'SEO-Optimized Website',
    description: 'Built-in SEO optimization ensures your website markets your business perfectly and ranks well in search results.',
    icon: FiSearch,
  },
]

const faqItems = [
  {
    question: 'What hosting is included?',
    answer: 'All hosting is included in the $99/month price. You don\'t need to worry about servers, updates, or technical maintenance.',
  },
  {
    question: 'Are there limits on pages, events, or menu items?',
    answer: 'No limits within the features. You can create as many pages, events, and menu items as you need for your business.',
  },
  {
    question: 'Can I customize the design?',
    answer: 'Yes! The CMS includes customization options to match your brand. We work with you to ensure your website reflects your business.',
  },
  {
    question: 'How do I update content?',
    answer: 'The admin dashboard is designed to be simple and intuitive. Update menus, events, specials, and content in real-time without technical knowledge.',
  },
  {
    question: 'What if I need help?',
    answer: 'You\'ll receive dedicated support once you\'re onboarded. We\'re here to help you succeed.',
  },
  {
    question: 'How long is the agreement?',
    answer:
      'The website is $99/month. Pay the year up front and it is $891, which is 9 times the monthly price and less than the 10 payments in year one. The monthly partnership is 12 months, with the first month and the first anniversary month free. Any other calendar, including a pause, is only with our approval. A pause stops payments and nothing else.',
  },
  {
    question: 'Is the SEO actually worth $99/month?',
    answer:
      'We think so. For the cost of one 4-top, we build and maintain SEO so people who never would have noticed you find the menu, the specials, and the door. One new walk-in table a month and the math gets friendly fast.',
  },
]

export default function CMSPage() {
  const productSchema = getProductSchema({
    name: 'SindustryOS Full Web CMS',
    description:
      'Complete website CMS for restaurants and bars with menu management, event calendar, specials, and more.',
    price: '99',
    url: 'https://www.sindustryos.com/products/cms',
  })
  const faqSchema = getFaqSchema(faqItems)

  return (
    <>
      <JsonLd id="product-schema-cms" data={productSchema} />
      <JsonLd id="faq-schema-cms" data={faqSchema} />
      <main className="min-h-screen">
      <ProductFold
        crumbs={[{ label: 'Products', href: '/products' }, { label: 'Full Web CMS' }]}
        eyebrow="Tier 1 · $99/month"
        title="Restaurant & bar website CMS"
        lede="Menus, events, specials, gallery, hosting, and SEO in one place."
        price="$99/month · hosting included"
        points={features.map((feature) => feature.title)}
        primaryLabel="Talk to us about CMS"
      />

      <section className="py-12 bg-dark-900 border-b border-dark-700/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SubValueClaim
              claim="SEO that helps people who never would have noticed you walk through the door."
              detail="Ninety-nine bucks a month. One new table from search, and the subscription already feels cheap."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-10 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Manage Your Website
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features designed specifically for restaurants and bars.
            </p>
          </div>
          
          <FeatureList features={features} columns={2} />
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Feature Details
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <FiCalendar className="w-8 h-8 text-primary-500" />
                  Calendar of Events Management
                </h3>
                <ul className="space-y-2 text-gray-300 ml-11">
                  <li>• One-time and recurring events</li>
                  <li>• Drag-and-drop editing</li>
                  <li>• Venue area organization</li>
                  <li>• Event tags and filtering</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <FiMenu className="w-8 h-8 text-primary-500" />
                  Menu Management
                </h3>
                <ul className="space-y-2 text-gray-300 ml-11">
                  <li>• Section organization</li>
                  <li>• Item details (descriptions, prices, images)</li>
                  <li>• Modifiers and customization</li>
                  <li>• Availability tracking</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <FiTag className="w-8 h-8 text-primary-500" />
                  Specials Management
                </h3>
                <ul className="space-y-2 text-gray-300 ml-11">
                  <li>• Food specials with weekday scheduling</li>
                  <li>• Drink specials with time windows</li>
                  <li>• Date ranges and exceptions</li>
                  <li>• Image support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 md:py-10 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                All hosting included. No hidden fees.
              </p>
              <SubValueClaim
                className="text-left max-w-xl mx-auto mb-10"
                claim="For the cost of an agency retainer's coffee budget, you get a site that actually ranks."
                detail="Hosting, SEO, menus, events, specials. The whole stack for less than one slow Tuesday's waste."
              />
            </div>
            
            <PricingDisplay
              price="$99"
              period="/month"
              description="Complete website CMS with all features included"
              features={[
                'All hosting included',
                'Unlimited pages, events, menu items',
                'SEO optimization',
                'Mobile-responsive design',
                'Dedicated support',
                'First month and first anniversary free',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">See a live customer site</h2>
            <p className="text-xl text-gray-400 mb-8">
              Monaghan&apos;s Bar and Grill in Denver runs on SindustryOS—menus, events, and private
              dining capture included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://www.monaghansbarandgrilldenver.com/"
                variant="primary"
                size="lg"
              >
                Visit Monaghan&apos;s site
              </Button>
              <Button href="/customers/monaghans-bar-and-grill" variant="outline" size="lg">
                Read the story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-10 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a site that stays honest?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Full Web CMS is $99/month, or $891 if you pay the year up front. The Complete Bundle is $349.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Talk to us about CMS
            </Button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

