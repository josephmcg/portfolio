'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

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
        <a
          key={item.label}
          className={clsx(
            'px-3 py-1 hover:text-gray-200',
            pathname === item.href ? 'text-gray-200' : 'text-gray-400',
          )}
          href={item.href}
          target={
            Object.values(routes).includes(item.href) ? undefined : '_blank'
          }
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
