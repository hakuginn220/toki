import Button from '@/components/atoms/button'
import Navigation from '@/components/organisms/navigation'
import React, { MouseEvent, SFC } from 'react'
import styled from 'styled-components'

export interface IProps {
  onChangeAccount: (id: string) => void
  onMoveLogin?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Container = styled.div`
  display: flex;
  height: 100%;
`

const Home: SFC<IProps> = ({ onMoveLogin, onChangeAccount }) => (
  <Container>
    <Navigation
      accounts={[
        { id: '1', name: 'test1', icon: 'https://placehold.jp/150x150.png' },
        { id: '2', name: 'test2', icon: 'https://placehold.jp/150x150.png' },
        { id: '3', name: 'test3', icon: 'https://placehold.jp/150x150.png' }
      ]}
      onChangeAccount={onChangeAccount}
    />
    <div>
      <Button type="button" onClick={onMoveLogin}>
        Go Login
      </Button>
    </div>
  </Container>
)

export default Home
