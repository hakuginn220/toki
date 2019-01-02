import React, { MouseEvent, SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  type?: 'button' | 'submit'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const ButtonStyle = styled.button`
  display: inline-block;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: transparent;
  outline: none;
  line-height: 1;
  cursor: pointer;
  appearance: none;
  transition: all 0.2s;
  opacity: 1;
  &:hover {
    opacity: 0.6;
  }
`

const Button: SFC<IProps> = ({ type = 'button', onClick, children }) => (
  <ButtonStyle type={type} onClick={onClick}>
    {children}
  </ButtonStyle>
)

export default Button
