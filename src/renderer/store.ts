import accounts from '@/modules/accounts'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

const reducer = combineReducers({ accounts })

export default createStore(reducer, applyMiddleware(logger))
