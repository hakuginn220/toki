import React from 'react'
import styled from 'styled-components'

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
    <Container>
      <ProfileImage src={tweet.user.profile_image_url_https} alt={tweet.name} />
      <Name>{tweet.user.name}</Name>
      <ScreenName>@{tweet.user.screen_name}</ScreenName>
      <Text>{tweet.text}</Text>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: block;
  min-height: 48px;
  padding: 10px 35px 10px 68px;
`

const ProfileImage = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 4px;
`

const Name = styled.span`
  display: block;
  font-size: 1rem;
`

const ScreenName = styled.span`
  display: block;
  font-size: 1rem;
`

const Text = styled.div`
  display: block;
  font-size: 1rem;
  word-wrap: break-word;
`
