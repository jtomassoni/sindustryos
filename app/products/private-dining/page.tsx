import type { Metadata } from 'next'
import Image from 'next/image'
import { FiUsers, FiMail, FiFileText, FiCalendar, FiMessageSquare } from 'react-icons/fi'
import FeatureList from '@/components/products/FeatureList'
import PricingDisplay from '@/components/products/PricingDisplay'
import FAQ from '@/components/products/FAQ'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Private Dining Inquiries - $49/month | Event Space Booking CRM | SindustryOS',
  description: 'Lead capture and CRM system for private event inquiries. Manage event space bookings, track contacts, and follow up with potential clients. Perfect for restaurants and bars hosting private parties and corporate events.',
  keywords: [
    'private dining',
    'event space booking',
    'restaurant CRM',
    'private party inquiries',
    'corporate event booking',
    'private dining room management',
    'event inquiry system',
  ],
  openGraph: {
    title: 'Private Dining Inquiries - $49/month | SindustryOS',
    description: 'Lead capture and CRM system for private event inquiries. Manage event space bookings, track contacts, and follow up with potential clients.',
    url: 'https://sindustryos.com/products/private-dining',
    type: 'website',
  },
}

const features = [
  {
    title: 'Lead Capture Form',
    description: 'Customizable inquiry form that captures all the information you need from potential clients.',
    icon: FiMail,
  },
  {
    title: 'CRM Functionality',
    description: 'Complete customer relationship management system to track all your private dining inquiries in one place.',
    icon: FiUsers,
  },
  {
    title: 'Event Space Inquiry Management',
    description: 'Organize and manage inquiries for private parties, corporate events, and special occasions.',
    icon: FiCalendar,
  },
  {
    title: 'Contact Tracking',
    description: 'Keep track of all communication with potential clients and never miss a follow-up.',
    icon: FiFileText,
  },
  {
    title: 'Notes and Follow-Up System',
    description: 'Add notes, set reminders, and manage follow-ups to convert more inquiries into bookings.',
    icon: FiMessageSquare,
  },
]

const faqItems = [
  {
    question: 'How does the pricing work?',
    answer: 'Private Dining Inquiries is $49 per month. If you book even one party, it should cover the cost. It\'s designed to be a no-brainer investment.',
  },
  {
    question: 'Can I customize the inquiry form?',
    answer: 'Yes, the inquiry form can be customized to capture the specific information you need for your private dining events.',
  },
  {
    question: 'How do I access the CRM?',
    answer: 'The CRM is integrated into your SindustryOS admin dashboard, accessible from anywhere with your login credentials.',
  },
  {
    question: 'What if I don\'t get any inquiries?',
    answer: 'The system helps you capture and manage inquiries more effectively. Even if you only book one party per month, the $49 investment pays for itself.',
  },
  {
    question: 'Can I use this for other types of events?',
    answer: 'Yes! While designed for private dining, you can use it to manage any type of event space booking or inquiry.',
  },
]

export default function PrivateDiningPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Private Dining Inquiries' }]} />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Private Dining Inquiries
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Capture leads and manage private event inquiries with our integrated CRM system. 
              Turn inquiries into bookings.
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
              Complete Lead Management System
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to capture, track, and convert private dining inquiries.
            </p>
          </div>
          
          <FeatureList features={features} columns={2} />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Perfect For
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Private Parties</h3>
                <p className="text-gray-400">
                  Manage birthday parties, anniversaries, and other private celebrations. 
                  Track inquiries from initial contact to booking.
                </p>
              </div>
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Corporate Events</h3>
                <p className="text-gray-400">
                  Handle corporate dinners, team building events, and business meetings. 
                  Professional inquiry management for B2B clients.
                </p>
              </div>
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Holiday Events</h3>
                <p className="text-gray-400">
                  Manage holiday party inquiries and special occasion bookings. 
                  Never miss a potential booking during busy seasons.
                </p>
              </div>
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Event Space Rentals</h3>
                <p className="text-gray-400">
                  If you have a private dining room or event space, manage all rental 
                  inquiries in one organized system.
                </p>
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
                Simple Monthly Pricing
              </h2>
              <p className="text-xl text-gray-400">
                $49 per month. If you book even one party, it pays for itself.
              </p>
            </div>
            
            <PricingDisplay
              price="$49"
              period="/month"
              description="Complete private dining inquiry management system"
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

      {/* Demo Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-400">
              Example screenshots (placeholders)
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
              <Image
                src="https://placehold.co/600x400/1a1d20/f56b1a?text=Lead+Capture+Form"
                alt="Private dining inquiry lead capture form for restaurants and bars to collect event booking information from potential clients"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-white">Inquiry Form</h3>
            </div>
            
            <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
              <Image
                src="https://placehold.co/600x400/1a1d20/f56b1a?text=CRM+Dashboard"
                alt="CRM dashboard for managing private dining inquiries, tracking contacts, and following up with potential event clients"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-white">CRM Dashboard</h3>
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
              Start Capturing More Bookings
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't let private dining inquiries slip through the cracks. 
              Get organized and convert more leads into bookings.
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

