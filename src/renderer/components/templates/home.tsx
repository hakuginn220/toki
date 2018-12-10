import Button from '@/components/atoms/button'
import React, { MouseEvent, SFC } from 'react'

export interface IProps {
  onMoveLogin?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Home: SFC<IProps> = ({ onMoveLogin }) => (
  <>
    <Button onClick={onMoveLogin}>Go Login</Button>
  </>
)

export default Home
