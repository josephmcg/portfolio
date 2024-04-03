'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

import { routes } from '~/constants'

export const FooterFile: React.FC = () => {
  const pathname = usePathname()

  switch (pathname) {
    case routes.index: {
      return '/joe.ts'
    }
    case routes.work: {
      return '/work.ts'
    }
    case routes.uses: {
      return '/uses.md'
    }
  }
}
