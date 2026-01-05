import Button from '@/components/ui/Button'

interface PricingDisplayProps {
  price: string
  period?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  features?: string[]
}

export default function PricingDisplay({
  price,
  period = '/month',
  description,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  features,
}: PricingDisplayProps) {
  return (
    <div className="bg-gradient-to-br from-primary-600/20 to-primary-500/10 border-2 border-primary-500 rounded-2xl p-8 text-center">
      <div className="mb-6">
        <div className="flex items-baseline justify-center gap-2 mb-2">
          <span className="text-5xl font-bold text-white">{price}</span>
          <span className="text-xl text-gray-400">{period}</span>
        </div>
        {description && (
          <p className="text-gray-300 mt-4">{description}</p>
        )}
      </div>

      {features && features.length > 0 && (
        <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-300">
              <span className="text-primary-500 mr-3 mt-1">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Button href={ctaHref} variant="primary" size="lg" className="w-full">
        {ctaText}
      </Button>
    </div>
  )
}


