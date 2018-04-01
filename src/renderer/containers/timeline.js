import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Timeline from '../components/organisms/timeline'

function createDummyTweet() {
  const unique = Math.random()
    .toString(36)
    .slice(-8)
  return {
    id: unique,
    name: unique,
    avatar: 'https://placehold.jp/48x48.png',
    text: `tweet for ${unique}`,
    favorited: !!Math.floor(Math.random() * 2),
    retweeted: !!Math.floor(Math.random() * 2),
    created: Date()
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch)
)(
  class extends Component {
    componentWillMount() {
      const { addTweet } = this.props

      setInterval(() => {
        addTweet(createDummyTweet())
      }, 2000)
    }

    render() {
      const { timeline } = this.props

      return <Timeline {...timeline} />
    }
  }
)
