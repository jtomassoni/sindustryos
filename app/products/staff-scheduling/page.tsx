import type { Metadata } from 'next'
import { FiClock, FiUsers, FiRefreshCw, FiCheckCircle } from 'react-icons/fi'
import Button from '@/components/ui/Button'
import ProductFold from '@/components/products/ProductFold'
import FeatureList from '@/components/products/FeatureList'

export const metadata: Metadata = {
  title: 'Staff Scheduling: Coming Soon',
  description:
    'Simplify staff scheduling with automated shift management, availability tracking, and communication tools. Coming soon to SindustryOS.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/products/staff-scheduling' },
}

const features = [
  {
    title: 'Automated Scheduling',
    description: 'Create schedules quickly with intelligent scheduling that considers availability, labor laws, and business needs.',
    icon: FiClock,
  },
  {
    title: 'Availability Tracking',
    description: 'Staff can set their availability, request time off, and managers can see conflicts before scheduling.',
    icon: FiUsers,
  },
  {
    title: 'Shift Swaps',
    description: 'Enable staff to swap shifts with approval, reducing last-minute scheduling headaches.',
    icon: FiRefreshCw,
  },
  {
    title: 'Time Tracking',
    description: 'Integrated time tracking for clock in/out, break management, and accurate payroll preparation.',
    icon: FiCheckCircle,
  },
]

export default function StaffSchedulingPage() {
  return (
    <main className="min-h-screen">
      <ProductFold
        crumbs={[{ label: 'Products', href: '/products' }, { label: 'Staff Scheduling' }]}
        eyebrow="Coming soon"
        title="Staff scheduling"
        lede="Shift management, availability, and swaps. Not shipping yet."
        points={features.map((feature) => feature.title)}
        primaryLabel="Get notified"
        secondaryHref="/products"
        secondaryLabel="View products"
      />

      {/* Features Section */}
      <section className="py-8 md:py-10 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful scheduling tools designed to save time and reduce scheduling conflicts.
            </p>
          </div>
          
          <FeatureList features={features} columns={2} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Staff Scheduling?
            </h2>
            
            <div className="space-y-8">
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Save Time
                </h3>
                <p className="text-gray-300">
                  Automated scheduling reduces the hours spent each week creating schedules manually. Set rules and let the system 
                  do the work, then make adjustments as needed.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Reduce Conflicts
                </h3>
                <p className="text-gray-300">
                  With availability tracking and shift swap capabilities, scheduling conflicts are caught early and resolved 
                  before they become problems.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Improve Communication
                </h3>
                <p className="text-gray-300">
                  Built-in communication tools keep everyone informed about schedule changes, shift availability, and important updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Be Notified When This Launches?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to be added to our waitlist and get early access to staff scheduling tools.
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


