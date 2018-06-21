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
    <div className="box">
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={props.user.profile_image_url_https}
              alt={props.user.name}
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.user.name}</strong>{' '}
              <small>@{props.user.screen_name}</small>
              <br />
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
