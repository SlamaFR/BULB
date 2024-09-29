import * as Colors from '~/data/colors'
import * as Modes from '~/data/modes'
import * as Services from '~/data/services'

export const COLORS: ColorChoice[] = [
  Colors.ROUGE_COQUELICOT,
  Colors.ORANGE,
  Colors.JAUNE_VIF,
  Colors.JAUNE_OCRE,
  Colors.MARON,
  Colors.OLIVE_CLAIR,
  Colors.OLIVE_FONCE,
  Colors.VERT_FONCE,
  Colors.VERT_CLAIR,
  Colors.TURQUOISE,
  Colors.BLEU_CLAIR,
  Colors.BLEU_OUTREMER,
  Colors.BLEU_FONCE,
  Colors.VIOLET,
  Colors.MAGENTA,
  Colors.LILAS,
  Colors.ROSE,
  Colors.ROUGE_FRAMBOISE,
]

export const MODES: ModeChoice[] = [
  Modes.BOAT,
  Modes.BRT,
  Modes.BUS,
  Modes.CABLE,
  Modes.METRO,
  Modes.RER,
  Modes.TRAIN,
  Modes.TRAM,
  Modes.VELO,
]

export const BUS_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'BUS', $builtinLineIndex: { index: 'tzen1' } }, label: 'Tzen 1', color: '#cec92a' },
  { value: { mode: 'BUS', $builtinLineIndex: { index: 'tzen2' } }, label: 'Tzen 2', color: '#cec92a' },
  { value: { mode: 'BUS', $builtinLineIndex: { index: 'tzen3' } }, label: 'Tzen 3', color: '#cec92a' },
  { value: { mode: 'BUS', $builtinLineIndex: { index: 'tzen4' } }, label: 'Tzen 4', color: '#cec92a' },
  { value: { mode: 'BUS', $builtinLineIndex: { index: 'tzen5' } }, label: 'Tzen 5', color: '#cec92a' },
  { value: { mode: 'BUS', $builtinLineIndex: { index: 'tzen6' } }, label: 'Tzen 6', color: '#cec92a' },
  { value: { mode: 'BUS', $builtinLineIndex: { index: 'tvm' } }, label: 'Trans-Val-de-Marne', color: '#006db8' },
]

export const CABLE_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'CABLE', $builtinLineIndex: { index: '1' } }, label: 'Câble C1', color: '#4c90cd' },
]

export const METRO_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'METRO', $builtinLineIndex: { index: '1' } }, label: 'Ligne 1', color: '#ffcd02' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '2' } }, label: 'Ligne 2', color: '#006db8' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '3' } }, label: 'Ligne 3', color: '#9b993b' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '3bis' } }, label: 'Ligne 3 bis', color: '#87d3df' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '4' } }, label: 'Ligne 4', color: '#bb4a9b' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '5' } }, label: 'Ligne 5', color: '#f78f4b' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '6' } }, label: 'Ligne 6', color: '#77c696' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '7' } }, label: 'Ligne 7', color: '#f59fb3' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '7bis' } }, label: 'Ligne 7 bis', color: '#77c696' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '8' } }, label: 'Ligne 8', color: '#c5a3cd' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '9' } }, label: 'Ligne 9', color: '#cec92a' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '10' } }, label: 'Ligne 10', color: '#e0b03b' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '11' } }, label: 'Ligne 11', color: '#8d6539' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '12' } }, label: 'Ligne 12', color: '#008c5a' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '13' } }, label: 'Ligne 13', color: '#87d3df' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '14' } }, label: 'Ligne 14', color: '#662c91' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '15' } }, label: 'Ligne 15', color: '#b80b4b' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '16' } }, label: 'Ligne 16', color: '#f59fb3' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '17' } }, label: 'Ligne 17', color: '#cec92a' },
  { value: { mode: 'METRO', $builtinLineIndex: { index: '18' } }, label: 'Ligne 18', color: '#00b397' },
]

export const RER_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'RER', $builtinLineIndex: { index: 'A' } }, label: 'RER A', color: '#ed1c2a' },
  { value: { mode: 'RER', $builtinLineIndex: { index: 'B' } }, label: 'RER B', color: '#4c90cd' },
  { value: { mode: 'RER', $builtinLineIndex: { index: 'C' } }, label: 'RER C', color: '#ffcd02' },
  { value: { mode: 'RER', $builtinLineIndex: { index: 'D' } }, label: 'RER D', color: '#008c5a' },
  { value: { mode: 'RER', $builtinLineIndex: { index: 'E' } }, label: 'RER E', color: '#bb4a9b' },
]

export const TRAIN_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'H' } }, label: 'Transilien H', color: '#8d6539' },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'J' } }, label: 'Transilien J', color: '#cec92a' },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'K' } }, label: 'Transilien K', color: '#9b993b' },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'L' } }, label: 'Transilien L', color: '#c5a3cd' },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'N' } }, label: 'Transilien N', color: '#00b397' },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'P' } }, label: 'Transilien P', color: '#f78f4b' },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'R' } }, label: 'Transilien R', color: '#f59fb3' },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'U' } }, label: 'Transilien U', color: '#b80b4b' },
  { value: { mode: 'TRAIN', $builtinLineIndex: { index: 'V' } }, label: 'Transilien V', color: '#9b993b' },
]

export const TRAM_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '1' } }, label: 'Tramway T1', color: '#006db8' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '2' } }, label: 'Tramway T2', color: '#bb4a9b' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '3a' } }, label: 'Tramway T3a', color: '#f78f4b' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '3b' } }, label: 'Tramway T3b', color: '#008c5a' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '4' } }, label: 'Tramway T4', color: '#e0b03b' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '5' } }, label: 'Tramway T5', color: '#662c91' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '6' } }, label: 'Tramway T6', color: '#ed1c2a' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '7' } }, label: 'Tramway T7', color: '#8d6539' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '8' } }, label: 'Tramway T8', color: '#9b993b' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '9' } }, label: 'Tramway T9', color: '#4c90cd' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '10' } }, label: 'Tramway T10', color: '#9b993b' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '11' } }, label: 'Tramway T11', color: '#f78f4b' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '12' } }, label: 'Tramway T12', color: '#b80b4b' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '13' } }, label: 'Tramway T13', color: '#8d6539' },
  { value: { mode: 'TRAM', $builtinLineIndex: { index: '14' } }, label: 'Tramway T14', color: '#00b397' },
]

export const SERVICES: ServiceChoice[] = [
  Services.AIRPORT,
  Services.MAIN_STATION,
  Services.BULLET_TRAIN,
  Services.REGIONAL_TRAIN,
  Services.FUNICULAR,
  Services.ROISSY_BUS,
  Services.ORLY_BUS,
  Services.ORLYVAL_LARGE,
  Services.ORLYVAL,
  Services.CDGVAL,
]

export const AIRPORTS: AirportChoice[] = [
  { value: 'GENERIC', label: 'Générique' },
  { value: 'CDG', label: 'Charles de Gaulle' },
  { value: 'ORY', label: 'Orly' },
  { value: 'BOTH', label: 'CDG + ORY' },
]

export const SHAPES: ShapeChoice[] = [
  { value: 'CIRCLE', label: 'Cercle' },
  { value: 'SQUARE', label: 'Carré' },
  { value: 'LINES', label: 'Lignes' },
]

const BUILTIN_LINES: IndexChoice<BuiltinLineIndex>[] = Array.of(
  ...BUS_LINES,
  ...CABLE_LINES,
  ...METRO_LINES,
  ...RER_LINES,
  ...TRAIN_LINES,
  ...TRAM_LINES,
)

export function findModeByValue(value: Mode | null): ModeChoice | null {
  return MODES.find(mode => mode.value === value) ?? null
}

export function findLineByValue(index: BuiltinLineIndex): IndexChoice<BuiltinLineIndex> | null {
  return getLinesByMode(index.mode)
    .find(it => it.value.$builtinLineIndex.index === index.$builtinLineIndex.index) ?? null
}

export function getLinesByMode(mode: Mode | null): IndexChoice<BuiltinLineIndex>[] {
  return BUILTIN_LINES.filter(it => it.value?.mode === mode)
}

export function findColorByValue(value: string | null): ColorChoice | null {
  if (value === null) return null
  return COLORS.find(color => color.value === value) ?? {
    value,
    label: 'Personnalisée',
  }
}

export function findServiceByValue(value: Service | null): ServiceChoice | null {
  return SERVICES.find(service => service.value === value) ?? null
}

export function findAirportVyValue(value: Airport | null): AirportChoice | null {
  return AIRPORTS.find(airport => airport.value === value) ?? null
}

export function findShapeByValue(value: IndexShape | null): ShapeChoice | null {
  return SHAPES.find(shape => shape.value === value) ?? null
}

export function modeToShape(mode: Mode): IndexShape {
  switch (mode) {
    case 'METRO':
      return 'CIRCLE'
    case 'RER':
    case 'TRAIN':
    case 'TRAIN_RER':
      return 'SQUARE'
    case 'BOAT':
    case 'BRT':
    case 'BUS':
    case 'CABLE':
    case 'VELO':
    case 'TRAM':
      return 'LINES'
  }
}
