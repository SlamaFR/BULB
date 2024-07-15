export const COLORS = [
  { value: '#ed1c2a', label: 'Rouge coquelicot', textColor: 'white' },
  { value: '#f78f4b', label: 'Orange', textColor: 'black' },
  { value: '#ffcd02', label: 'Jaune Vif', textColor: 'black' },
  { value: '#e0b03b', label: 'Jaune Ocre', textColor: 'black' },
  { value: '#8d6539', label: 'Maron', textColor: 'white' },
  { value: '#cec92a', label: 'Olive Clair', textColor: 'black' },
  { value: '#9b993b', label: 'Olive Foncé', textColor: 'white' },
  { value: '#008c5a', label: 'Vert Foncé', textColor: 'white' },
  { value: '#77c696', label: 'Vert Clair', textColor: 'black' },
  { value: '#00b397', label: 'Turquoise', textColor: 'white' },
  { value: '#87d3df', label: 'Bleu Clair', textColor: 'black' },
  { value: '#4c90cd', label: 'Bleu Outremer', textColor: 'white' },
  { value: '#006db8', label: 'Bleu Foncé', textColor: 'black' },
  { value: '#662c91', label: 'Violet', textColor: 'white' },
  { value: '#bb4a9b', label: 'Magenta', textColor: 'white' },
  { value: '#c5a3cd', label: 'Lilas', textColor: 'black' },
  { value: '#f59fb3', label: 'Rose', textColor: 'black' },
  { value: '#b80b4b', label: 'Rouge Framboise', textColor: 'white' },
]

export function findColorByValue(value: string) {
  return COLORS.find(color => color.value === value) ?? COLORS[0]
}

interface ModeChoice {
  value: Mode
  label: string
  background: boolean
  round: boolean
}
export const MODES: ModeChoice[] = [
  { value: 'METRO', label: 'Métro', background: true, round: true },
  { value: 'RER', label: 'RER', background: true, round: false },
  { value: 'TRAIN', label: 'Transilien', background: true, round: false },
  { value: 'TRAM', label: 'Tramway', background: true, round: false },
]

export function findModeByValue(value: Mode) {
  return MODES.find(mode => mode.value === value) ?? MODES[0]
}

export const METRO_LINES = [
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

export const RER_LINES = [
  { value: 'A', label: 'RER A', color: '#ed1c2a', mode: 'RER' },
  { value: 'B', label: 'RER B', color: '#4c90cd', mode: 'RER' },
  { value: 'C', label: 'RER C', color: '#ffcd02', mode: 'RER' },
  { value: 'D', label: 'RER D', color: '#008c5a', mode: 'RER' },
  { value: 'E', label: 'RER E', color: '#bb4a9b', mode: 'RER' },
]

export const TRAIN_LINES = [
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

export const TRAM_LINES = [
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

export function findLineByValueAndMode(value: string, mode: Mode) {
  switch (mode) {
    case 'METRO':
      return METRO_LINES.find(line => line.value === value) ?? METRO_LINES[0]
    case 'RER':
      return RER_LINES.find(line => line.value === value) ?? RER_LINES[0]
    case 'TRAIN':
      return TRAIN_LINES.find(line => line.value === value) ?? TRAIN_LINES[0]
    case 'TRAM':
      return TRAM_LINES.find(line => line.value === value) ?? TRAM_LINES[0]
  }
  return {
    value: '',
    label: '',
    color: '',
    mode: '',
  }
}
