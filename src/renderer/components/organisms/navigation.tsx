import UserAdd from '@/components/molecules/user-add'
import UserList from '@/components/molecules/user-list'
import { IUser } from '@/utils/types'
import React, { MouseEvent, SFC } from 'react'
import styled from 'styled-components'

export interface IProps {
  users: IUser[]
  onAddUser: (event: MouseEvent<HTMLButtonElement>) => void
  onChangeUser: (id: string) => void
}

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const NavigationFooter = styled.div`
  padding: 0 8px 8px;
`

const Navigation: SFC<IProps> = ({ users, onChangeUser, onAddUser }) => (
  <NavigationContainer>
    <UserList users={users} onClick={onChangeUser} />
    <NavigationFooter>
      <UserAdd onClick={onAddUser} />
    </NavigationFooter>
  </NavigationContainer>
)

export default Navigation
