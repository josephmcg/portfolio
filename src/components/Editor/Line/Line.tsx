import { EditorLineComment } from '~/components/Editor/Line/LineComment'
import { EditorLineDeclaration } from '~/components/Editor/Line/LineDeclaration'
import { EditorLineString } from '~/components/Editor/Line/LineString'
import type { Line, LineStandard } from '~/types'

type LineContainerProps = {
  lineNumber: number
}

const LineContainer: React.FC<React.PropsWithChildren<LineContainerProps>> = ({
  lineNumber,
  children,
}) => {
  return (
    <div className="relative flex px-2 sm:px-4">
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

type EditorLineProps = {
  line: Line
  lineNumber: number
}

export const EditorLine: React.FC<EditorLineProps> = ({ line, lineNumber }) => {
  if (line.type === 'empty') {
    return <LineContainer lineNumber={lineNumber} />
  }

  if ('declaration' in line) {
    return (
      <LineContainer lineNumber={lineNumber}>
        <LineIndent indent={line.indent} />
        <EditorLineDeclaration line={line} />
        {line.indent ? ',' : ''}
        <EditorLineComment line={line} />
      </LineContainer>
    )
  }

  if (line.type === 'comment') {
    return (
      <LineContainer lineNumber={lineNumber}>
        <LineIndent indent={line.indent} />
        <EditorLineComment line={line} />
      </LineContainer>
    )
  }

  if (line.type === 'string') {
    return (
      <LineContainer lineNumber={lineNumber}>
        <LineIndent indent={line.indent} />
        <EditorLineString>{line.value}</EditorLineString>
        {line.indent ? ',' : ''}
        <EditorLineComment line={line} />
      </LineContainer>
    )
  }

  return (
    <LineContainer lineNumber={lineNumber}>
      <span className={line.type === 'bracket' ? 'text-plain' : 'text-hue6'}>
        {line.value}
      </span>
      {line.indent ? ',' : ''}
      <EditorLineComment line={line} />
    </LineContainer>
  )
}
