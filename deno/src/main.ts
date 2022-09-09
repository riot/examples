import hydrate from '@riotjs/hydrate'
import App from './app.riot'

const appNode = document.querySelector('app')
appNode && hydrate(App)(appNode, window.__INITIAL_STATE__)
