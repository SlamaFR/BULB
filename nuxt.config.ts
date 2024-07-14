import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

const customTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
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
  imports: { // add folders here to auto-import them in your application
    dirs: [
      'stores',
      'composables/**',
    ],
  },
  components: [{ path: '~/components', pathPrefix: false }],
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
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
  ],
  fonts: {
    families: [
      { name: 'Parisine Std', provider: 'local', weights: ['normal', 'bold'], styles: ['normal', 'italic'] },
    ],
  },

  // plugin configurations
  modules: [
    '@nuxtjs/i18n',
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
    classSuffix: '',
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
  },
})
