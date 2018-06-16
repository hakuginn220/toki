import { webFrame } from 'electron'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import store from './store'
import App from './app'

window.eval = () => {
  throw new Error(`Sorry, this app does not support window.eval().`)
}

webFrame.setVisualZoomLevelLimits(1, 1)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)

injectGlobal`
  :root {
    --text: #333;
    --background: white;
    --selection: #999;
    --border: #eee;

    --twitter-replay: #1da1f2;
    --twitter-retweet: #17bf63;
    --twitter-favorite: #e0245e;
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
