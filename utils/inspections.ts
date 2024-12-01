import { allowedShapes } from '~/data/shapes'
import { isBranch, isMode, isParallelBranches, isStop } from '~/utils/types'

export function findInvalidCustomIndices(indices: CustomLineIndexDescription[]) {
  return indices.filter((index) => {
    return !allowedShapes(index.mode).includes(index.shape)
  })
}

export function findIllegalPedestrianConnections(sections: LineSection[]): Connection[] {
  function checkSectionForIllegalPedestrianConnections(section: LineSection): Connection[] {
    const illegalConnections: Connection[] = []

    const illegalSubSectionConnections = section.$lineSection.elements
      .filter(element => isParallelBranches(element))
      .flatMap(element => element.$parallelBranches.sections)
      .flatMap(section => checkSectionForIllegalPedestrianConnections(section))
    illegalConnections.push(...illegalSubSectionConnections)

    const modeConnections = section.$lineSection.elements
      .filter(isBranch)
      .flatMap(branch => branch.$branch.elements)
      .filter(isStop)
      .flatMap(stop => stop.$stop.connections)
      .filter(isMode)

    for (const connection of modeConnections) {
      const pedestrianConnection = connection.$modeConnection.elements
        .filter(connection => connection.$modeConnectionElement.walk)

      if ((connection.$modeConnection.walk && pedestrianConnection.length >= 1) || pedestrianConnection.length > 1) {
        illegalConnections.push(connection)
      }

      if (['BUS', 'NOCTILIEN'].includes(connection.$modeConnection.mode ?? '') && pedestrianConnection.length > 0) {
        illegalConnections.push(connection)
      }
    }

    return illegalConnections
  }

  return sections.flatMap(section => checkSectionForIllegalPedestrianConnections(section))
}

export function findUntitledStops(sections: LineSection[]): Stop[] {
  function checkSectionForUntitledStops(section: LineSection): Stop[] {
    const untitledStops: Stop[] = []

    const untitledSubSectionStops = section.$lineSection.elements
      .filter(element => isParallelBranches(element))
      .flatMap(element => element.$parallelBranches.sections)
      .flatMap(section => checkSectionForUntitledStops(section))
    untitledStops.push(...untitledSubSectionStops)

    untitledStops.push(
      ...section.$lineSection.elements
        .filter(isBranch)
        .flatMap(branch => branch.$branch.elements)
        .filter(isStop)
        .filter(stop => !stop.$stop.name),
    )

    return untitledStops
  }

  return sections.flatMap(section => checkSectionForUntitledStops(section))
}
