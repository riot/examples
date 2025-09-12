import Koa from 'koa'
import { readFileSync } from 'node:fs'
import { template } from 'lodash-es'
import KoaStatic from 'koa-static'
import { renderAsyncFragments } from '@riotjs/ssr'
import { pathToFileURL } from 'node:url'
import { register } from 'node:module'

register('@riotjs/register', pathToFileURL('./'))

const page = readFileSync('./index.html', 'utf8')
const app = new Koa()
const pages = [
  {
    path: '/',
    label: 'Home',
    component: 'home',
  },
  {
    path: '/about',
    label: 'About',
    component: 'about',
  },
]

app.use(KoaStatic('./public'))

app.use(async (ctx) => {
  const initialState = {
    initialRoute: ctx.request.url,
    base: 'http://localhost:3000',
    pages,
  }

  const { default: App } = await import('./app/app.riot')
  const { html, css } = await renderAsyncFragments('app', App, initialState)

  ctx.body = template(page)({
    html,
    initialState: JSON.stringify(initialState),
    css,
  })
})

app.listen(3000)

console.log('App running on: http://localhost:3000')
