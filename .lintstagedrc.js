const path = require('path')

/**
 * Build a list of files to lint.
 * @param {string[]} filenames
 * @returns {string}
 */
function buildEsLintCommand(filenames) {
  return `next lint --fix --file ${filenames
    .map(f => path.relative(__dirname, f))
    .join(' --file ')}`
}

module.exports = {
  '*.{ts,tsx,js,jsx}': [buildEsLintCommand],
}
