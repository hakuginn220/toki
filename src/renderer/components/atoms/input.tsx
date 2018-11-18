import React, { ChangeEvent, SFC } from 'react'
import styled from 'styled-components'

export interface IProps {
  type:
    | 'text'
    | 'password'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'hidden'
    | 'submit'
    | 'reset'
    | 'button'
    | 'image'
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Style = styled.input`
  outline: none;
  font-family: inherit;
`

const Input: SFC<IProps> = ({ type = 'text', value = '', onChange }) => {
  switch (type) {
    case 'text':
      return <Style type={type} defaultValue={value} onChange={onChange} />
    default:
      return null
  }
}

export default Input
