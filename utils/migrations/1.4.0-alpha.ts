import { consola } from 'consola'
import { isBranch, isParallelBranches, isStop } from '~/utils/types'
import { compareVersions } from '~/utils/versions'

const PREFIX = '[1.4.0-alpha]'

function fixLine(line: Line) {
  if (line.lineThickness === undefined) line.lineThickness = '0.375'
  if (line.lineStyle === undefined) line.lineStyle = 'PLAIN'
  if (line.dotsColorPolicy === undefined) line.dotsColorPolicy = 'INHERIT'
  if (line.mapSize === undefined) line.mapSize = 15
  if (line.fullyAccessible === undefined) line.fullyAccessible = false
  if (line.frameTerminusNames === undefined) line.frameTerminusNames = true
}

function fixSection(section: LineSection) {
  consola.log(`${PREFIX} Fixing section ${section.id}`)

  section.$lineSection.elements.forEach(fixLineElement)
}

function fixLineElement(lineElement: LineElement) {
  if (isBranch(lineElement)) fixBranch(lineElement)
  if (isParallelBranches(lineElement)) fixParallelBranches(lineElement)
}

function fixBranch(branch: Branch) {
  consola.log(`${PREFIX} Fixing branch ${branch.id}`)

  if (branch.$branch.elementSpacing === undefined) branch.$branch.elementSpacing = 0
  if (branch.$branch.marginLeft === undefined) branch.$branch.marginLeft = 0
  if (branch.$branch.marginRight === undefined) branch.$branch.marginRight = 0
  if (branch.$branch.invertedElements === undefined) branch.$branch.invertedElements = false

  branch.$branch.elements.filter(isStop).forEach(fixStop)
}

function fixParallelBranches(pb: ParallelBranches) {
  pb.$parallelBranches.sections.forEach(fixSection)
}

function fixStop(stop: Stop) {
  consola.log(`${PREFIX} Fixing stop ${stop.id}`)

  if (stop.$stop.accessible === undefined) stop.$stop.accessible = 'undefined'
  if (stop.$stop.preventSubtitleOverlapping === undefined) stop.$stop.preventSubtitleOverlapping = true
  if (stop.$stop.interestPoint === undefined) stop.$stop.interestPoint = false
  if (stop.$stop.terminus === undefined) stop.$stop.terminus = false
  if (stop.$stop.closed === undefined) stop.$stop.closed = false
  if (stop.$stop.reverse === undefined) stop.$stop.reverse = false
}

export function migrate_1_4_0_alpha(project: Project): void {
  consola.info(`${PREFIX} Checking project version`)
  if (compareVersions(project.version, '1.4.0-alpha') >= 0) {
    consola.warn(`${PREFIX} Project already up-to-date`)
    return
  }
  consola.start(`${PREFIX} Migration started`)

  fixLine(project.line)
  project.line.topology.forEach(fixSection)
  project.version = '1.4.0-alpha'
  consola.success(`${PREFIX} Migration successfully applied`)
}
