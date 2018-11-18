import accounts from '@/modules/accounts'
import { combineReducers, createStore } from 'redux'

const reducer = combineReducers({ accounts })

export default createStore(reducer)
