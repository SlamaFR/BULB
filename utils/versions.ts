const VERSION_REGEX = /(\d+)\.(\d+)\.(\d+)(?:-([a-z]+))?/

export function compareVersions(a: string | null, b: string | null) {
  if ((!a || !a.match(VERSION_REGEX)) && (!b || !b.match(VERSION_REGEX))) return 0
  if (!a || !a.match(VERSION_REGEX)) return -1
  if (!b || !b.match(VERSION_REGEX)) return 1

  const [aMajor, aMinor, aPatch, aPre] = a.match(VERSION_REGEX)!.slice(1)
  const [bMajor, bMinor, bPatch, bPre] = b.match(VERSION_REGEX)!.slice(1)

  if (aMajor !== bMajor) return aMajor > bMajor ? 1 : -1
  if (aMinor !== bMinor) return aMinor > bMinor ? 1 : -1
  if (aPatch !== bPatch) return aPatch > bPatch ? 1 : -1
  if (aPre !== bPre) {
    if (!aPre && bPre) return 1
    if (!bPre && aPre) return -1
    return aPre > bPre ? 1 : -1
  }
  return 0
}
