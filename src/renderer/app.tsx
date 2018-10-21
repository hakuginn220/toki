import Home from '@/pages/home'
import accounts from '@/stores/accounts'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import React, { Fragment } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

configure({ enforceActions: 'observed' })

const stores = { accounts }

export default function App() {
  return (
    <Fragment>
      <Provider {...stores}>
        <HashRouter>
          <Switch>
            <Route component={Home} />
          </Switch>
        </HashRouter>
      </Provider>
      <GlobalStyle />
    </Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
  }

  input,
  select,
  textarea {
    font-family: inherit;
  }
`
