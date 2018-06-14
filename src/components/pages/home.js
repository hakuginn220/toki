import React from 'react'
import styled from 'styled-components'
import Navigation from '../organisms/navigation'
import Timeline from '../../containers/timeline'

export default function Home() {
  return (
    <Wrapper>
      <WrapperNavigation>
        <Navigation />
      </WrapperNavigation>
      <WrapperTimeline>
        <Timeline />
      </WrapperTimeline>
    </Wrapper>
  )
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

const WrapperTimeline = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 68px;
  width: calc(100% - 68px);
  height: 100%;
  overflow-y: scroll;
`
