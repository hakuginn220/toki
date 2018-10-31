import Tweet from '@/components/molecules/tweet'
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

function createTweet() {
  const unique = Math.random()
    .toString(36)
    .slice(-8)

  return {
    text: unique,
    user: {
      name: unique,
      profile_image_url_https: 'https://placehold.jp/128x128.png',
      screen_name: unique
    }
  }
}
