import { combineReducers } from 'redux'
import oauth from './oauth'
import textarea from './textarea'
import timeline from './timeline'

export default combineReducers({
  oauth,
  textarea,
  timeline
})
