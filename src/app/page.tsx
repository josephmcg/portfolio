import { Editor } from '~/components/editor/editor'
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
  },
  {
    value: 'tea',
    type: 'string',
    indent: 1,
  },
  {
    value: 'vintage',
    type: 'string',
    indent: 1,
    comment: "Nike, Levi's, Stüssy",
  },
  {
    value: 'sentō',
    type: 'string',
    indent: 1,
    comment: 'Japanese public bath',
  },
  {
    value: 'gym',
    type: 'string',
    indent: 1,
  },
  {
    value: 'games',
    type: 'string',
    indent: 1,
    comment: 'Smash bros, SNES, indie',
  },
  {
    value: 'yoga',
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
