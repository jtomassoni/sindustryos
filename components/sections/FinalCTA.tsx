import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600/20 via-primary-500/10 to-dark-900 border-y border-primary-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Simplify Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Stop juggling multiple vendors and platforms. Get started with SindustryOS today 
            and see how one platform can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contact" variant="primary" size="lg" className="min-w-[200px]">
              Get Started
            </Button>
            <Button href="/pricing" variant="secondary" size="lg" className="min-w-[200px]">
              View Pricing
            </Button>
          </div>
          
          <p className="text-gray-400 text-sm mt-8">
            Starting at $99/month • No long-term contracts • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

