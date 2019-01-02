import { ButtonPlainStyle } from '@/components/style'
import React, { MouseEvent, SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  size?: number
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const SpanStyle = styled.span`
  display: block;
  width: ${props => props.theme.size}px;
  height: ${props => props.theme.size}px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  box-sizing: border-box;
  text-align: center;
  line-height: ${props => props.theme.size}px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.2);
`

const CircleIconAdd: SFC<IProps> = ({ size = 48, onClick }) => (
  <ButtonPlainStyle onClick={onClick ? onClick : undefined}>
    <SpanStyle theme={{ size }}>+</SpanStyle>
  </ButtonPlainStyle>
)

export default CircleIconAdd
