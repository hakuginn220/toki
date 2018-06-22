import * as React from 'react'
import { observer } from 'mobx-react'
import Home, { HomeProps } from '../components/templates/home'
import { createTweet } from '../util'

type TProps = any

type TState = HomeProps

@observer
export default class HomeContainer extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      timeline: {
        tweets: [createTweet(), createTweet(), createTweet()]
      }
    }
  }

  render() {
    return <Home {...this.state} />
  }
}
