import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['title', 'font-extrabold text-6xl mb-3'],
    ['btn', 'px-4 py-1 border rounded-99 inline-block hover:text-violet-500 dark:hover:text-emerald-500 text-dark dark:text-white cursor-pointer transition duration-200 ease-in-out hover:opacity-100 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'hover:text-violet-500 dark:hover:text-emerald-500 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100'],
    ['list', 'list-disc list-inside'],
    ['flex-center', 'flex items-center justify-center'],
    ['grid-center', 'grid place-items-center'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        display: 'Red Hat Display',
        text: 'Red Hat Text',
        mono: 'JetBrains Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
