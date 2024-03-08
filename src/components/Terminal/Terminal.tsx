import { TerminalBody } from '~/components/Terminal/TerminalBody'
import { TerminalControls } from '~/components/Terminal/TerminalControls'
import { TerminalFooter } from '~/components/Terminal/TerminalFooter'
import { TerminalNav } from '~/components/Terminal/TerminalNav'

export const Terminal: React.FC = () => {
  return (
    <div className="flex h-[600px] w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-gray-800 shadow-2xl">
      <div className="flex w-full items-center justify-between bg-gray-700/90 px-3 py-2.5 shadow">
        <TerminalControls />
        <TerminalNav />
      </div>
      <TerminalBody />
      <TerminalFooter />
    </div>
  )
}
