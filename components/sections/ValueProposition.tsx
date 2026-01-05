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

const benefits = [
  {
    title: 'Lower Costs',
    description: 'One platform instead of multiple vendor fees',
  },
  {
    title: 'Less Overhead',
    description: 'Automation that reduces manual work',
  },
  {
    title: 'Time-Saving',
    description: 'Everything in one place, accessible anywhere',
  },
]

export default function ValueProposition() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-warm-50 via-warm-100 to-primary-50">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '35px 35px',
          color: '#2e2824',
        }} />
      </div>
      
      {/* Warm accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-50/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-dark-900 mb-4 md:mb-6 leading-tight text-balance">
            One platform replaces multiple vendors
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-dark-700 leading-relaxed font-light max-w-2xl mx-auto">
            Stop juggling multiple services and vendors. SindustryOS consolidates everything you need 
            into one platform.
          </p>
        </div>
        
        {/* Services Replacement Section */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-20 lg:mb-24">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 md:gap-x-8 md:gap-y-6 lg:gap-x-12">
            {replacements.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      <Icon className="w-full h-full text-dark-700" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="text-dark-400 text-xs sm:text-sm md:text-base mb-0.5 whitespace-nowrap">{item.old}</p>
                      <p className="text-dark-900 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">SindustryOS</p>
                    </div>
                  </div>
                  {index < replacements.length - 1 && (
                    <span className="text-dark-300 mx-2 sm:mx-3 md:mx-4 text-base sm:text-lg md:text-xl lg:text-2xl hidden sm:inline">•</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-semibold text-dark-900 mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-dark-600 leading-relaxed max-w-xs mx-auto">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

