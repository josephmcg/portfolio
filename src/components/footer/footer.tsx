import clsx from 'clsx'
import React from 'react'

import { FooterFile } from '~/components/footer/footer-file'
import { FooterLanguage } from '~/components/footer/footer-language'

const TerminalBranch: React.FC = () => {
  return (
    <svg
      className="fill-plain w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M416 160a64 64 0 1 0-96.27 55.24c-2.29 29.08-20.08 37-75 48.42-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64.42.24c2.39-18 16-24.33 65.26-34.52 27.43-5.67 55.78-11.54 79.78-26.95 29-18.58 44.53-46.78 46.36-83.89A64 64 0 0 0 416 160ZM160 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm192-256a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" />
    </svg>
  )
}

interface Item {
  className?: string
  element: React.ReactNode
}

export const Footer: React.FC = () => {
  const items: Item[] = [
    {
      element: (
        <>
          <TerminalBranch /> main
        </>
      ),
    },
    {
      element: <FooterFile />,
    },
    {
      // hilarious false positive
      // eslint-disable-next-line unicorn/text-encoding-identifier-case
      element: 'UTF-8',
      className: clsx('md:ml-auto'),
    },
    {
      element: 'LF',
    },
    {
      element: <FooterLanguage />,
    },
  ]

  return (
    <footer className="bg-secondary text-light flex justify-between font-mono text-sm shadow">
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
