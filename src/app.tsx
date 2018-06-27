import { CssBaseline } from '@material-ui/core'
import { Provider } from 'mobx-react'
import * as React from 'react'
import Home from './pages/home'
import Auth from './stores/auth'

const stores = {
  auth: new Auth()
}

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Provider {...stores}>
          <Home />
        </Provider>
      </React.Fragment>
    )
  }
}
