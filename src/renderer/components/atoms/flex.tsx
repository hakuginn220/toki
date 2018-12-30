import React, { SFC } from 'react'
import styled from 'styled-components'

interface IProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
}

const FlexStyle = styled.div`
  display: flex;
  flex-direction: ${props => props.theme.direction};
  justify-content: ${props => props.theme.justify};
  align-items: ${props => props.theme.align};
`

const Flex: SFC<IProps> = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  children
}) => <FlexStyle theme={{ direction, justify, align }}>{children}</FlexStyle>

export default Flex
