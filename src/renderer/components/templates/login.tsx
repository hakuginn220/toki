import Button from '@/components/atoms/button'
import Authorize from '@/components/organisms/authorize'
import OAuth from '@/components/organisms/oauth'
import React, { ChangeEvent, FormEvent, MouseEvent, SFC } from 'react'

export interface IProps {
  verifier: string
  onChangeVerifier?: (event: ChangeEvent<HTMLInputElement>) => void
  onOAuth?: (event: FormEvent<HTMLFormElement>) => void
  onAuthorize?: (event: MouseEvent<HTMLButtonElement>) => void
  onMoveHome?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Login: SFC<IProps> = ({
  verifier,
  onChangeVerifier,
  onOAuth,
  onAuthorize,
  onMoveHome
}) => (
  <>
    <Authorize onAuthorize={onAuthorize} />
    <OAuth
      verifier={verifier}
      onChangeVerifier={onChangeVerifier}
      onOAuth={onOAuth}
    />
    <Button onClick={onMoveHome}>Go Home</Button>
  </>
)

export default Login
