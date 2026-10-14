import { FiMessageSquare } from 'react-icons/fi'

export default function Testimonial() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-dark-900 via-secondary-900 to-dark-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '50px 50px',
            color: '#f4f7f8',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-accent-900/10" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 md:p-10 shadow-2xl">
            <p className="text-primary-400 text-sm font-medium uppercase tracking-wide mb-4">
              Live customer result
            </p>
            <p className="text-2xl md:text-3xl font-display font-semibold text-white mb-4 leading-tight">
              About 1–2 private dining requests a month for parties of 20–100—caught on the site
              instead of lost in email.
            </p>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Monaghan&apos;s Bar and Grill · Denver ·{' '}
              <a
                href="https://www.monaghansbarandgrilldenver.com/"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the live site
              </a>
            </p>

            <FiMessageSquare className="w-8 h-8 text-primary-500 mb-4" />

            <blockquote className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              &ldquo;This platform has become a true partner to the business. It&apos;s built by
              people who understand the industry, so they know our concerns and have never delivered
              anything less than amazing.&rdquo;
            </blockquote>

            <div className="flex items-center">
              <div>
                <p className="text-white font-semibold text-base md:text-lg">Victoria, Owner</p>
                <a
                  href="/customers/monaghans-bar-and-grill"
                  className="text-gray-400 text-sm md:text-base hover:text-primary-400 transition-colors"
                >
                  Read the full story →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
