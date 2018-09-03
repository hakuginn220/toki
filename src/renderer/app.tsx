import Home from '@/pages/home'
import Auth from '@/stores/auth'
import { Provider } from 'mobx-react'
import * as React from 'react'

const stores = {
  auth: new Auth()
}

export default class App extends React.Component {
  public render() {
    return (
      <Provider {...stores}>
        <Home />
      </Provider>
    )
  }
}
