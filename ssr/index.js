const Koa = require('koa')
const app = new Koa()
const {readFileSync} = require('fs')
const {template} = require('lodash')
const {renderAsyncFragments} = require('@riotjs/ssr')
const unregister = require('@riotjs/register')()
const page = readFileSync('./index.html', 'utf8')

const pages = [{
  path: '/',
  label: 'Home',
  component: 'home'
}, {
  path: '/about',
  label: 'About',
  component: 'about'
}]

app.use(require('koa-static')('./public'))

app.use(async ctx => {
  const initialState = {
    initialRoute: ctx.request.url,
    pages,
  }
  const App = require('./app/app.riot').default
  const {html, css} = await renderAsyncFragments('app', App, initialState)

  ctx.body = template(page)({
    html,
    initialState: JSON.stringify(initialState),
    css
  })

  unregister()
})

app.listen(3000)

console.log('App running on: http://localhost:3000')
