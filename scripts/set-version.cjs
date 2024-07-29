const fs = require('fs');
const path = require('path');
const { VITE_APP_VERSION } = require('dotenv').config().parsed;

fs.writeFileSync(path.resolve(__dirname, '../public/version.txt'), VITE_APP_VERSION);

