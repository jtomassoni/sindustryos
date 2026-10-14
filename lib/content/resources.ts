export type ResourceArticle = {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  category: string
  primaryProduct: { label: string; href: string }
  keywords: string[]
  sections: Array<{ heading: string; body: string[] }>
}

export const resources: ResourceArticle[] = [
  {
    slug: 'restaurant-website-builder-vs-agency',
    title: 'Restaurant Website Builder vs Agency: What Independents Should Choose',
    description:
      'Compare DIY website builders, agencies, and hospitality CMS tools for restaurants and bars — cost, speed, and who updates the menu.',
    datePublished: '2026-10-13',
    dateModified: '2026-10-13',
    category: 'Websites',
    primaryProduct: { label: 'Full Web CMS', href: '/products/cms' },
    keywords: ['restaurant website builder', 'restaurant website agency', 'bar website'],
    sections: [
      {
        heading: 'The real problem is not the homepage',
        body: [
          'Most restaurants already have a site. The problem is keeping menus, specials, events, and hours accurate when the people who know the truth are behind the bar — not in a Slack channel with a web vendor.',
          'Agencies are great at launch-day design. They are expensive at Tuesday 4pm when you 86 a special and your homepage still says “$5 wells all night.”',
        ],
      },
      {
        heading: 'Builder vs agency vs hospitality CMS',
        body: [
          'Generic builders (Squarespace, Wix) get you online fast, but menus and events are usually static pages or embeds that drift out of sync with the floor.',
          'Agencies deliver polish and strategy, then bill for every content change — or train a manager who never has time to use the CMS.',
          'A hospitality CMS like SindustryOS is built around menu sections, specials windows, and event calendars — the objects restaurants actually change weekly.',
        ],
      },
      {
        heading: 'What to look for before you buy',
        body: [
          'Can a non-technical owner update specials in under five minutes?',
          'Is hosting, SSL, and SEO basics included, or bolted on later?',
          'Does the same content power TV signage and private dining leads, or are those separate vendors again?',
        ],
      },
      {
        heading: 'A practical decision rule',
        body: [
          'If you need a one-off brand site and rarely change content, an agency or builder can work.',
          'If you run weekly specials, live music, or private events, prioritize an ops-first CMS so the website stays truthful without a ticket queue.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-update-restaurant-specials-without-chaos',
    title: 'How to Update Restaurant Specials Without Chaos',
    description:
      'A simple system for food and drink specials that stay accurate on your website, TVs, and staff answers — without texting screenshots.',
    datePublished: '2026-10-13',
    dateModified: '2026-10-13',
    category: 'Operations',
    primaryProduct: { label: 'Full Web CMS', href: '/products/cms' },
    keywords: ['restaurant specials management', 'happy hour website update', 'bar specials'],
    sections: [
      {
        heading: 'Why specials break first',
        body: [
          'Specials change by weekday, daypart, and exceptions (holidays, sell-outs). Spreadsheets and Instagram posts cannot keep every surface honest.',
          'Guests trust the TV over the server. If those disagree, you look disorganized — even when the kitchen is fine.',
        ],
      },
      {
        heading: 'One source of truth',
        body: [
          'Define specials as structured records: name, price, days, time windows, and exceptions — not as freeform blog posts.',
          'Publish once. Let the website and digital signage read the same schedule.',
        ],
      },
      {
        heading: 'A weekly rhythm that works',
        body: [
          'Sunday or Monday: lock the week’s food and drink specials in the CMS.',
          'Midweek: adjust only exceptions (86s, weather, private buyouts).',
          'Friday: glance at guest-facing surfaces before the rush — website, TVs, Google Business hours if needed.',
        ],
      },
    ],
  },
  {
    slug: 'digital-signage-for-bars-and-restaurants',
    title: 'Digital Signage for Bars and Restaurants That Guests Can Actually Read',
    description:
      'What matters for hospitality TV boards: viewing distance, specials rotators, events, and syncing with your website CMS.',
    datePublished: '2026-10-13',
    dateModified: '2026-10-13',
    category: 'Signage',
    primaryProduct: { label: 'Digital Signage', href: '/products/digital-signage' },
    keywords: ['restaurant digital signage', 'bar TV menu board', 'hospitality digital signage'],
    sections: [
      {
        heading: 'Design for ten to thirty feet',
        body: [
          'Bar TVs are not PowerPoint decks. High-contrast type, fewer words, and large prices beat busy photo slides.',
          'If a guest cannot read the special from a barstool, the board is decoration — not operations.',
        ],
      },
      {
        heading: 'Sync beats “someone’s USB stick”',
        body: [
          'The fastest way to age a bar is a TV still advertising last month’s trivia.',
          'Tie signage to the same specials and events calendar as the website so updates are automatic.',
        ],
      },
      {
        heading: 'What to put on rotation',
        body: [
          'Drink specials by daypart, food specials, upcoming events, and short announcements (kitchen delays, private events).',
          'Skip long paragraphs. Point guests to staff or the website for details.',
        ],
      },
    ],
  },
  {
    slug: 'private-dining-inquiry-system',
    title: 'Build a Private Dining Inquiry System That Converts',
    description:
      'How restaurants and bars capture private party leads, track follow-ups, and stop losing events in email threads.',
    datePublished: '2026-10-13',
    dateModified: '2026-10-13',
    category: 'Private dining',
    primaryProduct: { label: 'Private Dining', href: '/products/private-dining' },
    keywords: ['private dining software', 'restaurant event inquiry', 'private party CRM'],
    sections: [
      {
        heading: 'Email is not a CRM',
        body: [
          'Private dining revenue dies in buried inboxes: missing headcount, unclear budgets, no owner assigned to follow up.',
          'A simple inquiry form plus a pipeline beats a pretty PDF packet that nobody updates.',
        ],
      },
      {
        heading: 'Fields that actually matter',
        body: [
          'Date flexibility, guest count, space preference, budget range, food vs bar focus, and how they heard about you.',
          'Capture notes after every call so the next person on shift can continue the conversation.',
        ],
      },
      {
        heading: 'Response speed wins the booking',
        body: [
          'Corporate planners and birthday hosts book the first venue that answers clearly.',
          'Automate confirmation of receipt, then work the deal personally — software should remove admin, not replace hospitality.',
        ],
      },
    ],
  },
  {
    slug: 'stop-juggling-restaurant-vendors',
    title: 'Stop Juggling Restaurant Vendors: A Consolidation Checklist',
    description:
      'Audit the tools your restaurant or bar pays for — website, social, signage, scheduling, delivery — and decide what belongs in one platform.',
    datePublished: '2026-10-13',
    dateModified: '2026-10-13',
    category: 'Strategy',
    primaryProduct: { label: 'See products', href: '/products' },
    keywords: ['restaurant vendor consolidation', 'all-in-one restaurant software', 'replace restaurant vendors'],
    sections: [
      {
        heading: 'List every monthly bill that touches guests or staff',
        body: [
          'Website host, agency retainer, menu PDF designer, TV software, private event form tool, scheduling app, social scheduler, delivery tablet fees.',
          'If two tools store the same menu or event, one of them is waste.',
        ],
      },
      {
        heading: 'Consolidate guest-facing content first',
        body: [
          'Website + specials + events + signage share the same facts. Those should share a system.',
          'POS and payroll can stay specialized; guest truth should not.',
        ],
      },
      {
        heading: 'Score tools on owner time, not feature count',
        body: [
          'The best stack is the one a manager will actually update on a busy week.',
          'SindustryOS starts with CMS, private dining, and signage — the surfaces guests see — then expands into deeper ops.',
        ],
      },
    ],
  },
  {
    slug: 'bar-event-calendar-best-practices',
    title: 'Bar Event Calendar Best Practices for Websites That Drive Turnout',
    description:
      'How bars should structure live music, trivia, and recurring events so search engines and regulars both understand the schedule.',
    datePublished: '2026-10-13',
    dateModified: '2026-10-13',
    category: 'Events',
    primaryProduct: { label: 'Full Web CMS', href: '/products/cms' },
    keywords: ['bar event calendar', 'restaurant events website', 'live music calendar bar'],
    sections: [
      {
        heading: 'Recurring vs one-off events',
        body: [
          'Trivia every Tuesday should be a recurring rule with exceptions — not 52 manual posts.',
          'One-off concerts need date, start time, cover, and a clear “sold out” state.',
        ],
      },
      {
        heading: 'Make the calendar crawlable',
        body: [
          'Dedicated event pages (or structured event objects) beat image-only Instagram dumps for Google and for guests bookmarking your site.',
          'Include venue area tags if you have a patio, back room, or main bar stage.',
        ],
      },
      {
        heading: 'Promote without triple entry',
        body: [
          'When the calendar is the source of truth, your homepage highlights and TV boards can pull the next three events automatically.',
        ],
      },
    ],
  },
]

export function getResourceBySlug(slug: string): ResourceArticle | undefined {
  return resources.find((r) => r.slug === slug)
}
