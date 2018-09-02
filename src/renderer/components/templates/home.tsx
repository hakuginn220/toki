import * as React from 'react'
import Timeline, { ITimeline } from '../organisms/timeline'

export interface IHome {
  timeline: ITimeline
}

export default function Home(props: IHome) {
  return <Timeline {...props.timeline} />
}
