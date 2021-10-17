const {resolve} = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './app/main.ts',
  output: {
    path: resolve(__dirname, 'public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: isDevelopment,
            appendTsSuffixTo: [/\.riot$/]
          }
        }, {
          loader: '@riotjs/webpack-loader',
          options: {
            hot: isDevelopment
          }
        }]
      },
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: isDevelopment
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.riot']
  }
}
