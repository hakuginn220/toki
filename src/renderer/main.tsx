import App from '@/app'
import { config } from 'dotenv'
import { webFrame } from 'electron'
import path from 'path'
import React from 'react'
import { render } from 'react-dom'

declare var __static: string

webFrame.setVisualZoomLevelLimits(1, 1)

const env = config({ path: path.join(__static, '.env') })

if (env.parsed) {
  const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = env.parsed
  localStorage.setItem('TWITTER_CONSUMER_KEY', TWITTER_CONSUMER_KEY)
  localStorage.setItem('TWITTER_CONSUMER_SECRET', TWITTER_CONSUMER_SECRET)
}

render(<App />, document.getElementById('app'))
