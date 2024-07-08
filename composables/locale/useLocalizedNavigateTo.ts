import type { RouteLocationNamedRaw, RouteLocationPathRaw } from 'vue-router'

export type NavigateToParameters = Parameters<typeof navigateTo>
export type NavigateToPath = NavigateToParameters[0]
export type NavigateToOptions = NavigateToParameters[1]

export default function useLocalizedNavigateTo() {
  return function localizedNavigateTo(path: NavigateToPath, options?: NavigateToOptions) {
    const localeRoute = useLocaleRoute()
    const route = localeRoute(path as string | RouteLocationPathRaw | RouteLocationNamedRaw)
    if (route) {
      return navigateTo(route.fullPath, options)
    }
  }
}

export const localizedNavigateTo = useLocalizedNavigateTo()
