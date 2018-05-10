# Webpack

This is a simple example of using webpack with riot. It uses webpack loader [riot-tag-loader](https://www.npmjs.com/package/riot-tag-loader).

## Run locally

Download or clone this repo.

Install packages.

```bash
$ npm install
```
And then run the server using `webpack-dev-server` or any possible way you know

```bash
$ npm start
```

- Open [http://localhost:3000/](http://localhost:3000/)
- Open [http://localhost:3000/webpack-dev-server/](http://localhost:3000/webpack-dev-server/) for dev server with hot reloading.

## ES6 using Babel

You can add ES6 support as shown in riot-tag-loader's example. All you have to do is edit `webpack.config.js` and change webpack's modules to

```js
module: {
  rules: [
    {
      test: /\.tag$/,
      exclude: /node_modules/,
      use: [{
        loader: 'riot-tag-loader',
        options: {
          hot: true,
          type: 'es6'
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
}
```

As explained in [riot-examples/es6](https://github.com/riot/examples/blob/gh-pages/es6), you will lose riot's shorthand syntax. So this:

```js
getMessage() { ... }
```

becomes (using ES6):

```js
this.getMessage = () => { ... }
```
