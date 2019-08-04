import {component} from 'riot'
import App from './components/app.riot'
import store from './store'


component(App)(document.getElementById('root'), {
  apollo: store
})
