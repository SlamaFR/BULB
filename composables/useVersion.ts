export default function useVersion() {
  return import.meta.env.VITE_APP_VERSION as string
}
