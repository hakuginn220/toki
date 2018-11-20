import HomeRoute from '@/pages/home'
import store from '@/store'
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`

const App = () => (
  <>
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route component={HomeRoute} />
        </Switch>
      </HashRouter>
    </Provider>
    <GlobalStyle />
  </>
)

export default App
