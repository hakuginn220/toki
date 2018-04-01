import React from 'react'
import styled from 'styled-components'
import Submit from '../atoms/submit'

export default ({ isWait, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Textarea name="tweet" disabled={isWait} />
    <Submit disabled={isWait} />
  </Form>
)

const Form = styled.form`
  position: relative;
  display: block;
  padding: 0 48px 0 0;
`

const Textarea = styled.textarea`
  position: relative;
  display: block;
  width: 100%;
  height: 48px;
  padding: 10px;
  box-sizing: border-box;
  border: 3px solid var(--border);
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;
  font-size: 14px;
  line-height: 1.8;
  color: var(--text);
  resize: none;
  transition: all 0.2s linear;
  &:disabled {
    background: var(--border);
    border-color: var(--border);
    color: var(--inactive);
  }
`
