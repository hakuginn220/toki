import App from '@/app'
import { webFrame } from 'electron'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

webFrame.setVisualZoomLevelLimits(1, 1)

ReactDOM.render(<App />, document.getElementById('app'))
