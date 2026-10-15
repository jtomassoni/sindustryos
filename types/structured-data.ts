export interface Organization {
  '@context': string
  '@type': 'Organization' | 'Organization'[]
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
  contactPoint?: {
    '@type': 'ContactPoint'
    contactType: string
    email?: string
    url?: string
    areaServed: string
    availableLanguage: string
  }
}

export interface SoftwareApplication {
  '@context': string
  '@type': 'SoftwareApplication'
  name: string
  description: string
  applicationCategory: string
  operatingSystem: string
  url: string
  offers: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
    priceValidUntil: string
    availability: string
  }
  brand: {
    '@type': 'Brand'
    name: string
  }
}

export interface Product {
  '@context': string
  '@type': 'Product'
  name: string
  description: string
  brand: {
    '@type': 'Brand'
    name: string
  }
  offers: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
    priceValidUntil: string
    availability: string
    url?: string
  }
}

export interface Service {
  '@context': string
  '@type': 'Service'
  serviceType: string
  provider: {
    '@type': 'Organization'
    name: string
  }
  areaServed: {
    '@type': 'Country'
    name: string
  }
  description: string
  url?: string
}

export interface FAQPageSchema {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

export interface BreadcrumbListSchema {
  '@context': string
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item?: string
  }>
}

export interface ArticleSchema {
  '@context': string
  '@type': 'Article'
  headline: string
  description: string
  datePublished: string
  dateModified: string
  author: {
    '@type': 'Organization' | 'Person'
    name: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
  mainEntityOfPage: string
}
