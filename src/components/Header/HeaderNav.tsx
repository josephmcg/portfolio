import { routes } from '~/constants'

const navItems = [
  { label: 'Joe', href: routes.index },
  { label: 'Work', href: routes.work },
  { label: 'Uses', href: routes.uses },
  { label: 'GitHub', href: 'https://github.com/josephmcg', external: true },
]

export const HeaderNav: React.FC = () => {
  return (
    <div className="flex divide-x divide-gray-600/70 font-mono text-xs uppercase text-gray-400">
      {navItems.map((item) => (
        <a
          key={item.label}
          className="px-3 py-1 hover:text-gray-200"
          href={item.href}
          target={item.external ? '_blank' : undefined}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
