import type { Ref } from 'vue'

declare global {

  type Mode = 'BOAT' | 'BUS' | 'CABLE' | 'METRO' | 'RER' | 'TRAIN' | 'TRAIN_RER' | 'TRAM' | 'VELO'
  type Service = 'FUNICULAR' | 'MAIN_STATION' | 'AIRPORT'

  type CableLine = '1' | string
  type MetroLine = '1' | '2' | '3' | '3bis' | '4' | '5' | '6' | '7' | '7bis' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | string
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
    background: boolean
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
    $airportOrnament: {
      position: OrnamentPosition
      airport: Airport
    }
  }
  interface TextOrnament {
    $textOrnament: {
      position: OrnamentPosition
      text: string
    }
  }
  type Ornament = AirportOrnament | TextOrnament

  interface ModeConnectionElement {
    $modeConnectionElement: {
      lineIndex: LineIndex | null
      walk: boolean
      ornament: Ornament | null
    }
  }
  interface ServiceConnectionElement {
    $serviceConnectionElement: {
      service: Service | null
      ornament: Ornament | null
    }
  }

  interface ModeConnection {
    $modeConnection: {
      mode: Mode | null
      elements: ModeConnectionElement[]
      walk: boolean
    }
  }
  interface ServiceConnection {
    $serviceConnection: {
      elements: ServiceConnectionElement[]
      walk: boolean
    }
  }
  type Connection = ModeConnection | ServiceConnection

  interface Stop {
    name: string
    subtitle?: string
    preventSubtitleOverlapping: boolean
    interestPoint: boolean
    connections: Connection[]
  }

  interface Branch {
    $branch: {
      stopSpacing: number
      levelOffset: number
      stops: Stop[]
    }
  }
  interface Fork {
    $fork: {
      toward: 'LEFT' | 'RIGHT'
      originOffset: number
      linksOffset: [number, number]
    }
  }
  interface Shift {
    $shift: {
      fromOffset: number
      toOffset: number
    }
  }
  interface ParallelBranches {
    $parallelBranches: {
      alignement: 'FLUID' | 'LEFT' | 'RIGHT'
      sections: [LineSection, LineSection]
    }
  }
  interface Loop {
    $loop: {
      toward: 'LEFT' | 'RIGHT'
      linksOffsets: [number, number]
      stop?: Stop
    }
  }
  type LineElement = Branch | Fork | ParallelBranches | Loop

  interface LineSection {
    $lineSection: {
      title?: string
      subtitle?: string
      levelOffset?: number
      elements: LineElement[]
    }
  }

  interface BuiltinLineIndex {
    $builtinLineIndex: {
      mode: Mode
      index: string
    }
  }
  interface CustomLineIndex {
    $customLineIndex: {
      mode: Mode
      id: string
    }
  }
  type LineIndex = BuiltinLineIndex | CustomLineIndex

  interface Line {
    mode: Mode | null
    index: LineIndex | null
    color: string | null
    lineTopology: LineSection[]
  }

  export interface LineContext {
    color: Ref<string>
  }
}

export {}
