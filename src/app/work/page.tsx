import { Editor } from '~/components/Editor/Editor'
import type { Line } from '~/types'

const lines: Line[] = [
  {
    type: 'comment',
    comment: (
      <>
        <a className="underline" href="https://migaku.com" target="_blank">
          https://migaku.com
        </a>
        <span> - I built this website :)</span>
      </>
    ),
  },
  {
    declaration: 'let',
    name: 'employer',
    value: 'Migaku',
    type: 'string',
  },
  {
    declaration: 'let',
    name: 'title',
    value: 'Senior Software Engineer',
    type: 'string',
  },
  {
    isEmpty: true,
  },
  {
    declaration: 'let',
    name: 'skills',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'programming',
    type: 'string',
    indent: 1,
  },
  {
    value: 'project management',
    type: 'string',
    indent: 1,
  },
  {
    value: 'figuring things out',
    type: 'string',
    indent: 1,
  },
  {
    value: ']',
    type: 'bracket',
  },
  {
    isEmpty: true,
  },
  {
    declaration: 'let',
    name: 'languages',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'TypeScript',
    type: 'string',
    indent: 1,
  },
  {
    value: 'HTML',
    type: 'string',
    indent: 1,
  },
  {
    value: 'CSS',
    type: 'string',
    indent: 1,
  },
  {
    value: ']',
    type: 'bracket',
  },
  {
    isEmpty: true,
  },
  {
    declaration: 'let',
    name: 'frameworks',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'React',
    type: 'string',
    indent: 1,
    comment: 'technically a library, but let’s be real',
  },
  {
    value: 'Next.js',
    type: 'string',
    indent: 1,
  },
  {
    value: 'Vue',
    type: 'string',
    indent: 1,
  },
  {
    value: 'Nuxt',
    type: 'string',
    indent: 1,
  },
  {
    value: 'Astro',
    type: 'string',
    indent: 1,
  },
  {
    value: ']',
    type: 'bracket',
  },
]

export default function Work(): React.JSX.Element {
  return <Editor lines={lines} />
}
