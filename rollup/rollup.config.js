import babel            from 'rollup-plugin-babel'
import npm              from 'rollup-plugin-npm'
import commonjs         from 'rollup-plugin-commonjs'
import { createFilter } from 'rollup-pluginutils'
import compiler         from 'riot-compiler'

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  plugins: [
    riot(),
    npm({
      jsnext:  true, // if provided in ES6
      main:    true, // if provided in CommonJS
      browser: true  // if provided for browsers
    }),
    commonjs(),
    babel()
  ]
}

/**
 * Simple inline-plugin for Riot.js
 */
function riot() {
  const frag = "import riot from 'riot';"
  const filter = createFilter('**/*.tag') // transform tag files only
  return {
    transform (code, id) {
      if (!filter(id)) return null
      return frag + compiler.compile(code)
    }
  }
}
