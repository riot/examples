import riot from 'riot'
import {
  combineReducers,
  applyMiddleware,
  createStore,
  compose
} from 'redux'
import thunk from 'redux-thunk'
// check docs https://github.com/pburtchaell/redux-promise-middleware
import promise from 'redux-promise-middleware'

import sampleReducer from './modules/sample/reducer'

const reducers = combineReducers({
  sampleReducer
})

const middleware = applyMiddleware(
	thunk,
  promise()
)

const store = createStore(
  reducers,
  compose(middleware)
)

store.subscribe(() => {
  riot.update()
})

export default {
  store: store
}
