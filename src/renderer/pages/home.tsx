import { observer } from 'mobx-react'
import * as React from 'react'
import Home, { IHome } from '../components/templates/home'
import { createTweet } from '../util'

@observer
export default class HomeContainer extends React.Component<any, IHome> {
  constructor(props: any) {
    super(props)
    this.state = {
      timeline: {
        tweets: [createTweet(), createTweet(), createTweet()]
      }
    }
  }

  public render() {
    return <Home {...this.state} />
  }
}
