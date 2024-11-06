import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

import { INTERNAL_ROUTE } from '~/navigation'

export interface HeaderNavItemProps {
  label: string
  href: string
  isActive: boolean
}

export const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  label,
  href,
  isActive,
}) => {
  const classes = clsx(
    'flex gap-1 px-3 py-1 hover:text-gray-200',
    isActive ? 'text-gray-200' : 'text-gray-400',
  )

  const isInternal = Object.values(INTERNAL_ROUTE).includes(href)

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
      <ArrowTopRightOnSquareIcon className="h-3 w-3" />
    </a>
  )
}
