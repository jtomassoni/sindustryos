import { FiGlobe, FiInstagram, FiShoppingCart, FiAward, FiCalendar } from 'react-icons/fi'

const replacements = [
  {
    old: 'Social Media Company',
    icon: FiInstagram,
  },
  {
    old: 'Website Company',
    icon: FiGlobe,
  },
  {
    old: 'Delivery App Manager',
    icon: FiShoppingCart,
  },
  {
    old: 'Menu Optimization Chef',
    icon: FiAward,
  },
  {
    old: 'Scheduling Manager',
    icon: FiCalendar,
  },
]

export default function ValueProposition() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-warm-100 via-secondary-50 to-warm-50">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)',
          backgroundSize: '30px 30px',
          color: '#2e2824',
        }} />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-dark-900 mb-6 leading-tight">
            One platform replaces multiple vendors
          </h2>
          <p className="text-xl text-dark-700 leading-relaxed font-light">
            Stop juggling multiple services and vendors. SindustryOS consolidates everything you need 
            into one platform.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {replacements.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-6 py-4 border-b border-dark-200 last:border-0">
                <div className="flex-shrink-0">
                  <Icon className="w-6 h-6 text-dark-700" />
                </div>
                <div className="flex-1">
                  <p className="text-dark-400 text-base mb-1">{item.old}</p>
                  <p className="text-dark-700 font-medium text-base">SindustryOS</p>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-lg font-medium text-dark-900 mb-2">Lower Costs</h3>
              <p className="text-dark-600 text-sm">One platform instead of multiple vendor fees</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-dark-900 mb-2">Less Overhead</h3>
              <p className="text-dark-600 text-sm">Automation that reduces manual work</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-dark-900 mb-2">Time-Saving</h3>
              <p className="text-dark-600 text-sm">Everything in one place, accessible anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

