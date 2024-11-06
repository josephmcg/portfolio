import { EditorLine } from '~/components/editor/line/line'
import type { Line } from '~/types'

interface Props {
  lines: Line[]
}

export const Editor: React.FC<Props> = ({ lines }) => {
  return (
    <pre className="py-4">
      {lines.map((line, i) => (
        <EditorLine key={i} line={line} lineNumber={i + 1} />
      ))}
    </pre>
  )
}
