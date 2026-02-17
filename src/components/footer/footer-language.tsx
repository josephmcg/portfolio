'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

import { INTERNAL_LINK } from '@/lib/navigation'

export const FooterLanguage: React.FC = () => {
  const pathname = usePathname()

  switch (pathname) {
    case INTERNAL_LINK.INDEX:
    case INTERNAL_LINK.WORK: {
      {
        return 'TypeScript'
      }
    }
    case INTERNAL_LINK.USES: {
      return 'Markdown'
    }
  }
}
