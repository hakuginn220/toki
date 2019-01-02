import Icon from '@/components/atoms/icon'
import { IUser } from '@/utils/types'
import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps extends IUser {
  onClick: (id: string) => void
}

const ButtonStyle = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  outline: none;
  appearance: none;
`

const UserIcon: SFC<IProps> = ({
  id,
  screen_name,
  profile_image_url,
  onClick
}) => {
  const bundleClick = () => onClick(id)

  return (
    <ButtonStyle onClick={bundleClick}>
      <Icon src={profile_image_url} alt={screen_name} />
    </ButtonStyle>
  )
}

export default UserIcon
