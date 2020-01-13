import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
)

export default hot(App)
