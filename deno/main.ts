import { Application } from 'https://deno.land/x/oak@v10.5.1/mod.ts'
import { template } from 'https://cdn.pika.dev/lodash-es'
import { renderAsyncFragments } from '@riotjs/ssr'
import RootComponent from'./public/app.js'
import importMap from './import_map.json' assert { type: 'json' }
import routes from './src/routes.js'
import { toRegexp, match } from '@riotjs/route'

const app = new Application()
const page = await Deno.readTextFile('./index.html')
const pages = Object.values(routes)

app.use(async (ctx, next) => {
  // quick test to identify static assets
  if (ctx.request.url.pathname.includes('.')) return next()

  // generate the initial state
  const initialState = {
    initialRoute: ctx.request.url.pathname,
    base: ctx.request.url.origin,
    routes,
  }

  // generate the rendered html + css
  const { html, css } = await renderAsyncFragments('app', RootComponent, initialState)

  // send 404 if the current path doesn't match any of the routes
  if (!pages.some(page => match(initialState.initialRoute, toRegexp(page.path)))) {
    ctx.response.status = 404
  }

  // render the body
  ctx.response.body = template(page)({
    html,
    css,
    initialState: JSON.stringify(initialState),
    importMap: JSON.stringify(importMap)
  })
})

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${ Deno.cwd() }/`,
      index: 'index.html',
    })
  } catch {
    next()
  }
})

console.log('App running on: http://localhost:3000')

await app.listen({ port: 3000 })



