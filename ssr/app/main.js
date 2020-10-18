import '@riotjs/hot-reload'
import hydrate from '@riotjs/hydrate'
import App from './app.riot'

hydrate(App)(document.querySelector('app'),  window.__INITIAL_STATE__)
