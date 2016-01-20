# Riot with Rollup

This is a simple example for showing how to use Riot with [Rollup](https://github.com/rollup/rollup).

- Site: http://rollupjs.org
- Docs: https://github.com/rollup/rollup/wiki
- rollup-plugin-riot: https://github.com/riot/rollup-plugin-riot

## Run locally

Install superstatic if you don't have.

```bash
$ npm install -g superstatic
```

Download or clone this repo, then run the command.

```bash
$ cd to/this/dir
$ npm install
$ npm run build
$ superstatic
```

Open the URL shown in your browser.

## npm and babel

The code in this example is written in ES6 syntax. Rollup is an module bundler for ES6. Typically, we use these plugins. [See detail](rollup.config.js):

- `rollup-plugin-babel`: outputs ES5
- `rollup-plugin-npm`: loads modules in `node_modules`
- `rollup-plugin-commonjs`: converts CommonJS to ES6

## Use imported modules

In this example, [marked](https://github.com/chjj/marked) is used for transforming markdown into html.

```html
import marked from 'marked'

<md>
  <script>
    this.root.innerHTML = opts.content ? marked(opts.content) : ''
  </script>
</md>
```

Note: the code below doesn't work. We should declare the module outside the tag definition.

```html
<md>
  <script>
    // This line causes an error while compiling!
    import marked from 'marked'

    this.root.innerHTML = opts.content ? marked(opts.content) : ''
  </script>
</md>
```

## Watch

Watch the change of the files:

```bash
$ npm run watch
```

See more detail:

- [chokidar](https://github.com/paulmillr/chokidar)
- [chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli)
