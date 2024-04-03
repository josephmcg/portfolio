type Item = {
  title: string
  url: string
  description?: string
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
        description:
          "I've never heard the fans spin up, that's how good this thing is",
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
        url: 'https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html',
        description:
          'I recommend getting one secondhand for a fraction of the price',
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
        url: 'https://github.com/sbmpost/AutoRaise',
        description: 'Very helpful when using multiple screens on mac',
      },
      {
        title: 'Discrete Scroll',
        url: 'https://github.com/emreyolcu/discrete-scroll',
        description:
          'Quality of life improvement when using a mouse scroll wheel on mac',
      },
      {
        title: 'kitty',
        url: 'https://sw.kovidgoyal.net/kitty',
        description: 'GPU based terminal',
      },
      {
        title: 'Oh My Zsh',
        url: 'https://ohmyz.sh',
      },
      {
        title: 'Powerlevel10k',
        url: 'https://github.com/romkatv/powerlevel10k',
        description: 'Customize your terminal prompt',
      },
      {
        title: 'Rectangle',
        url: 'https://rectangleapp.com',
        description:
          'Window manager, adds helpful hotkeys to move and resize windows easily',
      },
    ],
  },
]

export default function Uses(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-10 px-8 py-4">
      {categories.map((category) => (
        <div key={category.heading} className="flex flex-col gap-2">
          <h2 className="text-xl">{category.heading}</h2>
          <ul className="flex list-disc flex-col gap-4 pl-4">
            {category.items.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  target="_blank"
                  className="underline hover:opacity-80"
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
