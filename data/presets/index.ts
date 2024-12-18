import * as Metros from '~/data/presets/metro'
import * as Rers from '~/data/presets/rer'
import * as Trains from '~/data/presets/train'
import * as Trams from '~/data/presets/tram'
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
        case '16':
          return Metros.METRO_16 as unknown as Project
        case '17':
          return Metros.METRO_17 as unknown as Project
        case '18':
          return Metros.METRO_18 as unknown as Project
        default:
          return null
      }
    case 'RER':
      switch (index.$builtinLineIndex.index) {
        case 'A':
          return Rers.RER_A as unknown as Project
        case 'B':
          return Rers.RER_B as unknown as Project
        case 'C':
          return Rers.RER_C as unknown as Project
        case 'E':
          return Rers.RER_E as unknown as Project
        default:
          return null
      }
    case 'TRAIN':
      switch (index.$builtinLineIndex.index) {
        case 'K':
          return Trains.TRAIN_K as unknown as Project
        case 'N':
          return Trains.TRAIN_N as unknown as Project
        case 'U':
          return Trains.TRAIN_U as unknown as Project
        case 'V':
          return Trains.TRAIN_V as unknown as Project
        default:
          return null
      }
    case 'TRAM':
      switch (index.$builtinLineIndex.index) {
        case '1':
          return Trams.TRAM_1 as unknown as Project
        case '2':
          return Trams.TRAM_2 as unknown as Project
        case '3a':
          return Trams.TRAM_3A as unknown as Project
        case '3b':
          return Trams.TRAM_3B as unknown as Project
        case '5':
          return Trams.TRAM_5 as unknown as Project
        case '6':
          return Trams.TRAM_6 as unknown as Project
        case '7':
          return Trams.TRAM_7 as unknown as Project
        case '9':
          return Trams.TRAM_9 as unknown as Project
        case '10':
          return Trams.TRAM_10 as unknown as Project
        case '11':
          return Trams.TRAM_11 as unknown as Project
        case '12':
          return Trams.TRAM_12 as unknown as Project
        case '13':
          return Trams.TRAM_13 as unknown as Project
        case '14':
          return Trams.TRAM_14 as unknown as Project
        default:
          return null
      }
  }
  return null
}
