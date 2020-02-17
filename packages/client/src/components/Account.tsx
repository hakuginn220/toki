import React, { FC } from 'react'

type Props = {
  name: string
  screenName: string
  profileImageUrl: string
}

const Account: FC<Props> = props => {
  return (
    <div>
      <img src={props.profileImageUrl} />
      <span>{props.name}</span>
      <span>@{props.screenName}</span>
    </div>
  )
}

export default Account
