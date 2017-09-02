'use strict'

import 'babel-polyfill'

// Add support for all files in the 'app' directory, excluding 'main.js'
var testsContext = require.context('./lib', true, /.*\.js$/)
testsContext.keys().forEach(function (filePath) {
    if (filePath !== './index.js') {
        testsContext(filePath)
    }
})