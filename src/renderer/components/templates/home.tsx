import Authorize from '@/components/organisms/authorize'
import OAuth from '@/components/organisms/oauth'
import React, { ChangeEvent, FormEvent, MouseEvent, SFC } from 'react'

export interface IProps {
  verifier: string
  onChangeVerifier?: (event: ChangeEvent<HTMLInputElement>) => void
  onOAuth?: (event: FormEvent<HTMLFormElement>) => void
  onAuthorize?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Home: SFC<IProps> = ({
  verifier,
  onChangeVerifier,
  onOAuth,
  onAuthorize
}) => (
  <>
    <Authorize onAuthorize={onAuthorize} />
    <OAuth
      verifier={verifier}
      onChangeVerifier={onChangeVerifier}
      onOAuth={onOAuth}
    />
  </>
)

export default Home
