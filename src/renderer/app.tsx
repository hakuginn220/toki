import HomeRoute from '@/pages/home'
import React, { SFC } from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

interface IProps {
  store: any
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`

const App: SFC<IProps> = ({ store }) => (
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
