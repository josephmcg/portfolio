import clsx from 'clsx'
import React from 'react'

import { TerminalBranch } from '~/components/Terminal/TerminalBranch'

type Item = {
  className?: string
  element: React.ReactNode
}

const items: Item[] = [
  {
    element: (
      <>
        <TerminalBranch /> main
      </>
    ),
  },
  {
    element: './joe.ts',
  },
  {
    // hilarious false positive
    // eslint-disable-next-line unicorn/text-encoding-identifier-case
    element: 'UTF-8',
    className: clsx('ml-auto'),
  },
  {
    element: 'LF',
  },
  {
    element: '{}',
  },
  {
    element: 'TypeScript',
  },
]

export const TerminalFooter: React.FC = () => {
  return (
    <footer className="bg-secondary text-light flex font-mono text-sm shadow">
      {items.map((item, index) => (
        <div
          key={index}
          className={clsx('flex gap-1.5 px-[1ch] py-1', item.className)}
        >
          {item.element}
        </div>
      ))}
    </footer>
  )
}
