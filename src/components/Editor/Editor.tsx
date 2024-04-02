import { EditorLine } from '~/components/Editor/Line/Line'
import type { Line } from '~/types'

type Props = {
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
