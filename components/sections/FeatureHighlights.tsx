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
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We integrate with your existing systems and build solutions that work for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


