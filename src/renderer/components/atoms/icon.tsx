import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  alt: string
  src: string
}

const ImgStyle = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

const Icon: SFC<IProps> = ({ alt, src }) => <ImgStyle src={src} alt={alt} />

export default Icon
