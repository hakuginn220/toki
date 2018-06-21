import * as React from 'react'
import Tweet, { TweetProps } from '../molecules/tweet'

export type TimelineProps = {
  tweets: TweetProps[]
}

export default function Timeline(props: TimelineProps) {
  return (
    <ul>
      {props.tweets.map((tweet, index) => (
        <li key={index.toString()}>
          <Tweet {...tweet} />
        </li>
      ))}
    </ul>
  )
}
