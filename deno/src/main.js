import '@riotjs/hot-reload'
import hydrate from '@riotjs/hydrate'
import App from './app.riot'

// hydrate only on the browser
if (typeof document !== 'undefined') {
  hydrate(App)(document.querySelector('app'),  window.__INITIAL_STATE__)
}

export default App
