import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Textarea from '../components/organisms/textarea'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch)
)(
  class extends Component {
    handleSubmit(e) {
      const { writeTweet, writeTweetFail, writeTweetSuccess } = this.props

      writeTweet(e.target.tweet.value)

      setTimeout(() => {
        if (Math.floor(Math.random() * 2)) {
          writeTweetSuccess('success')
        } else {
          writeTweetFail('error')
        }
      }, 1000)

      e.preventDefault()
    }

    render() {
      const { textarea } = this.props

      return <Textarea {...textarea} onSubmit={e => this.handleSubmit(e)} />
    }
  }
)
