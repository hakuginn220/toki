import App from '@/app'
import Loading from '@/loading'
import createStore from '@/store'
import { webFrame } from 'electron'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createGlobalStyle } from 'styled-components'

webFrame.setVisualZoomLevelLimits(1, 1)

const { store, persistor } = createStore()

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }

  input,
  select,
  textarea {
    font-family: inherit;
  }
`

render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById('app')
)
