import riot from 'rollup-plugin-riot'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/app.riot',
  external: ['@riotjs/hydrate', 'erre', '@riotjs/route', 'riot'],
  output: {
    file: 'public/app.js',
    format: 'esm',
  },
  plugins: [
    riot(),
    typescript({
      include: "./src/**"
    })
  ]
}
