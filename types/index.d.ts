declare global {
  // declare your types here

  type Mode = 'BOAT' | 'BUS' | 'CABLE' | 'METRO' | 'RER' | 'TER' | 'TRAIN' | 'TRAIN_RER' | 'TRAM' | 'VELO'
  type Service = 'FUNICULAR' | 'MAIN_STATION' | 'AIRPORT'

  type CableLine = '1' | string
  type MetroLine = '1' | '2' | '3' | '3bis' | '4' | '5' | '6' | '7' | '7bis' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | string
  type RerLine = 'A' | 'B' | 'C' | 'D' | 'E' | string
  type TrainLine = 'H' | 'J' | 'K' | 'L' | 'N' | 'P' | 'R' | 'U' | 'V' | string
  type TramLine = '1' | '2' | '3a' | '3b' | '4' | '5' | '6' | '7' | '8' | '11' | '12' | '13' | '14' | string

  type OrnamentPosition = 'RIGHT' | 'BOTTOM'
  type Airport = 'CDG' | 'ORY' | 'BOTH' | 'GENERIC'

  interface AirportOrnament {
    position: OrnamentPosition
    airport: Airport
  }
  interface TextOrnament {
    position: OrnamentPosition
    text: string
  }
  type Ornament = AirportOrnament | TextOrnament

  interface ConnectionLine {
    lineIndex: string
    walk: boolean
    ornament?: Ornament | null
  }
  interface ConnectionService {
    service: Service
    ornament?: Ornament | null
  }

  interface ModeConnection {
    mode: Mode
    walk: boolean
    lines: ConnectionLine[]
  }
  interface ServiceConnection {
    services: ConnectionService[]
    walk: boolean
  }
  type Connection = ModeConnection | ServiceConnection

  interface Stop {
    name: string
    subtitle?: string | null
    preventSubtitleOverlapping: boolean
    interestPoint: boolean
    connections: Connection[]
  }

  interface Line {
    mode: Mode
    index: string
    color: string
    stops: Stop[]
  }
}

export {}
