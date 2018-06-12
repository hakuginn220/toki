import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import account from './modules/account'
import timeline from './modules/timeline'

const reducers = combineReducers({
  account,
  timeline
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
