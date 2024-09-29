import type { Ref } from 'vue'

declare global {

  type Mode = 'BOAT'
    | 'BRT'
    | 'BUS'
    | 'CABLE'
    | 'METRO'
    | 'RER'
    | 'TRAIN'
    | 'TRAIN_RER'
    | 'TRAM'
    | 'VELO'
  type Service =
    'FUNICULAR'
    | 'MAIN_STATION'
    | 'BULLET_TRAIN'
    | 'REGIONAL_TRAIN'
    | 'AIRPORT'
    | 'ROISSY_BUS'
    | 'ORLY_BUS'
    | 'CDGVAL'
    | 'ORLYVAL'
    | 'ORLYVAL_LARGE'

  type BusLine = 'tzen1' | 'tzen2' | 'tzen3' | 'tzen4' | 'tzen5' | 'tzen6' | 'tvm' | string
  type CableLine = '1' | string
  type MetroLine =
    '1'
    | '2'
    | '3'
    | '3bis'
    | '4'
    | '5'
    | '6'
    | '7'
    | '7bis'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | string
  type RerLine = 'A' | 'B' | 'C' | 'D' | 'E' | string
  type TrainLine = 'H' | 'J' | 'K' | 'L' | 'N' | 'P' | 'R' | 'U' | 'V' | string
  type TramLine = '1' | '2' | '3a' | '3b' | '4' | '5' | '6' | '7' | '8' | '11' | '12' | '13' | '14' | string

  type IndexShape = 'CIRCLE' | 'SQUARE' | 'LINES'

  interface ColorChoice {
    value: string
    label: string
  }

  interface ModeChoice {
    value: Mode
    label: string
  }

  interface IndexChoice<I extends LineIndex> {
    value: I
    label: string
    color?: string
  }

  interface ServiceChoice {
    value: Service
    label: string
  }

  interface AirportChoice {
    value: Airport
    label: string
  }

  interface ShapeChoice {
    value: IndexShape
    label: string
  }

  interface CustomLineIndexDescription {
    id: string
    index: string
    prefix?: string
    suffix?: string
    shape: IndexShape
    mode: Mode
    color: string
  }

  interface Project {
    line: Line
    customIndices: CustomLineIndexDescription[]
  }

  /* ///////////// LINE ///////////// */

  type OrnamentPosition = 'RIGHT' | 'BOTTOM'
  type Airport = 'CDG' | 'ORY' | 'BOTH' | 'GENERIC'

  interface AirportOrnament {
    id: string
    position: OrnamentPosition
    $airportOrnament: {
      airport: Airport | null
    }
  }

  interface AirportNameOrnament {
    id: string
    position: 'RIGHT'
    $airportNameOrnament: {
      name: string
    }
  }

  interface TextOrnament {
    id: string
    position: OrnamentPosition
    $textOrnament: {
      text: string
    }
  }

  type Ornament = AirportOrnament | AirportNameOrnament | TextOrnament

  interface ModeConnectionElement {
    id: string
    $modeConnectionElement: {
      lineIndex: LineIndex | null
      walk: boolean
      ornament: Ornament | null
    }
  }

  interface ServiceConnectionElement {
    id: string
    $serviceConnectionElement: {
      service: Service | null
      ornament: Ornament | null
    }
  }

  interface ModeConnection {
    id: string
    $modeConnection: {
      mode: Mode | null
      elements: ModeConnectionElement[]
      walk: boolean
    }
  }

  interface ServiceConnection {
    id: string
    $serviceConnection: {
      elements: ServiceConnectionElement[]
      walk: boolean
    }
  }

  type Connection = ModeConnection | ServiceConnection

  interface Stop {
    id: string
    name: string
    subtitle: string | null
    placeName: string | null
    preventSubtitleOverlapping: boolean
    interestPoint: boolean
    terminus: boolean
    closed: boolean
    connections: Connection[]
  }

  interface Branch {
    id: string
    $branch: {
      stopSpacing: number
      leftMargin?: number
      rightMargin?: number
      stops: Stop[]
    }
  }

  interface Fork {
    id: string
    $fork: {
      toward: 'LEFT' | 'RIGHT'
      originOffset: number
      linksOffset: [number, number]
      offsetMultiplier?: number
    }
  }

  interface ParallelBranches {
    id: string
    $parallelBranches: {
      alignement: 'FLUID' | 'LEFT' | 'RIGHT'
      sections: [LineSection, LineSection]
    }
  }

  interface Loop {
    id: string
    $loop: {
      toward: 'LEFT' | 'RIGHT'
      linksOffsets: [number, number]
      stop?: Stop
    }
  }

  type LineElement = Branch | Fork | ParallelBranches | Loop

  interface LineSection {
    id: string
    $lineSection: {
      title?: string
      subtitle?: string
      levelOffset?: number
      elements: LineElement[]
    }
  }

  interface BuiltinLineIndex {
    mode: Mode
    $builtinLineIndex: {
      index: string
    }
  }

  interface CustomLineIndex {
    mode: Mode
    $customLineIndex: {
      id: string
    }
  }

  type LineIndex = BuiltinLineIndex | CustomLineIndex

  interface Line {
    mode: Mode | null
    index: LineIndex | null
    color: string | null
    lineWidth: number
    topology: LineSection[]
  }

  export interface LineContext {
    color: Ref<string>
    lineWidth: Ref<number>
  }

  export interface StopContext {
    margins: {
      leftMargin: {
        name: string
        connections: string
      }
      rightMargin: {
        name: string
        connections: string
      }
    }
    namesWidth: ComputedRef<string>
  }
}

export {}
