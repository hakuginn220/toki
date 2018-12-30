import Icon from '@/components/atoms/icon'
import { IAccount } from '@/utils/types'
import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps extends IAccount {
  onClick: (id: string) => void
}

const ItemStyle = styled.li`
  margin: 8px 0 0;
  &:first-child {
    margin: 0;
  }
`

const ButtonStyle = styled.button`
  border: none;
  background: transparent;
  outline: none;
  appearance: none;
`

const AccountItem: SFC<IProps> = ({ id, name, icon, onClick }) => {
  const bundleClick = () => onClick(id)

  return (
    <ItemStyle>
      <ButtonStyle onClick={bundleClick}>
        <Icon src={icon} alt={name} />
      </ButtonStyle>
    </ItemStyle>
  )
}

export default AccountItem
