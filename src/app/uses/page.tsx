import type { Metadata } from 'next'

import { INTERNAL_LINK } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Discover Joe McGrath's tech setup, from his MacBook Pro and ergonomic desk accessories to his favorite tools for programming and productivity, including VS Code, kitty, Powerlevel10k, and pnpm. Explore the gear that powers his work and daily routines.",
  alternates: {
    canonical: INTERNAL_LINK.USES,
  },
}

interface Item {
  title: string
  url: string
  description?: string
}

interface Category {
  heading: string
  items: Item[]
}

const categories: Category[] = [
  {
    heading: 'Computer & Peripherals',
    items: [
      {
        title: '2021 16" MacBook Pro, M1 Pro, 16GB RAM, 512GB SSD',
        url: 'https://support.apple.com/en-us/111901',
        description:
          "I've never heard the fans spin up on this thing, I love it.",
      },
      {
        title: 'Dell 27" 4k Monitor',
        url: 'https://www.amazon.co.jp/-/en/gp/product/B09CGY99X5',
        description:
          'Solid general-purpose monitor. Supports both HDMI and USB-C.',
      },
      {
        title: 'Ergotron Monitor Arm',
        url: 'https://www.amazon.co.jp/-/en/gp/product/B07Q8TJ2KL',
      },
      {
        title: 'Keychron K8 (Gateron brown)',
        url: 'https://www.keychron.com/products/keychron-k8-tenkeyless-wireless-mechanical-keyboard?variant=32018252857433',
        description:
          'Just the right amount of click, battery life is incredible. Good for Mac and Windows.',
      },
      {
        title: 'Razer Deathadder V2 Pro',
        url: 'https://www.amazon.com/Razer-DeathAdder-Wireless-Gaming-Mouse/dp/B08FQMBKQG',
        description:
          'Great for general use and gaming, the thumb buttons are handy.',
      },
      {
        title: 'Bose QuietComfort 35 II',
        url: 'https://global.bose.com/content/consumer_electronics/b2c_catalog/worldwide/websites/en_ae/product/qc35_ii.html',
        description:
          'Fantastic noise cancelling, comfortable for long periods of time.',
      },
      {
        title: 'Sony WF-1000XM4',
        url: 'https://www.sony.com/lr/headphones/products/wf-1000xm4',
      },
    ],
  },

  {
    heading: 'Desk Setup',
    items: [
      {
        title: 'Herman Miller Aeron',
        url: 'https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html',
        description:
          'I recommend getting one secondhand for a fraction of the price.',
      },
      {
        title: 'Flexispot standing desk',
        url: 'https://www.amazon.co.jp/-/en/gp/product/B092D24V5B',
      },
    ],
  },

  {
    heading: 'Programming',
    items: [
      {
        title: 'VS Code',
        url: 'https://code.visualstudio.com',
      },
      {
        title: 'kitty',
        url: 'https://sw.kovidgoyal.net/kitty',
        description: 'GPU based terminal.',
      },
      {
        title: 'Powerlevel10k',
        url: 'https://github.com/romkatv/powerlevel10k',
        description: 'Displays valuable git info in my terminal prompt.',
      },
      {
        title: 'pnpm',
        url: 'https://pnpm.io',
        description: 'Saves me so much time and disk space, the future is now!',
      },
    ],
  },

  {
    heading: 'Miscellaneous Software',
    items: [
      {
        title: 'Autoraise',
        url: 'https://github.com/sbmpost/AutoRaise',
        description:
          'Focuses a window on pointer hover. This has saved me thousands of clicks when using multiple monitors on Mac.',
      },
      {
        title: 'Discrete Scroll',
        url: 'https://github.com/emreyolcu/discrete-scroll',
        description: 'Quality of life improvement when using a mouse on Mac.',
      },

      {
        title: 'Rectangle',
        url: 'https://rectangleapp.com',
        description:
          'Window manager, helpful hotkeys to move and resize windows.',
      },
    ],
  },
]

export default function Uses(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-10 px-8 py-4 pb-8">
      {categories.map((category) => (
        <div key={category.heading} className="flex flex-col gap-4">
          <h2 className="border-b border-divider pb-2.5 text-xl">
            {category.heading}
          </h2>
          <ul className="flex list-disc flex-col gap-4 pl-4">
            {category.items.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  target="_blank"
                  className="underline hover:opacity-80"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
                {item.description && <div>{item.description}</div>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
