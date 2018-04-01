import React from 'react'
import styled from 'styled-components'

export default ({ disabled }) => (
  <Button type="submit" disabled={disabled}>
    Tweet
  </Button>
)

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  width: 48px;
  height: 48px;
  margin: -24px 0 0;
  background: var(--border);
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  outline: none;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.2s linear;
  &:active,
  &:focus,
  &:hover {
    background: var(--replay);
  }
  &:disabled {
    background: var(--inactive);
    cursor: default;
  }
`
