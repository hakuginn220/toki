/// <reference types="electron" />
import { webFrame } from 'electron'
import * as React from 'react'
import { render } from 'react-dom'
import App from './app'

webFrame.setVisualZoomLevelLimits(1, 1)

render(<App />, document.body.appendChild(document.createElement('div')))
