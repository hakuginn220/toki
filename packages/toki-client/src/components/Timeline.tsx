import React, { FC } from 'react'
import { Tweet, TTweet } from './Tweet'

type TTimeline = {
  tweets: TTweet[]
}

export const Timeline: FC<TTimeline> = props => {
  const tweets = props.tweets.map(tweet => (
    <li key={tweet.idStr}>
      <Tweet {...tweet} />
    </li>
  ))

  return <ul>{tweets}</ul>
}
