import { FiGlobe, FiInstagram, FiShoppingCart, FiAward, FiCalendar } from 'react-icons/fi'

const replacements = [
  {
    old: 'Social Media Company',
    icon: FiInstagram,
    color: 'text-pink-400',
  },
  {
    old: 'Website Company',
    icon: FiGlobe,
    color: 'text-blue-400',
  },
  {
    old: 'Delivery App Manager',
    icon: FiShoppingCart,
    color: 'text-green-400',
  },
  {
    old: 'Menu Optimization Chef',
    icon: FiAward,
    color: 'text-yellow-400',
  },
  {
    old: 'Scheduling Manager',
    icon: FiCalendar,
    color: 'text-purple-400',
  },
]

export default function ValueProposition() {
  return (
    <section className="py-24 md:py-32 bg-warm-100">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-dark-900 mb-6 leading-tight">
            One platform replaces multiple vendors
          </h2>
          <p className="text-xl text-dark-700 leading-relaxed font-light">
            Stop juggling multiple services and vendors. SindustryOS consolidates everything you need 
            into one platform.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {replacements.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-6 pb-8 border-b border-dark-200 last:border-0">
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="text-dark-500 text-sm line-through mb-1">{item.old}</p>
                  <p className="text-dark-900 font-medium">SindustryOS</p>
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

