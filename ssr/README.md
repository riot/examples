# SSR

This example shows how you can render and hydrate a simple Riot.js application using `@riotjs/ssr` and `@riotjs/hydrate`.

When loaded in the browser, the app is first statically rendered from the server, clicking on the button does not work (clicking on a navigation link results in a new page load).

After a few seconds, the app is hydrated and fully working.

## Run locally

Download or clone this repo.

Install packages.

```bash
$ npm install
```
And then run the koa server using

```bash
$ npm start
```

- Open [http://localhost:3000/](http://localhost:3000/)