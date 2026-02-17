'use client'

import { usePathname } from 'next/navigation'

import {
  HeaderNavItem,
  type HeaderNavItemProps,
} from '@/components/header/header-nav-item'
import { EXTERNAL_LINK, INTERNAL_LINK } from '@/lib/navigation'

const navItems = [
  { label: 'Joe', href: INTERNAL_LINK.INDEX },
  { label: 'Work', href: INTERNAL_LINK.WORK },
  { label: 'Uses', href: INTERNAL_LINK.USES },
  { label: 'GitHub', href: EXTERNAL_LINK.GITHUB },
] as const satisfies Omit<HeaderNavItemProps, 'isActive'>[]

export const HeaderNav: React.FC = () => {
  const pathname = usePathname()

  return (
    <div className="flex divide-x divide-gray-600/70 font-mono text-xs uppercase">
      {navItems.map((item) => (
        <HeaderNavItem
          key={item.href}
          isActive={pathname === item.href}
          {...item}
        />
      ))}
    </div>
  )
}
