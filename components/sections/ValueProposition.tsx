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
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One Platform Replaces Multiple Vendors
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stop juggling multiple services and vendors. SindustryOS consolidates everything you need 
            into one powerful, AI-powered platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {replacements.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <Icon className={`w-12 h-12 ${item.color} mx-auto mb-2`} />
                  <p className="text-gray-400 text-sm mb-2 line-through">{item.old}</p>
                  <div className="text-primary-500 font-bold">→</div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-primary-500/10 border-2 border-primary-500 rounded-2xl px-8 py-6">
            <h3 className="text-2xl font-bold text-primary-500 mb-2">SindustryOS</h3>
            <p className="text-gray-300">All-in-one solution powered by AI</p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Lower Costs</h3>
            <p className="text-gray-400">One platform instead of multiple vendor fees</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-gray-400">Automation that reduces overhead</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Time-Saving</h3>
            <p className="text-gray-400">Everything in one place, accessible anywhere</p>
          </div>
        </div>
      </div>
    </section>
  )
}

