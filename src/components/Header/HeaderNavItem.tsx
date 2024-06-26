import clsx from 'clsx'
import Link from 'next/link'

import { routes } from '~/constants'

type Props = {
  label: string
  href: string
  isActive: boolean
}

export const HeaderNavItem: React.FC<Props> = ({ label, href, isActive }) => {
  const classes = clsx(
    'px-3 py-1 hover:text-gray-200',
    isActive ? 'text-gray-200' : 'text-gray-400',
  )

  const isInternal = Object.values(routes).includes(href)

  return isInternal ? (
    <Link href={href} className={classes}>
      {label}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {label}
    </a>
  )
}
