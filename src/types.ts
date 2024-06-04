export type LineStandard = {
  value: string
  type: 'string' | 'number' | 'boolean' | 'bracket'
  indent?: number
  comment?: React.ReactNode
  isCommentHiddenOnSmallScreens?: boolean
}

export type LineDeclaration = LineStandard & {
  declaration: 'const' | 'let' | 'var'
  name: string
}

export type LineComment = {
  type: 'comment'
  indent?: number
  comment: React.ReactNode
  isCommentHiddenOnSmallScreens?: boolean
}

type LineEmpty = {
  type: 'empty'
}

export type Line = LineStandard | LineDeclaration | LineComment | LineEmpty
