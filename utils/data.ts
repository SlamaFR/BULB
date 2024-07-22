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

export const CABLE_LINES: IndexChoice[] = [
  { value: '1', label: 'Câble 1', color: '#4c90cd', mode: 'CABLE' },
]

export const METRO_LINES: IndexChoice[] = [
  { value: '1', label: 'Ligne 1', color: '#ffcd02', mode: 'METRO' },
  { value: '2', label: 'Ligne 2', color: '#006db8', mode: 'METRO' },
  { value: '3', label: 'Ligne 3', color: '#9b993b', mode: 'METRO' },
  { value: '3bis', label: 'Ligne 3 bis', color: '#87d3df', mode: 'METRO' },
  { value: '4', label: 'Ligne 4', color: '#bb4a9b', mode: 'METRO' },
  { value: '5', label: 'Ligne 5', color: '#f78f4b', mode: 'METRO' },
  { value: '6', label: 'Ligne 6', color: '#77c696', mode: 'METRO' },
  { value: '7', label: 'Ligne 7', color: '#f59fb3', mode: 'METRO' },
  { value: '7bis', label: 'Ligne 7 bis', color: '#77c696', mode: 'METRO' },
  { value: '8', label: 'Ligne 8', color: '#c5a3cd', mode: 'METRO' },
  { value: '9', label: 'Ligne 9', color: '#cec92a', mode: 'METRO' },
  { value: '10', label: 'Ligne 10', color: '#e0b03b', mode: 'METRO' },
  { value: '11', label: 'Ligne 11', color: '#8d6539', mode: 'METRO' },
  { value: '12', label: 'Ligne 12', color: '#008c5a', mode: 'METRO' },
  { value: '13', label: 'Ligne 13', color: '#87d3df', mode: 'METRO' },
  { value: '14', label: 'Ligne 14', color: '#662c91', mode: 'METRO' },
  { value: '15', label: 'Ligne 15', color: '#b80b4b', mode: 'METRO' },
  { value: '16', label: 'Ligne 16', color: '#f59fb3', mode: 'METRO' },
  { value: '17', label: 'Ligne 17', color: '#cec92a', mode: 'METRO' },
  { value: '18', label: 'Ligne 18', color: '#00b397', mode: 'METRO' },
]

export const RER_LINES: IndexChoice[] = [
  { value: 'A', label: 'RER A', color: '#ed1c2a', mode: 'RER' },
  { value: 'B', label: 'RER B', color: '#4c90cd', mode: 'RER' },
  { value: 'C', label: 'RER C', color: '#ffcd02', mode: 'RER' },
  { value: 'D', label: 'RER D', color: '#008c5a', mode: 'RER' },
  { value: 'E', label: 'RER E', color: '#bb4a9b', mode: 'RER' },
]

export const TRAIN_LINES: IndexChoice[] = [
  { value: 'H', label: 'Transilien H', color: '#8d6539', mode: 'TRAIN' },
  { value: 'J', label: 'Transilien J', color: '#cec92a', mode: 'TRAIN' },
  { value: 'K', label: 'Transilien K', color: '#9b993b', mode: 'TRAIN' },
  { value: 'L', label: 'Transilien L', color: '#c5a3cd', mode: 'TRAIN' },
  { value: 'N', label: 'Transilien N', color: '#00b397', mode: 'TRAIN' },
  { value: 'P', label: 'Transilien P', color: '#f78f4b', mode: 'TRAIN' },
  { value: 'R', label: 'Transilien R', color: '#f59fb3', mode: 'TRAIN' },
  { value: 'U', label: 'Transilien U', color: '#b80b4b', mode: 'TRAIN' },
  { value: 'V', label: 'Transilien V', color: '#9b993b', mode: 'TRAIN' },
]

export const TRAM_LINES: IndexChoice[] = [
  { value: '1', label: 'Tramway 1', color: '#006db8', mode: 'TRAM' },
  { value: '2', label: 'Tramway 2', color: '#bb4a9b', mode: 'TRAM' },
  { value: '3a', label: 'Tramway 3a', color: '#f78f4b', mode: 'TRAM' },
  { value: '3b', label: 'Tramway 3b', color: '#008c5a', mode: 'TRAM' },
  { value: '4', label: 'Tramway 4', color: '#e0b03b', mode: 'TRAM' },
  { value: '5', label: 'Tramway 5', color: '#662c91', mode: 'TRAM' },
  { value: '6', label: 'Tramway 6', color: '#ed1c2a', mode: 'TRAM' },
  { value: '7', label: 'Tramway 7', color: '#8d6539', mode: 'TRAM' },
  { value: '8', label: 'Tramway 8', color: '#9b993b', mode: 'TRAM' },
  { value: '9', label: 'Tramway 9', color: '#4c90cd', mode: 'TRAM' },
  { value: '10', label: 'Tramway 10', color: '#9b993b', mode: 'TRAM' },
  { value: '11', label: 'Tramway 11', color: '#f78f4b', mode: 'TRAM' },
  { value: '12', label: 'Tramway 12', color: '#b80b4b', mode: 'TRAM' },
  { value: '13', label: 'Tramway 13', color: '#8d6539', mode: 'TRAM' },
  { value: '14', label: 'Tramway 14', color: '#00b397', mode: 'TRAM' },
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

export function findModeByValue(value: Mode | null) {
  return MODES.find(mode => mode.value === value) ?? null
}

export function findLineByValueAndMode(value: string | null, mode: Mode | null) {
  return getLinesByMode(mode).find(line => line.value === value) ?? null
}

export function getLinesByMode(mode: Mode | null) {
  switch (mode) {
    case 'CABLE':
      return CABLE_LINES
    case 'METRO':
      return METRO_LINES
    case 'RER':
      return RER_LINES
    case 'TRAIN':
      return TRAIN_LINES
    case 'TRAM':
      return TRAM_LINES
  }
  return []
}

export function findColorByValue(value: string | null) {
  if (value === null) return null
  return COLORS.find(color => color.value === value) ?? {
    value,
    label: 'Personnalisée',
  } as ColorChoice
}

export function findServiceByValue(value: Service | null) {
  return SERVICES.find(service => service.value === value) ?? null
}

export function findAirportVyValue(value: Airport | null) {
  return AIRPORTS.find(airport => airport.value === value) ?? null
}

export function findShapeByValue(value: IndexShape | null) {
  return SHAPES.find(shape => shape.value === value) ?? null
}
