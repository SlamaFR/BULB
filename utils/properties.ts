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
      return '0.625'
    case 'RER':
    case 'TRAIN':
    case 'TRAIN_RER':
      return '1.5'
    default:
      return '0.375'
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

export function modeToTerminusFramePolicy(mode: Mode): boolean {
  switch (mode) {
    case 'RER':
    case 'TRAIN':
      return false
    default:
      return true
  }
}
