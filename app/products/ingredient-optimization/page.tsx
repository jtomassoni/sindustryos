import type { Metadata } from 'next'
import { FiTrendingUp, FiBarChart2, FiDollarSign, FiZap } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import ProductFold from '@/components/products/ProductFold'
import FeatureList from '@/components/products/FeatureList'
import PricingDisplay from '@/components/products/PricingDisplay'
import SubValueClaim from '@/components/sections/SubValueClaim'

export const metadata: Metadata = {
  title: 'Menu Insights: Spot Leakage, Bad Margins & Hidden Opportunities',
  description:
    'SindustryOS flagship Menu Insights: turn one month of sales data into actionable guidance on leakage, margins, and menu opportunities. $149/month, or $99 in the bundle.',
  alternates: { canonical: '/products/ingredient-optimization' },
}

const features = [
  {
    title: 'Leakage spotting',
    description:
      'See where food cost and prep quietly drain margin across your menu.',
    icon: FiBarChart2,
  },
  {
    title: 'Margin clarity',
    description:
      'Surface items and combinations that look busy but do not carry the business.',
    icon: FiDollarSign,
  },
  {
    title: 'Hidden opportunities',
    description:
      'Find specials timing, ingredient overlap, and menu moves you would not catch from gut feel alone.',
    icon: FiTrendingUp,
  },
  {
    title: 'Actionable recommendations',
    description:
      'One month of sales data in, clear next steps out, in the dashboard you already use.',
    icon: FiZap,
  },
]

export default function IngredientOptimizationPage() {
  return (
    <main className="min-h-screen">
      <ProductFold
        crumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Menu Insights' },
        ]}
        eyebrow="Flagship"
        title="Menu Insights"
        lede="Spot leakage, bad margins, and hidden opportunities from one month of sales data."
        price="$149/month · $99/month in the Complete Bundle"
        points={features.map((feature) => feature.title)}
        primaryLabel="Request a menu read"
      />

      <section className="py-12 bg-dark-900 border-b border-dark-700/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SubValueClaim
              claim="Fix one bad-margin item and you can cover months of the subscription."
              detail="For the cost of one 4-top, we surface leakage and opportunities your gut already suspected, with numbers attached."
            />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What you get</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Clear, actionable insights. Not another report you ignore.
            </p>
          </div>

          <FeatureList features={features} columns={2} />
        </div>
      </section>

      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Simple pricing</h2>
            <PricingDisplay
              price="$149"
              description="$99/month when included in the Complete Bundle"
              ctaText="Request a menu read"
              features={[
                'Leakage, margins, and opportunity insights',
                'Built from your sales data',
                'Same dashboard as website, signage & inquiries',
                'Premium: direct Square, Toast & modern POS sync',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a clearer read on your menu?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with Menu Insights alone, or add it to the bundle for $99/month. For the cost of
              the sub, one margin fix can pay for a whole season.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request a menu read
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
