import type { MetadataRoute } from 'next'

import { INTERNAL_ROUTE } from '@/navigation'

const pathnames = Object.values(INTERNAL_ROUTE)
const host = 'https://josephmcg.dev'

function getUrl(pathname: string): string {
  return `${host}${pathname === '/' ? '' : pathname}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pathnames.map((pathname) => ({
    url: getUrl(pathname),
    lastModified: new Date(),
  }))
}

export const dynamic = 'force-static'
