import App from '@/app'
import store from '@/store'
import { webFrame } from 'electron'
import React from 'react'
import { render } from 'react-dom'

webFrame.setVisualZoomLevelLimits(1, 1)

render(<App store={store} />, document.getElementById('app'))
