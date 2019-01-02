import Navigation from '@/components/organisms/navigation'
import { IUser } from '@/utils/types'
import React, { SFC } from 'react'
import styled from 'styled-components'

export interface IProps {
  users: IUser[]
  onAddUser: () => void
  onChangeUser: (id: string) => void
}

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Home: SFC<IProps> = ({ users, onAddUser, onChangeUser }) => (
  <Container>
    <Navigation
      users={users}
      onAddUser={onAddUser}
      onChangeUser={onChangeUser}
    />
    <div />
  </Container>
)

export default Home
