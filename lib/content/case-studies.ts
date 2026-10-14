export type CaseStudy = {
  slug: string
  title: string
  description: string
  business: string
  location: string
  website?: string
  quote: string
  quoteAttribution: string
  challenges: string[]
  results: string[]
  productsUsed: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'monaghans-bar-and-grill',
    title: 'How Monaghan’s Bar and Grill Runs Guest-Facing Ops with SindustryOS',
    description:
      'Monaghan’s Bar and Grill in Denver uses SindustryOS as a partner for website and operations — built by people who understand hospitality.',
    business: 'Monaghan’s Bar and Grill',
    location: 'Denver, CO',
    website: 'https://www.monaghansbarandgrilldenver.com/',
    quote:
      'This platform has become a true partner to the business. It’s built by people who understand the industry, so they know our concerns and have never delivered anything less than amazing.',
    quoteAttribution: 'Victoria, Owner',
    challenges: [
      'Keeping a busy neighborhood bar’s guest-facing information accurate without a full-time web person',
      'Avoiding the multi-vendor stack that creates conflicting menus, events, and specials',
      'Working with a product team that understands hospitality realities — not just generic SaaS',
    ],
    results: [
      'A single platform treated as an ongoing partner, not a one-off website project',
      'Industry-aware support and product decisions that match how bars actually operate',
      'Confidence that guest-facing systems will keep pace with the floor',
    ],
    productsUsed: ['Full Web CMS', 'Hospitality-focused support'],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
