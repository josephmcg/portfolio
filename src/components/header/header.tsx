import { HeaderControls } from '@/components/header/header-controls'
import { HeaderNav } from '@/components/header/header-nav'

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between bg-secondary px-3 py-2 shadow">
      <HeaderControls />
      <HeaderNav />
    </header>
  )
}
