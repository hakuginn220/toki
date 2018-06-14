import React from 'react'
import styled from 'styled-components'

export default function Favorite({ favorited }) {
  return <Button favorited={favorited}>Favorite</Button>
}

const Button = styled.button`
  display: inline-block;
  padding: 0.2em;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ favorited }) =>
    favorited ? 'var(--favorite)' : 'var(--inactive)'};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: var(--favorite);
  }
`
