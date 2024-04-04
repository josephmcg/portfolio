'use client'

import { usePathname } from 'next/navigation'

import { HeaderNavItem } from '~/components/Header/HeaderNavItem'
import { routes } from '~/constants'

const navItems = [
  { label: 'Joe', href: routes.index },
  { label: 'Work', href: routes.work },
  { label: 'Uses', href: routes.uses },
  { label: 'GitHub', href: 'https://github.com/josephmcg' },
]

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
