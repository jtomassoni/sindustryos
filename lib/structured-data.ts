import { Organization, Product, Service, LocalBusiness } from '@/types/structured-data'

export function getOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SindustryOS',
    url: 'https://sindustryos.com',
    logo: 'https://sindustryos.com/logo.png',
    description: 'All-in-one restaurant and bar management platform that replaces multiple vendors with one comprehensive solution.',
    sameAs: [],
  }
}

export function getProductSchema(): Product {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'SindustryOS Full Web CMS',
    description: 'Complete website CMS for restaurants and bars with menu management, event calendar, specials, and more.',
    brand: {
      '@type': 'Brand',
      name: 'SindustryOS',
    },
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
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
      name: 'SindustryOS',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Comprehensive restaurant and bar management platform including website CMS, menu management, event calendar, staff scheduling, and more.',
  }
}

export function getLocalBusinessSchema(): LocalBusiness {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SindustryOS',
    description: 'All-in-one restaurant and bar management platform',
    url: 'https://sindustryos.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denver',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
  }
}

