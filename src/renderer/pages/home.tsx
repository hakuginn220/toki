import Home, { IHome } from '@/components/templates/home'
import { createTweet } from '@/utils/test'
import { observer } from 'mobx-react'
import React, { Component } from 'react'

@observer
export default class HomeContainer extends Component<any, IHome> {
  public state = {
    timeline: {
      tweets: [createTweet(), createTweet(), createTweet()]
    }
  }

  public render() {
    return <Home {...this.state} />
  }
}
