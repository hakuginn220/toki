import * as React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography
} from '@material-ui/core'

export type TweetProps = {
  text: string
  user: {
    name: string
    screen_name: string
    profile_image_url_https: string
  }
}

export default function Tweet(props: TweetProps) {
  const header = {
    avatar: (
      <Avatar src={props.user.profile_image_url_https} alt={props.user.name} />
    ),
    title: `${props.user.name} @${props.user.screen_name}`,
    subheader: 'September 14, 2016'
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
