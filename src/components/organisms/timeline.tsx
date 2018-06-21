import * as React from 'react'
import Tweet, { TweetProps } from '../molecules/tweet'

export type TimelineProps = {
  tweets: TweetProps[]
}

export default function Timeline(props: TimelineProps) {
  return (
    <ul className="tile is-parent is-vertical">
      {props.tweets.map((tweet, index) => (
        <li className="tile is-child" key={index.toString()}>
          <Tweet {...tweet} />
        </li>
      ))}
    </ul>
  )
}
