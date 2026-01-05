import type { Metadata } from 'next'
import { 
  FiCalendar, FiMenu, FiTag, FiUsers, FiClock, FiDollarSign, 
  FiBarChart2, FiShare2, FiSettings, FiShoppingCart, FiDatabase 
} from 'react-icons/fi'
import FeatureList from '@/components/products/FeatureList'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Features - SindustryOS',
  description: 'Comprehensive feature list for SindustryOS: Content Management, Staff & Scheduling, Menu & Operations, Analytics & Reporting, Social Media Integration, and more.',
  keywords: ['restaurant management features', 'bar management features', 'restaurant software features'],
}

const featureCategories = [
  {
    title: 'Content Management',
    icon: FiCalendar,
    features: [
      {
        title: 'Calendar & Events',
        description: 'Manage one-time and recurring events with drag-and-drop editing, venue organization, and event tags.',
      },
      {
        title: 'Specials Management',
        description: 'Schedule food and drink specials by weekday, time windows, date ranges, and exceptions.',
      },
      {
        title: 'Announcements',
        description: 'Post important announcements and updates that appear on your website and digital signage.',
      },
      {
        title: 'Gallery',
        description: 'Showcase your restaurant or bar with beautiful image galleries.',
      },
    ],
  },
  {
    title: 'Staff & Scheduling',
    icon: FiUsers,
    features: [
      {
        title: 'Employee Management',
        description: 'Manage staff profiles, roles, and permissions.',
      },
      {
        title: 'Shift Scheduling',
        description: 'Create and manage staff schedules with drag-and-drop interface.',
      },
      {
        title: 'Availability Tracking',
        description: 'Track employee availability and time-off requests.',
      },
      {
        title: 'Timeclock',
        description: 'Digital timeclock for tracking hours worked.',
      },
      {
        title: 'Payroll',
        description: 'Calculate payroll based on hours and rates.',
      },
    ],
  },
  {
    title: 'Menu & Operations',
    icon: FiMenu,
    features: [
      {
        title: 'Menu Management',
        description: 'Organize menu sections, items, descriptions, prices, images, and modifiers.',
      },
      {
        title: 'Ingredient Tracking',
        description: 'Track ingredients and inventory across menu items.',
      },
      {
        title: 'Food Cost Analysis',
        description: 'Analyze food costs and profitability by item.',
      },
      {
        title: 'KDS Integration',
        description: 'Kitchen Display System integration for order management.',
      },
    ],
  },
  {
    title: 'Analytics & Reporting',
    icon: FiBarChart2,
    features: [
      {
        title: 'Sales Analytics',
        description: 'Track sales trends, patterns, and performance metrics.',
      },
      {
        title: 'Food Cost Reports',
        description: 'Detailed reports on food costs and margins.',
      },
      {
        title: 'Labor Cost Reports',
        description: 'Analyze labor costs and efficiency.',
      },
      {
        title: 'Profitability Analysis',
        description: 'Comprehensive profitability analysis across all aspects of your business.',
      },
      {
        title: 'AI Insights',
        description: 'AI-powered insights and recommendations to optimize operations.',
      },
    ],
  },
  {
    title: 'Integrations',
    icon: FiDatabase,
    features: [
      {
        title: 'POS Integration',
        description: 'Import sales data from all popular POS systems.',
      },
      {
        title: 'Menu Provider Integration',
        description: 'Import menus from all popular menu providers.',
      },
      {
        title: 'Social Media Integration',
        description: 'Manage and schedule social media posts from one platform.',
      },
      {
        title: 'Online Ordering',
        description: 'Integrated online ordering system (coming soon).',
      },
    ],
  },
]

const comingSoonFeatures = [
  'BOH Connections',
  'Users and Staff Management',
  'Scheduling Management',
  'Ingredients Optimizations',
  'Online Ordering',
  'Purchase Order Management',
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Features
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Everything you need to run your restaurant or bar, all in one platform
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {featureCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-4 mb-8">
                    <Icon className="w-10 h-10 text-primary-500" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {feature.title}
                        </h3>
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

      {/* Coming Soon */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-400 mb-12 text-center">
              We're constantly adding new features based on customer feedback. 
              Here's what's on the roadmap:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comingSoonFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-dark-900 border border-dark-700 rounded-lg p-4 flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">
                Have a feature request? We'd love to hear from you.
              </p>
              <Button href="/contact" variant="outline" size="md">
                Contact Us
              </Button>
            </div>
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
              Start with our Full Web CMS at $99/month and add features as you need them.
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


