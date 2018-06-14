import React from 'react'
import styled from 'styled-components'
import Tweet from '../molecules/tweet'

export default function Timeline({ tweets }) {
  return (
    <Group>
      {tweets.map((tweet, index) => (
        <GroupItem key={index.toString()}>
          <Tweet {...tweet} />
        </GroupItem>
      ))}
    </Group>
  )
}

const Group = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const GroupItem = styled.li`
  display: block;
`
