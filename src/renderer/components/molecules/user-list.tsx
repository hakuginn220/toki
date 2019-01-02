import UserIcon from '@/components/molecules/user-icon'
import { IUser } from '@/utils/types'
import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  users: IUser[]
  onClick: (id: string) => void
}

const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 8px;
  width: 64px;
  list-style-type: none;
`

const ItemStyle = styled.li`
  margin: 8px 0 0;
  &:first-child {
    margin: 0;
  }
`

const UserList: SFC<IProps> = ({ users, onClick }) => (
  <ListStyle>
    {users.map(user => (
      <ItemStyle key={user.id}>
        <UserIcon {...user} onClick={onClick} />
      </ItemStyle>
    ))}
  </ListStyle>
)

export default UserList
