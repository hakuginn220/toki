import { ButtonPlainStyle } from '@/components/style'
import React, { MouseEvent, SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  src: string
  alt?: string
  size?: number
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const ImgStyle = styled.img`
  display: block;
  width: ${props => props.theme.size}px;
  height: ${props => props.theme.size}px;
  border-radius: 50%;
`

const CircleImage: SFC<IProps> = ({ src, alt = '', size = 48, onClick }) => (
  <ButtonPlainStyle onClick={onClick ? onClick : undefined}>
    <ImgStyle src={src} alt={alt} theme={{ size }} />
  </ButtonPlainStyle>
)

export default CircleImage
