'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

import { INTERNAL_ROUTE } from '@/navigation'

export const FooterFile: React.FC = () => {
  const pathname = usePathname()

  switch (pathname) {
    case INTERNAL_ROUTE.INDEX: {
      return '/joe.ts'
    }
    case INTERNAL_ROUTE.WORK: {
      return `${pathname}.ts`
    }
    case INTERNAL_ROUTE.USES: {
      return `${pathname}.md`
    }
  }
}
