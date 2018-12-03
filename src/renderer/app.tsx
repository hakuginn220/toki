import Home from '@/containers/home'
import Login from '@/containers/login'
import createStore from '@/store'
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { createGlobalStyle } from 'styled-components'

const { store, persistor } = createStore()

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`

const App = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </HashRouter>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </>
)

export default App
