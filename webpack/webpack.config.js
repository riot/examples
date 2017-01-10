const webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  output: {
    path: '/public',
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'tag-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
