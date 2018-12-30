import App, { GlobalStyle, Loading } from '@/app'
import createStore from '@/store'
import { webFrame } from 'electron'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

webFrame.setVisualZoomLevelLimits(1, 1)

const { store, persistor } = createStore()

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
