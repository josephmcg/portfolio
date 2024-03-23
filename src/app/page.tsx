import { Editor } from '~/components/Editor/Editor'
import type { Line } from '~/types'

const lines: Line[] = [
  {
    declaration: 'let',
    name: 'name',
    value: 'Joe McGrath',
    type: 'string',
  },
  { isEmpty: true },
  {
    declaration: 'let',
    name: 'place',
    value: 'Tokyo, Japan',
    type: 'string',
  },
  { isEmpty: true },
  {
    declaration: 'let',
    name: 'hobbies',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'music',
    type: 'string',
    indent: 1,
    comment: 'Bowie, The Smiths, J Dilla, to name a few',
    isCommentHiddenOnSmallScreens: true,
  },
  {
    value: 'vintage clothes',
    type: 'string',
    indent: 1,
    comment: '90s Nike, Levis, LL Bean, for instance',
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

export default function Home(): React.JSX.Element {
  return <Editor lines={lines} />
}
