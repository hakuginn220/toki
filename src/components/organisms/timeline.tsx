import * as React from 'react'
import Tweet, { TweetProps } from '../molecules/tweet'
import styled from 'styled-components'

export type TimelineProps = {
  tweets: TweetProps[]
}

export default function Timeline(props: TimelineProps) {
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
