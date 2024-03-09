type EmptyLine = Record<string, never>

type DeclarationLine = {
  declaration: 'const' | 'let' | 'var'
  name: string
  value: string
  type: 'string' | 'number' | 'boolean' | 'bracket'
  indent?: number
}

type StandardLine = {
  value: string
  type: 'string' | 'number' | 'boolean' | 'bracket'
  indent?: number
}

type Line = DeclarationLine | StandardLine | EmptyLine

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
  {},
  {
    declaration: 'const',
    name: 'hobbies',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'Programming',
    type: 'string',
    indent: 1,
  },
  {
    value: 'Eating food',
    type: 'string',
    indent: 1,
  },
  {
    value: 'More programming',
    type: 'string',
    indent: 1,
  },
  {
    value: 'Gym',
    type: 'string',
    indent: 1,
  },
  {
    value: ']',
    type: 'bracket',
  },
  {},
]

export const TerminalBody: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto">
      <pre className="relative py-4 text-gray-400">
        {lines.map((line, i) => (
          <div key={i} className="relative flex px-4">
            <div className="w-[4ch] flex-shrink-0 select-none pr-[2ch] text-right text-gray-500/40 md:w-[6ch]">
              <span className="">{i + 1}</span>
            </div>
            <div className="selection:bg-dark/25 relative">
              <span className="text-gray-400">
                {line.indent ? ' '.repeat(line.indent * 2) : undefined}
                {'declaration' in line ? (
                  <>
                    <span className="text-hue3">{line.declaration} </span>
                    <span className="text-hue6">{line.name} </span>
                    <span className="text-hue1">= </span>
                    {line.type === 'string' ? (
                      <span className="text-hue4">
                        &apos;{line.value}&apos;
                      </span>
                    ) : (
                      <span
                        className={
                          line.type === 'bracket' ? 'text-plain' : 'text-hue6'
                        }
                      >
                        {line.value}
                      </span>
                    )}
                  </>
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
              </span>
            </div>
          </div>
        ))}
      </pre>
    </div>
  )
}
