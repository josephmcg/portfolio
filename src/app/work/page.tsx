import { Editor } from '~/components/Editor/Editor'
import type { Line } from '~/types'

const lines: Line[] = [
  {
    type: 'comment',
    comment: (
      <>
        <a
          className="underline hover:text-link"
          href="https://migaku.com"
          target="_blank"
        >
          https://migaku.com
        </a>
        <span> - I made this</span>
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
    value: 'balancing simplicity/functionality',
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
    value: 'PHP',
    type: 'string',
    indent: 1,
  },
  {
    value: 'Java',
    type: 'string',
    indent: 1,
    comment: 'in my college days',
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
    name: 'experience',
    value: '[',
    type: 'bracket',
  },
  {
    type: 'comment',
    comment: 'frameworks',
    indent: 1,
  },
  {
    value: 'React',
    type: 'string',
    indent: 1,
    comment: 'technically a library, but let’s be real',
    isCommentHiddenOnSmallScreens: true,
  },
  {
    value: 'Vue',
    type: 'string',
    indent: 1,
  },
  {
    value: 'Next.js',
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
    type: 'comment',
    comment: 'miscellaneous',
    indent: 1,
  },
  {
    value: 'Chrome extension development',
    type: 'string',
    indent: 1,
  },
  {
    value: 'in-house component libraries',
    type: 'string',
    indent: 1,
  },
  {
    value: 'reusable project config packages',
    type: 'string',
    indent: 1,
    comment: (
      <a
        className="underline hover:text-link"
        href="https://github.com/josephmcg/config"
        target="_blank"
      >
        https://github.com/josephmcg/config
      </a>
    ),
  },
  {
    value: 'hybrid app development and leadership',
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
