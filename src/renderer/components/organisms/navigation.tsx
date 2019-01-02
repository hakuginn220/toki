import UserList from '@/components/molecules/user-list'
import { IUser } from '@/utils/types'
import React, { SFC } from 'react'

export interface IProps {
  users: IUser[]
  onUserSelect: (id: string) => void
  onUserAdd: () => void
}

const Navigation: SFC<IProps> = ({ users, onUserSelect, onUserAdd }) => (
  <UserList users={users} onUserSelect={onUserSelect} onUserAdd={onUserAdd} />
)

export default Navigation
