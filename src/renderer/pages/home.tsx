import Home from '@/components/templates/home'
import { observer } from 'mobx-react'
import React, { Component } from 'react'

@observer
export default class HomeContainer extends Component {
  public render() {
    return <Home />
  }
}
