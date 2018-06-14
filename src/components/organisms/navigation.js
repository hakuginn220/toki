import React from 'react'
import styled from 'styled-components'

export default function Navigation() {
  return (
    <Group>
      <GroupItem key="oauth">
        <Button>+</Button>
      </GroupItem>
    </Group>
  )
}

const Group = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const GroupItem = styled.li`
  display: block;
`

const Button = styled.button``
