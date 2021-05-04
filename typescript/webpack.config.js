const {resolve} = require('path')

module.exports = {
  entry: './app/main.ts',
  output: {
    path: resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true
          }
        }]
      },
      // you might want to enable this plugin only in production mode
      // it can be really slow and it's needed only for typechecking
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.riot$/]
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.riot']
  }
}
