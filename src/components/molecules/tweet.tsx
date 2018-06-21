import * as React from 'react'

export type TweetProps = {
  text: string
  user: {
    name: string
    screen_name: string
    profile_image_url_https: string
  }
}

export default function Tweet(props: TweetProps) {
  return (
    <div>
      <img src={props.user.profile_image_url_https} alt={props.user.name} />
      <p>{props.user.name}</p>
      <p>@{props.user.screen_name}</p>
      <p>{props.text}</p>
    </div>
  )
}
