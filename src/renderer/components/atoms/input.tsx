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
  display: inline-block;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: transparent;
  outline: none;
  line-height: 1;
  appearance: none;
  transition: all 0.2s;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
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
