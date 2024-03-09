import { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      maxWidth: {
        outer: '94.5rem', // 1512px
        inner: '86.5rem', // 1384px
      },
      colors: {
        // macos window controls
        close: '#FF605C',
        minimize: '#FFBD44',
        maximize: '#00CA4E',
        // one dark colors
        primary: '#282c34',
        secondary: '#21252b',
        plain: '#abb2bf',
        light: '#9da5b4',
        dark: '#5c6370',
        hue1: '#56b6c2',
        hue2: '#61aeee',
        hue3: '#c678dd',
        hue4: '#98c379',
        hue5: '#e06c75',
        'hue5-secondary': '#be5046',
        hue6: '#d19a66',
        'hue6-secondary': '#e6c07b',
      },
    },
  },
} satisfies Config
