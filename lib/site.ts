export const SITE_URL = 'https://www.sindustryos.com'
export const SITE_NAME = 'SindustryOS'
export const SITE_TAGLINE =
  'Analytics engine for independent restaurants and bars—plus customizable website, private dining, signage, and social'

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/** Product URLs that are not ready for search indexing */
export const NOINDEX_PATHS = [
  '/products/online-ordering',
  '/products/back-of-house',
  '/products/staff-scheduling',
  '/admin',
  '/admin/login',
] as const

export const COMING_SOON_PRODUCTS = [
  '/products/online-ordering',
  '/products/back-of-house',
  '/products/staff-scheduling',
] as const
