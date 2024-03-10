import clsx from 'clsx'

const controls = [
  {
    classes: clsx('bg-close'),
  },
  {
    classes: clsx('bg-minimize'),
  },
  {
    classes: clsx('bg-maximize'),
  },
] as const

export const HeaderControls: React.FC = () => {
  return (
    <div className="group flex items-center gap-2">
      {controls.map((el, i) => (
        <div
          key={i}
          className={clsx(
            'group h-3 w-3 cursor-default rounded-full ring-1 ring-inset ring-black/10',
            el.classes,
          )}
        />
      ))}
    </div>
  )
}
