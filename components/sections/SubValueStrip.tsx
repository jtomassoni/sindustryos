const claims = [
  {
    product: 'Private Dining',
    claim: 'Catch a few high-intent private dining requests a month: parties of 20-100.',
  },
  {
    product: 'Full Web CMS',
    claim: 'We rip SEO so people who never would have noticed you walk through the door.',
  },
  {
    product: 'Menu Insights',
    claim: 'Fix one bad-margin item and you can cover months of the subscription.',
  },
  {
    product: 'Digital Signage',
    claim: 'One extra special sold because someone saw it on the screen pays for itself.',
  },
]

export default function SubValueStrip() {
  return (
    <section className="relative py-14 md:py-16 bg-dark-900 border-y border-dark-700/80">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="text-accent-400 text-sm font-medium tracking-wide uppercase mb-3">
            For the cost of one 4-top
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-tight text-balance">
            Optimize your shit. Slightly aggressive marketing.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl">
          {claims.map((item) => (
            <div key={item.product} className="border-l-2 border-primary-500 pl-5">
              <p className="text-primary-400 text-sm font-medium mb-2">{item.product}</p>
              <p className="text-lg text-white font-display font-medium leading-snug">
                {item.claim}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
