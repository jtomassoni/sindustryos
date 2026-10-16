import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

interface Crumb {
  label: string
  href?: string
}

interface ProductFoldProps {
  crumbs: Crumb[]
  eyebrow?: string
  title: string
  lede: string
  price?: string
  points: string[]
  primaryHref?: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function ProductFold({
  crumbs,
  eyebrow,
  title,
  lede,
  price,
  points,
  primaryHref = '/contact',
  primaryLabel,
  secondaryHref = '/pricing',
  secondaryLabel = 'View pricing',
}: ProductFoldProps) {
  return (
    <section className="bg-dark-900 pt-4 pb-6 md:pt-5 md:pb-8">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={crumbs} />
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-8">
          <div>
            {eyebrow ? (
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary-400">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mb-2 text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h1>
            <p className="mb-3 max-w-xl text-base leading-snug text-gray-300 md:text-lg">{lede}</p>
            {price ? <p className="mb-3 text-base font-semibold text-primary-400">{price}</p> : null}
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button href={primaryHref} variant="primary" size="md">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="outline" size="md">
                {secondaryLabel}
              </Button>
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {points.map((point) => (
              <li
                key={point}
                className="rounded-lg border border-dark-700 bg-dark-800 px-3 py-2 text-sm text-gray-200"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
