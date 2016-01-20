import riot     from 'rollup-plugin-riot'
import npm      from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs'
import babel    from 'rollup-plugin-babel'

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
