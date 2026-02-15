import { EditorLine } from '~/components/editor/line/line'
import type { Line } from '~/types'

interface Props {
  lines: Line[]
}

export const Editor: React.FC<Props> = ({ lines }) => {
  return (
    <pre className="py-4">
      {lines.map((line, index) => (
        <EditorLine key={index} line={line} lineNumber={index + 1} />
      ))}
    </pre>
  )
}
