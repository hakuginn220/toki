import { webFrame } from 'electron'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app'

webFrame.setVisualZoomLevelLimits(1, 1)

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
)
