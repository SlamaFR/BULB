import { BUS_LINES } from './bus'
import { CABLE_LINES } from './cable'
import { METRO_LINES } from './metro'
import { RER_LINES } from './rer'
import { TRAM_LINES } from './tram'
import { TRANSILIEN_LINES } from './transilien'

const BUILTIN_LINES: IndexChoice<BuiltinLineIndex>[] = Array.of(
  ...BUS_LINES,
  ...CABLE_LINES,
  ...METRO_LINES,
  ...RER_LINES,
  ...TRAM_LINES,
  ...TRANSILIEN_LINES,
)

export {
  BUILTIN_LINES,
  BUS_LINES,
  CABLE_LINES,
  METRO_LINES,
  RER_LINES,
  TRAM_LINES,
  TRANSILIEN_LINES,
}

export function getLinesByMode(mode: Mode | null): IndexChoice<BuiltinLineIndex>[] {
  return BUILTIN_LINES.filter(it => it.value?.mode === mode)
}

export function findLineByValue(index: BuiltinLineIndex): IndexChoice<BuiltinLineIndex> | null {
  return getLinesByMode(index.mode)
    .find(it => it.value.$builtinLineIndex.index === index.$builtinLineIndex.index) ?? null
}
