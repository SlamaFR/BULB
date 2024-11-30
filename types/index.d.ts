import type { ComputedRef, Ref } from 'vue'

declare global {

  type Mode =
    'BOAT'
    | 'BRT'
    | 'BUS'
    | 'CABLE'
    | 'METRO'
    | 'NOCTILIEN'
    | 'RER'
    | 'TRAIN'
    | 'TRAIN_RER'
    | 'TRAM'
    | 'VELO'
  type Service =
    'FUNICULAR'
    | 'MAIN_STATION'
    | 'BULLET_TRAIN'
    | 'SUBURBAN_TRAIN'
    | 'TGV'
    | 'TER'
    | 'LONG_DISTANCE_BUS'
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

  type IndexShape = 'CIRCLE' | 'ROUNDED_SQUARE' | 'LINES' | 'RECTANGLE' | 'CUT_RECTANGLE'

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
    version: string
    line: Line
    customIndices: CustomLineIndexDescription[]
  }

  /* ///////////// LINE ///////////// */

  type OrnamentType = 'AIRPORT' | 'AIRPORT_NAME' | 'TEXT'
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
    $stop: {
      name: string
      subtitle: string | null
      placeName: string | null
      accessible: boolean | 'undefined'
      preventSubtitleOverlapping: boolean
      interestPoint: boolean
      terminus: boolean
      closed: boolean
      reverse: boolean
      connections: Connection[]
    }
  }

  interface Spacer {
    id: string
    $spacer: {
      size: number
    }
  }

  type BranchElement = Stop | Spacer

  interface Branch {
    id: string
    $branch: {
      elementSpacing: number
      marginLeft?: number
      marginRight?: number
      invertedElements: boolean
      elements: BranchElement[]
    }
  }

  interface Fork {
    id: string
    $fork: {
      toward: 'LEFT' | 'RIGHT'
      originOffset: number
      linksOffset: [number, number]
      offsetMultiplier?: number
      directionalArrows?: 'CW' | 'CCW'
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

  type LineStyle = 'PLAIN' | 'STRIPED'
  type DotsColorPolicy = 'INHERIT' | 'WHITE'

  interface Line {
    mode: Mode | null
    index: LineIndex | null
    color: string | null
    lineThickness: string | null
    lineStyle: LineStyle | null
    dotsColorPolicy: DotsColorPolicy | null
    mapSize: number | null
    fullyAccessible: boolean
    frameTerminusNames: boolean
    topology: LineSection[]
  }

  export interface LineContext {
    color: Ref<string>
    lineThickness: Ref<number>
    lineStyle: Ref<LineStyle>
    dotsColorPolicy: Ref<DotsColorPolicy>
    frameTerminusNames: Ref<boolean>
  }

  export interface StopContext {
    margins: {
      leftMargin: {
        name: string
        connections: string
      }
      rightMargin: {
        name: string
        subtitle: string
        connections: string
      }
    }
    namesWidth: ComputedRef<string>
    inverted: ComputedRef<boolean>
  }
}

export {}
