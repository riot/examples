import riot from 'riot'
import './components/app.tag'

import StoreMixin from './store'

riot.mixin(StoreMixin)

riot.mount('app')
