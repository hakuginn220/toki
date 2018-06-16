import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import * as actions from '../modules/timeline'
import Timeline from '../components/organisms/timeline'

function createDummyTweet() {
  const unique = Math.random()
    .toString(36)
    .slice(-8)
  return {
    text: unique,
    user: {
      name: unique,
      screen_name: unique,
      profile_image_url_https: 'https://placehold.jp/48x48.png'
    }
  }
}

const enhance = compose(
  connect(
    state => state.timeline,
    dispatch => bindActionCreators(actions, dispatch)
  ),
  lifecycle({
    componentWillMount() {
      const { addTweet } = this.props

      setInterval(() => {
        addTweet(createDummyTweet())
      }, 2000)
    }
  })
)

export default enhance(Timeline)
