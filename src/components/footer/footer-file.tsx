'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

import { INTERNAL_LINK } from '@/lib/navigation'

export const FooterFile: React.FC = () => {
  const pathname = usePathname()

  switch (pathname) {
    case INTERNAL_LINK.INDEX: {
      return '/joe.ts'
    }
    case INTERNAL_LINK.WORK: {
      return `${pathname}.ts`
    }
    case INTERNAL_LINK.USES: {
      return `${pathname}.md`
    }
  }
}
