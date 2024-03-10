import { HeaderControls } from '~/components/Header/HeaderControls'
import { HeaderNav } from '~/components/Header/HeaderNav'

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between bg-secondary px-3 py-2.5 shadow">
      <HeaderControls />
      <HeaderNav />
    </header>
  )
}
