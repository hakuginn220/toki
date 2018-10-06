import Home from '@/pages/home'
import Auth from '@/stores/auth'
import { config } from 'dotenv'
import { webFrame } from 'electron'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import path from 'path'
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

declare var __static: string

webFrame.setVisualZoomLevelLimits(1, 1)

const env = config({ path: path.join(__static, '.env') })

if (env.parsed) {
  const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = env.parsed
  localStorage.setItem('TWITTER_CONSUMER_KEY', TWITTER_CONSUMER_KEY)
  localStorage.setItem('TWITTER_CONSUMER_SECRET', TWITTER_CONSUMER_SECRET)
}

configure({ enforceActions: 'observed' })

const stores = {
  auth: new Auth()
}

function App() {
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

render(<App />, document.getElementById('app'))
