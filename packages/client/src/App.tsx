import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { createStore } from 'redux'
import { reducer } from './store'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const store = createStore(reducer)

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Login} path="/login" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)

export default hot(App)
