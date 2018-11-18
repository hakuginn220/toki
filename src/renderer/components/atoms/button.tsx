import React, { MouseEvent, SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  type?: 'button' | 'submit'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Style = styled.button`
  outline: none;
`

const Button: SFC<IProps> = ({ type = 'button', onClick, children }) => (
  <Style type={type} onClick={onClick}>
    {children}
  </Style>
)

export default Button
