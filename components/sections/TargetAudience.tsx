import { FiCoffee, FiTrendingUp, FiUsers } from 'react-icons/fi'

const audiences = [
  {
    icon: FiCoffee,
    title: 'Small Restaurants',
    description:
      'Perfect for independent restaurants looking to streamline operations and reduce vendor overhead.',
  },
  {
    icon: FiTrendingUp,
    title: 'Bars & Dive Bars',
    description:
      'Built specifically for bars and dive bars, with features that appeal to the younger generation.',
  },
  {
    icon: FiUsers,
    title: 'Owners on the Go',
    description:
      'Mobile-first design means you can manage everything from your phone, anywhere, anytime.',
  },
]

export default function TargetAudience() {
  return (
    <section className="relative py-12 md:py-16 bg-dark-800">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '45px 45px',
            color: '#f4f7f8',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4 leading-tight">
            Built for Your Business
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Whether you run a cozy dive bar or a bustling restaurant, SindustryOS adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="text-center bg-dark-900/60 border border-dark-700 rounded-xl p-6 md:p-8 hover:border-primary-500/50 transition-colors"
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {audience.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
