import * as React from 'react'

const initialTweet = {
  text: '',
  user: {
    name: '',
    screen_name: '',
    profile_image_url_https: ''
  }
}

export default function Tweet(tweet = initialTweet) {
  return (
    <div>
      <img src={tweet.user.profile_image_url_https} alt={tweet.user.name} />
      <p>{tweet.user.name}</p>
      <p>@{tweet.user.screen_name}</p>
      <p>{tweet.text}</p>
    </div>
  )
}
