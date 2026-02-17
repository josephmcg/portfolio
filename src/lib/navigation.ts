export const INTERNAL_LINK = {
  INDEX: '/',
  WORK: '/work',
  USES: '/uses',
} as const

export type InternalLink = (typeof INTERNAL_LINK)[keyof typeof INTERNAL_LINK]

export const EXTERNAL_LINK = {
  GITHUB: 'https://github.com/josephmcg',
} as const

export type ExternalLink = (typeof EXTERNAL_LINK)[keyof typeof EXTERNAL_LINK]
