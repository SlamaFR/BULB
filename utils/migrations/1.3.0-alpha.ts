import { consola } from 'consola'
import { isBranch } from '~/utils/types'
import { compareVersions } from '~/utils/versions'

const PREFIX = '[1.3.0-alpha]'

function fixStop(stop: Stop) {
  consola.log(`${PREFIX} Fixing stop ${stop.id}`)

  if (stop.$stop !== undefined) return

  stop.$stop = {} as any
  Object.assign(stop.$stop, stop as Omit<Stop, '$stop'>)
  for (const key in stop) {
    if (key !== 'id' && key !== '$stop') {
      delete (stop as any)[key]
    }
  }
  delete (stop.$stop as any).$stop
  delete (stop.$stop as any).id
}

function fixBranch(branch: Branch) {
  consola.log(`${PREFIX} Fixing branch ${branch.id}`)

  if (branch.$branch.elements !== undefined) return
  if ((branch.$branch as any).stops !== undefined) {
    branch.$branch.elements = (branch.$branch as any).stops
    delete (branch.$branch as any).stops
  }

  (branch.$branch.elements as any[]).forEach(fixStop)
}

function fixSection(section: LineSection) {
  consola.log(`${PREFIX} Fixing section ${section.id}`)

  section.$lineSection.elements
    .filter(isBranch)
    .forEach(fixBranch)
}

export function migrate_1_3_0_alpha(project: Project) {
  consola.info(`${PREFIX} Checking project version`)
  if (compareVersions(project.version, '1.3.0-alpha') >= 0) {
    consola.warn(`${PREFIX} Project already up-to-date`)
    return
  }

  consola.start(`${PREFIX} Migration started`)

  project.line.topology.forEach(fixSection)
  project.version = '1.3.0-alpha'
  consola.success(`${PREFIX} Migration successfully applied`)
}
