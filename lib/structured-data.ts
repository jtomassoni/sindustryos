import { absoluteUrl, SITE_NAME, SITE_URL } from '@/lib/site'
import type {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
  Organization,
  Product,
  Service,
  SoftwareApplication,
} from '@/types/structured-data'

const PRICE_VALID_UNTIL = '2027-12-31'

export function getOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/logo.svg'),
    description:
      'All-in-one restaurant and bar management platform that replaces multiple vendors with one comprehensive solution for independents.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@sindustryos.com',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  }
}

export function getSoftwareApplicationSchema(): SoftwareApplication {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    description:
      'Restaurant and bar management platform with website CMS, private dining CRM, and digital signage.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: 'https://schema.org/InStock',
    },
  }
}

export function getProductSchema(options?: {
  name?: string
  description?: string
  price?: string
  url?: string
}): Product {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: options?.name ?? 'SindustryOS Full Web CMS',
    description:
      options?.description ??
      'Complete website CMS for restaurants and bars with menu management, event calendar, specials, and more.',
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: options?.price ?? '99',
      priceCurrency: 'USD',
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: 'https://schema.org/InStock',
      url: options?.url ?? absoluteUrl('/products/cms'),
    },
  }
}

export function getServiceSchema(): Service {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Restaurant Management Software',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description:
      'Comprehensive restaurant and bar management platform including website CMS, menu management, event calendar, private dining CRM, and digital signage.',
    url: SITE_URL,
  }
}

export function getFaqSchema(
  items: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; path?: string }>
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem' as const,
        position: index + 2,
        name: item.name,
        ...(item.path ? { item: absoluteUrl(item.path) } : {}),
      })),
    ],
  }
}

export function getArticleSchema(options: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
}): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo.svg'),
      },
    },
    mainEntityOfPage: absoluteUrl(options.path),
  }
}
