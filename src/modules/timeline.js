const ADD_TWEET = Symbol('ADD_TWEET')
const REMOVE_TWEET = Symbol('REMOVE_TWEET')

const initialState = {
  tweets: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: state.tweets.concat(action.payload.tweet)
      }

    case REMOVE_TWEET:
      return {
        ...state,
        tweets: state.tweets.filter(
          (value, index) => index !== action.payload.index
        )
      }

    default:
      return state
  }
}

export const addTweet = tweet => ({
  type: ADD_TWEET,
  payload: { tweet }
})

export const removeTweet = index => ({
  type: REMOVE_TWEET,
  payload: { index }
})
