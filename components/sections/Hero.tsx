export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-end md:items-center overflow-hidden">
      {/* Full-bleed atmosphere: /public/hero-bg.jpg */}
      <div className="absolute inset-0 bg-dark-900" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 md:scale-100"
          style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundPosition: '65% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/55 to-dark-900/20" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #f4f7f8 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 pt-28 pb-16 md:py-24">
        <div className="max-w-3xl">
          <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8 animate-fade-up">
            SindustryOS
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white mb-5 leading-[1.08] tracking-tight text-balance animate-fade-up animate-fade-up-delay-1">
            Spot leakage, bad margins, and hidden opportunities in your menu.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-xl animate-fade-up animate-fade-up-delay-2">
            One month of sales data in. Margin analysis that actually accounts for day-of-week and
            week-of-month patterns. Real math. No contract. Not sold by career salespeople.
          </p>
          <p className="text-sm text-primary-300/80 italic mb-10 max-w-lg animate-fade-up animate-fade-up-delay-2">
            For the cost of one 4-top, optimize your shit.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start animate-fade-up animate-fade-up-delay-3">
            <a
              href="/contact"
              className="inline-flex items-center text-lg text-white border-b-2 border-primary-500 pb-1 hover:border-primary-400 transition-colors font-medium"
            >
              Get a menu read
              <span className="ml-2" aria-hidden>
                →
              </span>
            </a>
            <a
              href="/products/ingredient-optimization"
              className="inline-flex items-center text-lg text-gray-400 hover:text-white transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
