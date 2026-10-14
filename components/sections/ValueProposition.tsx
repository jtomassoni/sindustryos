const pillars = [
  {
    title: 'Website & menus',
    description:
      'Publish menus, specials, and events without another vendor or agency ticket for every change.',
  },
  {
    title: 'Digital signage',
    description:
      'In-house screens stay in sync with what you publish—no separate login to forget.',
  },
  {
    title: 'Private dining leads',
    description:
      'High-intent party requests land in the same dashboard instead of dying in email.',
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
            Same dashboard
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-4 leading-tight text-balance">
            After the read, run the guest-facing stack in one place.
          </h2>
          <p className="text-base md:text-lg text-dark-300 leading-relaxed font-light max-w-2xl">
            Website, signage, and private dining inquiries live where you already check Menu
            Insights—instead of Squarespace plus a spreadsheet plus another signage login.
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
            Premium plans
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4 leading-tight">
            Direct Square, Toast, and modern POS connections.
          </h3>
          <p className="text-base md:text-lg text-dark-300 leading-relaxed font-light max-w-2xl">
            No downloading and re-uploading files between systems. Connected plans keep feeding
            insights as the business runs.
          </p>
        </div>
      </div>
    </section>
  )
}
