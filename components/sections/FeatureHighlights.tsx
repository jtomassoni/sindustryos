import { FiDatabase, FiMenu, FiGlobe, FiBarChart2 } from 'react-icons/fi'

const features = [
  {
    icon: FiDatabase,
    title: 'Import from POS Systems',
    description: 'Connect with all popular POS systems to automatically sync your sales data.',
  },
  {
    icon: FiMenu,
    title: 'Import from Menu Providers',
    description: 'Seamlessly import your existing menus from all popular menu providers.',
  },
  {
    icon: FiGlobe,
    title: 'Perfect Marketing Website',
    description: 'Get a website that markets your restaurant or bar perfectly, built for your business.',
  },
  {
    icon: FiBarChart2,
    title: 'Comprehensive Admin Dashboard',
    description: 'Powerful admin dashboard with multiple solutions to manage your entire operation.',
  },
]

export default function FeatureHighlights() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-primary-50 via-warm-100 to-secondary-50">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, currentColor 0.5px, transparent 0)',
          backgroundSize: '25px 25px',
          color: '#2e2824',
        }} />
      </div>
      
      {/* Warm gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-50/20 via-transparent to-warm-50/20" />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-dark-900 mb-4 leading-tight">
            Everything You Need
          </h2>
          <p className="text-lg md:text-xl text-dark-700 leading-relaxed font-light">
            We integrate with your existing systems and build solutions that work for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-warm-50/80 backdrop-blur-sm border border-dark-200/50 rounded-lg p-5 md:p-6 hover:border-primary-400/50 hover:bg-warm-50 transition-all duration-300 shadow-sm"
              >
                <Icon className="w-9 h-9 md:w-10 md:h-10 text-primary-600 mb-3" />
                <h3 className="text-lg md:text-xl font-medium text-dark-900 mb-2">{feature.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


