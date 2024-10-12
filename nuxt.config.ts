import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const customTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}',
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'BULB • Beautiful Urban Line Builder',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  imports: { autoImport: false },

  components: [{ path: '~/components', pathPrefix: false }],

  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },

  build: {
    transpile: ['vue-i18n'],
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  experimental: {
    typedPages: true,
  },

  // uncomment to disable SSR. This will basically make the app a SPA, like a normal Vue app, but with all the Nuxt goodies
  ssr: false,

  // global CSS files
  css: [
    '@unocss/reset/tailwind-compat.css',
    '~/assets/style/custom.css',
  ],

  fonts: {
    families: [
      { name: 'Parisine Std', provider: 'local', weights: ['normal', 'bold'], styles: ['normal', 'italic'] },
    ],
  },

  // plugin configurations
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/critters',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@primevue/nuxt-module',
    '@nuxt/fonts',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'color-scheme',
  },

  primevue: {
    options: {
      theme: {
        preset: customTheme,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    },
    importPT: {
      as: 'Passthrough',
      from: '/utils/passthrough.ts',
    },
  },
  compatibilityDate: '2024-07-20',
})
