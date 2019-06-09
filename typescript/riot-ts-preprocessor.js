/* eslint-disable @typescript-eslint/no-var-requires */

const {registerPreprocessor} = require('@riotjs/compiler')
const { transformSync } = require('@babel/core')
const {resolve, basename} = require('path')
const {CLIEngine} = require('eslint')
const eslintRules = require('./.eslintrc.json')
const stripIndent = require('strip-indent')

const cli = new CLIEngine(eslintRules)
const formatter = cli.getFormatter()

// types check is not yet supported...
registerPreprocessor('javascript', 'ts', (source, {options}) => {
  const filename = `${basename(options.file)}.ts`

  const {results} = cli.executeOnText(stripIndent(source), options.file)

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
