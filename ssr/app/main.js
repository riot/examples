import '@riotjs/hot-reload'
import hydrate from '@riotjs/hydrate'
import App from './app.riot'

console.log('APP loaded and rendered statically, hydrating in a few seconds...')
setTimeout(() => {
  hydrate(App)(document.querySelector('app'),  window.__INITIAL_STATE__)
  console.log('APP hydrated')
}, 5000)
