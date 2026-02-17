import type { MetadataRoute } from 'next'

import { INTERNAL_LINK } from '@/lib/navigation'

const pathnames = Object.values(INTERNAL_LINK)
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
