import type { MetadataRoute } from 'next'

import { routes } from '~/constants'

const pathnames = Object.values(routes)
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
