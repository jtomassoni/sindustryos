import { FiCoffee, FiTrendingUp, FiUsers } from 'react-icons/fi'

const audiences = [
  {
    icon: FiCoffee,
    title: 'Small Restaurants',
    description: 'Perfect for independent restaurants looking to streamline operations and reduce vendor overhead.',
  },
  {
    icon: FiTrendingUp,
    title: 'Bars & Dive Bars',
    description: 'Built specifically for bars and dive bars, with features that appeal to the younger generation.',
  },
  {
    icon: FiUsers,
    title: 'Owners on the Go',
    description: 'Mobile-first design means you can manage everything from your phone, anywhere, anytime.',
  },
]

export default function TargetAudience() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for Your Business
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you run a cozy dive bar or a bustling restaurant, SindustryOS adapts to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="text-center bg-dark-900 border border-dark-700 rounded-xl p-8 hover:border-primary-500/50 transition-all duration-300"
              >
                <Icon className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{audience.title}</h3>
                <p className="text-gray-400">{audience.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

