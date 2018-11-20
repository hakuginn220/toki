import accounts from '@/modules/accounts'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({ accounts })

export default createStore(reducer, applyMiddleware(thunk))
