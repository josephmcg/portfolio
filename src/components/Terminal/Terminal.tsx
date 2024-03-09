import { TerminalControls } from '~/components/Terminal/Header/TerminalControls'
import { TerminalBody } from '~/components/Terminal/TerminalBody'
import { TerminalFooter } from '~/components/Terminal/TerminalFooter'
import { TerminalNav } from '~/components/Terminal/TerminalNav'

export const Terminal: React.FC = () => {
  return (
    <div className="bg-primary flex h-[600px] w-full max-w-5xl flex-col overflow-hidden rounded-lg shadow-2xl">
      <header className="bg-secondary flex w-full items-center justify-between px-3 py-2.5 shadow">
        <TerminalControls />
        <TerminalNav />
      </header>
      <TerminalBody />
      <TerminalFooter />
    </div>
  )
}
