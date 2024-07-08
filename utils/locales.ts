const localesFolder = '../locales/'
const ymlLocales: [string, any][] = Object.entries(import.meta.glob('../locales/*.yml', { eager: true }))
const yamlLocales: [string, any][] = Object.entries(import.meta.glob('../locales/*.yaml', { eager: true }))
const jsonLocales: [string, any][] = Object.entries(import.meta.glob('../locales/*.json', { eager: true }))

function getLocaleEntries(locales: [string, any][], extension: string): [string, any][] {
  return locales.map(([key, value]) => {
    return [key.slice(localesFolder.length, -`.${extension}`.length), value.default]
  })
}

export const messages = Object.fromEntries([
  ...getLocaleEntries(ymlLocales, 'yml'),
  ...getLocaleEntries(yamlLocales, 'yaml'),
  ...getLocaleEntries(jsonLocales, 'json'),
])

export const availableLocales = Object.keys(messages)
