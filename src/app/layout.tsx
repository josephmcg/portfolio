import './globals.css'

import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'

import { Footer } from '~/components/footer/footer'
import { Header } from '~/components/header/header'
import { Polygons } from '~/components/polygons'

export const metadata: Metadata = {
  title: {
    template: `Joe McGrath - %s`,
    default: `Joe McGrath - Software Engineer in Tokyo`,
  },
  description:
    'Explore the personal and professional life of Joe McGrath, a Tokyo-based software engineer.',
  metadataBase: new URL('https://josephmcg.dev'),
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
          'flex min-h-dvh items-center justify-center md:min-h-[90vh] md:p-6',
        )}
      >
        <Polygons />
        <div className="relative flex h-dvh w-full max-w-6xl flex-col overflow-hidden bg-primary shadow-2xl md:h-[46rem] md:max-h-[90vh] md:rounded-lg">
          <Header />
          <main className="flex-1 overflow-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  themeColor: '#21252b',
}
