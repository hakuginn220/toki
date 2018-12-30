import Home from '@/containers/home'
import Login from '@/containers/login'
import React, { SFC } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle, keyframes } from 'styled-components'

const App: SFC<{}> = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </HashRouter>
)

export default App

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: sans-serif;
  }

  input,
  select,
  textarea {
    font-family: inherit;
  }

  #app {
    height: 100%;
  }
`

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoadingCircle = styled.div`
  width: 32px;
  height: 32px;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-left: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation: ${animation} 1s infinite linear;
`

export const Loading: SFC<{}> = () => (
  <LoadingContainer>
    <LoadingCircle>loading...</LoadingCircle>
  </LoadingContainer>
)
