import { Editor } from '~/components/Editor/Editor'
import type { Line } from '~/types'

const lines: Line[] = [
  {
    declaration: 'let',
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
    declaration: 'let',
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

export default function Home(): React.JSX.Element {
  return <Editor lines={lines} />
}
