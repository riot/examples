import '@riotjs/hot-reload'
import hydrate from '@riotjs/hydrate'
import {component} from 'riot'
import App from './app.riot'

hydrate(App)(document.querySelector('app'))
