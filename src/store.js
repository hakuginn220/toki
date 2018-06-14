import { combineReducers, createStore } from 'redux'
import account from './modules/account'
import timeline from './modules/timeline'

const reducers = combineReducers({
  account,
  timeline
})

const store = createStore(reducers)

export default store
