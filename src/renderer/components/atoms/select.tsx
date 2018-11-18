import React, { ChangeEvent, SFC } from 'react'
import styled from 'styled-components'

interface IOption {
  value: string
  text: string
}

interface IProps {
  value?: string
  options?: IOption[]
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Style = styled.select`
  outline: none;
  font-family: inherit;
`

const Select: SFC<IProps> = ({ value = '', options = [], onChange }) => (
  <Style onChange={onChange} defaultValue={value}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    ))}
  </Style>
)

export default Select
