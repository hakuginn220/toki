import CircleIconAdd from '@/components/atoms/circle-icon-add'
import CircleImage from '@/components/atoms/circle-image'
import { IUser } from '@/utils/types'
import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  users: IUser[]
  onUserSelect: (id: string) => void
  onUserAdd: () => void
}

const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 8px;
  height: calc(100% - 16px);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  list-style-type: none;
`

const ItemStyle = styled.li`
  margin: 8px 0 0;
  &:first-child {
    margin: 0;
  }
  &:last-child {
    margin-top: auto;
  }
`

const UserList: SFC<IProps> = ({ users, onUserSelect, onUserAdd }) => (
  <ListStyle>
    {users.map(user => {
      const handleClick = () => onUserSelect(user.id)

      return (
        <ItemStyle key={user.id}>
          <CircleImage
            src={user.profile_image_url}
            alt={user.screen_name}
            size={52}
            onClick={handleClick}
          />
        </ItemStyle>
      )
    })}
    <ItemStyle key="add">
      <CircleIconAdd size={52} onClick={onUserAdd} />
    </ItemStyle>
  </ListStyle>
)

export default UserList
