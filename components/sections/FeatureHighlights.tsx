import { FiShare2, FiGlobe, FiBarChart2, FiLayers } from 'react-icons/fi'

const features = [
  {
    icon: FiBarChart2,
    title: 'Analytics engine',
    description: 'Digests sales reports into actionable insights—what to fix and why.',
  },
  {
    icon: FiGlobe,
    title: 'Customizable website',
    description: 'Tier 1: menus, specials, events, and SEO in one place.',
  },
  {
    icon: FiLayers,
    title: 'Guest-facing add-ons',
    description: 'Private dining page + inquiries, and digital signage when you need them.',
  },
  {
    icon: FiShare2,
    title: 'Social connection',
    description: 'Manage all your social pages from the same app.',
  },
]

export default function FeatureHighlights() {
  return (
    <section className="relative py-12 md:py-16 bg-dark-900">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1.5px 1.5px, currentColor 0.5px, transparent 0)',
            backgroundSize: '25px 25px',
            color: '#f4f7f8',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4 leading-tight">
            Built around the floor, not a feature list
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Insights first. Website, private dining, signage, and social ride in the same
            place—so you are not juggling vendors for every weekly change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-dark-800 border border-dark-700 rounded-lg p-5 md:p-6 hover:border-primary-500/50 transition-colors"
              >
                <Icon className="w-9 h-9 md:w-10 md:h-10 text-primary-400 mb-3" />
                <h3 className="text-lg md:text-xl font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
