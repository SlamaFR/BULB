export const SHAPES: ShapeChoice[] = [
  { value: 'CIRCLE', label: 'data.shapes.circle' },
  { value: 'ROUNDED_SQUARE', label: 'data.shapes.rounded_square' },
  { value: 'LINES', label: 'data.shapes.lines' },
  { value: 'RECTANGLE', label: 'data.shapes.rectangle' },
  { value: 'CUT_RECTANGLE', label: 'data.shapes.cut_rectangle' },
]

export function findShapeByValue(value: IndexShape | null): ShapeChoice | null {
  return SHAPES.find(shape => shape.value === value) ?? null
}

export function allowedShapes(mode: Mode): IndexShape[] {
  switch (mode) {
    case 'BUS':
      return ['RECTANGLE']
    case 'NOCTILIEN':
      return ['CUT_RECTANGLE']
    default:
      return ['CIRCLE', 'LINES', 'ROUNDED_SQUARE']
  }
}
