export function getOrnamentType(ornament: Ornament | null): OrnamentType | null {
  if (ornament === null) return null

  if (isAirportOrnament(ornament)) return 'AIRPORT'
  if (isTextOrnament(ornament)) return 'TEXT'

  throw new Error('Unknown ornament type')
}
