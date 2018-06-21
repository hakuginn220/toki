import * as React from 'react'
import Timeline, { TimelineProps } from '../organisms/timeline'

export type HomeProps = {
  timeline: TimelineProps
}

export default function Home(props: HomeProps) {
  return <Timeline {...props.timeline} />
}
