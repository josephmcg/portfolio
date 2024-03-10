import { TerminalDeclaration } from '~/components/Terminal/TerminalDeclaration'
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
          <div key={i} className="relative flex px-4">
            <div className="w-[4ch] flex-shrink-0 select-none pr-[2ch] text-right text-gray-500/40 md:w-[6ch]">
              <span className="">{i + 1}</span>
            </div>
            <div className="relative selection:bg-dark/25">
              {line.indent ? ' '.repeat(line.indent * 2) : undefined}
              {'declaration' in line ? (
                <TerminalDeclaration line={line} />
              ) : line.type === 'string' ? (
                <span className="text-hue4">&apos;{line.value}&apos;</span>
              ) : (
                <span
                  className={
                    line.type === 'bracket' ? 'text-plain' : 'text-hue6'
                  }
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
        ))}
      </pre>
    </main>
  )
}
