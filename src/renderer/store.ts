import accounts, { IState as IStateAccounts } from '@/modules/accounts'
import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux'
import logger from 'redux-logger'

export interface IRootState {
  accounts: IStateAccounts
}

const reducer: Reducer<IRootState> = combineReducers({ accounts })

export default createStore(reducer, applyMiddleware(logger))
