import Button from '@/components/atoms/button'
import Authorize from '@/components/organisms/authorize'
import Navigation from '@/components/organisms/navigation'
import OAuth from '@/components/organisms/oauth'
import { IUser } from '@/utils/types'
import React, { ChangeEvent, FormEvent, MouseEvent, SFC } from 'react'
import styled from 'styled-components'

export interface IProps {
  users: IUser[]
  verifier: string
  onAddUser: () => void
  onChangeUser: (id: string) => void
  onChangeVerifier?: (event: ChangeEvent<HTMLInputElement>) => void
  onOAuth: (event: FormEvent<HTMLFormElement>) => void
  onAuthorize: (event: MouseEvent<HTMLButtonElement>) => void
}

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Login: SFC<IProps> = ({
  users,
  verifier,
  onAddUser,
  onChangeUser,
  onChangeVerifier,
  onOAuth,
  onAuthorize
}) => (
  <Container>
    <Navigation
      users={users}
      onAddUser={onAddUser}
      onChangeUser={onChangeUser}
    />
    <div>
      <Authorize onAuthorize={onAuthorize} />
      <OAuth
        verifier={verifier}
        onChangeVerifier={onChangeVerifier}
        onOAuth={onOAuth}
      />
    </div>
  </Container>
)

export default Login
