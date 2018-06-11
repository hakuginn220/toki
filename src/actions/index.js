export const ADD_TWEET = Symbol('ADD_TWEET')

export const addTweet = tweet => ({
  type: ADD_TWEET,
  payload: { tweet }
})

export const REMOVE_TWEET = Symbol('REMOVE_TWEET')

export const removeTweet = index => ({
  type: REMOVE_TWEET,
  payload: { index }
})

export const WRITE_TWEET = Symbol('WRITE_TWEET')
export const WRITE_TWEET_FAIL = Symbol('WRITE_TWEET_FAIL')
export const WRITE_TWEET_SUCCESS = Symbol('WRITE_TWEET_SUCCESS')

export const writeTweet = tweet => ({
  type: WRITE_TWEET,
  payload: { tweet }
})

export const writeTweetFail = error => ({
  type: WRITE_TWEET_FAIL,
  payload: { error }
})

export const writeTweetSuccess = response => ({
  type: WRITE_TWEET_SUCCESS,
  payload: { response }
})
