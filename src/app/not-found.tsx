import Link from 'next/link'

export default function NotFound(): React.JSX.Element {
  return (
    <article className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-5xl">Not Found</h1>
      <Link
        href="/"
        className="text-xl underline underline-offset-2 hover:opacity-80"
      >
        Return Home
      </Link>
    </article>
  )
}
