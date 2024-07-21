export function textContrast(value: string | null) {
  if (!value) return false

  const color = value.startsWith('#') ? value.slice(1) : value
  const rgb = Number.parseInt(color, 16)
  const r = (rgb >> 16) & 0xFF
  const g = (rgb >> 8) & 0xFF
  const b = rgb & 0xFF
  return (r * 0.299 + g * 0.587 + b * 0.114) <= 150
}
