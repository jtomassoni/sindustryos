export type LocationPage = {
  slug: string
  city: string
  region: string
  title: string
  description: string
  intro: string[]
  localAngles: string[]
  faqs: Array<{ question: string; answer: string }>
}

export const locations: LocationPage[] = [
  {
    slug: 'denver',
    city: 'Denver',
    region: 'CO',
    title: 'Restaurant & Bar Website Software in Denver, CO',
    description:
      'SindustryOS helps Denver restaurants and bars run websites, specials, events, private dining inquiries, and digital signage without juggling vendors.',
    intro: [
      'Denver independents compete on atmosphere and regularity: weekly specials, live music, sports nights, and private buyouts. Your website and TVs have to keep up.',
      'SindustryOS is built for that pace, and already powers hospitality operators in the Denver market.',
    ],
    localAngles: [
      'Neighborhood bars that need accurate happy hour and event calendars',
      'Venues near wedding spots, schools, and gathering places that need to catch private dining inquiries',
      'Operators who want one system instead of an agency plus three point tools',
    ],
    faqs: [
      {
        question: 'Do you only work with Denver restaurants?',
        answer:
          'No. We serve restaurants and bars across the United States, with strong roots and live customer sites in Denver.',
      },
      {
        question: 'Can you replace our current Denver web vendor?',
        answer:
          'Yes. Most teams start with the Full Web CMS ($99/month) and migrate menus, events, and specials into one dashboard.',
      },
    ],
  },
  {
    slug: 'baltimore',
    city: 'Baltimore',
    region: 'MD',
    title: 'Restaurant & Bar Management Software in Baltimore, MD',
    description:
      'SindustryOS helps Baltimore restaurants and bars consolidate website CMS, private dining leads, and digital signage into one platform.',
    intro: [
      'Baltimore’s independent restaurants and bars win on personality: crab specials, trivia, live music, and private events. Guests notice when the site and TVs disagree.',
      'SindustryOS gives owners a single place to publish menus, specials, events, and signage without paying an agency for every edit.',
    ],
    localAngles: [
      'Bars that need recurring event calendars guests can trust',
      'Restaurants building a private dining pipeline beyond email',
      'Teams consolidating website + signage vendors into one bill',
    ],
    faqs: [
      {
        question: 'Is SindustryOS available in Baltimore?',
        answer:
          'Yes. The platform is web-based and available to restaurants and bars throughout the United States, including Baltimore.',
      },
      {
        question: 'What is the best starting package?',
        answer:
          'Most venues start with Full Web CMS at $99/month. Add Private Dining ($49) and Digital Signage ($99) as needed, or bundle for $199/month.',
      },
    ],
  },
]

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug)
}
