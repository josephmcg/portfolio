import { TerminalLineDeclaration } from '~/components/Terminal/Line/LineDeclaration'
import { TerminalLineString } from '~/components/Terminal/Line/LineString'
import type { Line, LineStandard } from '~/types'

type LineContainerProps = {
  lineNumber: number
}

const LineContainer: React.FC<React.PropsWithChildren<LineContainerProps>> = ({
  lineNumber,
  children,
}) => {
  return (
    <div className="relative flex px-4">
      <div className="w-[4ch] flex-shrink-0 select-none pr-[2ch] text-right text-gray-500/40 md:w-[6ch]">
        <span>{lineNumber}</span>
      </div>
      <div className="relative selection:bg-dark/25">{children}</div>
    </div>
  )
}

/*
 * If the line has an indent, render a span with the appropriate number of spaces
 */
const LineIndent: React.FC<{ indent: LineStandard['indent'] }> = ({
  indent,
}) => {
  if (!indent) {
    return
  }

  return <span>{' '.repeat(indent * 2)}</span>
}

type TerminalLineProps = {
  line: Line
  lineNumber: number
}

export const TerminalLine: React.FC<TerminalLineProps> = ({
  line,
  lineNumber,
}) => {
  if (line.isEmpty) {
    return <LineContainer lineNumber={lineNumber} />
  }

  if ('declaration' in line) {
    return (
      <LineContainer lineNumber={lineNumber}>
        <LineIndent indent={line.indent} />
        <TerminalLineDeclaration line={line} />
        {line.indent ? ',' : ''}
        {line.comment ? (
          <span className="text-dark">{` // ${line.comment}`}</span>
        ) : (
          ''
        )}
      </LineContainer>
    )
  }

  if (line.type === 'string') {
    return (
      <LineContainer lineNumber={lineNumber}>
        <LineIndent indent={line.indent} />
        <TerminalLineString>{line.value}</TerminalLineString>
        {line.indent ? ',' : ''}
        {line.comment ? (
          <span className="text-dark">{` // ${line.comment}`}</span>
        ) : (
          ''
        )}
      </LineContainer>
    )
  }

  return (
    <LineContainer lineNumber={lineNumber}>
      <span className={line.type === 'bracket' ? 'text-plain' : 'text-hue6'}>
        {line.value}
      </span>
      {line.indent ? ',' : ''}
      {line.comment ? (
        <span className="text-dark">{` // ${line.comment}`}</span>
      ) : (
        ''
      )}
    </LineContainer>
  )
}
