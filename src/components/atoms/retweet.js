import React from 'react'
import styled from 'styled-components'

export default function Retweet({ retweeted }) {
  return <Button retweeted={retweeted}>Retweet</Button>
}

const Button = styled.button`
  display: inline-block;
  padding: 0.2em;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ retweeted }) =>
    retweeted ? 'var(--retweet)' : 'var(--inactive)'};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: var(--retweet);
  }
`
