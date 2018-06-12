import React from 'react'
import styled from 'styled-components'
import Tweet from '../molecules/tweet'

export default ({ tweets }) => (
  <List>
    {tweets.map((tweet, index) => (
      <Item key={index.toString()}>
        <Tweet {...tweet} />
      </Item>
    ))}
  </List>
)

const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Item = styled.li`
  display: block;
`
