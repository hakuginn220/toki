import * as actions from '../actions'

const initialState = {
  isWait: false,
  tweet: '',
  error: '',
  response: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.WRITE_TWEET:
      return {
        ...state,
        isWait: true,
        tweet: action.payload.tweet
      }
    case actions.WRITE_TWEET_FAIL:
      return {
        ...state,
        isWait: false,
        tweet: '',
        error: action.payload.error,
        response: ''
      }
    case actions.WRITE_TWEET_SUCCESS:
      return {
        ...state,
        isWait: false,
        tweet: '',
        error: '',
        response: action.payload.response
      }
    default:
      return state
  }
}
