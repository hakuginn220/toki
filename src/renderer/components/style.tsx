import styled from 'styled-components'

export const ButtonPlainStyle = styled.button`
  display: inline-block;
  padding: 0;
  border: none;
  background: transparent;
  outline: none;
  appearance: none;
  cursor: pointer;
  :disabled {
    cursor: default;
  }
`
