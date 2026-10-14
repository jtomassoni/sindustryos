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
    title: 'How Monaghan’s Bar and Grill Turns Local Demand into Private Dining Requests',
    description:
      'Since launch, Monaghan’s Bar and Grill in Denver has seen about 1–2 private dining requests per month — parties of roughly 20–100 — from a site that catches nearby wedding, school, and gathering demand.',
    business: 'Monaghan’s Bar and Grill',
    location: 'Denver, CO',
    website: 'https://www.monaghansbarandgrilldenver.com/',
    quote:
      'This platform has become a true partner to the business. It’s built by people who understand the industry, so they know our concerns and have never delivered anything less than amazing.',
    quoteAttribution: 'Victoria, Owner',
    challenges: [
      'Keeping a busy neighborhood bar’s guest-facing information accurate without a full-time web person',
      'Sitting near built-in event demand — a wedding venue (Mountain Crust), a high school (Mullen), and a cemetery — without a clean way to catch private dining inquiries',
      'Avoiding the multi-vendor stack that creates conflicting menus, events, and specials',
    ],
    results: [
      'About 1–2 private dining requests per month since the site launched, for parties of roughly 20–100 people',
      'A guest-facing site that captures high-intent local leads instead of letting them die in email or voicemail',
      'A single platform treated as an ongoing partner, not a one-off website project',
    ],
    productsUsed: ['Full Web CMS', 'Private Dining Inquiries', 'Hospitality-focused support'],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
