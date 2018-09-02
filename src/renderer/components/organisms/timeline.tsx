import * as React from 'react'
import styled from 'styled-components'
import Tweet, { ITweet } from '../molecules/tweet'

export interface ITimeline {
  tweets: ITweet[]
}

export default function Timeline(props: ITimeline) {
  return (
    <Group>
      {props.tweets.map((tweet, index) => (
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
