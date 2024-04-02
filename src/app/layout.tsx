import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header/Header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body
        className={clsx(
          'flex min-h-svh items-center justify-center md:min-h-[90vh] md:p-[24px]',
        )}
      >
        <div className="flex h-svh w-full max-w-5xl flex-col overflow-hidden bg-primary shadow-2xl md:h-[42rem] md:rounded-lg">
          <Header />
          <main className="flex-1 overflow-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
