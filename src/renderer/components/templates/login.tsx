import Authorize from '@/components/organisms/authorize'
import Navigation from '@/components/organisms/navigation'
import OAuth from '@/components/organisms/oauth'
import { IUser } from '@/utils/types'
import React, { ChangeEvent, FormEvent, MouseEvent, SFC } from 'react'
import styled from 'styled-components'

export interface IProps {
  users: IUser[]
  verifier: string
  onUserSelect: (id: string) => void
  onUserAdd: () => void
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
  onUserSelect,
  onUserAdd,
  onChangeVerifier,
  onOAuth,
  onAuthorize
}) => (
  <Container>
    <Navigation
      users={users}
      onUserSelect={onUserSelect}
      onUserAdd={onUserAdd}
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
