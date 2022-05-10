import riot from 'rollup-plugin-riot'

export default {
  input: 'src/main.js',
  external: ['@riotjs/hot-reload', '@riotjs/hydrate', 'erre', '@riotjs/route'],
  output: {
    file: 'public/app.js',
    format: 'esm'
  },
  plugins: [
    riot()
  ]
}