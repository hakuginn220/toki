import React from 'react'
import styled from 'styled-components'
import Favorite from '../atoms/favorite'
import Reply from '../atoms/reply'
import Retweet from '../atoms/retweet'

export default ({ id, name, avatar, text, favorited, retweeted, created }) => (
  <Tweet>
    <Avatar src={avatar} alt={name} />
    <UserList>
      {[<Name>{name}</Name>, <Id>@{id}</Id>, <Created>{created}</Created>].map(
        (value, index) => <UserItem key={index.toString()}>{value}</UserItem>
      )}
    </UserList>
    <Text>{text}</Text>
    <ButtonList>
      {[
        <Reply />,
        <Retweet retweeted={retweeted} />,
        <Favorite favorited={favorited} />
      ].map((value, index) => (
        <ButtonItem key={index.toString()}>{value}</ButtonItem>
      ))}
    </ButtonList>
  </Tweet>
)

const Tweet = styled.div`
  position: relative;
  display: block;
  min-height: 48px;
  padding: 10px 35px 10px 68px;
  background: var(--tweet-background);
  transition: all 0.2s linear;
  &:hover {
    background: var(--tweet-background-focus);
  }
`

const Avatar = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 4px;
`

const Name = styled.span`
  display: inline-block;
  font-size: 1rem;
`

const Id = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: var(--inactive);
`

const Created = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: var(--inactive);
`

const Text = styled.div`
  display: block;
  font-size: 1rem;
  word-wrap: break-word;
`

const UserList = styled.ul`
  display: block;
  margin: 0;
  padding: 0 0 0.5em;
  list-style-type: none;
  letter-spacing: -0.4em;
`

const UserItem = styled.li`
  display: inline-block;
  margin: 0 0.5em 0 0;
  letter-spacing: normal;
`

const ButtonList = styled.ul`
  position: absolute;
  top: 0.1em;
  right: 1em;
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
  letter-spacing: -0.4em;
`

const ButtonItem = styled.li`
  display: block;
  letter-spacing: normal;
`
