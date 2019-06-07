# How to use riot.config.js

This is an example for showing how to use the `@riotjs/cli` together with a `riot.config.js` file.

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
$ riot --config riot.config.js stc/main.js dist/main.js
```

This says "compile `tag/*` files into `dist/` directory with the config file `riot.config.js`".

## Watch

To watch your tag file and check it in your browser, run the command below:

```bash
$ npm start
```
