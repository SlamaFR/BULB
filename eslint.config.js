import antfu from '@antfu/eslint-config'

const ignores = [
  'node_modules',
  '*.log*',
  '.nuxt',
  '.nitro',
  '.cache',
  '.output',
  '.env',
  'dist',
  '.DS_Store',
]

export default antfu({
  typescript: true,
  vue: true,
  react: false,
  ignores,
}, {
  rules: {
    'curly': ['error', 'multi-line'],
    'brace-style': 'off',
    'antfu/if-newline': 'off',
    'antfu/generic-spacing': 'off',
    'react/prop-types': 'off',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/jsx-one-expression-per-line': 'off',
    'ts/ban-types': 'off',
  },
  ignores,
})
