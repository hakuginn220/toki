import accounts, { IState as IStateAccounts } from '@/modules/accounts'
import routes, { IState as IStateRoutes } from '@/modules/routes'
import rootSaga from '@/sagas'
import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSaga from 'redux-saga'

export interface IRootState {
  accounts: IStateAccounts
  routes: IStateRoutes
}

const config = { key: 'toki', storage }

const reducer: Reducer<IRootState> = combineReducers({ accounts, routes })

const rootReducer = persistReducer(config, reducer)

const saga = createSaga()

export default () => {
  const store = createStore(rootReducer, applyMiddleware(saga, logger))

  saga.run(rootSaga)

  const persistor = persistStore(store)

  return { store, persistor }
}
