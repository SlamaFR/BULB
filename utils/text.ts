const DESCENDER_LETTERS = ['Q', 'g', 'j', 'p', 'q', 'y', 'ç']

export function goesBelowLine(string: string) {
  return DESCENDER_LETTERS.some(letter => string.includes(letter))
}

export function cleanName(name: string | null) {
  return name
    ?.replace(/ – | - | — /g, ' – ')
    ?.replace(/'/g, '’') ?? ''
}
