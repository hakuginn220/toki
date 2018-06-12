import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import account from './modules/account'
import textarea from './reducers/textarea'
import timeline from './reducers/timeline'

const reducers = combineReducers({
  account,
  textarea,
  timeline
})

export default createStore(reducers, applyMiddleware(thunk))
