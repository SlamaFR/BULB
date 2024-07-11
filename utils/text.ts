const DESCENDER_LETTERS = ['Q', 'g', 'j', 'p', 'q', 'y']

export function goesBelowLine(string: string) {
  return DESCENDER_LETTERS.some(letter => string.includes(letter))
}
