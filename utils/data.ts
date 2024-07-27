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
  Modes.BUS,
  Modes.CABLE,
  Modes.METRO,
  Modes.RER,
  Modes.TRAIN,
  Modes.TRAM,
  Modes.VELO,
]

export const CABLE_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { index: '1', mode: 'CABLE' }, label: 'Câble C1', color: '#4c90cd' },
]

export const METRO_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { index: '1', mode: 'METRO' }, label: 'Ligne 1', color: '#ffcd02' },
  { value: { index: '2', mode: 'METRO' }, label: 'Ligne 2', color: '#006db8' },
  { value: { index: '3', mode: 'METRO' }, label: 'Ligne 3', color: '#9b993b' },
  { value: { index: '3bis', mode: 'METRO' }, label: 'Ligne 3 bis', color: '#87d3df' },
  { value: { index: '4', mode: 'METRO' }, label: 'Ligne 4', color: '#bb4a9b' },
  { value: { index: '5', mode: 'METRO' }, label: 'Ligne 5', color: '#f78f4b' },
  { value: { index: '6', mode: 'METRO' }, label: 'Ligne 6', color: '#77c696' },
  { value: { index: '7', mode: 'METRO' }, label: 'Ligne 7', color: '#f59fb3' },
  { value: { index: '7bis', mode: 'METRO' }, label: 'Ligne 7 bis', color: '#77c696' },
  { value: { index: '8', mode: 'METRO' }, label: 'Ligne 8', color: '#c5a3cd' },
  { value: { index: '9', mode: 'METRO' }, label: 'Ligne 9', color: '#cec92a' },
  { value: { index: '10', mode: 'METRO' }, label: 'Ligne 10', color: '#e0b03b' },
  { value: { index: '11', mode: 'METRO' }, label: 'Ligne 11', color: '#8d6539' },
  { value: { index: '12', mode: 'METRO' }, label: 'Ligne 12', color: '#008c5a' },
  { value: { index: '13', mode: 'METRO' }, label: 'Ligne 13', color: '#87d3df' },
  { value: { index: '14', mode: 'METRO' }, label: 'Ligne 14', color: '#662c91' },
  { value: { index: '15', mode: 'METRO' }, label: 'Ligne 15', color: '#b80b4b' },
  { value: { index: '16', mode: 'METRO' }, label: 'Ligne 16', color: '#f59fb3' },
  { value: { index: '17', mode: 'METRO' }, label: 'Ligne 17', color: '#cec92a' },
  { value: { index: '18', mode: 'METRO' }, label: 'Ligne 18', color: '#00b397' },
]

export const RER_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { index: 'A', mode: 'RER' }, label: 'RER A', color: '#ed1c2a' },
  { value: { index: 'B', mode: 'RER' }, label: 'RER B', color: '#4c90cd' },
  { value: { index: 'C', mode: 'RER' }, label: 'RER C', color: '#ffcd02' },
  { value: { index: 'D', mode: 'RER' }, label: 'RER D', color: '#008c5a' },
  { value: { index: 'E', mode: 'RER' }, label: 'RER E', color: '#bb4a9b' },
]

export const TRAIN_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { index: 'H', mode: 'TRAIN' }, label: 'Transilien H', color: '#8d6539' },
  { value: { index: 'J', mode: 'TRAIN' }, label: 'Transilien J', color: '#cec92a' },
  { value: { index: 'K', mode: 'TRAIN' }, label: 'Transilien K', color: '#9b993b' },
  { value: { index: 'L', mode: 'TRAIN' }, label: 'Transilien L', color: '#c5a3cd' },
  { value: { index: 'N', mode: 'TRAIN' }, label: 'Transilien N', color: '#00b397' },
  { value: { index: 'P', mode: 'TRAIN' }, label: 'Transilien P', color: '#f78f4b' },
  { value: { index: 'R', mode: 'TRAIN' }, label: 'Transilien R', color: '#f59fb3' },
  { value: { index: 'U', mode: 'TRAIN' }, label: 'Transilien U', color: '#b80b4b' },
  { value: { index: 'V', mode: 'TRAIN' }, label: 'Transilien V', color: '#9b993b' },
]

export const TRAM_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { index: '1', mode: 'TRAM' }, label: 'Tramway T1', color: '#006db8' },
  { value: { index: '2', mode: 'TRAM' }, label: 'Tramway T2', color: '#bb4a9b' },
  { value: { index: '3a', mode: 'TRAM' }, label: 'Tramway T3a', color: '#f78f4b' },
  { value: { index: '3b', mode: 'TRAM' }, label: 'Tramway T3b', color: '#008c5a' },
  { value: { index: '4', mode: 'TRAM' }, label: 'Tramway T4', color: '#e0b03b' },
  { value: { index: '5', mode: 'TRAM' }, label: 'Tramway T5', color: '#662c91' },
  { value: { index: '6', mode: 'TRAM' }, label: 'Tramway T6', color: '#ed1c2a' },
  { value: { index: '7', mode: 'TRAM' }, label: 'Tramway T7', color: '#8d6539' },
  { value: { index: '8', mode: 'TRAM' }, label: 'Tramway T8', color: '#9b993b' },
  { value: { index: '9', mode: 'TRAM' }, label: 'Tramway T9', color: '#4c90cd' },
  { value: { index: '10', mode: 'TRAM' }, label: 'Tramway T10', color: '#9b993b' },
  { value: { index: '11', mode: 'TRAM' }, label: 'Tramway T11', color: '#f78f4b' },
  { value: { index: '12', mode: 'TRAM' }, label: 'Tramway T12', color: '#b80b4b' },
  { value: { index: '13', mode: 'TRAM' }, label: 'Tramway T13', color: '#8d6539' },
  { value: { index: '14', mode: 'TRAM' }, label: 'Tramway T14', color: '#00b397' },
]

export const SERVICES: ServiceChoice[] = [
  Services.MAIN_STATION,
  Services.FUNICULAR,
  Services.AIRPORT,
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
    .find(it => it.value.index === index.index) ?? null
}

export function getLinesByMode(mode: Mode | null): IndexChoice<BuiltinLineIndex>[] {
  return BUILTIN_LINES.filter(it => it.value.mode === mode)
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
    case 'BUS':
    case 'CABLE':
    case 'VELO':
    case 'TRAM':
      return 'LINES'
  }
}
