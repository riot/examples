import '@riotjs/hot-reload'
import Random from './random/random.riot'
import { component } from 'riot'

component(Random)(document.getElementById('app') || document.body, {
  title: 'Hi there!'
})
