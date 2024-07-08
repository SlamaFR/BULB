export default function useDark() {
  const colorMode = useColorMode()

  function toggle(dark?: boolean): void {
    if (colorMode.unknown) return

    if (dark !== undefined) {
      colorMode.preference = dark ? 'dark' : 'light'
    } else {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  }

  const value = computed(() => colorMode.value)
  const isDark = computed(() => value.value === 'dark')
  const preference = computed(() => colorMode.preference)

  return { toggle, value, isDark, preference }
}
