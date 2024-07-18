import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'

import { Footer } from '~/components/Footer/Footer'
import { Header } from '~/components/Header/Header'

export const metadata: Metadata = {
  title: {
    template: `Joe McGrath - %s`,
    default: `Joe McGrath - Software Engineer`,
  },
  description: 'Joe McGrath is a software engineer based in Tokyo, Japan.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#21252b" />
      </head>
      <body
        className={clsx(
          'flex min-h-dvh items-center justify-center md:min-h-[90vh] md:p-6',
        )}
      >
        <div className="flex h-dvh w-full max-w-6xl flex-col overflow-hidden bg-primary shadow-2xl md:h-[46rem] md:max-h-[90vh] md:rounded-lg">
          <Header />
          <main className="flex-1 overflow-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
