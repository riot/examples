const Koa = require('koa')
const app = new Koa()
const { readFileSync } = require('fs')
const { template } = require('lodash')
const { renderAsyncFragments } = require('@riotjs/ssr')
const unregister = require('@riotjs/ssr/register')()
const page = readFileSync('./index.html', 'utf8')

app.use(require('koa-static')('./public'))

app.use(async ctx => {
  const App = require('./app/app.riot').default
  const {html, css} = await renderAsyncFragments('app', App, {}, {
    url: `http://localhost:3000${ctx.request.url}`
  })

  ctx.body = template(page)({
    html,
    css
  })

  unregister()
})

app.listen(3000);

console.log('App running on: http://localhost:3000')