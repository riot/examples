# Webpack

This is a simple example of using webpack with riot. It uses webpack loader [riotjs-loader](https://github.com/esnunes/riotjs-loader).

## Run locally

Download or clone this repo.

Install packages.

```bash
$ npm install
```
And then run the server using `webpack-dev-server` or any possible way you know

```bash
$ ./dev
# or $ ./node_modules/.bin/webpack-dev-server --progress --colors -d --port 3000
```

- Open [http://localhost:3000/](http://localhost:3000/)
- Open [http://localhost:3000/webpack-dev-server/](http://localhost:3000/webpack-dev-server/) for dev server with hot reloading.

## ES6 using Babel

You can add ES6 support as shown in riotjs-loader's example. All you have to do is edit `webpack.config.js` and change webpack's modules to

```js
module: {
  loaders: [
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015'] } }
    ]
  ]
}
```

As explained in [riot-examples/es6](/riot/examples/blob/gh-pages/es6), you will lose riot's shorthand syntax. So this:

```js
getMessage() { ... }
```

becomes (using ES6):

```js
this.getMessage = () => { ... }
```
