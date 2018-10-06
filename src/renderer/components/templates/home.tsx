import Timeline, { ITimeline } from '@/components/organisms/timeline'
import React from 'react'

export interface IHome {
  timeline: ITimeline
}

export default function Home(props: IHome) {
  return <Timeline {...props.timeline} />
}
