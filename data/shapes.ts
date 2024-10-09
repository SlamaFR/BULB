export const SHAPES: ShapeChoice[] = [
  { value: 'CIRCLE', label: 'data.shapes.circle' },
  { value: 'ROUNDED_SQUARE', label: 'data.shapes.rounded_square' },
  { value: 'LINES', label: 'data.shapes.lines' },
  { value: 'RECTANGLE', label: 'data.shapes.rectangle' },
]

export function findShapeByValue(value: IndexShape | null): ShapeChoice | null {
  return SHAPES.find(shape => shape.value === value) ?? null
}
