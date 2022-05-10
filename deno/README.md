# Deno SSR Example

This example shows how you can render and hydrate a simple Riot.js application using [`deno`](https://deno.land/).
**This demo works only on V8 based browser because [`importmap` is not yet 100% supported](https://caniuse.com/import-maps)** 

## Run locally

Download or clone this repo.
Install packages.

```bash
$ npm install
```
And then run the oak server using

```bash
$ npm start
```

Use the following command to watch the frontend files and update 
```bash
$ npm watch
```

Notice that Deno dosn't support (hmr) livereload yet

- Open [http://localhost:3000/](http://localhost:3000/)