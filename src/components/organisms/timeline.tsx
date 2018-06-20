import * as React from 'react'
import Tweet from '../molecules/tweet'

export default function Timeline({ tweets = [] }) {
  return (
    <ul>
      {tweets.map((tweet, index) => (
        <li key={index.toString()}>
          <Tweet {...tweet} />
        </li>
      ))}
    </ul>
  )
}
