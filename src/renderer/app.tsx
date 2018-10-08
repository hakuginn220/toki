import Home from '@/pages/home'
import accounts from '@/stores/accounts'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

configure({ enforceActions: 'observed' })

const stores = { accounts }

export default function App() {
  return (
    <Provider {...stores}>
      <HashRouter>
        <Switch>
          <Route component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
  )
}

injectGlobal`
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
