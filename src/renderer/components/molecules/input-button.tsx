import Button from '@/components/atoms/button'
import Input from '@/components/atoms/input'
import React, { SFC } from 'react'

interface IProps {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const InputButton: SFC<IProps> = ({ value = '', onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Input type="text" value={value} onChange={onChange} />
    <Button type="submit">Add Account</Button>
  </form>
)

export default InputButton
