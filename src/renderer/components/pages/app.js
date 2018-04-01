import React, { Component } from 'react'
import styled from 'styled-components'
import Navigation from '../../containers/navigation'
import Textarea from '../../containers/textarea'
import Timeline from '../../containers/timeline'

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperNavigation>
          <Navigation />
        </WrapperNavigation>
        <WrapperTextarea>
          <Textarea />
        </WrapperTextarea>
        <WrapperTimeline>
          <Timeline />
        </WrapperTimeline>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const WrapperNavigation = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 100%;
  background: var(--border);
  overflow-y: scroll;
`

const WrapperTextarea = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 68px;
  width: calc(100% - 68px);
  padding: 0 10px 10px;
  box-sizing: border-box;
  background: white;
`

const WrapperTimeline = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 68px;
  width: calc(100% - 68px);
  height: calc(100% - 58px);
  overflow-y: scroll;
`
