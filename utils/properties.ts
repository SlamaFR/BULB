export function modeToLineThickness(mode: Mode): string {
  switch (mode) {
    case 'BOAT':
    case 'BRT':
    case 'BUS':
    case 'METRO':
    case 'VELO':
      return '0.375'
    case 'CABLE':
    case 'TRAM':
      return '0.5'
    case 'RER':
    case 'TRAIN':
    case 'TRAIN_RER':
      return '1.375'
  }
}

export function modeToLineStyle(mode: Mode): LineStyle {
  switch (mode) {
    case 'CABLE':
    case 'TRAM':
      return 'STRIPED'
    default:
      return 'PLAIN'
  }
}

export function modeToDotsColorPolicy(mode: Mode): DotsColorPolicy {
  switch (mode) {
    case 'RER':
    case 'TRAIN':
    case 'TRAIN_RER':
      return 'WHITE'
    default:
      return 'INHERIT'
  }
}
