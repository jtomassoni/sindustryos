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
      'Menu Insights for independent restaurants and bars, plus website CMS, private dining CRM, and digital signage in one dashboard.',
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
      'Menu Insights from sales data, plus restaurant website CMS, private dining CRM, and digital signage.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      price: '149',
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
    name: options?.name ?? 'SindustryOS Menu Insights',
    description:
      options?.description ??
      'Spot leakage, bad margins, and menu opportunities from one month of sales data.',
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: options?.price ?? '149',
      priceCurrency: 'USD',
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: 'https://schema.org/InStock',
      url: options?.url ?? absoluteUrl('/products/ingredient-optimization'),
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
      'Menu Insights for restaurants and bars, plus website CMS, private dining CRM, and digital signage in one dashboard.',
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
