import App from '@/app'
import { config } from 'dotenv'
import { webFrame } from 'electron'
import * as path from 'path'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

declare var __static: string

webFrame.setVisualZoomLevelLimits(1, 1)

const env = config({ path: path.join(__static, '.env') })

if (env.parsed) {
  const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = env.parsed
  localStorage.setItem('TWITTER_CONSUMER_KEY', TWITTER_CONSUMER_KEY)
  localStorage.setItem('TWITTER_CONSUMER_SECRET', TWITTER_CONSUMER_SECRET)
}

ReactDOM.render(<App />, document.getElementById('app'))
