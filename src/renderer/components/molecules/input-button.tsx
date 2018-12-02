import Button from '@/components/atoms/button'
import Input from '@/components/atoms/input'
import React, { ChangeEvent, FormEvent, SFC } from 'react'

interface IProps {
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

const InputButton: SFC<IProps> = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Input type="text" value={value} onChange={onChange} />
    <Button type="submit">Add Account</Button>
  </form>
)

export default InputButton
