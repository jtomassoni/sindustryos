import type { Metadata } from 'next'
import { FiPackage, FiBook, FiCalendar, FiTrendingDown } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FeatureList from '@/components/products/FeatureList'

export const metadata: Metadata = {
  title: 'Back of House Management - Coming Soon | SindustryOS',
  description: 'Streamline kitchen operations with inventory tracking, recipe management, and production planning. Coming soon to SindustryOS.',
  keywords: [
    'back of house management',
    'kitchen management',
    'inventory tracking',
    'recipe management',
    'restaurant operations',
  ],
  openGraph: {
    title: 'Back of House Management - Coming Soon | SindustryOS',
    description: 'Streamline kitchen operations with inventory tracking, recipe management, and production planning.',
    url: 'https://sindustryos.com/products/back-of-house',
    type: 'website',
  },
}

const features = [
  {
    title: 'Inventory Tracking',
    description: 'Track inventory levels in real-time, set low-stock alerts, and manage supplier relationships all in one place.',
    icon: FiPackage,
  },
  {
    title: 'Recipe Management',
    description: 'Store and manage recipes with ingredient lists, portion sizes, and cost calculations for better menu planning.',
    icon: FiBook,
  },
  {
    title: 'Production Planning',
    description: 'Plan production schedules, prep lists, and manage kitchen workflows to reduce waste and improve efficiency.',
    icon: FiCalendar,
  },
  {
    title: 'Waste Reduction',
    description: 'Identify waste patterns, track food costs, and optimize inventory to reduce waste and improve profitability.',
    icon: FiTrendingDown,
  },
]

export default function BackOfHousePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Back of House Management' }]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-500/20 text-primary-400 text-sm font-semibold px-4 py-2 rounded-full border border-primary-500/30 mb-6">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Back of House Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Streamline kitchen operations with inventory tracking, recipe management, and production planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get Notified When Available
              </Button>
              <Button href="/products" variant="outline" size="lg">
                View All Products
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
              What to Expect
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful tools to help you manage your kitchen operations more efficiently and reduce costs.
            </p>
          </div>
          
          <FeatureList features={features} columns={2} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Back of House Management?
            </h2>
            
            <div className="space-y-8">
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Reduce Food Waste
                </h3>
                <p className="text-gray-300">
                  Better inventory tracking and production planning help you reduce waste, which directly improves your bottom line 
                  and is better for the environment.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Improve Cost Control
                </h3>
                <p className="text-gray-300">
                  Track ingredient costs, recipe costs, and inventory levels to make better pricing decisions and identify 
                  opportunities for cost savings.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Streamline Operations
                </h3>
                <p className="text-gray-300">
                  Centralized management of recipes, inventory, and production planning makes kitchen operations smoother 
                  and reduces the chance of errors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Be Notified When This Launches?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to be added to our waitlist and get early access to back of house management tools.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

