import Button from '@/components/atoms/button'
import Authorize from '@/components/organisms/authorize'
import Navigation from '@/components/organisms/navigation'
import OAuth from '@/components/organisms/oauth'
import React, { ChangeEvent, FormEvent, MouseEvent, SFC } from 'react'
import styled from 'styled-components'

export interface IProps {
  verifier: string
  onChangeAccount: (id: string) => void
  onChangeVerifier?: (event: ChangeEvent<HTMLInputElement>) => void
  onOAuth?: (event: FormEvent<HTMLFormElement>) => void
  onAuthorize?: (event: MouseEvent<HTMLButtonElement>) => void
  onMoveHome?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Login: SFC<IProps> = ({
  verifier,
  onChangeAccount,
  onChangeVerifier,
  onOAuth,
  onAuthorize,
  onMoveHome
}) => (
  <Container>
    <Navigation
      accounts={[
        { id: '1', name: 'test1', icon: 'https://placehold.jp/150x150.png' },
        { id: '2', name: 'test2', icon: 'https://placehold.jp/150x150.png' },
        { id: '3', name: 'test3', icon: 'https://placehold.jp/150x150.png' }
      ]}
      onChangeAccount={onChangeAccount}
    />
    <div>
      <Authorize onAuthorize={onAuthorize} />
      <OAuth
        verifier={verifier}
        onChangeVerifier={onChangeVerifier}
        onOAuth={onOAuth}
      />
      <Button type="button" onClick={onMoveHome}>
        Go Home
      </Button>
    </div>
  </Container>
)

export default Login
