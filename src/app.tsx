import * as React from 'react'
import { Provider } from 'mobx-react'
import Home from './pages/home'
import Auth from './stores/auth'

const stores = {
  auth: new Auth()
}

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Home />
      </Provider>
    )
  }
}
