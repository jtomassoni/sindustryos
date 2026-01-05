import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-primary-200 via-accent-100 to-warm-200 overflow-hidden">
      {/* Rich texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
          color: '#2e2824',
        }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-300/10 via-transparent to-accent-300/10" />
      
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, currentColor 15px, currentColor 16px)',
        color: '#2e2824',
      }} />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-dark-900 mb-4 leading-tight">
            Ready to Simplify Your Operations?
          </h2>
          <p className="text-lg md:text-xl text-dark-700 mb-6 md:mb-8 leading-relaxed font-light">
            Stop juggling multiple vendors and platforms. Get started with SindustryOS today 
            and see how one platform can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center text-base md:text-lg text-dark-900 border-b-2 border-dark-900 pb-1 hover:opacity-70 transition-opacity font-medium"
            >
              Get started
              <span className="ml-2">→</span>
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center text-base md:text-lg text-dark-600 hover:text-dark-900 transition-colors"
            >
              View pricing
            </a>
          </div>
          
          <p className="text-dark-600 text-sm mt-6 md:mt-8">
            Starting at $99/month • No long-term contracts • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}


