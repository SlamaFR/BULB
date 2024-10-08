export default function useVersion() {
  return {
    applicationVersion: import.meta.env.VITE_APP_VERSION as string,
    projectMinimumVersion: import.meta.env.VITE_APP_PROJECT_MINIMUM_VERSION as string,
  }
}
