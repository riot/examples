import '@riotjs/hot-reload'
import {component} from 'riot'
import Random from './app.riot'

component(Random)(document.getElementById('app'), {
  message: 'Lazy Routes Application'
})
