import { expect, it } from 'vitest'
import { compareVersions } from './versions'

it.each([
  ['1.0.0', '1.0.1', -1],
  ['1.0.1', '1.0.0', 1],
  ['1.0.0', '1.0.0', 0],
  ['1.0.0-alpha', '1.0.0', -1],
  ['1.0.0', '1.0.0-alpha', 1],
  ['1.0.0-alpha', '1.0.0-alpha', 0],
  ['1.0.0-alpha', '1.0.0-beta', -1],
  ['1.0.0-beta', '1.0.0-alpha', 1],
  ['1.1.0', '1.0.0', 1],
  ['1.0.0', '1.1.0', -1],
  ['2.0.0', '1.9.9', 1],
  ['1.9.9', '2.0.0', -1],
  ['1.0.0', null, 1],
  [null, '1.0.0', -1],
  [null, null, 0],
  ['1.0.0', 'wrong', 1],
  ['wrong', '1.0.0', -1],
  ['wrong', 'wrong', 0],
])('compare versions %s and %s', (a, b, expected) => {
  expect(compareVersions(a, b)).toBe(expected)
})
