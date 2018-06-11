import React from 'react'
import styled from 'styled-components'

export default ({ navigation }) => (
  <List>
    {navigation.map(({ text, onClick }, index) => (
      <Item key={index.toString()}>
        <Button onClick={onClick}>{text}</Button>
      </Item>
    ))}
  </List>
)

const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Item = styled.li`
  display: block;
`

const Button = styled.button``
