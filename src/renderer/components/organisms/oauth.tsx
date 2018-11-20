import InputButton from '@/components/molecules/input-button'
import React, { ChangeEvent, FormEvent, SFC } from 'react'

interface IProps {
  verifier: string
  onChangeVerifier?: (event: ChangeEvent<HTMLInputElement>) => void
  onOAuth?: (event: FormEvent<HTMLFormElement>) => void
}

const OAuth: SFC<IProps> = ({ verifier = '', onChangeVerifier, onOAuth }) => (
  <InputButton
    value={verifier}
    onChange={onChangeVerifier}
    onSubmit={onOAuth}
  />
)

export default OAuth
