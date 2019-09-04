# Riot with Rollup

This is a simple example to show how to use Riot with [Rollup](https://github.com/rollup/rollup).

- Site: https://rollupjs.org
- Docs: https://github.com/rollup/rollup/wiki
- rollup-plugin-riot: https://github.com/riot/rollup-plugin-riot

## Run locally

Download or clone this repo:

```bash
$ git clone https://github.com/riot/examples
$ cd examples/rollup
```

Then run these commands:

```bash
$ npm install
$ npm run build
```

`dist` directory will be made in your project.

## ES6 and cssnext

The code in this example is written in ES6 syntax. Rollup is an module bundler for ES6. Typically, we use these plugins. [See detail](rollup.config.js):

- `rollup-plugin-commonjs`: converts CommonJS to ES6
- `rollup-plugin-node-resolve`: finds modules in `node_modules`
- `rollup-plugin-riot`: compiles Riot tag files

## Use imported modules

In this example, [marked](https://github.com/chjj/marked) is used for transforming markdown into html.

```html
<md>
  <script>
    import marked from 'marked'

    // do something with marked
  </script>
</md>
```

## Watch

To watch your tag file and check it in your browser, run the command below:

```bash
$ npm start
```

See more detail:

- [browser-sync](https://browsersync.io/)
