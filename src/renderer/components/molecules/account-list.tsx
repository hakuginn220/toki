import AccountItem from '@/components/molecules/account-item'
import { IAccount } from '@/utils/types'
import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  accounts: IAccount[]
  onClick: (id: string) => void
}

const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 8px;
  list-style-type: none;
`

const AccountList: SFC<IProps> = ({ accounts, onClick }) => (
  <ListStyle>
    {accounts.map(account => (
      <AccountItem {...account} onClick={onClick} key={account.id} />
    ))}
  </ListStyle>
)

export default AccountList
