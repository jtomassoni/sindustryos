import { MetadataRoute } from 'next'
import { comparisons } from '@/lib/content/comparisons'
import { caseStudies } from '@/lib/content/case-studies'
import { locations } from '@/lib/content/locations'
import { resources as staticResources } from '@/lib/content/resources'
import { getPublishedPosts } from '@/lib/blog/posts'
import { hasDatabase } from '@/lib/db'
import { SITE_URL } from '@/lib/site'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date('2026-10-13')

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/products`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/products/cms`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/products/private-dining`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/products/digital-signage`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/features`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/partners`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/resources`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/support`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  let resourceArticles = staticResources
  if (hasDatabase()) {
    try {
      resourceArticles = await getPublishedPosts()
    } catch {
      resourceArticles = staticResources
    }
  }

  const resourceRoutes = resourceArticles.map((r) => ({
    url: `${SITE_URL}/resources/${r.slug}`,
    lastModified: new Date(r.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const comparisonRoutes = comparisons.map((c) => ({
    url: `${SITE_URL}/compare/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${SITE_URL}/customers/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const locationRoutes = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes,
    ...resourceRoutes,
    ...comparisonRoutes,
    ...caseStudyRoutes,
    ...locationRoutes,
  ]
}
