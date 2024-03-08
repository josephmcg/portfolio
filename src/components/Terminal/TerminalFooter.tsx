export const TerminalFooter: React.FC = () => {
  return (
    <footer className="flex font-mono text-sm text-gray-400/90 shadow">
      <div className="bg-gray-600/20 px-[1ch] py-1 font-semibold uppercase">
        normal
      </div>
      <div className="bg-gray-600/30 px-[1ch] py-1 font-semibold"> main</div>
      <div className="flex flex-1 space-x-[2ch] bg-gray-600/40 px-[1ch] py-1 font-semibold">
        ./joe.ts
      </div>
      <div className="hidden bg-gray-600/30 px-[1ch] py-1 font-semibold uppercase md:block">
        utf-8
      </div>
      <div className="hidden space-x-1 bg-gray-600/20 px-[1ch] py-1 font-semibold uppercase md:block">
        LF
      </div>
    </footer>
  )
}
