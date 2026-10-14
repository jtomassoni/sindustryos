export type ComparisonPage = {
  slug: string
  title: string
  description: string
  competitor: string
  summary: string
  rows: Array<{ feature: string; us: string; them: string }>
  verdict: string[]
  ctaHref: string
}

export const comparisons: ComparisonPage[] = [
  {
    slug: 'sindustryos-vs-squarespace',
    title: 'SindustryOS vs Squarespace for Restaurants & Bars',
    description:
      'See how a hospitality CMS compares to Squarespace for menus, specials, events, private dining, and digital signage.',
    competitor: 'Squarespace',
    summary:
      'Squarespace is a strong general website builder. SindustryOS is built for restaurants and bars that change menus, specials, and events every week, and may also need private dining CRM and TV signage.',
    rows: [
      { feature: 'Menu & specials as structured ops data', us: 'Yes', them: 'Mostly page/blocks' },
      { feature: 'Event calendar for bars', us: 'Built-in', them: 'DIY or plugin-like pages' },
      { feature: 'Private dining inquiry CRM', us: 'Add-on', them: 'Form only' },
      { feature: 'Digital signage sync', us: 'Native product', them: 'Not included' },
      { feature: 'Design flexibility', us: 'Hospitality templates', them: 'Excellent general templates' },
      { feature: 'Starting price (site)', us: '$99/mo all-in hosting', them: 'Varies by plan + add-ons' },
    ],
    verdict: [
      'Choose Squarespace if you want maximum design freedom and rarely update ops content.',
      'Choose SindustryOS if specials, events, and guest-facing accuracy are weekly work, not a redesign project.',
    ],
    ctaHref: '/products/cms',
  },
  {
    slug: 'sindustryos-vs-agency',
    title: 'SindustryOS vs a Restaurant Website Agency',
    description:
      'Compare retaining a web agency versus running your restaurant or bar site on SindustryOS.',
    competitor: 'Traditional agency',
    summary:
      'Agencies excel at brand launches and custom design. Day-two operations (specials, events, private dining leads) are where retainers get expensive and queues get long.',
    rows: [
      { feature: 'Launch design quality', us: 'Strong, hospitality-focused', them: 'Often excellent' },
      { feature: 'Same-day specials update', us: 'Owner self-serve', them: 'Ticket / change request' },
      { feature: 'Monthly cost predictability', us: 'Flat product pricing', them: 'Retainer + change fees' },
      { feature: 'TV signage + website sync', us: 'Available', them: 'Usually separate vendors' },
      { feature: 'Private dining pipeline', us: 'Productized CRM', them: 'Custom build or email' },
      { feature: 'Cancel anytime', us: 'Yes', them: 'Often contract-bound' },
    ],
    verdict: [
      'Hire an agency when you need a full rebrand or complex custom integrations.',
      'Run SindustryOS when you need an always-current guest site without paying for every edit.',
    ],
    ctaHref: '/pricing',
  },
  {
    slug: 'sindustryos-vs-toast-website',
    title: 'SindustryOS vs Toast Website Tools',
    description:
      'How SindustryOS compares when your POS is Toast (or similar) but you still need a marketing site, events, and private dining.',
    competitor: 'Toast website tools',
    summary:
      'POS platforms optimize ordering and payments. Marketing websites, event calendars, private dining CRM, and bar signage are different jobs, often better as a focused hospitality layer.',
    rows: [
      { feature: 'POS / payments', us: 'Integrates / imports', them: 'Core strength' },
      { feature: 'Marketing site + SEO control', us: 'Primary focus', them: 'Secondary to POS' },
      { feature: 'Bar-first events & specials', us: 'First-class', them: 'Varies' },
      { feature: 'Private dining CRM', us: 'Dedicated product', them: 'Not the main job' },
      { feature: 'Digital signage', us: 'Yes', them: 'Separate or limited' },
      { feature: 'Independents & dive bars', us: 'Designed for', them: 'Broad restaurant base' },
    ],
    verdict: [
      'Keep your POS for tickets and payments.',
      'Use SindustryOS for the guest-facing website, events, private dining leads, and TVs, then connect data where it helps.',
    ],
    ctaHref: '/products',
  },
]

export function getComparisonBySlug(slug: string): ComparisonPage | undefined {
  return comparisons.find((c) => c.slug === slug)
}
