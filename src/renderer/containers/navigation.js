import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navigation from '../components/organisms/navigation'

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch)
)(
  class extends Component {
    render() {
      return <Navigation navigation={[]} />
    }
  }
)
