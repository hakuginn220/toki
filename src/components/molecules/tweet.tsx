import * as React from 'react'

export interface ITweet {
  text: string
  user: {
    name: string
    profile_image_url_https: string
    screen_name: string
  }
}

export default function Tweet(props: ITweet) {
  return (
    <div>
      <img src={props.user.profile_image_url_https} alt={props.user.name} />
      <p>
        {props.user.name} @{props.user.screen_name}
      </p>
    </div>
  )
}
