export function isCustomIndex(index: LineIndex | null): index is CustomLineIndex {
  if (index === null || typeof index !== 'object') return false
  return 'id' in index
}

export function isDefaultIndex(index: LineIndex | null): index is BuiltinLineIndex {
  if (index === null || typeof index !== 'object') return false
  return 'index' in index
}
