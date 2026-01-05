export interface Organization {
  '@context': string
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
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
}

export interface LocalBusiness {
  '@context': string
  '@type': 'LocalBusiness'
  name: string
  description: string
  url: string
  address: {
    '@type': 'PostalAddress'
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
}


