export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

export function uniqueSlug(base: string, existing: Set<string>): string {
  let slug = slugify(base) || 'untitled'
  if (!existing.has(slug)) return slug
  let i = 2
  while (existing.has(`${slug}-${i}`)) i += 1
  return `${slug}-${i}`
}
