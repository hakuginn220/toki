import React, { useState, useEffect, FC } from 'react'
import { twitter } from '../utils/api'

export const HomeTimeline: FC = () => {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    twitter.get('statuses/home_timeline.json').then(response => {
      console.log(response)
      setTimeline(timeline.concat(response.data))
    })
  }, [])

  return (
    <div>
      {timeline.map((tweet, index) => (
        <div key={index}>{JSON.stringify(tweet)}</div>
      ))}
    </div>
  )
}
