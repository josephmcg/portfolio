import { TerminalString } from '~/components/Terminal/TerminalString'
import type { LineDeclaration } from '~/types'

type Props = {
  line: LineDeclaration
}

export const TerminalDeclaration: React.FC<Props> = ({ line }) => {
  return (
    <>
      <span className="text-hue3">{line.declaration} </span>
      <span className="text-hue6">{line.name} </span>
      <span className="text-hue1">= </span>
      {line.type === 'string' ? (
        <TerminalString>{line.value}</TerminalString>
      ) : (
        <span className={line.type === 'bracket' ? 'text-plain' : 'text-hue6'}>
          {line.value}
        </span>
      )}
    </>
  )
}
