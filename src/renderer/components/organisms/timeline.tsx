import Tweet from '@/components/molecules/tweet'
import { createTweet } from '@/utils/test'
import React from 'react'
import styled from 'styled-components'

export default function Timeline() {
  const tweets = [createTweet(), createTweet(), createTweet()]

  return (
    <Group>
      {tweets.map((tweet, index) => (
        <Item key={index.toString()}>
          <Tweet {...tweet} />
        </Item>
      ))}
    </Group>
  )
}

const Group = styled.ul`
  display: block;
  margin: 0;
  padding: 1em;
  list-style-type: none;
`

const Item = styled.li`
  display: block;
  margin: 0 0 1em;
  &:last-child {
    margin: 0;
  }
`
