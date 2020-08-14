const rimraf = require('rimraf')

rimraf('pages', () => console.log('pages are removed!'))
