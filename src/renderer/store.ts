import accounts, { IState as IStateAccounts } from '@/modules/accounts'
import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface IRootState {
  accounts: IStateAccounts
}

const config = { key: 'toki', storage }

const reducer: Reducer<IRootState> = combineReducers({ accounts })

const rootReducer = persistReducer(config, reducer)

export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger))
  const persistor = persistStore(store)
  return { store, persistor }
}
