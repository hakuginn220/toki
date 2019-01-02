import React, { MouseEvent, SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const ButtonStyle = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  outline: none;
  appearance: none;
`

const SpanStyle = styled.span`
  display: block;
  width: 64px;
  height: 64px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  text-align: center;
  line-height: 64px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.2);
`

const UserAdd: SFC<IProps> = ({ onClick }) => (
  <ButtonStyle onClick={onClick}>
    <SpanStyle>+</SpanStyle>
  </ButtonStyle>
)

export default UserAdd
