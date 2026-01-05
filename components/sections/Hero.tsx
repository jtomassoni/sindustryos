import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-warm-50 via-primary-50 to-warm-100">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
          color: '#2e2824',
        }} />
      </div>
      
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent" />
      
      {/* Subtle diagonal lines */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
        color: '#2e2824',
      }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-dark-900 mb-6 leading-[1.1] tracking-tight">
            Stop juggling vendors.
            <br />
            <span className="text-primary-600 italic">Run your place.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-dark-700 mb-8 leading-relaxed max-w-2xl font-light">
            Instead of needing a social media company, website company, manager for delivery apps, 
            chef for menu optimization, scheduling manager...{' '}
            <span className="text-dark-900 font-normal">we do it all.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
            <a
              href="/contact"
              className="inline-flex items-center text-lg text-dark-900 border-b-2 border-primary-500 pb-1 hover:border-primary-600 transition-colors font-medium"
            >
              Get started
              <span className="ml-2">→</span>
            </a>
            <a
              href="/products"
              className="inline-flex items-center text-lg text-dark-600 hover:text-dark-900 transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

