import type { Metadata } from 'next'
import Image from 'next/image'
import { FiCalendar, FiMenu, FiTag, FiImage, FiSearch, FiGlobe } from 'react-icons/fi'
import FeatureList from '@/components/products/FeatureList'
import PricingDisplay from '@/components/products/PricingDisplay'
import FAQ from '@/components/products/FAQ'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Full Web CMS - $99/month | SindustryOS',
  description: 'Complete website CMS for restaurants and bars. Includes menu management, event calendar, specials, gallery, and SEO optimization. Starting at $99/month.',
  keywords: ['restaurant CMS', 'bar website', 'menu management', 'event calendar', 'restaurant website builder'],
}

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
    question: 'Can I cancel anytime?',
    answer: 'Yes, there are no long-term contracts. You can cancel anytime if the service doesn\'t meet your needs.',
  },
]

export default function CMSPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Full Web CMS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Complete website solution for your restaurant or bar. Manage content, menus, events, 
              and specials all in one place.
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

      {/* Features Section */}
      <section className="py-20 bg-dark-900">
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
      <section className="py-20 bg-dark-800">
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
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-400">
                All hosting included. No hidden fees.
              </p>
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
                'No long-term contracts',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Screenshots/Demo Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-400">
              Example screenshots and demos (placeholders)
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-900 border border-dark-700 rounded-xl p-8">
              <Image
                src="https://placehold.co/1200x800/1a1d20/f56b1a?text=CMS+Interface+Screenshot"
                alt="CMS Interface Screenshot"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
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
                Frequently Asked Questions
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
              Join restaurants and bars using SindustryOS to simplify their operations.
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

