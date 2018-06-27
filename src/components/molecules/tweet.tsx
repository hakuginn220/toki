import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography
} from '@material-ui/core'
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
  const header = {
    avatar: (
      <Avatar src={props.user.profile_image_url_https} alt={props.user.name} />
    ),
    subheader: 'September 14, 2016',
    title: `${props.user.name} @${props.user.screen_name}`
  }

  return (
    <Card>
      <CardContent>
        <CardHeader {...header} />
        <Typography component="p">{props.text}</Typography>
      </CardContent>
    </Card>
  )
}
