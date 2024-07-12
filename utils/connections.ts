export function isModeConnection(connection: ServiceConnection | ModeConnection): connection is ModeConnection {
  return 'mode' in connection
}

export function isServiceConnection(connection: ServiceConnection | ModeConnection): connection is ServiceConnection {
  return 'services' in connection
}

export function isTextOrnament(ornament: AirportOrnament | TextOrnament): ornament is TextOrnament {
  return 'text' in ornament
}

export function isAirportOrnament(ornament: AirportOrnament | TextOrnament): ornament is AirportOrnament {
  return 'airport' in ornament
}
