import type { Metadata } from 'next'
import { FiTrendingUp, FiBarChart2, FiDollarSign, FiZap } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FeatureList from '@/components/products/FeatureList'

export const metadata: Metadata = {
  title: 'Ingredient Optimization - Coming Soon | SindustryOS',
  description: 'Optimize your menu and reduce waste by analyzing ingredient usage and suggesting improvements. Coming soon to SindustryOS.',
  keywords: [
    'ingredient optimization',
    'menu optimization',
    'waste reduction',
    'cost optimization',
    'restaurant analytics',
  ],
  openGraph: {
    title: 'Ingredient Optimization - Coming Soon | SindustryOS',
    description: 'Optimize your menu and reduce waste by analyzing ingredient usage and suggesting improvements.',
    url: 'https://sindustryos.com/products/ingredient-optimization',
    type: 'website',
  },
}

const features = [
  {
    title: 'Usage Analytics',
    description: 'Track how ingredients are used across your menu to identify patterns, waste, and optimization opportunities.',
    icon: FiBarChart2,
  },
  {
    title: 'Waste Reduction',
    description: 'Identify ingredients that are frequently wasted or underutilized and get suggestions for reducing waste.',
    icon: FiTrendingUp,
  },
  {
    title: 'Cost Optimization',
    description: 'Analyze ingredient costs and usage to find opportunities to reduce costs without compromising quality.',
    icon: FiDollarSign,
  },
  {
    title: 'Menu Recommendations',
    description: 'Get data-driven suggestions for menu changes that can improve profitability and reduce waste.',
    icon: FiZap,
  },
]

export default function IngredientOptimizationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Ingredient Optimization' }]} />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-500/20 text-primary-400 text-sm font-semibold px-4 py-2 rounded-full border border-primary-500/30 mb-6">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ingredient Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Optimize your menu and reduce waste by analyzing ingredient usage and suggesting improvements.
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
              Data-driven insights to help you make smarter decisions about your menu and ingredients.
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
              Why Ingredient Optimization?
            </h2>
            
            <div className="space-y-8">
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Reduce Food Waste
                </h3>
                <p className="text-gray-300">
                  By understanding how ingredients are used across your menu, you can identify opportunities to reduce waste, 
                  which saves money and is better for the environment.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Improve Profitability
                </h3>
                <p className="text-gray-300">
                  Data-driven insights help you identify which menu items are most profitable, which ingredients are cost-effective, 
                  and where you can optimize pricing.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Make Smarter Menu Decisions
                </h3>
                <p className="text-gray-300">
                  Understand the true cost and usage of ingredients to make informed decisions about menu changes, specials, 
                  and new items.
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
              Contact us to be added to our waitlist and get early access to ingredient optimization tools.
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

