'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

import { INTERNAL_ROUTE } from '@/navigation'

export const FooterLanguage: React.FC = () => {
  const pathname = usePathname()

  switch (pathname) {
    case INTERNAL_ROUTE.INDEX:
    case INTERNAL_ROUTE.WORK: {
      {
        return 'TypeScript'
      }
    }
    case INTERNAL_ROUTE.USES: {
      return 'Markdown'
    }
  }
}
