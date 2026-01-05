import type { Metadata } from 'next'
import Image from 'next/image'
import { FiMonitor, FiImage, FiClock, FiEye, FiSettings, FiRotateCw } from 'react-icons/fi'
import FeatureList from '@/components/products/FeatureList'
import PricingDisplay from '@/components/products/PricingDisplay'
import FAQ from '@/components/products/FAQ'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Digital Signage - $99/month | TV Display System for Restaurants | SindustryOS',
  description: 'TV signage display system for restaurants and bars. Custom slide builder, specials rotator, events display, and announcements. Designed for 10-30ft viewing distance. 24/7 operation.',
  keywords: [
    'digital signage',
    'TV display',
    'restaurant signage',
    'bar signage',
    'specials display',
    'restaurant TV display',
    'bar digital signage',
    'restaurant menu board',
  ],
  openGraph: {
    title: 'Digital Signage - $99/month | SindustryOS',
    description: 'TV signage display system for restaurants and bars. Custom slide builder, specials rotator, events display, and announcements.',
    url: 'https://sindustryos.com/products/digital-signage',
    type: 'website',
  },
}

const features = [
  {
    title: 'TV Display System',
    description: 'Professional digital signage designed for 10-30ft viewing distance. High-contrast typography for maximum readability.',
    icon: FiMonitor,
  },
  {
    title: 'Custom Slide Builder',
    description: 'Create custom slides with your branding, images, and messaging. Easy-to-use drag-and-drop interface.',
    icon: FiImage,
  },
  {
    title: 'Specials Rotator',
    description: 'Automatically rotate food and drink specials throughout the day. Set time windows and schedules.',
    icon: FiRotateCw,
  },
  {
    title: 'Events Display',
    description: 'Show upcoming events, live music, and special occasions on your TV displays.',
    icon: FiClock,
  },
  {
    title: 'Announcements Integration',
    description: 'Display important announcements, promotions, and updates automatically.',
    icon: FiSettings,
  },
  {
    title: '24/7 Operation',
    description: 'Runs continuously, keeping your customers informed even when staff is busy.',
    icon: FiEye,
  },
]

const benefits = [
  {
    title: 'No Manual Updates Needed',
    description: 'Once configured, your signage updates automatically from your CMS. No need to manually change displays.',
  },
  {
    title: 'Always Current Information',
    description: 'Your specials, events, and announcements are always up-to-date. Never show outdated information.',
  },
  {
    title: 'Professional Appearance',
    description: 'High-quality displays that look professional and enhance your establishment\'s atmosphere.',
  },
  {
    title: 'Reduces Staff Questions',
    description: 'Customers can see specials and events without asking staff, freeing up your team to focus on service.',
  },
]

const faqItems = [
  {
    question: 'What equipment do I need?',
    answer: 'You need a TV or monitor connected to a device (like a small computer or media player) that can display a web page. We\'ll provide setup instructions.',
  },
  {
    question: 'How does the pricing work?',
    answer: 'Digital Signage is $99 per month. This includes all features: TV display system, custom slide builder, specials rotator, events display, and announcements integration.',
  },
  {
    question: 'Can I customize the slides?',
    answer: 'Yes! The custom slide builder lets you create slides with your branding, images, colors, and messaging. It\'s designed to be easy to use.',
  },
  {
    question: 'Does it work with my existing specials?',
    answer: 'Yes! The signage automatically pulls from your specials management system, so your TV displays always show current specials.',
  },
  {
    question: 'What if I need to update something quickly?',
    answer: 'You can update slides, specials, and announcements from your admin dashboard in real-time. Changes appear on your displays immediately.',
  },
  {
    question: 'Can I use multiple TVs?',
    answer: 'Yes, you can display the signage on multiple TVs throughout your establishment. Each TV shows the same content or you can customize per location.',
  },
]

export default function DigitalSignagePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Digital Signage' }]} />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Signage
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional TV signage display system. Show specials, events, and announcements 
              automatically. Designed for 10-30ft viewing distance.
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
              Professional Digital Display System
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to keep customers informed and reduce staff workload.
            </p>
          </div>
          
          <FeatureList features={features} columns={3} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Digital Signage?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-dark-900 border border-dark-700 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Technical Specifications
            </h2>
            
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-8">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white">Viewing Distance:</strong> Optimized for 10-30ft viewing distance
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white">Typography:</strong> High-contrast fonts designed for readability
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white">Display:</strong> Works with any TV or monitor connected to a web-enabled device
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white">Updates:</strong> Real-time updates from your admin dashboard
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-white">Integration:</strong> Automatically syncs with your specials, events, and announcements
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pricing
              </h2>
              <p className="text-xl text-gray-400">
                Simple, straightforward pricing for all features.
              </p>
            </div>
            
            <PricingDisplay
              price="$99"
              period="/month"
              description="All features included"
              features={[
                'TV display system',
                'Custom slide builder',
                'Specials rotator',
                'Events display',
                'Announcements integration',
                '24/7 operation',
              ]}
              ctaText="Get Started"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-400">
              Example displays (placeholders)
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <Image
                src="https://placehold.co/600x400/1a1d20/f56b1a?text=Slide+Builder+Interface"
                alt="Digital signage slide builder interface for creating custom TV displays with specials, events, and announcements for restaurants and bars"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-white">Slide Builder</h3>
            </div>
            
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <Image
                src="https://placehold.co/600x400/1a1d20/f56b1a?text=TV+Display+Example"
                alt="Example of digital signage TV display showing restaurant specials and events, optimized for 10-30ft viewing distance"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-white">TV Display</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-800">
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
              Ready to Upgrade Your Displays?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Professional digital signage that keeps your customers informed and reduces staff workload.
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

