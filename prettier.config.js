import { baseConfig } from '@josephmcg/prettier-config'

/** @type {import('prettier').Config} */
const config = {
  ...baseConfig,
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss/blob/main/README.md
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'cx', 'cn'],
  // tailwindStylesheet: './src/app/globals.css',
}

export default config
