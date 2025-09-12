import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  entry: './app/main.js',
  mode: 'production',
  devtool: 'inline-source-map',
  externals: {
    url: 'URL',
  },
  performance: {
    hints: false,
  },
  output: {
    path: resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@riotjs/webpack-loader',
            options: {
              hot: true,
            },
          },
        ],
      },
    ],
  },
}
