'use client'

import { usePathname } from 'next/navigation'

import {
  HeaderNavItem,
  type HeaderNavItemProps,
} from '@/components/header/header-nav-item'
import { INTERNAL_ROUTE } from '@/navigation'

const navItems = [
  { label: 'Joe', href: INTERNAL_ROUTE.INDEX },
  { label: 'Work', href: INTERNAL_ROUTE.WORK },
  { label: 'Uses', href: INTERNAL_ROUTE.USES },
  { label: 'GitHub', href: 'https://github.com/josephmcg' },
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
