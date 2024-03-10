import { TerminalDeclaration } from '~/components/Terminal/TerminalDeclaration'
import type { Line } from '~/types'

type Props = {
  line: Line
  lineNumber: number
}

export const Terminal: React.FC<Props> = ({ line, lineNumber }) => {
  return (
    <div className="relative flex px-4">
      <div className="w-[4ch] flex-shrink-0 select-none pr-[2ch] text-right text-gray-500/40 md:w-[6ch]">
        <span>{lineNumber}</span>
      </div>
      <div className="relative selection:bg-dark/25">
        {line.indent ? ' '.repeat(line.indent * 2) : undefined}
        {'isEmpty' in line ? (
          ''
        ) : 'declaration' in line ? (
          <TerminalDeclaration line={line} />
        ) : line.type === 'string' ? (
          <span className="text-hue4">&apos;{line.value}&apos;</span>
        ) : (
          <span
            className={line.type === 'bracket' ? 'text-plain' : 'text-hue6'}
          >
            {line.value}
          </span>
        )}
        {line.indent ? ',' : ''}
        {line.comment ? (
          <span className="text-dark">{` // ${line.comment}`}</span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
