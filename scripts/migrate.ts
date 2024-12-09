#!/usr/bin/env tsx

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { consola, createConsola } from 'consola'
import { migrate_1_3_0_alpha } from '~/utils/migrations/1.3.0-alpha'
import { migrate_1_4_0_alpha } from '~/utils/migrations/1.4.0-alpha'

function migrate(project: Project) {
  migrate_1_3_0_alpha(project)
  migrate_1_4_0_alpha(project)
}

function transformJsonFile(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    console.error(`No such file: ${filePath}`)
    process.exit(1)
  }

  try {
    const rawData = fs.readFileSync(filePath, 'utf8')
    const project = JSON.parse(rawData) as Project
    migrate(project)
    fs.writeFileSync(filePath, `${JSON.stringify(project)}\n`, 'utf8')
    consola.info(`File successfully written: ${filePath}`)
  } catch (error: any) {
    consola.error(`Failed to write file: ${error.message}`)
    process.exit(1)
  }
}

createConsola({
  formatOptions: {
    date: true,
    compact: false,
    colors: true,
  },
}).wrapAll()

const filePath = process.argv[2]
if (!filePath) {
  consola.error(`Usage: ./migrate.ts <path>`)
  process.exit(1)
}

const absolutePath = path.resolve(filePath)
transformJsonFile(absolutePath)
