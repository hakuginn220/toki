import Navigation from '@/components/organisms/navigation'
import { IUser } from '@/utils/types'
import React, { SFC } from 'react'
import styled from 'styled-components'

export interface IProps {
  users: IUser[]
  onUserSelect: (id: string) => void
  onUserAdd: () => void
}

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Home: SFC<IProps> = ({ users, onUserSelect, onUserAdd }) => (
  <Container>
    <Navigation
      users={users}
      onUserSelect={onUserSelect}
      onUserAdd={onUserAdd}
    />
    <div />
  </Container>
)

export default Home
