import accounts, { IState as IStateAccounts } from '@/modules/accounts'
import rootSaga from '@/sagas'
import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSaga from 'redux-saga'

export interface IRootState {
  accounts: IStateAccounts
}

const config = { key: 'toki', storage }

const reducer: Reducer<IRootState> = combineReducers({ accounts })

const rootReducer = persistReducer(config, reducer)

const saga = createSaga()

export default () => {
  const store = createStore(rootReducer, applyMiddleware(saga, logger))

  saga.run(rootSaga)

  const persistor = persistStore(store)

  return { store, persistor }
}
