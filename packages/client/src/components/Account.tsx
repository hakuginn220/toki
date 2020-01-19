import React, { FC } from 'react'

type Props = {
  name: string
  screen_name: string
  profile_image_url_https: string
}

const Account: FC<Props> = props => {
  return (
    <div>
      <img src={props.profile_image_url_https} />
      <span>{props.name}</span>
      <span>@{props.screen_name}</span>
    </div>
  )
}

export default Account
