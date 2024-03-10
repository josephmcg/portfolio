type LineEmpty = {
  isEmpty: true
}

export type LineStandard = {
  value: string
  type: 'string' | 'number' | 'boolean' | 'bracket'
  indent?: number
  comment?: string
  isEmpty?: false
}

export type LineDeclaration = LineStandard & {
  declaration: 'const' | 'let' | 'var'
  name: string
}

export type Line = LineDeclaration | LineStandard | LineEmpty
