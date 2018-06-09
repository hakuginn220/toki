import * as actions from '../actions'

const initialState = {
  tweets: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TWEET:
      return {
        ...state,
        tweets: state.tweets.concat(action.payload.tweet)
      }
    case actions.REMOVE_TWEET:
      return {
        ...state,
        tweets: state.tweets.map((tweet, index) => {
          if (index !== action.payload.index) {
            return tweet
          }
        })
      }
    default:
      return state
  }
}
