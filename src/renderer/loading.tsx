import React, { SFC } from 'react'
import styled, { keyframes } from 'styled-components'

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

const Loading: SFC<{}> = () => (
  <LoadingContainer>
    <LoadingCircle>loading...</LoadingCircle>
  </LoadingContainer>
)

export default Loading
