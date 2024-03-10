import { TerminalLineString } from '~/components/Terminal/Line/LineString'
import type { LineDeclaration } from '~/types'

type Props = {
  line: LineDeclaration
}

export const TerminalLineDeclaration: React.FC<Props> = ({ line }) => {
  return (
    <>
      <span className="text-hue3">{line.declaration} </span>
      <span className="text-hue6">{line.name} </span>
      <span className="text-hue1">= </span>
      {line.type === 'string' ? (
        <TerminalLineString>{line.value}</TerminalLineString>
      ) : (
        <span className={line.type === 'bracket' ? 'text-plain' : 'text-hue6'}>
          {line.value}
        </span>
      )}
    </>
  )
}
