import { isBranch, isCustom, isMode, isParallelBranches, isStop } from '~/utils/types'

export function getCustomIndicesIds(line: Line): string[] {
  function scanSection(section: LineSection): string[] {
    const subSections = section.$lineSection.elements
      .filter(isParallelBranches)
      .flatMap(pb => pb.$parallelBranches.sections)
      .flatMap(scanSection)

    const customIndicesIds = section.$lineSection.elements
      .filter(isBranch)
      .flatMap(branch => branch.$branch.elements)
      .filter(isStop)
      .flatMap(stop => stop.$stop.connections)
      .filter(isMode)
      .flatMap(mode => mode.$modeConnection.elements)
      .map(connection => connection.$modeConnectionElement.lineIndex)
      .filter(isCustom)
      .map(custom => custom.$customLineIndex.id)

    return [...subSections, ...customIndicesIds]
  }

  if (isCustom(line.index)) {
    return Array.from(new Set([...line.topology.flatMap(scanSection), line.index.$customLineIndex.id]))
  }

  return Array.from(new Set(line.topology.flatMap(scanSection)))
}
