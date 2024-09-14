const fs = require('node:fs')
const path = require('node:path')
const { VITE_APP_VERSION } = require('dotenv').config().parsed

fs.writeFileSync(path.resolve(__dirname, '../public/version.txt'), VITE_APP_VERSION)
