var webpack = require('webpack')

module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname + "/public",
        publicPath: "/public/",
        filename: "bundle.js"
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.ProvidePlugin({ riot: 'riot' })
    ],
    module: {
      loaders: [
        { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader' },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      ]
    }
};
