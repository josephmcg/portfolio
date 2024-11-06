import type { Metadata } from 'next'

import { Editor } from '~/components/editor/editor'
import { INTERNAL_ROUTE } from '~/navigation'
import type { Line } from '~/types'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Joe McGrath, Senior Software Engineer at Migaku, specializes in programming, problem solving, and web performance optimization. With seasoned skills in TypeScript, React, and Vue, Joe leads cross-functional teams to build marketing websites and web applications, while focusing on accessibility and internationalization.',
  alternates: {
    canonical: INTERNAL_ROUTE.WORK,
  },
}

const lines: Line[] = [
  {
    type: 'comment',
    comment: (
      <a
        className="underline hover:text-link"
        href="https://migaku.com"
        target="_blank"
      >
        https://migaku.com
      </a>
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
    type: 'empty',
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
    value: 'problem solving',
    type: 'string',
    indent: 1,
  },
  {
    value: 'leadership',
    type: 'string',
    indent: 1,
  },
  {
    value: 'googling',
    type: 'string',
    indent: 1,
  },
  {
    type: 'comment',
    comment: '...and more!',
    indent: 1,
  },
  {
    value: ']',
    type: 'bracket',
  },
  {
    type: 'empty',
  },
  {
    declaration: 'let',
    name: 'experience',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'marketing websites',
    type: 'string',
    indent: 1,
  },
  {
    value: 'web apps',
    type: 'string',
    indent: 1,
  },
  {
    value: 'cross-functional leadership',
    type: 'string',
    indent: 1,
  },
  {
    value: 'internal component libraries',
    type: 'string',
    indent: 1,
  },
  {
    value: 'Chrome extensions',
    type: 'string',
    indent: 1,
  },
  {
    value: 'automated package publishing',
    type: 'string',
    indent: 1,
  },
  {
    value: 'design systems',
    type: 'string',
    indent: 1,
  },
  {
    value: 'accessibility (a11y)',
    type: 'string',
    indent: 1,
  },
  {
    value: 'internationalization (i18n)',
    type: 'string',
    indent: 1,
  },
  {
    value: 'micro-frontends',
    type: 'string',
    indent: 1,
  },
  {
    value: ']',
    type: 'bracket',
  },
  {
    type: 'empty',
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
    value: 'SQL',
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
    type: 'empty',
  },
  {
    declaration: 'let',
    name: 'tools',
    value: '[',
    type: 'bracket',
  },
  {
    value: 'React',
    type: 'string',
    indent: 1,
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
    value: 'Node.js',
    type: 'string',
    indent: 1,
  },
  {
    value: 'PostgreSQL',
    type: 'string',
    indent: 1,
  },
  {
    value: ']',
    type: 'bracket',
  },

  {
    type: 'empty',
  },
]

export default function Work(): React.JSX.Element {
  return <Editor lines={lines} />
}
