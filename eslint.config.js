// @ts-check
import { FlatCompat } from '@eslint/eslintrc'
import josephmcgConfigNext from '@josephmcg/eslint-config-next'
import eslintPluginNext from '@next/eslint-plugin-next'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const config = defineConfig(
  globalIgnores([
    '.*',
    'messages',
    'node_modules',
    'public',
    'next-env.d.ts',
    'out',
  ]),
  // @ts-expect-error this is cjs, so we need to use the default export
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access -- this is weirdly typed
  eslintPluginNext.flatConfig.recommended,
  // @ts-expect-error this is cjs, so we need to use the default export
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access -- this is weirdly typed
  eslintPluginNext.flatConfig.coreWebVitals,
  ...compat.extends('plugin:next-on-pages/recommended'),
  josephmcgConfigNext,
  {
    languageOptions: {
      ecmaVersion: 2022,
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname,
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },

    rules: {
      '@next/next/no-img-element': 'off', // Next image doesn't work on Cloudflare, use standard img element for dynamic sizing

      'react/jsx-no-literals': 'off', // no i18n yet

      // 'no-restricted-imports': [
      //   // Enforce i18n navigation imports
      //   'error',
      //   {
      //     name: 'next/link',
      //     message: 'Please import from `@/i18n/navigation` instead.',
      //   },
      //   {
      //     name: 'next/navigation',
      //     importNames: [
      //       'redirect',
      //       'permanentRedirect',
      //       'useRouter',
      //       'usePathname',
      //     ],
      //     message: 'Please import from `@/i18n/navigation` instead.',
      //   },
      // ],
    },
  },
  {
    files: ['scripts/**/*.*ts'],
    rules: {
      'no-console': 'off', // It's fine to log in lint/pre-build scripts
    },
  },
)

export default config
