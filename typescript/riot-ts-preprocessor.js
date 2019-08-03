/* eslint-disable @typescript-eslint/no-var-requires */

const {registerPreprocessor} = require('@riotjs/compiler')
const checkTypes = require('./check-types')
const { transformSync } = require('@babel/core')
const {resolve, basename, dirname} = require('path')
const {CLIEngine} = require('eslint')
const eslintRules = require('./.eslintrc.json')
const stripIndent = require('strip-indent')

const cli = new CLIEngine(eslintRules)
const formatter = cli.getFormatter()

registerPreprocessor('javascript', 'ts', (source, {options}) => {
  const filename = `${basename(options.file)}.ts`
  const fileRoot = dirname(options.file)
  const {results} = cli.executeOnText(stripIndent(source), options.file)

  // basic type checking
  // please feel free to customize it at your wish
  checkTypes(filename, source, fileRoot)

  if (results.length) {
    console.log(formatter(results)) // eslint-disable-line
  }

  const { code, map } = transformSync(source, {
    sourceMaps: true,
    retainLines: true,
    filename,
    babelrc: false,
    configFile: resolve(process.cwd(), 'babel.config.js')
  })

  return {code, map}
})
