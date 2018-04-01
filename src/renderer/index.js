import { webFrame } from 'electron'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import store from './store'
import App from './components/pages/app'

webFrame.setVisualZoomLevelLimits(1, 1)

injectGlobal`
  :root {
    --text: #333;
    --selection: #999;
    --border: #eee;
    --inactive: gray;
    --replay: #1da1f2;
    --retweet: #17bf63;
    --favorite: #e0245e;
    --tweet-background: white;
    --tweet-background-focus: #eee;
  }

  ::selection {
    background: var(--selection);
  }

  html {
    background: var(--background);
    font-family: sans-serif;
    font-size: 14px;
    color: var(--text);
  }

  body {
    margin: 0;
    scroll-behavior: smooth;
  }

  input,
  select,
  textarea,
  button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  a {
    color: inherit;
  }
`

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)