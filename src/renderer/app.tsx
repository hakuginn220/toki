import Home from '@/containers/home'
import Login from '@/containers/login'
import React, { SFC } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

const App: SFC<{}> = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </HashRouter>
)

export default App
