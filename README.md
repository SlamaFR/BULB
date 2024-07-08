# 🌘 Nightrunner

Nightrunner is a simple, fast, and ready to use starter template for Nuxt 3.
It features the necessary tools to get you started immediately on your next project.

## Summary

- [🌘 Nightrunner](#-nightrunner)
  - [Summary](#summary)
  - [🚀 Quick start](#-quick-start)
  - [✨ Features](#-features)
  - [🤔 What's included](#-whats-included)
    - [🛠️ Configurations](#️-configurations)
    - [🌐 Localization](#-localization)
    - [🖌️ Theme: Light and Dark](#️-theme-light-and-dark)
  - [🧑‍💻 Development](#-development)
    - [⚙️ Setup](#️-setup)
    - [🏃‍♂️ Running in development mode](#️-running-in-development-mode)
    - [💪 Building for production](#-building-for-production)
    - [📝 Other scripts](#-other-scripts)
  - [Todo](#todo)

## 🚀 Quick start

1. **Get pnpm.**

    Nightrunner uses [pnpm](https://pnpm.io/) as its package manager. You can install it with the following command:
    ```bash
    npm install -g pnpm
    ```

2. **Create a Nightrunner project.**

    Use the Nightrunner template to create a new project:

    ```bash
    npx degit "notKamui/Nightrunner" my-project
    ```

3. **Replace all the occurrences of `Nightrunner` with your project's name.**

    This includes both `Nightrunner` and `nightrunner`. Also, **DO NOT FORGET TO UPDATE THE [LICENSE](LICENSE) FILE**, otherwise, I'll be in legal possession of your project, which isn't good for you.

3. **Start developing.**

    Install the dependencies and run the development server:
    ```bash
    cd my-project
    pnpm install
    pnpm dev
    ```

    You may also want to check if there are any updates to the dependencies. Do so by running taze, but note that breakages may occur.
    ```bash
    pnpm taze
    ```

4. **Enjoy your new Nightrunner project!**

    Your site is now running at `http://localhost:3000`!

## ✨ Features

Nightrunner uses the following technologies:

- [Nuxt 3](https://v3.nuxtjs.org/)
- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [UnoCSS](https://uno.antfu.me)
- [Iconify](https://iconify.design/)
- [Pinia](https://pinia.vuejs.org)
- [Nuxt i18n](https://v8.i18n.nuxtjs.org/)

For more information on each of these, please refer to their respective documentation.

## 🤔 What's included

### 🛠️ Configurations

For each of the included technologies, Nightrunner provides a basic setup that you can use as a starting point for your project.

Nightrunner uses Nuxt 3 in SSR Mode by default, but you can use full static mode by uncommenting the marked line in the [nuxt.config.ts](nuxt.config.ts) file.

Moreover, a default UnoCSS configuration is provided in the [unocss.config.ts](unocss.config.ts) file.

Along with it is provided a dependency to use UnoCSS as an icon provider. The icons are served by Iconify. The default icon set is [Tabler Icons](https://tablericons.com/), but you can change it to whatever you want. For that, remove the `@iconify-json/tabler` dependency and install the one you want. The naming scheme is generally the same, that is to say `@iconify-json/<icon-set-name>`. If you want a preview of all the icons available, check out [icones.js.org](https://icones.js.org/).

The default configuration for ESLint is based on Antfu's configuration (see [@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config))

This project uses Vue Macros, and in particular, the reactivity transform API and short v-model syntax (`v-model` becomes `::`). You can configure those in both the [nuxt.config.ts](nuxt.config.ts) and [tsconfig.json](tsconfig.json) files.

Pinia stores are stored in the `stores` directory, and are automatically registered for auto-import.

### 🌐 Localization

Nightrunner uses Nuxt i18n for localization. The default language is the system's language, and English is the fallback, but it can be changed. You can add as many locales as you want by creating a file in the `locales` directory, following the same scheme as the already provided files.

To interact with it, there are several files and composables available to you:

- `utils/locales.ts` is ran every time Nuxt reloads the project, and exports the list of locales available in the project. As you can see in it, locale files can be either `.yml`, `.yaml`, or `.json` files.
- `nuxt.config.ts` is where the actual configuration of the plugin resides. This is where you can change the default locale, the fallback locale, and the strategy for loading the locales.
- `useLocale` is a composable that provides ref to the current preferred locale. This is where one can change the fallback locale (or the default locale to that matter, but it is not recommended and is more complicated). The current preferred locale is stored and persisted in local storage. When the ref is updated, the local storage is updated as well.
- `useCustomI18n` is a wrapper around the `useLocale` and `useI18n` composable from Nuxt i18n. See the [documentation](https://v8.i18n.nuxtjs.org/) for more information. In particular, what it does is synchronize the preferred locale in the local storage with the locale used by Nuxt i18n and the current localized route.
- `localizedNavigateTo` is a wrapper around the `navigateTo` function from Nuxt. It allows you to navigate through the app, keeping the current locale.
- `NuxtLinkLocale` is wrapper around `NuxtLink` which is the counterpart to `localizedNavigateTo`.

For more information on Nuxt i18n, please refer to the [documentation](https://v8.i18n.nuxtjs.org/).

### 🖌️ Theme: Light and Dark

Nightrunner provides a basic theme system, with a light and a dark theme. The theme can be interacted with thanks to the `useDark` composable, which provides a ref to the current theme, a boolean ref to know if the current theme is dark, the user's preferred theme, and a function to toggle the theme. The current theme is stored and persisted in locale storage. When the ref is updated, the locale storage is updated as well.

Along with the locale storage, the theme is also stored as a class on the `html` element. This allows you to use CSS variables to style your app, and have the theme change automatically when the user changes it. In particular, this works well with UnoCSS (or Tailwind-like CSS frameworks) with the `dark:` pseudo-class prefix.

## 🧑‍💻 Development

### ⚙️ Setup

Prefer VSCode to work using this template. You can use whatever IDE you want, but you will have to configure it yourself,
and won't be able to have access to the recommended extensions.

When opening VSCode, you will be prompted to install recommended extensions. Do so and reload.

On your first reload, you will be prompted to disabled some extensions (such as built-in TypeScript language features). Do so and reload.

Install `pnpm` globally if it is not already installed:

```bash
npm install -g pnpm
```

Install dependencies:

```bash
pnpm i
```

### 🏃‍♂️ Running in development mode

```bash
pnpm dev
```

### 💪 Building for production

In SSR Mode:

```bash
pnpm build
```

The output will be generated in the `.output/` directory.

In SPA Mode:

```bash
pnpm generate
```

The static output will be generated in the `.output/public/` directory.

### 📝 Other scripts

```bash
pnpm nuxi add <template> <name> # Add a new page, component, store, composable, etc.
pnpm taze # Update dependencies
pnpm lint --fix # Lint the code and fix errors, following the ESLint configuration
```

## TODO

- Add documentation for the components and composables
- Add configuration for OAuth
