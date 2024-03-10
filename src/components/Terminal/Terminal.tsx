import { TerminalLine } from '~/components/Terminal/Line/Line'
import type { Line } from '~/types'

const lines: Line[] = [
  {
    declaration: 'const',
    name: 'name',
    value: 'Joe McGrath',
    type: 'string',
  },
  {
    declaration: 'let',
    name: 'place',
    value: 'Tokyo, Japan',
    type: 'string',
  },
  { isEmpty: true },
  {
    declaration: 'const',
    name: 'hobbies',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'music',
    type: 'string',
    indent: 1,
  },
  {
    value: 'vintage clothes',
    type: 'string',
    indent: 1,
  },
  {
    value: 'sentō',
    type: 'string',
    indent: 1,
    comment: 'Japanese public bath',
  },
  {
    value: 'baking',
    type: 'string',
    indent: 1,
  },
  {
    value: 'tea',
    type: 'string',
    indent: 1,
  },
  {
    value: 'gym',
    type: 'string',
    indent: 1,
  },
  {
    value: ']',
    type: 'bracket',
  },
  { isEmpty: true },
]

export const Terminal: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex-1 overflow-auto">
      <pre className="relative py-4 text-gray-400">
        {lines.map((line, i) => (
          <TerminalLine key={i} line={line} lineNumber={i + 1} />
        ))}
      </pre>
    </main>
  )
}
