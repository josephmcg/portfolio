export interface LineStandard {
  value: string
  type: 'string' | 'number' | 'boolean' | 'bracket'
  indent?: number
  comment?: React.ReactNode
}

export interface LineDeclaration extends LineStandard {
  declaration: 'const' | 'let' | 'var'
  name: string
}

export interface LineComment {
  type: 'comment'
  indent?: number
  comment: React.ReactNode
}

interface LineEmpty {
  type: 'empty'
}

export type Line = LineStandard | LineDeclaration | LineComment | LineEmpty
