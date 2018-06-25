import * as React from 'react'
import { Provider } from 'mobx-react'
import { CssBaseline } from '@material-ui/core'
import Home from './pages/home'
import Auth from './stores/auth'

const stores = {
  auth: new Auth()
}

export default class App extends React.Component {
  render() {
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
