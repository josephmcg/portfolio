import clsx from 'clsx'

import type { LineComment, LineDeclaration, LineStandard } from '~/types'

type Props = {
  line: LineStandard | LineDeclaration | LineComment
}

export const EditorLineComment: React.FC<Props> = ({ line }) => {
  if (!line.comment) {
    return
  }

  const classes = clsx('italic text-dark [text-underline-position:under]')

  // if only a comment, don't apply any leading space
  if (line.type === 'comment') {
    return (
      <span className={classes}>
        <span>{'// '}</span>
        {line.comment}
      </span>
    )
  }

  // if comment follows a value, apply a leading space
  return (
    <span className={classes}>
      <span>{' // '}</span>
      {line.comment}
    </span>
  )
}
