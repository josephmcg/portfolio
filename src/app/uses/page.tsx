type Item = {
  title: string
  description?: string
  url?: string
}

type Category = {
  heading: string
  items: Item[]
}

const categories: Category[] = [
  {
    heading: 'Computer / Peripherals',
    items: [
      {
        title: '2021 16" MacBook Pro, M1 Pro, 16GB RAM, 512GB SSD',
        url: 'https://support.apple.com/en-us/111901',
      },
      {
        title: 'Dell 27" 4k Monitor',
        url: 'https://www.amazon.co.jp/-/en/gp/product/B09CGY99X5',
      },
      {
        title: 'Keychron K8',
        url: 'https://www.keychron.com/products/keychron-k8-tenkeyless-wireless-mechanical-keyboard?variant=32018252857433',
      },
      {
        title: 'Razer Deathadder V2 Pro',
        url: 'https://www.amazon.com/Razer-DeathAdder-Wireless-Gaming-Mouse/dp/B08FQMBKQG',
      },
    ],
  },

  {
    heading: 'Headphones',
    items: [
      {
        title: 'Bose QuietComfort 35 II',
        url: 'https://global.bose.com/content/consumer_electronics/b2c_catalog/worldwide/websites/en_ae/product/qc35_ii.html',
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
        description:
          "Best chair I've ever used. I recommend getting one secondhand for a fraction of the price",
      },
      {
        title: 'Flexispot standing desk',
        url: 'https://www.amazon.co.jp/-/en/gp/product/B092D24V5B',
      },
    ],
  },

  {
    heading: 'Tooling',
    items: [
      {
        title: 'Autoraise',
        description: 'Automatically raise the window under the cursor',
        url: 'https://github.com/sbmpost/AutoRaise',
      },
      {
        title: 'Discrete Scroll',
        description:
          "The default scroll acceleration might feel good on a trackpad, but it's dreadful with a mouse",
        url: 'https://github.com/emreyolcu/discrete-scroll',
      },
      {
        title: 'kitty',
        description: 'GPU-accelerated terminal emulator',
        url: 'https://sw.kovidgoyal.net/kitty',
      },
      {
        title: 'oh-my-zsh',
        description: 'Framework for managing your zsh configuration',
        url: 'https://ohmyz.sh',
      },
      {
        title: 'Powerlevel 10k',
        url: 'https://github.com/romkatv/powerlevel10k',
      },
      {
        title: 'rectangle',
        description:
          'Window manager, adds helpful hotkeys to move and resize windows easily',
        url: 'https://rectangleapp.com',
      },
    ],
  },
]

export default function Uses(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-12 px-8 py-4">
      {categories.map((category) => (
        <div key={category.heading} className="flex flex-col gap-4">
          <h2 className="text-xl">{category.heading}</h2>
          <ul className="flex list-disc flex-col gap-4 pl-4">
            {category.items.map((item) => (
              <li key={item.url} className="space-y-1">
                <a href={item.title} target="_blank">
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
