'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

import { routes } from '~/constants'

export const FooterLanguage: React.FC = () => {
  const pathname = usePathname()

  switch (pathname) {
    case routes.index:
    case routes.work: {
      {
        return 'TypeScript'
      }
    }
    case routes.uses: {
      return 'Markdown'
    }
  }
}
