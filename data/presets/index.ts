import * as Metros from '~/data/presets/metro'
import { isCustom } from '~/utils/types'

export function getPreset(mode: Mode, index: LineIndex): Project | null {
  if (isCustom(index)) return null

  switch (mode) {
    case 'METRO':
      switch (index.$builtinLineIndex.index) {
        case '1':
          return Metros.METRO_1 as unknown as Project
        case '2':
          return Metros.METRO_2 as unknown as Project
        case '3':
          return Metros.METRO_3 as unknown as Project
        case '3bis':
          return Metros.METRO_3_bis as unknown as Project
        case '4':
          return Metros.METRO_4 as unknown as Project
        case '5':
          return Metros.METRO_5 as unknown as Project
        case '6':
          return Metros.METRO_6 as unknown as Project
        case '7':
          return Metros.METRO_7 as unknown as Project
        case '8':
          return Metros.METRO_8 as unknown as Project
        case '9':
          return Metros.METRO_9 as unknown as Project
        case '10':
          return Metros.METRO_10 as unknown as Project
        case '11':
          return Metros.METRO_11 as unknown as Project
        case '12':
          return Metros.METRO_12 as unknown as Project
        case '13':
          return Metros.METRO_13 as unknown as Project
        case '14':
          return Metros.METRO_14 as unknown as Project
      }
  }
  return null
}
