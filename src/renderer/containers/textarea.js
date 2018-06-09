import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import * as actions from '../actions'
import Textarea from '../components/organisms/textarea'

export default compose(
  connect(
    state => state.textarea,
    dispatch => bindActionCreators(actions, dispatch)
  ),
  withHandlers({
    onSubmit: props => event => {
      const { writeTweet, writeTweetFail, writeTweetSuccess } = props

      writeTweet(event.target.tweet.value)

      setTimeout(() => {
        if (Math.floor(Math.random() * 2)) {
          writeTweetSuccess('success')
        } else {
          writeTweetFail('error')
        }
      }, 1000)

      event.preventDefault()
    }
  })
)(Textarea)
