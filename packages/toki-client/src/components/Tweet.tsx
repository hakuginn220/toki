import React, { FC } from 'react'

export type TTweet = {
  id: number
  idStr: string
  text: string
  truncated: boolean
  user: {
    id: number
    idStr: string
    name: string
    screenName: string
    location: string
    description: string
    url: string
  }
}

export const Tweet: FC<TTweet> = props => {
  return (
    <div>
      <div>{props.user.name}</div>
      <div>@{props.user.screenName}</div>
      <div>{props.text}</div>
    </div>
  )
}
