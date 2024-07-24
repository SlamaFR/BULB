export function isCustomIndex(index: CustomLineIndex | string): index is CustomLineIndex {
  if (typeof index !== 'object') return false
  return 'index' in index
}

export function isDefaultIndex(index: CustomLineIndex | string): index is string {
  return typeof index === 'string'
}
