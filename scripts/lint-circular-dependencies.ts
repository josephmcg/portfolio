import madge from 'madge'

const result = await madge('./src', {
  fileExtensions: ['ts', 'tsx'],
  tsConfig: './tsconfig.json',
  // Type only imports are removed at runtime, so we can ignore them.
  // We enforce type only imports via `verbatimModuleSyntax` in tsconfig, because import elision has weird edge cases
  // https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax
  // https://github.com/pahen/madge?tab=readme-ov-file#how-to-ignore-import-in-type-annotations-in-typescript
  detectiveOptions: {
    ts: {
      skipTypeImports: true,
    },
    tsx: {
      skipTypeImports: true,
    },
  },
})

const circular = result.circular()

if (circular.length > 0) {
  console.log(circular)
  throw new Error('Circular dependencies found ^')
}
