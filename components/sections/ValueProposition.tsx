const pillars = [
  {
    title: 'Website',
    description: 'Your site, menus, and specials — managed in the same place you already work.',
  },
  {
    title: 'Digital signage',
    description: 'In-house screens that stay in sync without another vendor login.',
  },
  {
    title: 'External inquiries',
    description: 'Private dining and event leads land in the dashboard you are already in.',
  },
]

export default function ValueProposition() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-transparent to-dark-900/40" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-900/15 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-12 md:mb-14">
          <p className="text-accent-400 text-sm md:text-base font-medium tracking-wide uppercase mb-3">
            Already in your dashboard
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-4 leading-tight text-balance">
            The rest is nice to have — in the same place.
          </h2>
          <p className="text-base md:text-lg text-dark-300 leading-relaxed font-light max-w-2xl">
            Website, digital signage, and external inquiries combine into one easy dashboard you are
            already going to be in for menu insights. No extra stack to learn.
          </p>
          <p className="mt-4 text-sm md:text-base text-primary-300/90 italic max-w-2xl leading-relaxed">
            For the cost of the sub: SEO that brings in strangers, Monaghan’s ~1–2 private dining
            requests a month, or a margin fix that covers the bill — pick your favorite story.
          </p>
        </div>

        <div className="max-w-5xl border-t border-dark-600/80 pt-10 md:pt-12 mb-14 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {pillars.map((pillar, index) => (
              <div key={pillar.title}>
                <p className="text-accent-400 font-mono text-sm mb-2">0{index + 1}</p>
                <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-dark-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="text-accent-400 text-sm md:text-base font-medium tracking-wide uppercase mb-3">
            Super premium
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4 leading-tight">
            Direct connections to Square, Toast, and other modern POS systems.
          </h3>
          <p className="text-base md:text-lg text-dark-300 leading-relaxed font-light max-w-2xl">
            No downloading or uploading data between systems. Premium models stay connected to your
            POS so insights just know — and keep showing up as the business runs.
          </p>
        </div>
      </div>
    </section>
  )
}
