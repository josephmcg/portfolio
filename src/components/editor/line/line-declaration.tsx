import { EditorLineString } from '@/components/editor/line/line-string'
import type { LineDeclaration } from '@/types'

interface Props {
  line: LineDeclaration
}

export const EditorLineDeclaration: React.FC<Props> = ({ line }) => {
  return (
    <>
      <span className="text-hue3">{line.declaration} </span>
      <span className="text-hue6">{line.name} </span>
      <span className="text-hue1">= </span>
      {line.type === 'string' ? (
        <EditorLineString>{line.value}</EditorLineString>
      ) : (
        <span className={line.type === 'bracket' ? 'text-plain' : 'text-hue6'}>
          {line.value}
        </span>
      )}
    </>
  )
}
