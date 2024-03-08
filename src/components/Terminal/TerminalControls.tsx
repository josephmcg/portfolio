import {
  ArrowsRightLeftIcon,
  MinusIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid'
import clsx from 'clsx'

const buttons = [
  {
    classes: clsx('bg-close'),
    iconClasses: clsx('stroke-close/50'),
    icon: XMarkIcon,
  },
  {
    classes: clsx('bg-minimize'),
    iconClasses: clsx('stroke-minimize/50'),
    icon: MinusIcon,
  },
  {
    classes: clsx('bg-maximize'),
    iconClasses: clsx('stroke-maximize/50'),
    icon: ArrowsRightLeftIcon,
  },
] as const

export const TerminalControls: React.FC = () => {
  return (
    <div className="group flex items-center gap-2">
      {buttons.map((button, i) => (
        <button
          key={i}
          className={clsx(
            'group h-3 w-3 cursor-default rounded-full ring-1 ring-inset ring-black/10',
            button.classes,
          )}
        >
          <button.icon
            className={clsx(
              'invisible h-3 w-3 group-hover:visible',
              button.iconClasses,
            )}
          />
        </button>
      ))}
    </div>
  )
}
