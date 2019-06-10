import '@riotjs/hot-reload'
import { component } from 'riot'
import Random from './random/random.riot'

component(Random)(document.getElementById('app') || document.body, {
    title: 'Hi there!',
})
