import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
      warn: true,
      extraProperties: {
        'background-color': 'currentColor',
        'color': 'inherit',
        'flex-shrink': '0',
      },
      collections: {
        tabler: () => import('@iconify-json/tabler/icons.json').then(i => i.default),
        bulb: () => import('./public/assets/icons/bulb.json').then(i => i.default),
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    'important-m-4',
  ],
})
