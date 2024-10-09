export const MODES: ModeChoice[] = [
  { value: 'BOAT', label: 'data.mode.boat' },
  { value: 'BRT', label: 'data.mode.brt' },
  { value: 'BUS', label: 'data.mode.bus' },
  { value: 'CABLE', label: 'data.mode.cable' },
  { value: 'METRO', label: 'data.mode.metro' },
  { value: 'RER', label: 'data.mode.rer' },
  { value: 'TRAIN', label: 'data.mode.transilien' },
  { value: 'TRAM', label: 'data.mode.tram' },
  { value: 'VELO', label: 'data.mode.bike' },
]

export function findModeByValue(value: Mode | null): ModeChoice | null {
  return MODES.find(mode => mode.value === value) ?? null
}

export function modeToShape(mode: Mode): IndexShape {
  switch (mode) {
    case 'METRO':
      return 'CIRCLE'
    case 'RER':
    case 'TRAIN':
    case 'TRAIN_RER':
      return 'ROUNDED_SQUARE'
    case 'BOAT':
    case 'BRT':
    case 'BUS':
    case 'CABLE':
    case 'VELO':
    case 'TRAM':
      return 'LINES'
  }
}
