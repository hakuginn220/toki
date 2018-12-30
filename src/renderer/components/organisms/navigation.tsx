import AccountList from '@/components/molecules/account-list'
import { IAccount } from '@/utils/types'
import React, { SFC } from 'react'

export interface IProps {
  accounts: IAccount[]
  onChangeAccount: (id: string) => void
}

const Navigation: SFC<IProps> = ({ accounts, onChangeAccount }) => (
  <AccountList accounts={accounts} onClick={onChangeAccount} />
)

export default Navigation
