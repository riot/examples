# ES6

This demonstrates [how to use ES6 in your tags](http://riot.js.org/guide/compiler/#pre-processors) using the in-browser compiler.

If you use ES6, TypeScript, CoffeeScript, or any JavaScript pre-processor, **it will override the one built in to Riot**.

That means you will lose the shorthand syntax. So this:

```javascript
getMessage() { ... }
```

Becomes (using ES6):

```javascript
this.getMessage = function () { ... }
// or
this.getMessage = () => { ... }
```

*Please don't use in-browser Babel for production. Read the Riot docs for prebuilt ES6 tags.*

## Have a play

[Open this example on Plunker](http://riot.js.org/examples/plunker/?app=es6)

## Run locally

Install superstatic if you don't have.

```bash
$ npm install -g superstatic
```

Download or clone this repo, then run the command.

```bash
$ cd to/this/dir
$ superstatic
```

Open the URL shown in your browser.
