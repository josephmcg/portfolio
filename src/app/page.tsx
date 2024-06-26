import { Editor } from '~/components/Editor/Editor'
import type { Line } from '~/types'

const lines: Line[] = [
  {
    declaration: 'let',
    name: 'name',
    value: 'Joe McGrath',
    type: 'string',
  },
  { type: 'empty' },
  {
    declaration: 'let',
    name: 'place',
    value: 'Tokyo, Japan',
    type: 'string',
  },
  { type: 'empty' },
  {
    declaration: 'let',
    name: 'likes',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'music',
    type: 'string',
    indent: 1,
    comment: 'David Bowie, The Smiths, J Dilla, to name a few',
    isCommentHiddenOnSmallScreens: true,
  },
  {
    value: 'vintage clothes',
    type: 'string',
    indent: 1,
    comment: "90s Nike, Levi's, LL Bean",
    isCommentHiddenOnSmallScreens: true,
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
    value: 'games',
    type: 'string',
    indent: 1,
    comment: 'Smash bros, SNES, indie games',
    isCommentHiddenOnSmallScreens: true,
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
  { type: 'empty' },
]

export default function Home(): React.JSX.Element {
  return <Editor lines={lines} />
}
