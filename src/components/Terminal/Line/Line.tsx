import { TerminalLineDeclaration } from '~/components/Terminal/Line/LineDeclaration'
import { TerminalLineString } from '~/components/Terminal/Line/LineString'
import type { Line, LineStandard } from '~/types'

type Props = {
  line: Line
  lineNumber: number
}

const LineGutter: React.FC<{ lineNumber: Props['lineNumber'] }> = ({
  lineNumber,
}) => {
  return (
    <div className="w-[4ch] flex-shrink-0 select-none pr-[2ch] text-right text-gray-500/40 md:w-[6ch]">
      <span>{lineNumber}</span>
    </div>
  )
}

const LineIndent: React.FC<{ indent: LineStandard['indent'] }> = ({
  indent,
}) => {
  if (!indent) {
    return
  }

  return <span>{' '.repeat(indent * 2)}</span>
}

export const TerminalLine: React.FC<Props> = ({ line, lineNumber }) => {
  if (line.isEmpty) {
    return <LineGutter lineNumber={lineNumber} />
  }

  return (
    <div className="relative flex px-4">
      <LineGutter lineNumber={lineNumber} />
      <div className="relative selection:bg-dark/25">
        <LineIndent indent={line.indent} />
        {'declaration' in line ? (
          <TerminalLineDeclaration line={line} />
        ) : line.type === 'string' ? (
          <TerminalLineString>{line.value}</TerminalLineString>
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
