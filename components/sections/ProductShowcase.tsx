import Link from 'next/link'
import { FiGlobe, FiUsers, FiMonitor } from 'react-icons/fi'

const products = [
  {
    name: 'Full Web CMS',
    price: '$99/month',
    description:
      'Guest-facing site with menus, specials, events, and SEO—built for weekly restaurant updates.',
    valueClaim: 'SEO that helps strangers find the door, not another static brochure site.',
    icon: FiGlobe,
    href: '/products/cms',
    features: [
      'Menu & specials management',
      'Event calendar',
      'Gallery',
      'Hosting included',
      'SEO-ready pages',
    ],
  },
  {
    name: 'Private Dining Inquiries',
    price: '$49/month',
    description:
      'Lead capture and CRM for private events. You still own the calls and emails—we catch the ask.',
    valueClaim: 'Stop losing party requests in voicemail and shared inboxes.',
    icon: FiUsers,
    href: '/products/private-dining',
    features: [
      'Inquiry form',
      'Contact tracking',
      'Notes & follow-up',
      'Tied to your website',
    ],
  },
  {
    name: 'Digital Signage',
    price: '$99/month',
    description:
      'TV displays for specials, events, and announcements, driven from the same content you already publish.',
    valueClaim: 'One special sold off the screen covers the month.',
    icon: FiMonitor,
    href: '/products/digital-signage',
    features: [
      'Slide builder',
      'Specials rotator',
      'Events display',
      '10–30ft viewing',
    ],
  },
]

export default function ProductShowcase() {
  return (
    <section className="relative py-12 md:py-16 bg-dark-800">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '35px 35px',
            color: '#f4f7f8',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-3 leading-tight">
            Add the guest-facing tools when you are ready
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Buy them alone, or take the Complete Bundle at $199/month and add Menu Insights for
            $99 instead of $149.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="flex flex-col w-full bg-dark-900/60 border border-dark-700 rounded-2xl p-6 hover:border-primary-500/40 transition-colors"
              >
                <div className="mb-4">
                  <Icon className="w-9 h-9 text-primary-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-primary-400 text-lg font-medium mb-3">{product.price}</p>
                  <p className="text-gray-400 mb-3 leading-relaxed text-sm md:text-base">
                    {product.description}
                  </p>
                  <p className="text-sm text-primary-300/90 mb-4 leading-snug">
                    {product.valueClaim}
                  </p>
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-400 text-sm">
                      <span className="text-primary-500 mr-2 mt-0.5 flex-shrink-0">·</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.href}
                  className="inline-flex items-center text-white border-b border-primary-500 pb-1 hover:border-primary-400 transition-colors text-sm mt-auto w-fit"
                >
                  Learn more
                  <span className="ml-2">→</span>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/pricing"
            className="text-gray-300 border-b border-dark-600 pb-1 hover:text-white hover:border-primary-500 transition-colors text-sm"
          >
            See simple pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
