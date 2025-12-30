import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/1a1d20/f56b1a?text=Warm+Restaurant+Atmosphere"
          alt="Warm, inviting restaurant atmosphere"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-800/60 to-dark-900/80" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            One Platform Replaces{' '}
            <span className="text-primary-500">Multiple Vendors</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Instead of needing a social media company, website company, manager for delivery apps, 
            chef for menu optimization, scheduling manager...{' '}
            <span className="text-primary-400 font-semibold">we do it all.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contact" variant="primary" size="lg" className="min-w-[200px]">
              Get Started
            </Button>
            <Button href="/products" variant="outline" size="lg" className="min-w-[200px]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

