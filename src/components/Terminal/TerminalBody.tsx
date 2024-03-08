type EmptyLine = Record<string, never>

type DeclarationLine = {
  declaration: 'const' | 'let' | 'var'
  name: string
  value: string
  type: 'string' | 'number' | 'boolean' | 'bracket'
}

type StandardLine = {
  value: string
  type: 'string' | 'number' | 'boolean' | 'bracket'
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
    value: ' Programming',
    type: 'string',
  },
  {
    value: ' Eating food',
    type: 'string',
  },
  {
    value: ' More programming',
    type: 'string',
  },
  {
    value: ' Gym',
    type: 'string',
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
            <div className="w-[6ch] flex-shrink-0 select-none pr-[2ch] text-right text-gray-500/40">
              <span className="">{i + 1}</span>
            </div>
            <div className="selection:bg-mono3/25 relative">
              <span className="text-gray-400">
                {'declaration' in line && (
                  <>
                    <span className="text-hue3">{line.declaration} </span>
                    <span>{line.name} </span>
                    <span className="text-hue1">= </span>

                    {line.type === 'string' ? (
                      <span className="text-hue4">
                        &apos;{line.value}&apos;
                      </span>
                    ) : (
                      <span className="text-hue6">{line.value}</span>
                    )}
                  </>
                )}
              </span>
            </div>
          </div>
        ))}
      </pre>
    </div>
  )
}
