import React, { useState, FC } from 'react'
import { Timeline } from '../components/Timeline'

export const HomeTimeline: FC = () => {
  const [tweets] = useState([])

  return <Timeline tweets={tweets} />
}
