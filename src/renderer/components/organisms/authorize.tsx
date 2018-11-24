import Button from '@/components/atoms/button'
import React, { MouseEvent, SFC } from 'react'

export interface IProps {
  onAuthorize?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Authorize: SFC<IProps> = ({ onAuthorize }) => (
  <Button onClick={onAuthorize}>Login Account</Button>
)

export default Authorize
