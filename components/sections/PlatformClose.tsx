const capabilities = [
  {
    title: 'Analytics engine',
    description: 'Digests sales reports into actionable insights.',
  },
  {
    title: 'One dashboard',
    description: 'Website, private dining, signage, and social in one place.',
  },
  {
    title: 'POS sync (premium)',
    description: 'Square, Toast, and modern POS—without file shuffle.',
  },
  {
    title: 'First month free',
    description: 'Month one and your first anniversary are on us.',
  },
]

export default function PlatformClose() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-primary-900/40 via-dark-900 to-dark-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
            color: '#f4f7f8',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/10 via-transparent to-accent-800/10" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4 leading-tight">
            Start with a menu read. Add the rest when it pays.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Tell us your POS and we will outline what a first analytics pass looks like—usually
            within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-14">
          {capabilities.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-medium text-white mb-1.5">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center border-t border-dark-600/80 pt-10 md:pt-12">
          <p className="text-lg md:text-xl text-gray-300 mb-2 leading-relaxed font-light">
            Website from $99/month · Analytics $249 · Bundle $349/month
          </p>
          <p className="text-sm md:text-base text-primary-300/90 mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
            Priced around what one good table brings in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center text-base md:text-lg text-white border-b-2 border-primary-500 pb-1 hover:border-primary-400 transition-colors font-medium"
            >
              Request a menu read
              <span className="ml-2">→</span>
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center text-base md:text-lg text-gray-400 hover:text-white transition-colors"
            >
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
