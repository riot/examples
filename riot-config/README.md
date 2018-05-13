# How to use riot.config.js

This is an example for showing how to use [riot.config.js](http://riot.js.org/guide/compiler/#es6-config-file). It also an example with bublé and cssnext:

- bublé: https://buble.surge.sh
- cssnext: http://cssnext.io
- postcss: http://postcss.org

## Run locally

Download or clone this repo, then run the command.

```bash
$ git clone https://github.com/riot/examples
$ cd example/riot-config
$ npm install
$ npm run build
```

Then `dist` directory will be made in your project.

*Note*  if you installed `riot` globally in your environment. You can use the command bellow instead of `$ npm run build`:

```bash
$ riot --config riot.config.js tag/* dist/
```

This says "compile `tag/*` files into `dist/` directory with the config file `riot.config.js`".

## Watch

To watch your tag file and check it in your browser, run the command below:

```bash
$ npm start
```

See more detail:

- [browser-sync](https://browsersync.io/)
